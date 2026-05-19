/* global debounce, trapFocus */

if (!customElements.get('cart-items')) {
  class CartItems extends HTMLElement {
    constructor() {
      super();
      if (this.dataset.empty === 'false') this.init();
      this.initShippingBar();
    }

    init() {
      this.fetchRequestOpts = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };

      this.cartDrawer = document.getElementById('cart-drawer');
      this.itemStatus = document.getElementById('cart-line-item-status');
      this.currentTotalItemCount = Array.from(this.querySelectorAll('[name="updates[]"]')).reduce(
        (total, quantityInput) => total + parseInt(quantityInput.value, 10),
        0
      );

      this.currentQuantities = [];
      this.querySelectorAll('.cart-item').forEach((item) => {
        this.currentQuantities[item.dataset.variantId] = Number(item.querySelector('.qty-input__input').value);
      });

      this.addEventListener('click', this.handleClick.bind(this));
      this.addEventListener('change', debounce(this.handleChange.bind(this)));
    }

    /* ------------------------------
       SHIPPING BAR INITIALIZATION
    ------------------------------ */
    initShippingBar() {
      this.milestoneContainer = document.getElementById('milestoneProgress');
      const dataEl = document.getElementById('milestoneData');

      if (!dataEl) return;

      this.milestones = [
        { value: parseFloat(dataEl.dataset.m1Value), label: dataEl.dataset.m1Label },
        { value: parseFloat(dataEl.dataset.m2Value), label: dataEl.dataset.m2Label },
        { value: parseFloat(dataEl.dataset.m3Value), label: dataEl.dataset.m3Label },
        { value: parseFloat(dataEl.dataset.m4Value), label: dataEl.dataset.m4Label }
      ].filter(m => !isNaN(m.value) && m.value > 0);

      this.labels = this.milestones.map(m => m.label);
      this.milestones = this.milestones.map(m => m.value);

      this.milestoneBarFill = document.getElementById('milestoneBarFill');
      this.milestoneMessage = document.getElementById('milestoneMessage');
      this.milestoneIcons = document.querySelectorAll('.milestone-icon');

      this.updateShippingBar();
    }

    updateShippingBar() {
      fetch('/cart.js')
        .then(res => res.json())
        .then(cart => {
          const total = cart.total_price / 100;
          const totalItems = cart.item_count;

          if (this.milestoneContainer) {
            this.milestoneContainer.style.display = totalItems > 0 ? '' : 'none';
          }

          if (this.milestoneBarFill && this.milestoneMessage) {
            for (let i = 0; i < this.milestones.length; i++) {
              if (total >= this.milestones[i]) {
                this.milestoneIcons[i].classList.add('active');
              } else {
                this.milestoneIcons[i].classList.remove('active');
              }
            }

            this.milestoneBarFill.style.width = `${Math.min(
              (total / this.milestones[this.milestones.length - 1]) * 100,
              100
            )}%`;

            const nextMilestone = this.milestones.find(m => total < m);
            if (nextMilestone) {
              const diff = nextMilestone - total;
              const labelIndex = this.milestones.indexOf(nextMilestone);
              this.milestoneMessage.innerText = `You are OMR ${diff.toFixed(0)} away from ${this.labels[labelIndex]}`;
            } else {
              this.milestoneMessage.innerText = `You've unlocked Free Shipping 🎉`;
            }
          }
        })
        .catch(error => console.error('Error fetching cart data:', error));
    }

    /* ------------------------------
       CART ALERT BANNER
    ------------------------------ */
    initCartAlert() {
      if (!window.cartAlertSettings || !window.cartAlertSettings.enable) return;

      const banner = document.getElementById('cartAlertBanner');
      const messageEl = document.getElementById('cartAlertMessage');
      if (!banner || !messageEl) return;

      function toMinutes(time) {
        if (!time) return null;
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
      }

      const now = new Date();
      const omanTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Muscat' }));
      const currentMinutes = omanTime.getHours() * 60 + omanTime.getMinutes();

      const start = toMinutes(window.cartAlertSettings.start_time);
      const end = toMinutes(window.cartAlertSettings.end_time);

      let isActive = false;
      if (start <= end) {
        isActive = currentMinutes >= start && currentMinutes < end;
      } else {
        isActive = currentMinutes >= start || currentMinutes < end;
      }

      if (isActive && window.cartAlertSettings.active_text) {
        messageEl.textContent = window.cartAlertSettings.active_text;
        banner.style.display = 'flex';
      } else if (!isActive && window.cartAlertSettings.after_text) {
        messageEl.textContent = window.cartAlertSettings.after_text;
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    }

    /* ------------------------------
       CART ITEM HANDLING
    ------------------------------ */
    handleClick(evt) {
      if (!evt.target.matches('.js-remove-item')) return;
      evt.preventDefault();
      this.updateQuantity(evt.target.dataset.index, 0);
    }

    handleChange(evt) {
      this.updateQuantity(evt.target.dataset.index, evt.target.value, document.activeElement.name);
    }

    async updateQuantity(line, quantity, name) {
      if (Shopify.designMode) this.cartDrawer = document.getElementById('cart-drawer');

      const cartDrawerContent = this.cartDrawer ? this.cartDrawer.querySelector('.drawer__content') : null;
      const cartDrawerContentScroll = cartDrawerContent ? cartDrawerContent.scrollTop : 0;
      const cartDrawerScroll = this.cartDrawer ? this.cartDrawer.scrollTop : 0;

      this.enableLoading(line);

      const lineErrorsId = `line-item-error-${line}`;
      const lineErrors = document.getElementById(lineErrorsId);
      document.querySelectorAll(`.cart-errors, .cart-item__error:not([id="${lineErrorsId}"])`).forEach((el) => {
        el.innerHTML = '';
        el.hidden = true;
      });

      const sections = this.getSectionsToRender().map((section) => section.section);
      this.fetchRequestOpts.body = JSON.stringify({
        line,
        quantity,
        sections: [...new Set(sections)],
        sections_url: window.location.pathname
      });

      try {
        const lineItem = document.getElementById(`cart-item-${line}`);
        const variantId = Number(lineItem.dataset.variantId);
        const oldTotalQuantity = this.currentTotalItemCount;
        const response = await fetch(theme.routes.cartChange, this.fetchRequestOpts);
        const data = await response.json();

        if (!response.ok) throw new Error(data.errors || response.status);

        const newTotalQuantity = data.item_count;

        this.getSectionsToRender().forEach((section) => {
          const sectionEl = document.getElementById(section.id);
          if (!sectionEl) return;
          const el = sectionEl.querySelector(section.selector) || sectionEl;
          el.innerHTML = CartItems.getElementHTML(data.sections[section.section], section.selector);
        });

        this.currentTotalItemCount = newTotalQuantity;
        this.currentQuantities[variantId] = Number(quantity);

        this.updateShippingBar();
        this.initCartAlert();

        lineErrors.innerHTML = '';
        lineErrors.hidden = true;
      } catch (error) {
        lineErrors.textContent = /^[0-9]+$/.test(error.message)
          ? theme.strings.cartError
          : error.message;
        lineErrors.hidden = false;
        console.log(error);
      } finally {
        this.classList.remove('pointer-events-none');
        if (cartDrawerContent) {
          requestAnimationFrame(() => { cartDrawerContent.scrollTop = cartDrawerContentScroll; });
          setTimeout(() => { cartDrawerContent.scrollTop = cartDrawerContentScroll; }, 0);
          requestAnimationFrame(() => { this.cartDrawer.scrollTop = cartDrawerScroll; });
          setTimeout(() => { this.cartDrawer.scrollTop = cartDrawerScroll; }, 0);
        }
      }
    }

    /* ------------------------------
       OTHER CART FUNCTIONS
    ------------------------------ */
    async refreshCartItems() {
      const errors = document.getElementById('cart-errors');
      try {
        const sections = this.getSectionsToRender().map((section) => section.section);
        const response = await fetch(`?sections=${[...new Set(sections)]}`);
        const data = await response.json();

        if (!response.ok) throw new Error(response.status);

        this.getSectionsToRender().forEach((section) => {
          const sectionEl = document.getElementById(section.id);
          if (!sectionEl) return;
          const el = sectionEl.querySelector(section.selector) || sectionEl;
          el.innerHTML = CartItems.getElementHTML(data[section.section], section.selector);
        });

        this.updateShippingBar();
        this.initCartAlert();

        errors.innerHTML = '';
        errors.hidden = true;
      } catch (error) {
        errors.textContent = theme.strings.cartError;
        errors.hidden = false;
        console.log(error);
      }
    }

    getSectionsToRender() {
      let sections = [
        { id: 'cart-icon-bubble', section: 'cart-icon-bubble', selector: '.shopify-section' },
        { id: 'free-shipping-notice', section: 'free-shipping-notice', selector: '.free-shipping-notice' }
      ];
      if (this.cartDrawer) {
        const cartDrawerId = this.cartDrawer.closest('.shopify-section').id.replace('shopify-section-', '');
        sections = [
          ...sections,
          { id: 'cart-items', section: cartDrawerId, selector: 'cart-items' },
          { id: 'cart-promoted-products', section: cartDrawerId, selector: '#cart-promoted-products' },
          { id: 'cart-drawer', section: cartDrawerId, selector: '.cart-drawer__summary' },
          { id: 'cart-drawer-media-promotion', section: cartDrawerId, selector: '#cart-drawer-media-promotion' }
        ];
      } else {
        sections = [
          ...sections,
          { id: 'cart-items', section: this.dataset.section, selector: 'cart-items' },
          { id: 'cart-summary', section: document.getElementById('cart-summary').dataset.section, selector: '.cart__summary' }
        ];
      }
      return sections;
    }

    static getElementHTML(html, selector) {
      const tmpl = document.createElement('template');
      tmpl.innerHTML = html;
      const el = tmpl.content.querySelector(selector);
      return el ? el.innerHTML : '';
    }

    enableLoading(line) {
      this.classList.add('pointer-events-none');
      const loader = this.querySelector(`#cart-item-${line} .cart-item__loader`);
      if (loader) loader.hidden = false;
      document.activeElement.blur();
      if (this.itemStatus) this.itemStatus.setAttribute('aria-hidden', 'false');
    }
  }

  customElements.define('cart-items', CartItems);
}
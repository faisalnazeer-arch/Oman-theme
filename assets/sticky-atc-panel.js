if (!customElements.get('sticky-atc-panel')) {
  class StickyAtcPanel extends HTMLElement {
    constructor() {
      super();

      this.productSection = this.closest('.cc-main-product');
      this.productInfo = this.productSection.querySelector('.product-info');
      this.productForm = this.productSection.querySelector('product-form');

      if ('IntersectionObserver' in window && 'MutationObserver' in window) {
        this.bindEvents();
      }
    }

    disconnectedCallback() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    bindEvents() {
      // Comment out or remove IntersectionObserver logic if not needed anymore
      // const observer = new IntersectionObserver((entries) => {
      //   entries.forEach((entry) => {
      //     if (entry.target === this.productForm && !theme.mediaMatches.md) {
      //       this.classList.toggle('sticky-atc-panel--out', entry.boundingClientRect.bottom > 0);
      //     } else if (entry.target === this.productInfo && theme.mediaMatches.md) {
      //       this.classList.toggle('sticky-atc-panel--out', entry.isIntersecting);
      //     }
      //   });
      // });

      // if (this.productForm) observer.observe(this.productForm);
      // if (this.productInfo) observer.observe(this.productInfo);

      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const scrolledDown500px = window.scrollY > 1300;
      const nearBottom = window.scrollY + window.innerHeight + 300 >= document.body.scrollHeight;
      
      this.classList.toggle('sticky-atc-panel--visible', scrolledDown500px && !nearBottom);
    }
  }

  customElements.define('sticky-atc-panel', StickyAtcPanel);
}

/* Publish by EComposer at 2024-06-30 16:03:15*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-kbc6nzqpd38"]=  window.__ectimmers["ecom-kbc6nzqpd38"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),s=e.querySelector(".text-content.ecom-html");!s||(t&&t.addEventListener("click",()=>{s.classList.remove("ecom-text--is-mark"),s.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{s.classList.add("ecom-text--is-mark"),s.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-kbc6nzqpd38';
                    document.querySelectorAll('.ecom-kbc6nzqpd38').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-l6su3yflbf"]=  window.__ectimmers["ecom-l6su3yflbf"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),s=e.querySelector(".text-content.ecom-html");!s||(t&&t.addEventListener("click",()=>{s.classList.remove("ecom-text--is-mark"),s.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{s.classList.add("ecom-text--is-mark"),s.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-l6su3yflbf';
                    document.querySelectorAll('.ecom-l6su3yflbf').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-cjts3xj9fjc"]=  window.__ectimmers["ecom-cjts3xj9fjc"] || {};
let e=this.id;if(!!this.$el){var i=document.querySelector(`.${e}`);if(!!i){var s=i.querySelector(".ecom-base-timeline"),n=s.querySelector(".ecom-timeline_grid"),o=s.dataset.numberColumn||3,a=s.dataset.numberColumnTablet||2,r=s.dataset.numberColumnMobile||1,c=s.dataset.itemsLength;if(s&&s.classList.contains("ecom-timeline--horizontal")){let x=function(){if(g=0,!document.querySelector(`.${e}`)){window.removeEventListener("resize",x);return}if(c){window.innerWidth<=767?(b=i.offsetWidth/r,_=c-r):window.innerWidth>=768&&window.innerWidth<=1024?(b=i.offsetWidth/a,_=c-a):window.innerWidth>=1025&&(b=i.offsetWidth/o,_=c-o),f=_;let k=b*c;n&&(n.style.transform="translateX(0px)",n.style.width=k+"px",setTimeout(()=>{w()},500))}},w=function(){let k=null,S=s.classList.contains("ecom-timeline--alternating");if(S?k=s.querySelectorAll(".timeline-item_content--top, .timeline-item_content"):k=s.querySelectorAll(".timeline-item_content--top"),k){let M=0;if(k.forEach(z=>{z.style.height=null,M=z.offsetHeight>M?z.offsetHeight:M}),M>0&&(k.forEach(z=>{z.style.height=M+"px"}),!S)){let z=s.querySelectorAll(".timeline-item_line-holder");z&&z.forEach(O=>{O.style.top=M+"px"});let E=s.querySelectorAll(".timeline-item_point-holder");E&&E.forEach(O=>{O.style.top=M+"px"}),u&&(u.style.top=M+"px"),l&&(l.style.top=M+"px")}}},$=function(){if(_>0){let k=function(){g+=b,g>0&&(g=0),f<_&&(f+=1),_===f?u.style.opacity=".5":(l.style.opacity="1",u.style.opacity="1"),n.style.transform=`translateX(${g}px)`},S=function(){f-=1,f>=0?(g-=b,n.style.transform=`translateX(${g}px)`,u.style.opacity="1"):f=0,f===0&&(l.style.opacity=".5")};u&&(u.style.opacity=".5",u.addEventListener("click",k)),l&&l.addEventListener("click",S)}else u&&(u.style.opacity=".5"),l&&(l.style.opacity=".5")};var u=s.querySelector(".ecom-timeline_prev"),l=s.querySelector(".ecom-timeline_next"),_=0,b=0,g=0,f=0;x(),$(),window.addEventListener("resize",x);var h=s.querySelectorAll("img.ecom-image-default");h&&h.forEach(k=>{k.onload=()=>{x()}})}if(s){let x=s.dataset.appearanceAnimation||"false",w=s.dataset.loopAnimation||"false";if(x=="true"){let k=function(z,E){if(o&&E<o){let O=z.querySelector(".timeline-item_content--top"),P=z.querySelector(".timeline-item_content");v=E*250,O&&(O.style.transitionDelay=v+"ms"),P&&(P.style.transitionDelay=v+"ms")}},S=function(z={}){let E=s.querySelectorAll(".ecom-timeline_item");E.length>0&&s&&s.classList.contains("ecom-timeline--horizontal")?E.forEach((O,P)=>{M(O,z),k(O,P)}):E.forEach(O=>{M(O,{rootMargin:"-25% 0% -25% 0%",threshold:0})})},M=function(z,E){new IntersectionObserver((P,W)=>{P.forEach(J=>{J.boundingClientRect.top<0&&J.target.classList.add("ecom-line-animated",J.isIntersecting),w=="true"?J.boundingClientRect.top>0&&J.target.classList.toggle("ecom-line-animated",J.isIntersecting):J.isIntersecting&&(J.target.classList.add("ecom-line-animated"),W.unobserve(J.target))})},E).observe(z)},$={threshold:1};s.classList.contains("ecom-timeline--horizontal")&&($={threshold:.5});var v=0;setTimeout(()=>{if(S($),s.classList.contains("ecom-timeline--vertical")){let O=function(){let P=window.innerHeight;const W=s.getBoundingClientRect();!z||(W.top<P&&E<=130&&(E=Math.round((P-W.top)*100/W.height)),E>130&&(E=130),z.style.height=`calc(${E}% - 100px)`)};const z=s.querySelector(".ecom-timeline_dynamic-line");let E=0;window.addEventListener("scroll",O),window.addEventListener("resize",O)}},700)}}}}

                    });
                    const settings = {};
                    const ID = 'ecom-cjts3xj9fjc';
                    document.querySelectorAll('.ecom-cjts3xj9fjc').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-d0u037gmgxo"]=  window.__ectimmers["ecom-d0u037gmgxo"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),s=e.querySelector(".text-content.ecom-html");!s||(t&&t.addEventListener("click",()=>{s.classList.remove("ecom-text--is-mark"),s.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{s.classList.add("ecom-text--is-mark"),s.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-d0u037gmgxo';
                    document.querySelectorAll('.ecom-d0u037gmgxo').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-i7poq50enz"]=  window.__ectimmers["ecom-i7poq50enz"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),s=e.querySelector(".text-content.ecom-html");!s||(t&&t.addEventListener("click",()=>{s.classList.remove("ecom-text--is-mark"),s.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{s.classList.add("ecom-text--is-mark"),s.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-i7poq50enz';
                    document.querySelectorAll('.ecom-i7poq50enz').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-wwgy18fqv5g"]=  window.__ectimmers["ecom-wwgy18fqv5g"] || {};
if(!this.settings||!this.$el)return;var e=this.$el.querySelector(".ecom-video_overlay-icon");e&&e.addEventListener("click",()=>{if(this.settings.source=="hosted"||this.settings.source=="uploaded"){let s=this.$el.querySelector(".ecom_video");s.autoplay=!0,s.load(),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}else{let s=this.$el.querySelector(".ecom_iframe"),n=s.getAttribute("src");n.includes("autoplay=0")?n=n.replace("autoplay=0","autoplay=1"):n=n+"&autoplay=1",s.setAttribute("src",n),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}}),this.$el.querySelectorAll("[data-ec-tracking-id]").forEach(function(s){s.dataset.ecTrackingId&&s.addEventListener("click",function(){window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:s.id,tracking_id:s.dataset.ecTrackingId})},{once:!0})});const t=this.$el.querySelector("[ecom-modal]");if(t&&this.settings.image_overlay&&this.settings.play_on_lightbox&&window.EComModal){var i=this.id;new window.EComModal(t,{cssClass:[i,"ecom-core","ecom-core-simulator"],onOpen:function(){var s=document.querySelector(".ecom-modal."+i);s&&s.querySelector(".ecom-modal-box__content").classList.add("ecom-element_video-iframe")}})}

                    });
                    const settings = {"source":"youtube"};
                    const ID = 'ecom-wwgy18fqv5g';
                    document.querySelectorAll('.ecom-wwgy18fqv5g').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-c93qt4soafb"]=  window.__ectimmers["ecom-c93qt4soafb"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}

                    });
                    const settings = {"link":"lightbox","lightbox":"no"};
                    const ID = 'ecom-c93qt4soafb';
                    document.querySelectorAll('.ecom-c93qt4soafb').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-xudmx9ib68"]=  window.__ectimmers["ecom-xudmx9ib68"] || {};
var h,v,x;const e=this.$el;if(!e)return;(h=this.settings.autoplay_progress)!=null;const t=e.querySelector(".ecom-autoplay-progress svg"),i=e.querySelector(".ecom-autoplay-progress span"),s=(v=this.settings.disable_lazy)!=null?v:!1,n=this.settings,o=this.settings.slider_loop,a=this.settings.slider_center,r=this.settings.slider_center__tablet,c=this.settings.slider_center__mobile;this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile;let u={};t&&i&&(u={autoplayTimeLeft(w,$,k){t.style.setProperty("--progress",1-k),i.textContent=`${Math.ceil($/1e3)}s`}});const l=e.querySelector(".ecom-swiper-container"),_=(x=this.settings.disable_touch_move)!=null?x:!0,b=JSON.parse(l.dataset.optionSwiper);b.pagination.el=e.querySelector(".ecom-swiper-pagination"),b.navigation.nextEl=e.querySelector(".ecom-swiper-button-next"),b.navigation.prevEl=e.querySelector(".ecom-swiper-button-prev"),b.pagination.renderBullet=(w,$)=>`<span class="${$}">
                          ${this.settings.items[w]&&this.settings.items[w].slider_pagination_image?`<img src="${this.settings.items[w].slider_pagination_image}">`:""}</span>`,u.init=function(){this.el.parentNode.classList.add("ecom-swiper-initialized-wrapper")};const g={allowTouchMove:this.isLive&&_,on:u};if(window.EComSwiper){let w=function(){o&&(b.loop=!0,(window.innerWidth>1024&&(n.items.length<n.slider_items*2||n.items.length<n.slider_group*n.slider_items*2||n.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(n.items.length<n.slider_items__tablet*2||n.items.length<n.slider_group__tablet*n.slider_items__tablet*2||n.slider_autoplay)||n.items.length<n.slider_items__mobile*2||n.items.length<n.slider_group__mobile*n.slider_items__mobile*2||n.slider_autoplay)&&(b.loop=!1)),b.centeredSlides=!1,(window.innerWidth>1024&&a||window.innerWidth<=1024&&window.innerWidth>768&&r||window.innerWidth<768&&c)&&(b.centeredSlides=!0);const $=new window.EComSwiper(l,Object.assign(b,g));$.on("slideChange",function(){const k=$.activeIndex==0?$.slides.length-1:$.activeIndex-1,S=$.slides[k];if(S){const M=S.querySelectorAll(".ecom-animation.ecom-animated");M.length&&M.forEach(function(z){z.classList.remove("ecom-animated","animated"),z.classList.add("ecom-animated-slider")})}if($.el){const M=$.slides[$.activeIndex];let z=null;M&&(z=M.querySelectorAll(".ecom-animation.ecom-animated-slider")),z&&z.length&&z.forEach(function(E){E.classList.add("ecom-animated")})}})};var f;this.isLive&&window.innerWidth>768&&window.addEventListener("resize",function(){f&&clearTimeout(f),f=setTimeout(w,200)}),w()}l.querySelectorAll("img").length&&l.querySelectorAll("img").forEach(function(w,$){s&&w.removeAttribute("loading")})

                    });
                    const settings = {"slider_loop":true,"slider_group":1,"slider_items":1,"items":[{"title":"Slide 1","hasElementRequestLiquid":false,"id":"ecom-3lzv7jq91qx","img_size":"cover","image":{"id":"gid://shopify/MediaImage/21403998027885","name":"OUR-RISE-TO-THE-TOP-550x400px","ext":"jpg","url":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/OUR-RISE-TO-THE-TOP-550x400px.jpg?v=1652168210","value":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/OUR-RISE-TO-THE-TOP-550x400px.jpg?v=1652168210","thumbnail":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/OUR-RISE-TO-THE-TOP-550x400px.jpg?v=1652168210","alt":"OUR-RISE-TO-THE-TOP-550x400px"},"blocks":[]},{"title":"Slide 1","hasElementRequestLiquid":false,"id":"ecom-8ve80dushiq","img_size":"cover","image":{"id":"gid://shopify/MediaImage/21850580582509","name":"Turning-a-Negative-into-a-Positive-550x400px_1","ext":"jpg","url":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/Turning-a-Negative-into-a-Positive-550x400px_1.jpg?v=1663659824","value":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/Turning-a-Negative-into-a-Positive-550x400px_1.jpg?v=1663659824","thumbnail":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/Turning-a-Negative-into-a-Positive-550x400px_1.jpg?v=1663659824","alt":"Turning-a-Negative-into-a-Positive-550x400px_1"},"blocks":[]},{"title":"Slide 1","hasElementRequestLiquid":false,"id":"ecom-td6u47nbef","img_size":"cover","image":{"id":"gid://shopify/MediaImage/21850580975725","name":"What-the-future-holds-550x400px_1","ext":"jpg","url":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/What-the-future-holds-550x400px_1.jpg?v=1663659844","value":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/What-the-future-holds-550x400px_1.jpg?v=1663659844","thumbnail":"https://cdn.shopify.com/s/files/1/0285/3732/3629/files/What-the-future-holds-550x400px_1.jpg?v=1663659844","alt":"What-the-future-holds-550x400px_1"},"img_size__mobile":"cover","blocks":[]}]};
                    const ID = 'ecom-xudmx9ib68';
                    document.querySelectorAll('.ecom-xudmx9ib68').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
;try{
 
} catch(error){console.error(error);}
/* Publish by EComposer at 2024-06-30 16:03:16*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-hoi97vwgq3h"]=  window.__ectimmers["ecom-hoi97vwgq3h"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}

                    });
                    const settings = {"link":"none","lightbox":"no"};
                    const ID = 'ecom-hoi97vwgq3h';
                    document.querySelectorAll('.ecom-hoi97vwgq3h').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-yvseisrgyfm"]=  window.__ectimmers["ecom-yvseisrgyfm"] || {};
const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container"),e=this.settings,y=this.settings.slider_loop,f=this.settings.slider_center,s=this.settings.slider_center__tablet,a=this.settings.slider_center__mobile;if(this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile,!n)return;var o=n.dataset.optionSwiper;try{o=o?JSON.parse(o):{}}catch(i){o={}}o.navigation||(o.navigation={}),o.pagination||(o.pagination={});const u=function(i,r={},m=""){return m=="loop"?((window.innerWidth>1024&&(i.items.length<i.slider_group+i.slider_items||i.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(i.items.length<i.slider_group__tablet+i.slider_items__tablet||i.slider_autoplay)||i.items.length<i.slider_group__mobile+i.slider_items__mobile||i.slider_autoplay)&&(r.loop=!1),r):(window.innerWidth>1024&&i.speed&&(r[`${m}`]=i[0]),window.innerWidth<=1024&&window.innerWidth>768&&i[1]?r[`${m}`]=i[1]:i[0]&&(r[`${m}`]=i[0]),window.innerWidth<768&&i[2]?r[`${m}`]=i[2]:i[1]?r[`${m}`]=i[1]:i[0]&&(r[`${m}`]=i[0]),r)};o.pagination.el=t.querySelector(".ecom-swiper-pagination"),o.navigation.nextEl=t.querySelector(".ecom-swiper-button-next"),o.navigation.prevEl=t.querySelector(".ecom-swiper-button-prev"),o.pagination.renderBullet=(i,r)=>`<span class="${r}">
                            ${this.settings.items[i]&&this.settings.items[i].slider_pagination_image?`<img src="${this.settings.items[i].slider_pagination_image}" loading="lazy">`:""}</span>`,o.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},y&&(o.loop=!0,o=u(e,o,"loop")),o=u([f,s,a],o,"centeredSlides"),this.settings.hasOwnProperty("slider_layout")&&this.settings.slider_layout=="vertical"&&(o.direction="vertical"),new window.EComSwiper(n,Object.assign(o,{allowTouchMove:this.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})

                    });
                    const settings = {"slider_loop":true,"slider_items":1,"slider_items__tablet":1,"slider_items__mobile":1,"items":[{"useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\"><path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path></svg>","text":"“Super quality meat. Very professional and clean delivery. <br>Probably the best butcher in the Muscat current ”","name":"Graeme S. (verified Customer)","title":"Professional and Clean Delivery"},{"name":"Rami M. ( verified buyer )","title":"Very good","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\"><path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path></svg>","text":"“I am a regular customer of MLS. I like the products, <br>it is always fresh”"},{"name":"Eihab A. ( Verified customer)","title":"Tomahawk Amazing !!!","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\"><path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9c-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path></svg>","text":"“Simply an amazing piece of meat, good quality, taste great<br> and no after taste.... must know how to grill it”"}],"slider_layout":"horizontal"};
                    const ID = 'ecom-yvseisrgyfm';
                    document.querySelectorAll('.ecom-yvseisrgyfm').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-52gmdthkivp"]=  window.__ectimmers["ecom-52gmdthkivp"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-52gmdthkivp';
                    document.querySelectorAll('.ecom-52gmdthkivp').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-o9o1xhx7r5"]=  window.__ectimmers["ecom-o9o1xhx7r5"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    const settings = {};
                    const ID = 'ecom-o9o1xhx7r5';
                    document.querySelectorAll('.ecom-o9o1xhx7r5').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-819bkwwjt6u"]=  window.__ectimmers["ecom-819bkwwjt6u"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-819bkwwjt6u"]["aawzy5cj1"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    const settings = {};
                    const ID = 'ecom-819bkwwjt6u';
                    document.querySelectorAll('.ecom-819bkwwjt6u').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-218fqr39wg9"]=  window.__ectimmers["ecom-218fqr39wg9"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    const settings = {};
                    const ID = 'ecom-218fqr39wg9';
                    document.querySelectorAll('.ecom-218fqr39wg9').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-r9ros2nglh"]=  window.__ectimmers["ecom-r9ros2nglh"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    const settings = {};
                    const ID = 'ecom-r9ros2nglh';
                    document.querySelectorAll('.ecom-r9ros2nglh').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-pt2n7wqoji9"]=  window.__ectimmers["ecom-pt2n7wqoji9"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}

                    });
                    const settings = {"link":"none","lightbox":"no"};
                    const ID = 'ecom-pt2n7wqoji9';
                    document.querySelectorAll('.ecom-pt2n7wqoji9').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
;try{
 
} catch(error){console.error(error);}
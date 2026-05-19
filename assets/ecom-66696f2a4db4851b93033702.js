/* Publish by EComposer at 2024-07-26 13:45:53*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-ta1hyo9vzrh"]=  window.__ectimmers["ecom-ta1hyo9vzrh"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    
                        document.querySelectorAll('.ecom-ta1hyo9vzrh').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ta1hyo9vzrh', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-db0i1yjjsjd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-db0i1yjjsjd', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-dmg9ioj9w4k"]=  window.__ectimmers["ecom-dmg9ioj9w4k"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-dmg9ioj9w4k"]["4e6e4snkn"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-dmg9ioj9w4k').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-dmg9ioj9w4k', settings: {"animation":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-mzkvloo9bbn').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-mzkvloo9bbn', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-uuwfb8mf58"]=  window.__ectimmers["ecom-uuwfb8mf58"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-uuwfb8mf58').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uuwfb8mf58', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-5bxqtdyo5z8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5bxqtdyo5z8', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-wncctp98yrn"]=  window.__ectimmers["ecom-wncctp98yrn"] || {};
const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container"),e=this.settings,b=this.settings.slider_loop,f=this.settings.slider_center,i=this.settings.slider_center__tablet,a=this.settings.slider_center__mobile;if(this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile,!n)return;var o=n.dataset.optionSwiper;try{o=o?JSON.parse(o):{}}catch(s){o={}}o.navigation||(o.navigation={}),o.pagination||(o.pagination={});const u=function(s,r={},m=""){return m=="loop"?((window.innerWidth>1024&&(s.items.length<s.slider_group+s.slider_items||s.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(s.items.length<s.slider_group__tablet+s.slider_items__tablet||s.slider_autoplay)||s.items.length<s.slider_group__mobile+s.slider_items__mobile||s.slider_autoplay)&&(r.loop=!1),r):(window.innerWidth>1024&&s.speed&&(r[`${m}`]=s[0]),window.innerWidth<=1024&&window.innerWidth>768&&s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),window.innerWidth<768&&s[2]?r[`${m}`]=s[2]:s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),r)};o.pagination.el=t.querySelector(".ecom-swiper-pagination"),o.navigation.nextEl=t.querySelector(".ecom-swiper-button-next"),o.navigation.prevEl=t.querySelector(".ecom-swiper-button-prev"),o.pagination.renderBullet=(s,r)=>`<span class="${r}">
                            ${this.settings.items[s]&&this.settings.items[s].slider_pagination_image?`<img src="${this.settings.items[s].slider_pagination_image}" loading="lazy">`:""}</span>`,o.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},b&&(o.loop=!0,o=u(e,o,"loop")),o=u([f,i,a],o,"centeredSlides"),this.settings.hasOwnProperty("slider_layout")&&this.settings.slider_layout=="vertical"&&(o.direction="vertical"),new window.EComSwiper(n,Object.assign(o,{allowTouchMove:this.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})

                    });
                    
                        document.querySelectorAll('.ecom-wncctp98yrn').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wncctp98yrn', settings: {"slider_loop":true,"slider_items":1,"slider_items__tablet":1,"slider_items__mobile":1,"items":[{"name":"Noha R.","title":"Verified Customer","useRating":true,"rating":"5","ratingIcon":"<svg width=\"49\" height=\"47\" viewBox=\"0 0 49 47\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.5 1.61804L29.7496 17.7746L29.8618 18.1201H30.2251L47.2131 18.1201L33.4695 28.1054L33.1756 28.3189L33.2879 28.6644L38.5375 44.8209L24.7939 34.8356L24.5 34.6221L24.2061 34.8356L10.4625 44.8209L15.7121 28.6644L15.8244 28.3189L15.5305 28.1054L1.7869 18.1201L18.7749 18.1201H19.1382L19.2504 17.7746L24.5 1.61804Z\" fill=\"white\" stroke=\"#FEFCFC\"></path></svg>","text":"“Excellent experience MLS never fails to impress us thank you so much for the continuing follow up to ensure your clients are extremely happy 😊”"},{"name":"Alice","useRating":true,"rating":"5","ratingIcon":"<svg width=\"49\" height=\"47\" viewBox=\"0 0 49 47\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.5 1.61804L29.7496 17.7746L29.8618 18.1201H30.2251L47.2131 18.1201L33.4695 28.1054L33.1756 28.3189L33.2879 28.6644L38.5375 44.8209L24.7939 34.8356L24.5 34.6221L24.2061 34.8356L10.4625 44.8209L15.7121 28.6644L15.8244 28.3189L15.5305 28.1054L1.7869 18.1201L18.7749 18.1201H19.1382L19.2504 17.7746L24.5 1.61804Z\" fill=\"white\" stroke=\"#FEFCFC\"></path></svg>","text":"“Mls burgers are delicious, you can feel and taste the meat, they have less fat than \"local Somali\" ones but they are more sturdy, I prefer them. The box offer...hats off!!!!\r\nIf I could give a million stars for the service and the people working I could. \r\nSpecial thanks to the guys in the Souq Al Madina! ”","title":"Verified Customer"},{"name":"Muhammad A.","title":"Verified Customer","useRating":true,"rating":"5","ratingIcon":"<svg width=\"49\" height=\"47\" viewBox=\"0 0 49 47\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.5 1.61804L29.7496 17.7746L29.8618 18.1201H30.2251L47.2131 18.1201L33.4695 28.1054L33.1756 28.3189L33.2879 28.6644L38.5375 44.8209L24.7939 34.8356L24.5 34.6221L24.2061 34.8356L10.4625 44.8209L15.7121 28.6644L15.8244 28.3189L15.5305 28.1054L1.7869 18.1201L18.7749 18.1201H19.1382L19.2504 17.7746L24.5 1.61804Z\" fill=\"white\" stroke=\"#FEFCFC\"></path></svg>","text":"“MLS has established a high bar and they know how to maintain it! delivery was prompt, with usual nice and clean product...”"}],"slider_layout":"horizontal"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-0fhlrusfctg8"]=  window.__ectimmers["ecom-0fhlrusfctg8"] || {};
if(!this.settings||!this.$el)return;var e=this.$el.querySelector(".ecom-video_overlay-icon");e&&e.addEventListener("click",()=>{if(this.settings.source=="hosted"||this.settings.source=="uploaded"){let n=this.$el.querySelector(".ecom_video");n.autoplay=!0,n.load(),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}else{let n=this.$el.querySelector(".ecom_iframe"),s=n.getAttribute("src");s.includes("autoplay=0")?s=s.replace("autoplay=0","autoplay=1"):s=s+"&autoplay=1",n.setAttribute("src",s),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}}),this.$el.querySelectorAll("[data-ec-tracking-id]").forEach(function(n){n.dataset.ecTrackingId&&n.addEventListener("click",function(){window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})},{once:!0})});const i=this.$el.querySelector("[ecom-modal]");if(i&&this.settings.image_overlay&&this.settings.play_on_lightbox&&window.EComModal){var t=this.id;new window.EComModal(i,{cssClass:[t,"ecom-core","ecom-core-simulator"],onOpen:function(){var n=document.querySelector(".ecom-modal."+t);n&&n.querySelector(".ecom-modal-box__content").classList.add("ecom-element_video-iframe")}})}

                    });
                    
                        document.querySelectorAll('.ecom-0fhlrusfctg8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0fhlrusfctg8', settings: {"source":"uploaded"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-npjdyzp5js').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-npjdyzp5js', settings: {"source":"youtube"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-37pe76namjd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-37pe76namjd', settings: {"source":"youtube"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ytgur3gn14').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ytgur3gn14', settings: {"source":"youtube"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-hok779of4wj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-hok779of4wj', settings: {"source":"youtube"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-01zcxq711blm"]=  window.__ectimmers["ecom-01zcxq711blm"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-01zcxq711blm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-01zcxq711blm', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-i85py9lnvj"]=  window.__ectimmers["ecom-i85py9lnvj"] || {};
var C,$,M;const e=this.$el;if(!e)return;(C=this.settings.autoplay_progress)!=null;const i=e.querySelector(".ecom-autoplay-progress svg"),t=e.querySelector(".ecom-autoplay-progress span"),n=($=this.settings.disable_lazy)!=null?$:!1,s=this.settings,o=this.settings.slider_loop,a=this.settings.slider_center,r=this.settings.slider_center__tablet,c=this.settings.slider_center__mobile;this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile;const u=this.settings.slider_speed,l=this.settings.slider_speed__tablet,g=this.settings.slider_speed__mobile,f=function(L,S={},T=""){return T=="loop"?((window.innerWidth>1024&&(L.items.length<L.slider_group+L.slider_items||L.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(L.items.length<L.slider_group__tablet+L.slider_items__tablet||L.slider_autoplay)||L.items.length<L.slider_group__mobile+L.slider_items__mobile||L.slider_autoplay)&&(S.loop=!1),S):(window.innerWidth>1024&&L.speed&&(S[`${T}`]=L[0]),window.innerWidth<=1024&&window.innerWidth>768&&L[1]?S[`${T}`]=L[1]:L[0]&&(S[`${T}`]=L[0]),window.innerWidth<768&&L[2]?S[`${T}`]=L[2]:L[1]?S[`${T}`]=L[1]:L[0]&&(S[`${T}`]=L[0]),S)};let b={};i&&t&&(b={autoplayTimeLeft(L,S,T){i.style.setProperty("--progress",1-T),t.textContent=`${Math.ceil(S/1e3)}s`}});const h=e.querySelector(".ecom-swiper-container"),m=(M=this.settings.disable_touch_move)!=null?M:!0;if(!h)return;let v=JSON.parse(h.dataset.optionSwiper);v.pagination.el=e.querySelector(".ecom-swiper-pagination"),v.navigation.nextEl=e.querySelector(".ecom-swiper-button-next"),v.navigation.prevEl=e.querySelector(".ecom-swiper-button-prev"),v.pagination.renderBullet=(L,S)=>`<span class="${S}">
                          ${this.settings.items[L]&&this.settings.items[L].slider_pagination_image?`<img src="${this.settings.items[L].slider_pagination_image}">`:""}</span>`,b.init=function(){this.el.parentNode.classList.add("ecom-swiper-initialized-wrapper")};const y={allowTouchMove:this.isLive&&m,on:b};if(window.EComSwiper){let S=function(){o&&(v.loop=!0,v=f(s,v,"loop")),v.centeredSlides=!1,v=f([a,r,c],v,"centeredSlides"),v=f([u,l,g],v,"speed"),L=new window.EComSwiper(h,Object.assign(v,y)),v.autoplay.enabled&&(L.on("touchStart",function(A,I){A.params.speed=300,A.autoplay.stop()}),L.on("touchEnd",function(A,I){window.innerWidth>1024&&u&&(A.params.speed=u),window.innerWidth<=1024&&window.innerWidth>768&&l?A.params.speed=l:u&&(A.params.speed=u),window.innerWidth<768&&g?A.params.speed=g:l?A.params.speed=l:u&&(A.params.speed=u),A.autoplay.start()})),L.on("slideChange",function(){const A=L.activeIndex==0?L.slides.length-1:L.activeIndex-1,I=L.slides[A];if(I){const P=I.querySelectorAll(".ecom-animation.ecom-animated");P.length&&P.forEach(function(V){V.classList.remove("ecom-animated","animated"),V.classList.add("ecom-animated-slider")})}if(L.el){const P=L.slides[L.activeIndex];let V=null;P&&(V=P.querySelectorAll(".ecom-animation.ecom-animated-slider")),V&&V.length&&V.forEach(function(W){W.classList.add("ecom-animated")})}})},L=null;var w;this.isLive&&window.addEventListener("resize",function(){w&&clearTimeout(w),w=setTimeout(()=>{L.update()},200)}),this.isLive?S():setTimeout(function(){S()},200)}h.querySelectorAll("img").length&&h.querySelectorAll("img").forEach(function(L,S){n&&L.removeAttribute("loading")})

                    });
                    
                        document.querySelectorAll('.ecom-i85py9lnvj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-i85py9lnvj', settings: {"slider_loop":false,"slider_group":1,"slider_items":3,"slider_items__tablet":2,"slider_items__mobile":1,"slider_speed":500,"disable_touch_move":true,"items":[{"title":"Slide 1","blocks":[{"settings":{"link":"https://cdn.shopify.com/videos/c/o/v/4b1b4b8b44f3491db63920751d7b6645.mp4","srcVimeo":"https://vimeo.com/210603721","srcYoutube":"https://www.youtube.com/watch?v=g9l7JP198XE","source":"youtube","player_controls":true,"autoplay":true,"aspect_ratio":"9/16","mute":true,"loop":true},"name":"video","refresh":"ecom-uwn2mypxkma","style":{"popup_content":{"popup_height__mobile":"550px"}},"id":"ecom-37pe76namjd","advanced":{},"firstinit":true,"css":{"settings":{"style":".ecom-core.ecom-37pe76namjd .ecom-element_video-iframe iframe,.ecom-core.ecom-37pe76namjd .ecom-element_video-iframe video{aspect-ratio: 9/16;max-width: 100%;}","keyframes":[],"fonts":[]},"style":{"style":"@media screen and (max-width: 767px) and (min-width: 101px){.ecom-core.ecom-37pe76namjd .ecom-element_video-iframe{height: 550px;}}","keyframes":[],"fonts":[]},"advanced":{"style":"","keyframes":[],"fonts":[]}}}],"img_size":"cover","hasElementRequestLiquid":false,"id":"ecom-zzwjarofosj"},{"title":"Slide 1","blocks":[{"settings":{"link":"https://cdn.shopify.com/videos/c/o/v/cb38eb4c0c634065afccd744c9a6535d.mp4","srcVimeo":"https://vimeo.com/210603721","srcYoutube":"https://www.youtube.com/watch?v=sEMZlQf2078","source":"youtube","player_controls":true,"autoplay":true,"mute":true,"loop":true,"aspect_ratio":"9/16"},"name":"video","refresh":"ecom-pefmgjqq58n","id":"ecom-ytgur3gn14","style":{},"advanced":{},"firstinit":true,"css":{"settings":{"style":".ecom-core.ecom-ytgur3gn14 .ecom-element_video-iframe iframe,.ecom-core.ecom-ytgur3gn14 .ecom-element_video-iframe video{aspect-ratio: 9/16;max-width: 100%;}","keyframes":[],"fonts":[]},"style":{"style":"","keyframes":[],"fonts":[]},"advanced":{"style":"","keyframes":[],"fonts":[]}}}],"img_size":"cover","hasElementRequestLiquid":false,"id":"ecom-pwnx1riln0r"},{"blocks":[{"settings":{"link":"https://cdn.shopify.com/videos/c/o/v/ceb9e8fabdf742b7b696226faa24fe09.mp4","srcVimeo":"https://vimeo.com/210603721","srcYoutube":"https://www.youtube.com/watch?v=V8k80XwqlRk","source":"youtube","player_controls":true,"autoplay":true,"mute":true,"aspect_ratio":"9/16","loop":true},"name":"video","refresh":"ecom-ysats6sdlr8","id":"ecom-hok779of4wj","style":{},"advanced":{},"firstinit":true,"css":{"settings":{"style":".ecom-core.ecom-hok779of4wj .ecom-element_video-iframe iframe,.ecom-core.ecom-hok779of4wj .ecom-element_video-iframe video{aspect-ratio: 9/16;max-width: 100%;}","keyframes":[],"fonts":[]},"style":{"style":"","keyframes":[],"fonts":[]},"advanced":{"style":"","keyframes":[],"fonts":[]}}}],"title":"Slide 1","hasElementRequestLiquid":false,"id":"ecom-zf7p8c7jjuj"}]},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}
/* Publish by EComposer at 2024-06-30 16:03:15*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-9p8pfdisne"]=  window.__ectimmers["ecom-9p8pfdisne"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    const settings = {};
                    const ID = 'ecom-9p8pfdisne';
                    document.querySelectorAll('.ecom-9p8pfdisne').forEach(function(el){
                        Func.call({$el: el, settings, id:ID,isLive: true});
                    });
                })();
            
;try{
 
} catch(error){console.error(error);}
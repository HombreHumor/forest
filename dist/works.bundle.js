!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([,,,function(e,t,r){"use strict";var n=o(r(4)),i=o(r(6));function o(e){return e&&e.__esModule?e:{default:e}}(0,n.default)(),(0,i.default)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=document.querySelector(".js-main-slide"),o=document.querySelector(".js-slider-title"),u=document.querySelector(".js-slider-used"),s=document.querySelector(".js-slider-cite-btn"),c=document.querySelector(".js-slider-prev"),l=c.querySelector("img"),d=document.querySelector(".js-slider-next"),a=d.querySelector("img"),f=n.length,m=0;function g(e){return e>=f?0:e<0?f-1:e}function y(){var e=g(m-1),t=g(m+1);i.src=n[m].image,l.src=n[e].image,a.src=n[t].image,o.innerText=n[m].title,u.innerText=n[m].used.join(", "),s.href=n[m].link}t.default=function(){c.addEventListener("click",function(){m=g(m-1),y()}),d.addEventListener("click",function(){m=g(m+1),y()})}},function(e){e.exports=[{title:"Сайт школы онлайн Образования",image:"/assets/images/content/work-1.png",used:["html","css","javascript"],link:"#1"},{title:"Дизайн",image:"/assets/images/content/work-2.png",used:["html","css"],link:"#2"},{title:"Будда",image:"/assets/images/content/work-3.png",used:["css","javascript"],link:"#3"}]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){if(window.innerWidth<=768){if(!document.querySelector(".slider__right-buttons--resize")){var e=document.querySelector(".slider__right-buttons"),t=document.querySelector(".slider"),r=e;r.classList.add("slider__right-buttons--resize"),e.remove(),t.insertBefore(r,t.children[0])}}else if(document.querySelector(".slider__right-buttons--resize")){var n=document.querySelector(".slider__right-buttons--resize"),i=document.querySelector(".slider__right");n.classList.remove("slider__right-buttons--resize"),i.appendChild(n)}};t.default=function(){n(),window.addEventListener("resize",function(){n()})}}]);
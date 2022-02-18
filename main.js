(()=>{"use strict";var e={772:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,":root {\n    --nav-bar-slate: #64748B;\n    --text-slate: #E2E8F0;\n    --nav-bar-btn-slate: #94A3B8;\n    --nav-bar-btn-hover-slate: #1E293B;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n#content {\n    height: 100%;\n}\n/* Nav Bar Styling. Search || to jump sections */\n\n.nav-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 20px 25px 20px;\n\n    background-color: var(--nav-bar-slate);\n    color: var(--text-slate);\n}\n\n.home_page_title {\n    font-size: 32px;\n}\n\n.nav-bar button {\n    padding: 15px 0px 15px 0px;\n    margin: 0px 15px 0px 15px;\n    width: 150px;\n\n    border: 5px solid var(--nav-bar-slate);\n    border-radius: 10px;\n\n    background-color: var(--nav-bar-btn-slate);\n    color: var(--text-slate);\n    font-size: 16px;\n}\n\nbutton:hover {\n    background-color: var(--nav-bar-btn-hover-slate);\n    color: white;\n\n    transition: all .5s ease-in-out;\n}\n\n.nav-btn.active {\n    background-color: var(--nav-bar-btn-hover-slate);\n    color: white;\n}\n\n\n /*  || Main section styling */\n .main-section-wrapper {\n    background-color: var(--text-slate);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n}\n\n/* || Home Page Styling - Daily Special section*/\n.special-wrapper {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--text-slate);\n}\n\n.daily-special-title, .about-us-title {\n    color: var(--nav-bar-btn-hover-slate);\n    background-color: var(--text-slate);\n    font-size: 24px;\n    margin: 15px;\n}\n\n.daily-special-lower {\n    display: flex;\n    background-color: var(--nav-bar-slate);\n    width: 60%;\n\n    padding: 15px;\n    border-radius: 10px;    \n}\n\n.daily-special-lower img {\n    width: 480px;\n    height: auto;\n\n    border: 3px solid var(--text-slate);\n    border-radius: 10px;\n}\n\n.daily-special-paragraph {\n    width: 150px;\n    padding: 25px;\n\n    font-size: 20px;\n    color: var(--text-slate);\n}\n\n/* || Home Page Styling - About section */\n\n.about-wrapper {\n    width: 60%;\n    height: auto;\n    border-radius: 10px;\n    \n    margin-left: auto;\n    margin-right: 0;\n    margin-top: 25px;\n    margin-bottom: 75px;\n\n    background-color: var(--text-slate);\n}\n\n.about-inner-wrapper {\n    width: auto;\n    height: auto;\n    padding: 25px;\n    border-radius: 10px;   \n\n    background-color: var(--nav-bar-slate);\n}\n\n.about-paragraph {\n    font-size: 20px;\n    color: var(--text-slate);\n    line-height: 1.6rem;\n}\n\n.michelin-star {\n    width: 200px;\n    height: auto;\n    background-color: var(--text-slate);\n}\n\n/* || Menu page styling */\n.menu-contents-wrapper {\n    background-color: var(--text-slate);\n    gap: 25px;\n    padding: 25px;\n}\n\n.menu-title {\n    font-size: 24px;\n    text-align: center;\n    margin: 25px;\n    padding-bottom: 25px;\n\n    border-bottom: 5px solid var(--nav-bar-slate);;\n}\n\n.menu-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: var(--text-slate);\n    padding-top: 25px;\n    gap: 25px;\n}\n\n.food-container {\n    display: flex;\n    flex-direction: column;\n\n    justify-content: flex-start;\n    align-items: center;\n\n    padding: 5px;\n    background-color: var(--text-slate);\n}\n\n.food-description {\n    width: 80%;\n    text-align: center;\n}\n\n.dish-title {\n    font-size: 20px;\n}\n\n.food-img {\n    width: 160px;\n    height: auto;\n    object-fit:scale-down;\n\n    border: 3px solid var(--nav-bar-btn-hover-slate);\n    border-radius: 5px;\n\n    margin: 15px;\n}\n\n/* Information bar Styling */\n.information-bar-wrapper {\n    position: sticky;\n    bottom: 0px;\n\n    background-color: var(--nav-bar-slate);\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto;\n    padding: 25px;\n\n    font-size: 20px;\n    color: var(--text-slate);\n}\n\n.information-bar-wrapper > * {\n    display: flex;\n    justify-content: center;\n}\n\n.order-div {\n    grid-area: 1 / 1 / 2 / 2;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.order-btn {\n    width: 60%;\n    height: 50%;\n\n    border: 5px solid var(--nav-bar-slate);\n    border-radius: 10px;\n\n    background-color: var(--nav-bar-btn-slate);\n    color: var(--text-slate);\n    font-size: 16px;\n}\n\n.map-wrapper {\n    grid-area: 1 / 2 / 2 / 3;\n}\n\n.contact-info {\n    grid-area: 1 / 3 / 2 / 4;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n} \n\n.address-1 {\n    margin-top: 15px;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=a(e,r),l=0;l<o.length;l++){var p=t(o[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},700:(e,n,t)=>{e.exports=t.p+"fdf97606a90f55351d07.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{let e=[];class n{constructor(e,n,t,a){this.type=e,this.name=n,this.image_url=t,this.description=a}}const a=new n("App","Nachos","../src/pictures/apps/nachos.jpeg","A classic appitizer"),r=new n("App","Satay","../src/pictures/apps/satay.jpeg","Flavorful chicken skewers served with a peanut dipping sauce."),o=new n("App","Blooming Onion","../src/pictures/apps/blooming_onion.jpeg","An appitizer for the health conscious. One serving of veggies!"),i=new n("Entree","Hainanese Chicken Rice","../src/pictures/entrees/chicken_rice.jpg","The national dish of Singapore! It might sound like a minute rice flavour but it is so much more."),s=new n("Entree","Chicken and Waffles","../src/pictures/entrees/chicken_waffles.jpeg","Crispy fried chicken, fresh waffles, and maple syrup. Yummy!"),c=new n("Entree","Chili Crab","../src/pictures/entrees/chili_crab.jpg","Another Singapore Classic!"),l=new n("Entree","Tacos al Pastor","../src/pictures/entrees/tacos.jpeg","Who doesn't like tacos?"),p=new n("Entree","Quesadilla","../src/pictures/entrees/quesadilla.jpeg","We also have quesadillas!"),d=new n("Entree","BBQ Plate","../src/pictures/entrees/bbq.jpeg","A delicious plate of Texas(?) barbeque."),u=new n("Dessert","Fried Ice Cream","../src/pictures/dessert/fried_ice_cream.jpeg","A really good dessert. Get it!"),m=new n("Dessert","Chocolate Lava Cake","../src/pictures/dessert/cake.jpeg","A chocolate cake filled with more chocolate!"),h=new n("Dessert","Baklava","../src/pictures/dessert/baklava.jpeg","Crispy phyllo pastry filled with pistachio and a sweet honey syrup.");e.push(a,r,o,i,s,c,l,p,d,u,m,h);const f=e;var v=t(700);const g=function(){const e=document.querySelector("main");e.innerHTML="",e.className="main-section-wrapper";const n=document.createElement("div");n.className="special-wrapper";const t=document.createElement("p");t.className="daily-special-title",t.textContent=`Special of the day: ${f[3].name}`,n.appendChild(t);const a=document.createElement("div");a.className="daily-special-lower";const r=document.createElement("img");r.src=v,a.appendChild(r);const o=document.createElement("p");o.className="daily-special-paragraph",o.textContent=f[3].description,a.appendChild(o),n.appendChild(a);const i=document.createElement("div");i.className="about-wrapper";const s=document.createElement("p");s.className="about-us-title",s.textContent="About Us:",i.appendChild(s);const c=document.createElement("div");c.className="about-inner-wrapper",i.appendChild(c);const l=document.createElement("p");l.className="about-paragraph",l.textContent="Some people say that the sign of a good restaurant is a small menu focused on one particular style of food. They are probably correct, but that is alright because this isn't a real restaurant! The menu here is just a bunch of my favorite foods.",c.appendChild(l),e.appendChild(n),e.appendChild(i)},b=function(e){document.querySelectorAll(".nav-btn").forEach((e=>{e!==this&&e.classList.remove("active")})),e.target.classList.add("active")};var x=t(379),y=t.n(x),C=t(795),w=t.n(C),E=t(569),N=t.n(E),k=t(565),S=t.n(k),j=t(216),A=t.n(j),T=t(589),L=t.n(T),M=t(772),z={};z.styleTagTransform=L(),z.setAttributes=S(),z.insert=N().bind(null,"head"),z.domAPI=w(),z.insertStyleElement=A(),y()(M.Z,z),M.Z&&M.Z.locals&&M.Z.locals,function(){const e=document.querySelector("#content");!function(e){const n=document.createElement("nav");n.className="nav-bar",e.appendChild(n);const t=document.createElement("div");t.textContent="Favorite Foods Eatery",t.className="home_page_title",n.appendChild(t);const a=document.createElement("div");a.className="nav-bar-btns",n.appendChild(a);const r=document.createElement("button");r.className="nav-btn active",r.textContent="Home",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(e),g())}));const o=document.createElement("button");o.className="nav-btn",o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(e),function(){const e=document.querySelector("main");e.innerHTML="",e.className="menu-contents-wrapper";const n=document.createElement("p");n.className="menu-title",n.textContent="Appitizers:",e.appendChild(n);const t=document.createElement("div");t.className="appitiziers-wrapper menu-section",e.appendChild(t);const a=document.createElement("p");a.className="menu-title",a.textContent="Entrees:",e.appendChild(a);const r=document.createElement("div");r.className="entrees-wrapper menu-section",e.appendChild(r);const o=document.createElement("p");o.className="menu-title",o.textContent="Desserts:",e.appendChild(o);const i=document.createElement("div");i.className="desserts-wrapper menu-section",e.appendChild(i);for(let e=0;e<f.length;e++){const n=document.createElement("div");n.className="food-container";const a=document.createElement("p");a.textContent=f[e].name,a.className="dish-title";const o=document.createElement("img");o.className="food-img",o.src=f[e].image_url;const s=document.createElement("p");s.className="food-description",s.textContent=f[e].description,n.appendChild(a),n.appendChild(o),n.appendChild(s),"App"===f[e].type&&t.appendChild(n),"Entree"===f[e].type&&r.appendChild(n),"Dessert"===f[e].type&&i.appendChild(n)}}())}));const i=document.createElement("button");i.className="nav-btn",i.textContent="Contact Us",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(b(e),function(){const e=document.querySelector("main");e.innerHTML="",e.textContent="Hello from the contact page! Since all the contact info is pasted to the bottom of each page, this page is redundent!"}())})),a.appendChild(r),a.appendChild(o),a.appendChild(i)}(e),function(e){const n=document.createElement("main");e.appendChild(n)}(e),g(),function(e){const n=document.createElement("div");n.className="information-bar-wrapper";const t=document.createElement("div");t.className="order-div",n.appendChild(t);const a=document.createElement("div");a.className="order-div-title";const r=document.createElement("button");r.className="order-btn";let o=(new Date).getHours()+2;11<=o&&o<20?(a.textContent="We are open!",r.textContent="Order Now"):(a.textContent="We are closed. Sorry!",r.textContent="Order Later!"),t.appendChild(a),t.appendChild(r);const i=document.createElement("div");i.className="map-wrapper";const s=document.createElement("iframe");s.src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d738.3155151085128!2d-71.7925368!3d42.2515759!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645024420249!5m2!1sen!2sus",s.className="embedded-map",i.appendChild(s),n.appendChild(i);const c=document.createElement("div");c.className="contact-info",c.textContent="Hours";const l=document.createElement("p");l.textContent="11:00 - 22:00 Monday - Friday",c.appendChild(l);const p=document.createElement("p");p.textContent="12:00 - 23:00 Weekends",c.appendChild(p);const d=document.createElement("p");d.className="address-1",d.textContent="1054 Somewhere Street",c.appendChild(d);const u=document.createElement("p");u.textContent="Worcestor, MA 01601",c.appendChild(u);const m=document.createElement("p");m.textContent="508-XXX-YYYY",c.appendChild(m),n.appendChild(c),e.appendChild(n)}(e)}()})()})();
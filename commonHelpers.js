import{m as E,b as w,t as k,c as S}from"./assets/home-ukraine-66ea51af.js";import{i as C}from"./assets/vendor-59c8246b.js";const m=document.querySelector(".books-container-one-cat"),i=document.querySelector(".books-container-all-cat-block"),y=document.querySelector(".books-container-all-cat-title"),c=window.innerWidth;let s;function v(e){return`<div class="book-item">
  <ul class="book-item-block">
    <li class="book-item-img">
      <img
        src="${e.book_image}"
        alt="${e.description}"
        srcset="${e.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
      <p class="hidden-overflow">QUICK VIEW</p>
    </li>
    <li class="book-item-title">${e.title}</li>
    <li class="book-item-author">${e.author}</li>
  </ul>
</div>`}function f(e){return e.map(v).join("")}function A(e,t){m.innerHTML="",i.innerHTML="",y.innerHTML="";const n=t.split(" "),r=n.pop(),L=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+r+"</span>"}</h3><div class="books-container-one-cat-block">${f(e)}</div>`;m.innerHTML=L}function b(e){m.innerHTML="",i.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";e.forEach(n=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${f(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),y.innerHTML=t,i.innerHTML=o}async function $(e){try{const t=await w(e);A(t,e),d()}catch{h("Sorry, there are no books for these category! ","red","white")}}async function g(e){try{if(c>=375&&c<=767)s=1;else if(c>=768&&c<1279)s=3;else{s=5;return}let t=await k(e,s);t=t.map(o=>(o.books=o.books.slice(0,s),o)),b(t),p(),d()}catch{h("Sorry, no books! ","red","white")}}function p(){s===1||s===3?M():I()}function M(){if(s<=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")}}function I(){if(s>=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.add("hidden")}}async function q(e,t){try{if(c>=375&&c<=767)s=1,s+=4;else if(c>=768&&c<1279)s=3,s+=2;else return;let o=await k(t,s);o=o.map(n=>(n.books=n.books.slice(0,s),n)),b(o),p(),d(e)}catch{h("Sorry, no books! ","red","white")}}i.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("btn-seemore")){e.preventDefault();const t=e.target.dataset.category;await q(e,t)}});const H=document.querySelectorAll(".hidden-overflow");H.forEach(e=>{e.addEventListener("click",d)});async function d(e){e.preventDefault();const t=e.target.closest(".book-item");if(t){const o=t.dataset.bookId;E(o)}}function h(e,t,o){C.error({position:"topRight",message:e,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const x=document.querySelector("#category-list");let B;window.onload=function(){const e=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",e.appendChild(t),S().then(o=>{o.forEach(function(n){const r=document.createElement("p");r.textContent=n.list_name,r.classList.add("p-list"),e.appendChild(r)})}).catch(o=>{console.error("Error fetching data;",o)}),g(B)};x.addEventListener("click",async e=>{if(e.preventDefault(),e.target.tagName==="P"){const t=e.target.textContent;$(t)}else e.target.id==="title"&&g(B)});window.onscroll=function(){O()};function O(){const e=document.getElementById("scrollToTopBtn");document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}const l=document.querySelector("#slider"),T=document.querySelector("#theme-style");let u=localStorage.getItem("theme");u&&T.setAttribute("href",`./css/${u}.css`);function a(e){localStorage.setItem("theme",e),T.setAttribute("href",`./css/${e}.css`)}function _(){l.checked?a("styles-light-theme"):a("styles-dark-theme")}l.addEventListener("change",_);function W(){u==="styles-dark-theme"?(a("styles-dark-theme"),l.checked=!1):(a("styles-light-theme"),l.checked=!0)}W();
//# sourceMappingURL=commonHelpers.js.map

import{m as E,b as w,t as k,c as T}from"./assets/home-ukraine-66ea51af.js";import{i as C}from"./assets/vendor-59c8246b.js";const m=document.querySelector(".books-container-one-cat"),i=document.querySelector(".books-container-all-cat-block"),f=document.querySelector(".books-container-all-cat-title"),r=window.innerWidth;let s;function v(e){return`<div class="book-item">
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
</div>`}function g(e){return e.map(v).join("")}function A(e,t){m.innerHTML="",i.innerHTML="",f.innerHTML="";const n=t.split(" "),c=n.pop(),S=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+c+"</span>"}</h3><div class="books-container-one-cat-block">${g(e)}</div>`;m.innerHTML=S}function b(e){m.innerHTML="",i.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";e.forEach(n=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${g(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),f.innerHTML=t,i.innerHTML=o}async function $(e){try{const t=await w(e);A(t,e),d()}catch{u("Sorry, there are no books for these category! ","red","white")}}async function y(e){try{if(r>=375&&r<=767)s=1;else if(r>=768&&r<1279)s=3;else{s=5;return}let t=await k(e,s);t=t.map(o=>(o.books=o.books.slice(0,s),o)),b(t),p(),d()}catch{u("Sorry, no books! ","red","white")}}function p(){s===1||s===3?M():q()}function M(){if(s<=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")}}function q(){if(s>=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.add("hidden")}}async function H(e,t){try{if(r>=375&&r<=767)s=1,s+=4;else if(r>=768&&r<1279)s=3,s+=2;else return;let o=await k(t,s);o=o.map(n=>(n.books=n.books.slice(0,s),n)),b(o),p(),d(e)}catch{u("Sorry, no books! ","red","white")}}i.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("btn-seemore")){e.preventDefault();const t=e.target.dataset.category;await H(e,t)}});const I=document.querySelectorAll(".hidden-overflow");I.forEach(e=>{e.addEventListener("click",d)});async function d(e){e.preventDefault();const t=e.target.closest(".book-item");if(t){const o=t.dataset.bookId;E(o)}}function u(e,t,o){C.error({position:"topRight",message:e,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const x=document.querySelector("#category-list");let L;window.onload=function(){const e=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",e.appendChild(t),T().then(o=>{o.forEach(function(n){const c=document.createElement("p");c.textContent=n.list_name,c.classList.add("p-list"),e.appendChild(c)})}).catch(o=>{console.error("Error fetching data;",o)}),y(L)};x.addEventListener("click",async e=>{if(e.preventDefault(),e.target.tagName==="P"){const t=e.target.textContent;$(t)}else e.target.id==="title"&&y(L)});const a=document.querySelector("#slider"),B=document.querySelector("#theme-style");let h=localStorage.getItem("theme");h&&B.setAttribute("href",`./css/${h}.css`);function l(e){localStorage.setItem("theme",e),B.setAttribute("href",`./css/${e}.css`)}function O(){a.checked?l("styles-light-theme"):l("styles-dark-theme")}a.addEventListener("change",O);function _(){h==="styles-dark-theme"?(l("styles-dark-theme"),a.checked=!1):(l("styles-light-theme"),a.checked=!0)}_();
//# sourceMappingURL=commonHelpers.js.map

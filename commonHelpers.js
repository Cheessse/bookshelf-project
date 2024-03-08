import{m as w,b as E,t as u,c as C}from"./assets/home-ukraine-66ea51af.js";import{i as T}from"./assets/vendor-59c8246b.js";const $=document.querySelector(".container"),d=document.querySelector(".books-container-one-cat"),i=document.querySelector(".books-container-all-cat-block"),k=document.querySelector(".books-container-all-cat-title"),r=window.innerWidth;let s;function g(e){return`<div class="book-item" data-category="${e._id}">
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
</div>`}console.log(g);function y(e){return e.map(g).join("")}function A(e,t){d.innerHTML="",i.innerHTML="",k.innerHTML="";const n=t.split(" "),c=n.pop(),S=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+c+"</span>"}</h3><div class="books-container-one-cat-block">${y(e)}</div>`;d.innerHTML=S}function f(e){d.innerHTML="",i.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";e.forEach(n=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${y(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),k.innerHTML=t,i.innerHTML=o}async function M(e){try{const t=await E(e);A(t,e),handleBookClick()}catch{h("Sorry, there are no books for these category! ","red","white")}}async function b(e){try{r>=375&&r<=767?s=1:r>=768&&r<=1157?s=3:s=5;let t=await u(e,s);t=t.map(o=>(o.books=o.books.slice(0,s),o)),f(t),p()}catch{h("Sorry, no books! ","red","white")}}function p(){s===1||s===3?v():q()}function v(){if(s<=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")}}function q(){if(s>=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.add("hidden")}}async function H(e,t){try{if(r>=375&&r<=767)s=1,s+=4;else if(r>=768&&r<=1157)s=3,s+=2;else return;let o=await u(t,s);o=o.map(n=>(n.books=n.books.slice(0,s),n)),f(o),p(),handleBookClick(e)}catch{h("Sorry, no books! ","red","white")}}i.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("btn-seemore")){e.preventDefault();const t=e.target.dataset.category;await H(e,t)}});$.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("hidden-overflow")){e.preventDefault();const t=e.target.closest(".book-item");if(t){const o=t.dataset.bookId;await w(o)}}});function h(e,t,o){T.error({position:"topRight",message:e,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const I=document.querySelector("#category-list");let L;window.onload=function(){const e=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",e.appendChild(t),C().then(o=>{o.forEach(function(n){const c=document.createElement("p");c.textContent=n.list_name,c.classList.add("p-list"),e.appendChild(c)})}).catch(o=>{console.error("Error fetching data;",o)}),b(L)};I.addEventListener("click",async e=>{if(e.preventDefault(),e.target.tagName==="P"){const t=e.target.textContent;M(t)}else e.target.id==="title"&&b(L)});const a=document.querySelector("#slider"),B=document.querySelector("#theme-style");let m=localStorage.getItem("theme");m&&B.setAttribute("href",`./css/${m}.css`);function l(e){localStorage.setItem("theme",e),B.setAttribute("href",`./css/${e}.css`)}function _(){a.checked?l("styles-light-theme"):l("styles-dark-theme")}a.addEventListener("change",_);function x(){m==="styles-dark-theme"?(l("styles-dark-theme"),a.checked=!1):(l("styles-light-theme"),a.checked=!0)}x();
//# sourceMappingURL=commonHelpers.js.map

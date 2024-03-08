import{m as w,b as E,t as k,c as C}from"./assets/home-ukraine-66ea51af.js";import{i as T}from"./assets/vendor-59c8246b.js";const $=document.querySelector(".container"),d=document.querySelector(".books-container-one-cat"),i=document.querySelector(".books-container-all-cat-block"),g=document.querySelector(".books-container-all-cat-title"),c=window.innerWidth;let s;function y(e){return`<div class="book-item" data-category="${e._id}">
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
</div>`}console.log(y);function f(e){return e.map(y).join("")}function A(e,t){d.innerHTML="",i.innerHTML="",g.innerHTML="";const n=t.split(" "),r=n.pop(),S=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+r+"</span>"}</h3><div class="books-container-one-cat-block">${f(e)}</div>`;d.innerHTML=S}function b(e){d.innerHTML="",i.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";e.forEach(n=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${f(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),g.innerHTML=t,i.innerHTML=o}async function M(e){try{const t=await E(e);A(t,e),handleBookClick()}catch{u("Sorry, there are no books for these category! ","red","white")}}async function p(e){try{c>=375&&c<=767?s=1:c>=768&&c<=1157?s=3:s=5;let t=await k(e,s);t=t.map(o=>(o.books=o.books.slice(0,s),o)),b(t),L()}catch{u("Sorry, no books! ","red","white")}}function L(){s===1||s===3?v():q()}function v(){if(s<=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")}}function q(){if(s>=5){const e=document.querySelectorAll(".btn-seemore");for(let t=0;t<e.length;t++)e[t].classList.add("hidden")}}async function H(e,t){try{if(c>=375&&c<=767)s=1,s+=4;else if(c>=768&&c<=1157)s=3,s+=2;else return;let o=await k(t,s);o=o.map(n=>(n.books=n.books.slice(0,s),n)),b(o),L(),handleBookClick(e)}catch{u("Sorry, no books! ","red","white")}}i.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("btn-seemore")){e.preventDefault();const t=e.target.dataset.category;await H(e,t)}});$.addEventListener("click",async e=>{if(e.target&&e.target.classList.contains("hidden-overflow")){e.preventDefault();const t=e.target.closest(".book-item");if(t){const o=t.dataset.bookId;await w(o)}}});function u(e,t,o){T.error({position:"topRight",message:e,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const I=document.querySelector("#category-list");let B;window.onload=function(){const e=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",e.appendChild(t),C().then(o=>{o.forEach(function(n){const r=document.createElement("p");r.textContent=n.list_name,r.classList.add("p-list"),e.appendChild(r)})}).catch(o=>{console.error("Error fetching data;",o)}),p(B)};I.addEventListener("click",async e=>{if(e.preventDefault(),e.target.tagName==="P"){const t=e.target.textContent;M(t)}else e.target.id==="title"&&p(B)});const a=document.querySelector("#slider"),m=document.querySelector("#theme-style"),h=localStorage.getItem("theme");h?m.setAttribute("href",`./css/${h}.css`):m.setAttribute("href","./css/styles-light-theme.css");function l(e){localStorage.setItem("theme",e),m.setAttribute("href",`./css/${e}.css`)}function _(){a.checked?l("styles-light-theme"):l("styles-dark-theme")}a.addEventListener("change",_);function x(){h==="styles-dark-theme"?(l("styles-dark-theme"),a.checked=!1):(l("styles-light-theme"),a.checked=!0)}x();
//# sourceMappingURL=commonHelpers.js.map

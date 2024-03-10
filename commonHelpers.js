import"./assets/dark-theme-5a1592eb.js";import{a as m,i as g}from"./assets/vendor-59c8246b.js";const w="https://books-backend.p.goit.global/books";async function q(){const o="https://books-backend.p.goit.global/books/category-list",t={method:"GET"};return(await m.get(o,{options:t})).data}async function A(o){o=o.trim();const t=`${w}/${o}`;return(await m.get(t)).data}async function $(o){const t="https://books-backend.p.goit.global/books/category",e=encodeURIComponent(o),n=`${t}?category=${e}`,s={method:"GET",headers:{"Content-Type":"application/json"}};return(await m.get(n,s)).data}async function T(o,t){const e="https://books-backend.p.goit.global/books/top-books",n=encodeURIComponent(o);let s;t?s=`${e}?category=${n}&limit=${t}`:s=`${e}?category=${n}`;const c={method:"GET",headers:{"Content-Type":"application/json"}};return(await m.get(s,c)).data}function x(){const o=document.querySelector(".about-book-backdrop");o.classList.add("is-active"),document.body.classList.add("no-scroll"),o.addEventListener("click",p),document.body.addEventListener("keyup",b)}function p(o){const t=document.querySelector(".about-book-backdrop"),e=document.querySelector(".about-book-window"),n=document.querySelector(".about-book-close-btn"),s=o.target.closest("[data-modal-close]")===n;(!e.contains(o.target)||s)&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",p),document.body.removeEventListener("keyup",b))}function b(o){const t=document.querySelector(".about-book-backdrop"),e=o.key||o.keyCode;(e==="Escape"||e==="Esc")&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",p),document.body.removeEventListener("keyup",b))}const M=document.querySelector(".popup-book-image"),I=document.querySelector(".popup-book-title"),R=document.querySelector(".popup-book-author"),H=document.querySelector(".popup-book-review"),O=document.querySelector(".popup-shopping-links-icon.amazon"),_=document.querySelector(".popup-shopping-links-icon.book"),a=document.querySelector(".modal-btn-add-to-shopinglist"),k=document.querySelector(".under-button-text");k.hidden=!0;a.addEventListener("click",U);async function y(o){try{const t=await A(o);G(t),M.attributes.src.value=t.book_image,I.textContent=t.title,R.textContent=t.author,H.textContent=t.description,O.attributes.href.value=t.buy_links[0].url,_.attributes.href.value=t.buy_links[1].url,x()}catch(t){g.error({title:"Error",message:`Books was not found : ${t.message}`})}}function U(o){if(o.target.disabled)return;const t=o.target.attributes.id.value;a.textContent==="Add to shopping list"?W(t):z(t)}function W(o){let t=localStorage.getItem("idBooks");(t==="undefined"||!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t))),t=JSON.parse(localStorage.getItem("idBooks")),t.push(o),localStorage.setItem("idBooks",JSON.stringify(t)),a.textContent="Remove from the shopping list",k.hidden=!0}function z(o){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(o),1),localStorage.setItem("idBooks",JSON.stringify(t)),a.textContent="Add to shopping list",k.hidden=!1}function G(o){let t=localStorage.getItem("idBooks");!t||t===""||!t.includes(o._id)?a.textContent="Add to shopping list":(a.textContent="Remove from the shopping list",k.hidden=!0),a.attributes.id.value=o._id}const u=document.querySelector(".books-container-one-cat"),r=document.querySelector(".books-container-all-cat-block"),h=document.querySelector(".books-container-all-cat-title"),d=window.innerWidth;let i;function N(o){return`<div class="book-item">
  <ul class="book-item-block" data-category="${o._id}">
    <li class="book-item-img">
      <img
        src="${o.book_image}"
        alt="${o.description}"
        srcset="${o.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
      <p class="hidden-overflow">QUICK VIEW</p>
    </li>
    <li class="book-item-title">${o.title}</li>
    <li class="book-item-author">${o.author}</li>
  </ul>
</div>`}function f(o){return o.map(N).join("")}function J(o,t){u.innerHTML="",r.innerHTML="",h.innerHTML="";const n=t.split(" "),s=n.pop(),c=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+s+"</span>"}</h3><div class="books-container-one-cat-block">${f(o)}</div>`;u.innerHTML=c+`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>
<a href="#goback" >
    <button type="button" class="back-to-all-cat">GO BACK</button> 
</a>
`}function S(o){u.innerHTML="",r.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let e="";o.forEach(n=>{e+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${f(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),h.innerHTML=t,r.innerHTML=e}async function B(o){try{const t=await $(o);J(t,o)}catch{E("Sorry, there are no books for these category! ","red","white")}}async function L(o){try{d>=375&&d<=767?i=1:d>=768&&d<=1157?i=3:i=5;let t=await T(o,i);t=t.map(e=>(e.books=e.books.slice(0,i),e)),S(t),v()}catch{E("Sorry, no books! ","red","white")}}function v(){i===1||i===3||i===5?j():D()}function j(){if(i<=5){const o=document.querySelectorAll(".btn-seemore");for(let t=0;t<o.length;t++)o[t].classList.remove("hidden")}}function D(){if(i>=5){const o=document.querySelectorAll(".btn-seemore");for(let t=0;t<o.length;t++)o[t].classList.add("hidden")}}async function P(o){try{let t=await B(o);moreBooks=t.map(e=>(e.books=e.books.slice(0,i),e)),S(moreBooks),v()}catch(t){console.log(t)}}r.addEventListener("click",async o=>{if(o.target&&o.target.classList.contains("btn-seemore")){o.preventDefault();const t=o.target.dataset.category;await P(t)}});r.addEventListener("click",async o=>{if(o.target.closest(".book-item")){o.preventDefault();const e=o.target.closest(".book-item-block").dataset.category;if(e){const n=await y(e);console.log(n)}}});u.addEventListener("click",async o=>{if(o.preventDefault(),o.target.closest(".book-item")){const e=o.target.closest(".book-item-block").dataset.category;if(e){const n=await y(e);console.log(n)}}});function E(o,t,e){g.error({position:"topRight",message:o,messageColor:e,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const K=document.getElementById("anchor-books");window.addEventListener("scroll",()=>{const o=document.querySelectorAll(".scroll-up"),t=K.getBoundingClientRect().top,e=window.innerHeight;o.forEach(n=>{const s=n.getBoundingClientRect().bottom,c=e*.9;Math.abs(t-s)<=c?n.classList.add("hidden"):n.classList.remove("hidden")})});const V=document.querySelector("#category-list");let C;window.onload=function(){const o=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",o.appendChild(t),q().then(e=>{e.forEach(function(c){const l=document.createElement("p");l.textContent=c.list_name,l.classList.add("p-list"),o.appendChild(l)});let n=document.querySelectorAll(".p-list"),s=document.querySelector("#title");n.forEach(c=>{c.addEventListener("mouseover",function(){s.style.fontWeight="400",s.style.fontSize="16px",s.style.lineHeight="112%",s.style.letterSpacing="-0.02em",s.style.color="var(--all-categories-list-text)"}),c.addEventListener("mouseout",function(){s.style.fontWeight="700",s.style.fontSize="18px",s.style.lineHeight="133%",s.style.letterSpacing="-0.02em",s.style.color="var(--all-categories-title-and-hover)"})})}).catch(e=>{console.error("Error fetching data;",e)}),L(C)};V.addEventListener("click",async o=>{if(o.preventDefault(),o.target.tagName==="P"){const t=o.target.textContent;B(t)}else o.target.id==="title"&&L(C)});
//# sourceMappingURL=commonHelpers.js.map

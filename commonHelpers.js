import"./assets/dark-theme-da2f8afe.js";import{a as k,i as y}from"./assets/vendor-59c8246b.js";const q="https://books-backend.p.goit.global/books";async function A(){const o="https://books-backend.p.goit.global/books/category-list",t={method:"GET"};return(await k.get(o,{options:t})).data}async function T(o){o=o.trim();const t=`${q}/${o}`;return(await k.get(t)).data}async function $(o){const t="https://books-backend.p.goit.global/books/category",e=encodeURIComponent(o),s=`${t}?category=${e}`,n={method:"GET",headers:{"Content-Type":"application/json"}};return(await k.get(s,n)).data}async function x(o,t){const e="https://books-backend.p.goit.global/books/top-books",s=encodeURIComponent(o);let n;t?n=`${e}?category=${s}&limit=${t}`:n=`${e}?category=${s}`;const c={method:"GET",headers:{"Content-Type":"application/json"}};return(await k.get(n,c)).data}function M(){const o=document.querySelector(".about-book-backdrop");o.classList.add("is-active"),document.body.classList.add("no-scroll"),o.addEventListener("click",b),document.body.addEventListener("keyup",p)}function b(o){const t=document.querySelector(".about-book-backdrop"),e=document.querySelector(".about-book-window"),s=document.querySelector(".about-book-close-btn"),n=o.target.closest("[data-modal-close]")===s;(!e.contains(o.target)||n)&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",b),document.body.removeEventListener("keyup",p))}function p(o){const t=document.querySelector(".about-book-backdrop"),e=o.key||o.keyCode;(e==="Escape"||e==="Esc")&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",b),document.body.removeEventListener("keyup",p))}const I=document.querySelector(".popup-book-image"),R=document.querySelector(".popup-book-title"),H=document.querySelector(".popup-book-author"),O=document.querySelector(".popup-book-review"),_=document.querySelector(".popup-shopping-links-icon.amazon"),U=document.querySelector(".popup-shopping-links-icon.book"),i=document.querySelector(".modal-btn-add-to-shopinglist"),l=document.querySelector(".under-button-text");l.hidden=!0;i.addEventListener("click",W);async function h(o){try{const t=await T(o);N(t),I.attributes.src.value=t.book_image,R.textContent=t.title,H.textContent=t.author,O.textContent=t.description,_.attributes.href.value=t.buy_links[0].url,U.attributes.href.value=t.buy_links[1].url,M()}catch(t){y.error({title:"Error",message:`Books was not found : ${t.message}`})}}function W(o){const t=o.target.attributes.id.value;i.textContent==="Add to shopping list"?z(t):G(t)}function z(o){let t=localStorage.getItem("idBooks");(t==="undefined"||!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t))),t=JSON.parse(localStorage.getItem("idBooks")),t.push(o),localStorage.setItem("idBooks",JSON.stringify(t)),i.textContent="Remove from the shopping list",l.hidden=!1}function G(o){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(o),1),localStorage.setItem("idBooks",JSON.stringify(t)),i.textContent="Add to shopping list",l.hidden=!0}function N(o){let t=localStorage.getItem("idBooks");!t||t===""||!t.includes(o._id)?(i.textContent="Add to shopping list",l.hidden=!0):(i.textContent="Remove from the shopping list",l.hidden=!1),i.attributes.id.value=o._id}const m=document.querySelector(".books-container-one-cat"),d=document.querySelector(".books-container-all-cat-block"),f=document.querySelector(".books-container-all-cat-title"),u=window.innerWidth;let r;function J(o){return`<div class="book-item">
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
</div>`}function S(o){return o.map(J).join("")}function P(o,t){m.innerHTML="",d.innerHTML="",f.innerHTML="";const s=t.split(" "),n=s.pop(),c=`<h3 class="container-category-one">${s.join(" ")+' <span class="last-word">'+n+"</span>"}</h3><div class="books-container-one-cat-block">${S(o)}</div>`;m.innerHTML=c+`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a><a href="#goback" >
    <button type="button" class="back-to-all-cat">GO BACK</button> 
</a>
`,C()}function v(o){m.innerHTML="",d.innerHTML="";const t='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let e="";o.forEach(s=>{e+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${s.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${S(s.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${s.list_name}">SEE MORE</button>
    </div>`}),f.innerHTML=t,d.innerHTML=e+`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>`}async function L(o){try{const t=await $(o);P(t,o)}catch{E("Sorry, there are no books for these category! ","red","white")}}async function g(o){try{u>=375&&u<=767?r=1:u>=768&&u<=1157?r=3:r=5;let t=await x(o,r);t=t.map(e=>(e.books=e.books.slice(0,r),e)),v(t),B()}catch{E("Sorry, no books! ","red","white")}}function B(){r===1||r===3||r===5?V():j()}function V(){if(r<=5){const o=document.querySelectorAll(".btn-seemore");for(let t=0;t<o.length;t++)o[t].classList.remove("hidden")}}function j(){if(r>=5){const o=document.querySelectorAll(".btn-seemore");for(let t=0;t<o.length;t++)o[t].classList.add("hidden")}}async function D(o){try{let t=await L(o);moreBooks=t.map(e=>(e.books=e.books.slice(0,r),e)),v(moreBooks),B()}catch(t){console.log(t)}}d.addEventListener("click",async o=>{if(o.target&&o.target.classList.contains("btn-seemore")){o.preventDefault();const t=o.target.dataset.category;await D(t)}});d.addEventListener("click",async o=>{if(o.target.closest(".book-item")){o.preventDefault();const e=o.target.closest(".book-item-block").dataset.category;if(e){const s=await h(e);console.log(s)}}});m.addEventListener("click",async o=>{if(o.preventDefault(),o.target.closest(".book-item")){const e=o.target.closest(".book-item-block").dataset.category;if(e){const s=await h(e);console.log(s)}}});function E(o,t,e){y.error({position:"topRight",message:o,messageColor:e,messageSize:"16",messageLineHeight:"15",backgroundColor:t,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}window.addEventListener("scroll",C);function C(){const o=document.querySelectorAll(".scroll-up"),e=document.querySelector("#anchor-books").getBoundingClientRect().top,s=window.innerHeight;o.forEach(n=>{const c=n.getBoundingClientRect().top,a=s*.9;Math.abs(e-c)<=a?n.classList.add("hidden"):n.classList.remove("hidden")}),document.querySelectorAll(".scroll-up").forEach(n=>{n.addEventListener("click",()=>{document.querySelector("#anchor-books").scrollIntoView({behavior:"smooth"})})}),document.querySelector(".back-to-all-cat").addEventListener("click",()=>{const n=document.querySelector(".books-container-one-cat");n.innerHTML="",g(),document.querySelector(".books-container-all-cat").scrollIntoView({behavior:"smooth"})})}const K=document.querySelector("#category-list");let w;window.onload=function(){const o=document.getElementById("category-list"),t=document.createElement("li");t.textContent="ALL CATEGORIES",t.id="title",o.appendChild(t),A().then(e=>{e.forEach(function(c){const a=document.createElement("p");a.textContent=c.list_name,a.classList.add("p-list"),o.appendChild(a)});let s=document.querySelectorAll(".p-list"),n=document.querySelector("#title");s.forEach(c=>{c.addEventListener("mouseover",function(){n.style.fontWeight="400",n.style.fontSize="16px",n.style.lineHeight="112%",n.style.letterSpacing="-0.02em",n.style.color="var(--all-categories-list-text)"}),c.addEventListener("mouseout",function(){n.style.fontWeight="700",n.style.fontSize="18px",n.style.lineHeight="133%",n.style.letterSpacing="-0.02em",n.style.color="var(--all-categories-title-and-hover)"})})}).catch(e=>{console.error("Error fetching data;",e)}),g(w)};K.addEventListener("click",async o=>{if(o.preventDefault(),o.target.tagName==="P"){const t=o.target.textContent;L(t)}else o.target.id==="title"&&g(w)});
//# sourceMappingURL=commonHelpers.js.map

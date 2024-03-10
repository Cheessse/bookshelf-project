import{m as u,b as E,t as B,c as L}from"./assets/dark-theme-dd872674.js";import{i as w}from"./assets/vendor-59c8246b.js";const l=document.querySelector(".books-container-one-cat"),a=document.querySelector(".books-container-all-cat-block"),m=document.querySelector(".books-container-all-cat-title"),r=window.innerWidth;let i;function S(t){return`<div class="book-item">
  <ul class="book-item-block" data-category="${t._id}">
    <li class="book-item-img">
      <img
        src="${t.book_image}"
        alt="${t.description}"
        srcset="${t.book_image}"
        width="335"
        height="485"
        class="book-image"
      />
      <p class="hidden-overflow">QUICK VIEW</p>
    </li>
    <li class="book-item-title">${t.title}</li>
    <li class="book-item-author">${t.author}</li>
  </ul>
</div>`}function g(t){return t.map(S).join("")}function C(t,e){l.innerHTML="",a.innerHTML="",m.innerHTML="";const n=e.split(" "),s=n.pop(),c=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+s+"</span>"}</h3><div class="books-container-one-cat-block">${g(t)}</div>`;l.innerHTML=c+`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>
<a href="#goback" >
    <button type="button" class="back-to-all-cat">GO BACK</button> 
</a>
`}function h(t){l.innerHTML="",a.innerHTML="";const e='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";t.forEach(n=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${g(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),m.innerHTML=e,a.innerHTML=o}async function b(t){try{const e=await E(t);C(e,t)}catch{f("Sorry, there are no books for these category! ","red","white")}}async function k(t){try{r>=375&&r<=767?i=1:r>=768&&r<=1157?i=3:i=5;let e=await B(t,i);e=e.map(o=>(o.books=o.books.slice(0,i),o)),h(e),y()}catch{f("Sorry, no books! ","red","white")}}function y(){i===1||i===3||i===5?v():T()}function v(){if(i<=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.remove("hidden")}}function T(){if(i>=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.add("hidden")}}async function H(t){try{let e=await b(t);moreBooks=e.map(o=>(o.books=o.books.slice(0,i),o)),h(moreBooks),y()}catch(e){console.log(e)}}a.addEventListener("click",async t=>{if(t.target&&t.target.classList.contains("btn-seemore")){t.preventDefault();const e=t.target.dataset.category;await H(e)}});a.addEventListener("click",async t=>{if(t.target.closest(".book-item")){t.preventDefault();const o=t.target.closest(".book-item-block").dataset.category;if(o){const n=await u(o);console.log(n)}}});l.addEventListener("click",async t=>{if(t.preventDefault(),t.target.closest(".book-item")){const o=t.target.closest(".book-item-block").dataset.category;if(o){const n=await u(o);console.log(n)}}});function f(t,e,o){w.error({position:"topRight",message:t,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:e,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const A=document.getElementById("anchor-books");window.addEventListener("scroll",()=>{const t=document.querySelectorAll(".scroll-up"),e=A.getBoundingClientRect().top,o=window.innerHeight;t.forEach(n=>{const s=n.getBoundingClientRect().bottom,c=o*.9;Math.abs(e-s)<=c?n.classList.add("hidden"):n.classList.remove("hidden")})});const M=document.querySelector("#category-list");let p;window.onload=function(){const t=document.getElementById("category-list"),e=document.createElement("li");e.textContent="ALL CATEGORIES",e.id="title",t.appendChild(e),L().then(o=>{o.forEach(function(c){const d=document.createElement("p");d.textContent=c.list_name,d.classList.add("p-list"),t.appendChild(d)});let n=document.querySelectorAll(".p-list"),s=document.querySelector("#title");n.forEach(c=>{c.addEventListener("mouseover",function(){s.style.fontWeight="400",s.style.fontSize="16px",s.style.lineHeight="112%",s.style.letterSpacing="-0.02em",s.style.color="var(--all-categories-list-text)"}),c.addEventListener("mouseout",function(){s.style.fontWeight="700",s.style.fontSize="18px",s.style.lineHeight="133%",s.style.letterSpacing="-0.02em",s.style.color="var(--all-categories-title-and-hover)"})})}).catch(o=>{console.error("Error fetching data;",o)}),k(p)};M.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const e=t.target.textContent;b(e)}else t.target.id==="title"&&k(p)});
//# sourceMappingURL=commonHelpers.js.map

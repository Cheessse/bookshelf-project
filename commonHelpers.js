import{m as l,b as y,t as L,c as B}from"./assets/dark-theme-ef2baa7d.js";import{i as E}from"./assets/vendor-59c8246b.js";const r=document.querySelector(".books-container-one-cat"),i=document.querySelector(".books-container-all-cat-block"),d=document.querySelector(".books-container-all-cat-title"),a=window.innerWidth;let n;function w(t){return`<div class="book-item">
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
</div>`}function m(t){return t.map(w).join("")}function C(t,o){r.innerHTML="",i.innerHTML="",d.innerHTML="";const s=o.split(" "),c=s.pop(),p=`<h3 class="container-category-one">${s.join(" ")+' <span class="last-word">'+c+"</span>"}</h3><div class="books-container-one-cat-block">${m(t)}</div>`;r.innerHTML=p+`<a href="#anchor">
  <button type="button" class="scroll-up hidden">UP</button>
</a>
`}function u(t){r.innerHTML="",i.innerHTML="";const o='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let e="";t.forEach(s=>{e+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${s.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${m(s.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${s.list_name}">SEE MORE</button>
    </div>`}),d.innerHTML=o,i.innerHTML=e}async function k(t){try{const o=await y(t);C(o,t)}catch{b("Sorry, there are no books for these category! ","red","white")}}async function h(t){try{a>=375&&a<=767?n=1:a>=768&&a<=1157?n=3:n=5;let o=await L(t,n);o=o.map(e=>(e.books=e.books.slice(0,n),e)),u(o),g()}catch{b("Sorry, no books! ","red","white")}}function g(){n===1||n===3||n===5?S():M()}function S(){if(n<=5){const t=document.querySelectorAll(".btn-seemore");for(let o=0;o<t.length;o++)t[o].classList.remove("hidden")}}function M(){if(n>=5){const t=document.querySelectorAll(".btn-seemore");for(let o=0;o<t.length;o++)t[o].classList.add("hidden")}}async function T(t){try{let o=await k(t);moreBooks=o.map(e=>(e.books=e.books.slice(0,n),e)),u(moreBooks),g()}catch(o){console.log(o)}}i.addEventListener("click",async t=>{if(t.target&&t.target.classList.contains("btn-seemore")){t.preventDefault();const o=t.target.dataset.category;await T(o)}});i.addEventListener("click",async t=>{if(t.target.classList.contains("book-item")){t.preventDefault();const e=t.target.closest(".book-item-block").dataset.category;if(e){const s=await l(e);console.log(s)}}});r.addEventListener("click",async t=>{if(t.preventDefault(),t.target.closest(".book-item")){const e=t.target.closest(".book-item-block").dataset.category;if(e){const s=await l(e);console.log(s)}}});function b(t,o,e){E.error({position:"topRight",message:t,messageColor:e,messageSize:"16",messageLineHeight:"15",backgroundColor:o,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const v=document.getElementById("anchor");window.addEventListener("scroll",()=>{const t=document.querySelectorAll(".scroll-up"),o=v.getBoundingClientRect().top;t.forEach(e=>{const s=e.getBoundingClientRect().top;a>=375&&a<=767?Math.abs(o-s)<=700?e.classList.add("hidden"):e.classList.remove("hidden"):a>=768&&a<=1157?Math.abs(o-s)<=900?e.classList.add("hidden"):e.classList.remove("hidden"):e.classList.add("hidden")})});const $=document.querySelector("#category-list");let f;window.onload=function(){const t=document.getElementById("category-list"),o=document.createElement("li");o.textContent="ALL CATEGORIES",o.id="title",t.appendChild(o),B().then(e=>{e.forEach(function(s){const c=document.createElement("p");c.textContent=s.list_name,c.classList.add("p-list"),t.appendChild(c)})}).catch(e=>{console.error("Error fetching data;",e)}),h(f)};$.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const o=t.target.textContent;k(o)}else t.target.id==="title"&&h(f)});
//# sourceMappingURL=commonHelpers.js.map

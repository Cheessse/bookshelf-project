import{m as d,b as f,t as B,c as E}from"./assets/dark-theme-f93736b0.js";import{i as L}from"./assets/vendor-59c8246b.js";const i=document.querySelector(".books-container-one-cat"),a=document.querySelector(".books-container-all-cat-block"),u=document.querySelector(".books-container-all-cat-title"),r=window.innerWidth;let s;function w(t){return`<div class="book-item">
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
</div>`}function m(t){return t.map(w).join("")}function C(t,o){i.innerHTML="",a.innerHTML="",u.innerHTML="";const n=o.split(" "),c=n.pop(),l=`<h3 class="container-category-one">${n.join(" ")+' <span class="last-word">'+c+"</span>"}</h3><div class="books-container-one-cat-block">${m(t)}</div>`;i.innerHTML=l+`<a href="#anchor-books">
  <button type="button" class="scroll-up hidden">UP</button>
</a>
<a href="#goback" >
    <button type="button" class="back-to-all-cat">GO BACK</button> 
</a>
`}function b(t){i.innerHTML="",a.innerHTML="";const o='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let e="";t.forEach(n=>{e+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${n.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${m(n.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${n.list_name}">SEE MORE</button>
    </div>`}),u.innerHTML=o,a.innerHTML=e}async function k(t){try{const o=await f(t);C(o,t)}catch{y("Sorry, there are no books for these category! ","red","white")}}async function g(t){try{r>=375&&r<=767?s=1:r>=768&&r<=1157?s=3:s=5;let o=await B(t,s);o=o.map(e=>(e.books=e.books.slice(0,s),e)),b(o),h()}catch{y("Sorry, no books! ","red","white")}}function h(){s===1||s===3||s===5?S():T()}function S(){if(s<=5){const t=document.querySelectorAll(".btn-seemore");for(let o=0;o<t.length;o++)t[o].classList.remove("hidden")}}function T(){if(s>=5){const t=document.querySelectorAll(".btn-seemore");for(let o=0;o<t.length;o++)t[o].classList.add("hidden")}}async function M(t){try{let o=await k(t);moreBooks=o.map(e=>(e.books=e.books.slice(0,s),e)),b(moreBooks),h()}catch(o){console.log(o)}}a.addEventListener("click",async t=>{if(t.target&&t.target.classList.contains("btn-seemore")){t.preventDefault();const o=t.target.dataset.category;await M(o)}});a.addEventListener("click",async t=>{if(t.target.closest(".book-item")){t.preventDefault();const e=t.target.closest(".book-item-block").dataset.category;if(e){const n=await d(e);console.log(n)}}});i.addEventListener("click",async t=>{if(t.preventDefault(),t.target.closest(".book-item")){const e=t.target.closest(".book-item-block").dataset.category;if(e){const n=await d(e);console.log(n)}}});function y(t,o,e){L.error({position:"topRight",message:t,messageColor:e,messageSize:"16",messageLineHeight:"15",backgroundColor:o,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const v=document.getElementById("anchor-books");window.addEventListener("scroll",()=>{const t=document.querySelectorAll(".scroll-up"),o=v.getBoundingClientRect().top,e=window.innerHeight;t.forEach(n=>{const c=n.getBoundingClientRect().bottom,l=e*.9;Math.abs(o-c)<=l?n.classList.add("hidden"):n.classList.remove("hidden")})});const A=document.querySelector("#category-list");let p;window.onload=function(){const t=document.getElementById("category-list"),o=document.createElement("li");o.textContent="ALL CATEGORIES",o.id="title",t.appendChild(o),E().then(e=>{e.forEach(function(n){const c=document.createElement("p");c.textContent=n.list_name,c.classList.add("p-list"),t.appendChild(c)})}).catch(e=>{console.error("Error fetching data;",e)}),g(p)};A.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const o=t.target.textContent;k(o)}else t.target.id==="title"&&g(p)});
//# sourceMappingURL=commonHelpers.js.map

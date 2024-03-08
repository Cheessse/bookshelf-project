import{m as h,b as w,t as S,c as T}from"./assets/home-ukraine-66ea51af.js";import{i as C}from"./assets/vendor-59c8246b.js";const i=document.querySelector(".books-container-one-cat"),r=document.querySelector(".books-container-all-cat-block"),k=document.querySelector(".books-container-all-cat-title"),a=window.innerWidth;let n;function $(t){return`<div class="book-item">
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
</div>`}function g(t){return t.map($).join("")}function A(t,e){i.innerHTML="",r.innerHTML="",k.innerHTML="";const s=e.split(" "),c=s.pop(),E=`<h3 class="container-category-one">${s.join(" ")+' <span class="last-word">'+c+"</span>"}</h3><div class="books-container-one-cat-block">${g(t)}</div>`;i.innerHTML=E}function y(t){i.innerHTML="",r.innerHTML="";const e='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";t.forEach(s=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${s.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${g(s.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${s.list_name}">SEE MORE</button>
    </div>`}),k.innerHTML=e,r.innerHTML=o}async function b(t){try{const e=await w(t);A(e,t)}catch{L("Sorry, there are no books for these category! ","red","white")}}async function f(t){try{a>=375&&a<=767?n=1:a>=768&&a<=1157?n=3:n=5;let e=await S(t,n);e=e.map(o=>(o.books=o.books.slice(0,n),o)),y(e),p()}catch{L("Sorry, no books! ","red","white")}}function p(){n===1||n===3||n===5?v():M()}function v(){if(n<=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.remove("hidden")}}function M(){if(n>=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.add("hidden")}}async function H(t){try{let e=await b(t);moreBooks=e.map(o=>(o.books=o.books.slice(0,n),o)),y(moreBooks),p()}catch(e){console.log(e)}}r.addEventListener("click",async t=>{if(t.target&&t.target.classList.contains("btn-seemore")){t.preventDefault();const e=t.target.dataset.category;await H(e)}});r.addEventListener("click",async t=>{if(t.target.classList.contains("book-item")){t.preventDefault();const o=t.target.closest(".book-item-block").dataset.category;if(o){const s=await h(o);console.log(s)}}});i.addEventListener("click",async t=>{if(t.target.classList.contains("book-item")){t.preventDefault();const o=t.target.closest(".book-item-block").dataset.category;if(o){const s=await h(o);console.log(s)}}});function L(t,e,o){C.error({position:"topRight",message:t,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:e,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const q=document.querySelector("#category-list");let B;window.onload=function(){const t=document.getElementById("category-list"),e=document.createElement("li");e.textContent="ALL CATEGORIES",e.id="title",t.appendChild(e),T().then(o=>{o.forEach(function(s){const c=document.createElement("p");c.textContent=s.list_name,c.classList.add("p-list"),t.appendChild(c)})}).catch(o=>{console.error("Error fetching data;",o)}),f(B)};q.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const e=t.target.textContent;b(e)}else t.target.id==="title"&&f(B)});const l=document.querySelector("#slider"),m=document.querySelector("#theme-style"),u=localStorage.getItem("theme");u?m.setAttribute("href",`./css/${u}.css`):m.setAttribute("href","./css/styles-light-theme.css");function d(t){localStorage.setItem("theme",t),m.setAttribute("href",`./css/${t}.css`)}function I(){l.checked?d("styles-light-theme"):d("styles-dark-theme")}l.addEventListener("change",I);function _(){u==="styles-dark-theme"?(d("styles-dark-theme"),l.checked=!1):(d("styles-light-theme"),l.checked=!0)}_();
//# sourceMappingURL=commonHelpers.js.map

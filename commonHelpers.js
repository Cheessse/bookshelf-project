import{m as k,b as w,t as g,c as S}from"./assets/home-ukraine-66ea51af.js";import{i as C}from"./assets/vendor-59c8246b.js";const i=document.querySelector(".books-container-one-cat"),a=document.querySelector(".books-container-all-cat-block"),b=document.querySelector(".books-container-all-cat-title"),c=window.innerWidth;let n;function T(t){return`<div class="book-item">
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
</div>`}function y(t){return t.map(T).join("")}function $(t,e){i.innerHTML="",a.innerHTML="",b.innerHTML="";const s=e.split(" "),r=s.pop(),B=`<h3 class="container-category-one">${s.join(" ")+' <span class="last-word">'+r+"</span>"}</h3><div class="books-container-one-cat-block">${y(t)}</div>`;i.innerHTML=B}function f(t){i.innerHTML="",a.innerHTML="";const e='<h2 class="container-title">Best Sellers <span>Book</span></h2>';let o="";t.forEach(s=>{o+=`<div class="cat-books-btn">
      <h3 class="container-category-all">${s.list_name}</h3>
    <div class="books-container-all-cat-block-bpt">${y(s.books)}</div>
    <button type="button" class="btn-seemore hidden" data-category="${s.list_name}">SEE MORE</button>
    </div>`}),b.innerHTML=e,a.innerHTML=o}async function A(t){try{const e=await w(t);$(e,t),handleBookClick()}catch{h("Sorry, there are no books for these category! ","red","white")}}async function p(t){try{c>=375&&c<=767?n=1:c>=768&&c<=1157?n=3:n=5;let e=await g(t,n);e=e.map(o=>(o.books=o.books.slice(0,n),o)),f(e),L()}catch{h("Sorry, no books! ","red","white")}}function L(){n===1||n===3?M():v()}function M(){if(n<=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.remove("hidden")}}function v(){if(n>=5){const t=document.querySelectorAll(".btn-seemore");for(let e=0;e<t.length;e++)t[e].classList.add("hidden")}}async function H(t,e){try{if(c>=375&&c<=767)n=1,n+=4;else if(c>=768&&c<=1157)n=3,n+=2;else return;let o=await g(e,n);o=o.map(s=>(s.books=s.books.slice(0,n),s)),f(o),L(),handleBookClick(t)}catch{h("Sorry, no more books! ","red","white")}}a.addEventListener("click",async t=>{if(t.target&&t.target.classList.contains("btn-seemore")){t.preventDefault();const e=t.target.dataset.category;await H(t,e)}});a.addEventListener("click",async t=>{if(t.target.classList.contains("book-item")){t.preventDefault();const o=t.target.closest(".book-item-block").dataset.category;if(o){const s=await k(o);console.log(s)}}});i.addEventListener("click",async t=>{if(t.target.classList.contains("book-item")){t.preventDefault();const o=t.target.closest(".book-item-block").dataset.category;if(o){const s=await k(o);console.log(s)}}});function h(t,e,o){C.error({position:"topRight",message:t,messageColor:o,messageSize:"16",messageLineHeight:"15",backgroundColor:e,timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}const q=document.querySelector("#category-list");let E;window.onload=function(){const t=document.getElementById("category-list"),e=document.createElement("li");e.textContent="ALL CATEGORIES",e.id="title",t.appendChild(e),S().then(o=>{o.forEach(function(s){const r=document.createElement("p");r.textContent=s.list_name,r.classList.add("p-list"),t.appendChild(r)})}).catch(o=>{console.error("Error fetching data;",o)}),p(E)};q.addEventListener("click",async t=>{if(t.preventDefault(),t.target.tagName==="P"){const e=t.target.textContent;A(e)}else t.target.id==="title"&&p(E)});const l=document.querySelector("#slider"),m=document.querySelector("#theme-style"),u=localStorage.getItem("theme");u?m.setAttribute("href",`./css/${u}.css`):m.setAttribute("href","./css/styles-light-theme.css");function d(t){localStorage.setItem("theme",t),m.setAttribute("href",`./css/${t}.css`)}function I(){l.checked?d("styles-light-theme"):d("styles-dark-theme")}l.addEventListener("change",I);function _(){u==="styles-dark-theme"?(d("styles-dark-theme"),l.checked=!1):(d("styles-light-theme"),l.checked=!0)}_();
//# sourceMappingURL=commonHelpers.js.map

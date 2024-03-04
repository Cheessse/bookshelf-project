import"./vendor-92587dd7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const u=document.getElementById("theme-toggle"),c=document.body;u.addEventListener("change",()=>{u.checked?(c.classList.add("dark"),c.classList.remove("light")):(c.classList.add("light"),c.classList.remove("dark"))});(()=>{const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".header-link"),t=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),s.classList.toggle("is-open");const i=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};n.forEach(o=>o.addEventListener("click",t)),e.addEventListener("click",t),r.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.querySelector(".popup-book-image");document.querySelector(".popup-book-title");document.querySelector(".popup-book-author");document.querySelector(".popup-book-review");document.querySelector(".popup-shopping-links-icon.amazon");document.querySelector(".popup-shopping-links-icon.book");const l=document.querySelector("#add"),a=document.querySelector(".under-button-text");a.hidden=!0;l.addEventListener("click",p);function p(s){if(s.target.disabled)return;const e=s.target.attributes.id.value;l.textContent==="Add to shopping list"?m(e):g(e)}function m(s){let e=localStorage.getItem("idBooks");(e==="undefined"||!e||e==="")&&(e=[],localStorage.setItem("idBooks",JSON.stringify(e))),e=JSON.parse(localStorage.getItem("idBooks")),e.push(s),localStorage.setItem("idBooks",JSON.stringify(e)),l.textContent="Remove from the shopping list",a.hidden=!1,updateShoppingList()}function g(s){let e=JSON.parse(localStorage.getItem("idBooks"));e.splice(e.indexOf(s),1),localStorage.setItem("idBooks",JSON.stringify(e)),l.textContent="Add to shopping list",a.hidden=!0,updateShoppingList()}const h="/project-team-6/assets/symbol-defs-f000629d.svg#icon-amazon",f="/project-team-6/assets/symbol-defs-f000629d.svg#icon-ibooks",y="/project-team-6/assets/symbol-defs-f000629d.svg#icon-trash",d=document.querySelector(".shopping-list-default-div");function b(){const s=JSON.parse(localStorage.getItem(book))||[],e=document.querySelector(".shopping-list-render");if(s.length===0)d.style.display="block";else{const n=s.map(t=>`
       <div class="card">
        <img src="${t.book_image}" alt="book cover" class="book-cover">
        <div class="about">
          <h2 class="book-title">${t.title}</h2>
          <p class="book-category">${t.list_name}</p>
          <p class="book-description">${t.description}</p>
          <p class="book-author">${t.author}</p>
        </div>
           <div class="buy">
        <a href="${t.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${h}"></use>
          </svg>
        </a>
        <a href="${t.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${f}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${t._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${y}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");e.insertAdjacentHTML("beforeend",n)}document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-book-id");k(t);const o=n.closest(".card");o&&o.remove(),v()})})}b();function k(s){const e=getLocalStorageItem(SHOPPING_LIST_KEY);if(!e||e.length===0)return;const r=e.filter(n=>n._id!==s);toLocalStorage(SHOPPING_LIST_KEY,r)}function S(){return document.querySelector(".shopping-list-render").children.length===0}function v(){const s=document.querySelector(".support-ukraine");S()?(d.style.display="block",s.style.display="none"):(d.style.display="none",s.style.display="block")}
//# sourceMappingURL=shopping-list-10e71f58.js.map

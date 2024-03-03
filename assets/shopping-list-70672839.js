(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.getElementById("theme-toggle"),i=document.body;d.addEventListener("change",()=>{d.checked?(i.classList.add("dark"),i.classList.remove("light")):(i.classList.add("light"),i.classList.remove("dark"))});(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".header-link"),e=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};n.forEach(t=>t.addEventListener("click",e)),s.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-amazon",p="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-ibooks",m="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-trash",l="list",a=document.querySelector(".shopping-list-default-div");function g(){const o=JSON.parse(localStorage.getItem(l))||[],s=document.querySelector(".shopping-list-render");if(s.innerHTML="",o.length===0)a.style.display="block";else{const n=o.map(e=>`
       <div class="card">
        <img src="${e.book_image}" alt="book cover" class="book-cover">
        <div class="about">
          <h2 class="book-title">${e.title}</h2>
          <p class="book-category">${e.list_name}</p>
          <p class="book-description">${e.description}</p>
          <p class="book-author">${e.author}</p>
        </div>
           <div class="buy">
        <a href="${e.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${u}"></use>
          </svg>
        </a>
        <a href="${e.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${p}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${e._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${m}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");s.insertAdjacentHTML("beforeend",n)}document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",()=>{const e=n.getAttribute("data-book-id");h(e);const t=n.closest(".card");t&&t.remove(),y()})})}g();function h(o){const s=getLocalStorageItem(l);if(!s||s.length===0)return;const r=s.filter(n=>n._id!==o);toLocalStorage(l,r)}function f(){return document.querySelector(".shopping-list-render").children.length===0}function y(){const o=document.querySelector(".support-ukraine");f()?(a.style.display="block",o.style.display="none"):(a.style.display="none",o.style.display="block")}
//# sourceMappingURL=shopping-list-70672839.js.map

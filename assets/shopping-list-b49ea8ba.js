(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-amazon",d="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-ibooks",u="/project-team-6/assets/symbol-defs-76d0ad1f.svg#icon-trash",c="list",l=document.querySelector(".shopping-list-default-div");function p(){const r=JSON.parse(localStorage.getItem(c))||[],s=document.querySelector(".shopping-list-render");if(s.innerHTML="",r.length===0)l.style.display="block";else{const o=r.map(e=>`
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
            <use href="${a}"></use>
          </svg>
        </a>
        <a href="${e.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${d}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${e._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${u}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");s.insertAdjacentHTML("beforeend",o)}document.querySelectorAll(".delete-btn").forEach(o=>{o.addEventListener("click",()=>{const e=o.getAttribute("data-book-id");f(e);const t=o.closest(".card");t&&t.remove(),g()})})}p();function f(r){const s=getLocalStorageItem(c);if(!s||s.length===0)return;const i=s.filter(o=>o._id!==r);toLocalStorage(c,i)}function h(){return document.querySelector(".shopping-list-render").children.length===0}function g(){const r=document.querySelector(".support-ukraine");h()?(l.style.display="block",r.style.display="none"):(l.style.display="none",r.style.display="block")}
//# sourceMappingURL=shopping-list-b49ea8ba.js.map

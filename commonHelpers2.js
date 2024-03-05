import{S as a}from"./assets/modal-window-194c81a0.js";import"./assets/vendor-428a2275.js";const l="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-amazon",n="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-ibooks",d="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-trash",i=document.querySelector(".shopping-list-default-div");function p(){const s=JSON.parse(localStorage.getItem(a))||[],o=document.querySelector(".shopping-list-render");if(s.length===0)i.style.display="block";else{const t=s.map(e=>`
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
            <use href="${l}"></use>
          </svg>
        </a>
        <a href="${e.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${n}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${e._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${d}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");o.insertAdjacentHTML("beforeend",t)}document.querySelectorAll(".delete-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-book-id");u(e);const c=t.closest(".card");c&&c.remove(),g()})})}p();function u(s){const o=getLocalStorageItem(a);if(!o||o.length===0)return;const r=o.filter(t=>t._id!==s);toLocalStorage(a,r)}function h(){return document.querySelector(".shopping-list-render").children.length===0}function g(){const s=document.querySelector(".support-ukraine");h()?(i.style.display="block",s.style.display="none"):(i.style.display="none",s.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map

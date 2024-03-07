import{l as i}from"./assets/modal-window-345d1aa6.js";import"./assets/vendor-428a2275.js";const c="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-amazon",d="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-ibooks",p="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-trash",a=document.querySelector(".shopping-list-default-div");function u(){const s=JSON.parse(localStorage.getItem(i.SHOPPING_LIST_KEY))||[],o=document.querySelector(".shopping-list-render");if(s.length===0)a.style.display="block";else{a.style.display="none";const t=s.map(e=>`
       <div class="card">
        <img src="${e.book_image}" alt="book cover" class="book-cover" >
        <div class="about">
          <h2 class="book-title">${e.title}</h2>
          <p class="book-category">${e.list_name}</p>
          <p class="book-description">${e.description}</p>
          <p class="book-author">${e.author}</p>
        </div>
           <div class="buy">
        <a href="${e.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${c}"></use>
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
            <use href="${p}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");o.insertAdjacentHTML("beforeend",t)}document.querySelectorAll(".delete-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-book-id");g(e);const n=t.closest(".card");n&&n.remove(),r()})})}u();function g(s){const o=JSON.parse(localStorage.getItem(i.SHOPPING_LIST_KEY))||[];if(!o||o.length===0)return;const l=o.filter(t=>t._id!==s);console.log(l),toLocalStorage(i.SHOPPING_LIST_KEY,l)}function h(){return document.querySelector(".shopping-list-render").children.length===0}function r(){const s=document.querySelector(".support-ukraine");h()?(a.style.display="block",s.style.display="none"):(a.style.display="none",s.style.display="block")}r();
//# sourceMappingURL=commonHelpers2.js.map

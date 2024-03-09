import"./assets/dark-theme-ef2baa7d.js";import"./assets/vendor-59c8246b.js";const p="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-amazon",u="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-ibooks",g="/project-team-6/assets/symbol-defs-a993dfba.svg#icon-trash",i="list";function h(e){const s=r();s.push(e),localStorage.setItem(i,JSON.stringify(s))}function r(){return JSON.parse(localStorage.getItem(i))||[]}const n={SHOPPING_LIST_KEY:i,addToShoppingList:h,getAllBooks:r},a=document.querySelector(".shopping-list-default-div");function m(){const e=JSON.parse(localStorage.getItem(n.SHOPPING_LIST_KEY))||[],s=document.querySelector(".shopping-list-render");if(e.length===0)a.style.display="block";else{a.style.display="none";const o=e.map(t=>`
       <div class="card">
        <img src="${t.book_image}" alt="book cover" class="book-cover" >
        <div class="about">
          <h2 class="book-title">${t.title}</h2>
          <p class="book-category">${t.list_name}</p>
          <p class="book-description">${t.description}</p>
          <p class="book-author">${t.author}</p>
        </div>
           <div class="buy">
        <a href="${t.buy_links[0].url}" target="_blank">
          <svg class="amazon" width="16" height="16">
            <use href="${p}"></use>
          </svg>
        </a>
        <a href="${t.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${u}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${t._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${g}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");s.insertAdjacentHTML("beforeend",o)}document.querySelectorAll(".delete-btn").forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-book-id");S(t);const c=o.closest(".card");c&&c.remove(),d()})})}m();function S(e){const s=JSON.parse(localStorage.getItem(n.SHOPPING_LIST_KEY))||[];if(!s||s.length===0)return;const l=s.filter(o=>o._id!==e);console.log(l),toLocalStorage(n.SHOPPING_LIST_KEY,l)}function b(){return document.querySelector(".shopping-list-render").children.length===0}function d(){const e=document.querySelector(".support-ukraine");b()?(a.style.display="block",e.style.display="none"):(a.style.display="none",e.style.display="block")}d();
//# sourceMappingURL=commonHelpers2.js.map

import{S}from"./vendor-edf1012f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const h=document.getElementById("theme-toggle"),a=document.body;h.addEventListener("change",()=>{h.checked?(a.classList.add("dark"),a.classList.remove("light")):(a.classList.add("light"),a.classList.remove("dark"))});(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".header-link"),t=()=>{const n=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");const l=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};i.forEach(n=>n.addEventListener("click",t)),o.addEventListener("click",t),s.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const f=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SaveChildren.png",img2x:"../img/SaveChildren2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/projectHOPE.png",img2x:"./img/projectHOPE2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/United24.png",img2x:"./img/United24_2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/MedicalCorps.png",img2x:"./img/MedicalCorps2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/MedicalSans.png",img2x:"./img/MedicalSans2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/RAZOM.png",img2x:"./img/RAZOM2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/AgainstHunger.png",img2x:"./img/AgainstHunger2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/WorldVision.png",img2x:"./img/WorldVision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/SergiyPrytula.png",img2x:"./img/SergiyPrytula2x.png"}],k={direction:"vertical",navigation:{nextEl:"swiper-btn-next"},rewind:!0,allowTouchMove:!1,spaceBetween:20,slidesPerView:"auto",slidesPerGroup:6},d=new S(".swiper",k),r={nextBtn:document.querySelector(".swiper-button-next"),list:document.querySelector(".swiper-wrapper"),btn:document.querySelector(".support-btn")},v=f.map((e,o)=>`<div class ="support-item swiper-slide">
                <span class="support-number">
                    ${(o+1).toString().padStart(2,"0")}
                </span>
                <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
                <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.img2x} 2x" alt = "${e.title} logo"/>
                </a>
            </div>`).join("");r.list.innerHTML=v;y();addEventListener("resize",y);function L(){d.slideNext(),(d.isBeginning||d.isEnd)&&w()}function y(){const e=r.btn.classList.contains("hidden");f.length>d.params.slidesPerGroup?(e&&r.btn.classList.remove("hidden"),r.nextBtn.addEventListener("click",L)):e||r.btn.classList.add("hidden")}function w(){r.btn.classList.toggle("support-btn-up")}const c="list";function x(e){const o=b();o.push(e),localStorage.setItem(c,JSON.stringify(o))}function b(){return JSON.parse(localStorage.getItem(c))||[]}const u={addToShoppingList:x,getAllBooks:b};document.querySelector(".popup-book-image");document.querySelector(".popup-book-title");document.querySelector(".popup-book-author");document.querySelector(".popup-book-review");document.querySelector(".popup-shopping-links-icon.amazon");document.querySelector(".popup-shopping-links-icon.book");const p=document.querySelector("#add"),m=document.querySelector(".under-button-text");m.hidden=!0;p.addEventListener("click",B);function B(e){if(e.target.disabled)return;const o=e.target.attributes.id.value;p.textContent==="Add to shopping list"?M(o):q(o)}function M(e){let o=u.getAllBooks();o.push(e),u.addToShoppingList(o),p.textContent="Remove from the shopping list",m.hidden=!1,updateShoppingList()}function q(e){let o=u.getAllBooks();o.splice(o.indexOf(e),1),u.addToShoppingList(o),p.textContent="Add to shopping list",m.hidden=!0,updateShoppingList()}const E="/project-team-6/assets/symbol-defs-f000629d.svg#icon-amazon",A="/project-team-6/assets/symbol-defs-f000629d.svg#icon-ibooks",O="/project-team-6/assets/symbol-defs-f000629d.svg#icon-trash",g=document.querySelector(".shopping-list-default-div");function $(){const e=JSON.parse(localStorage.getItem(c))||[],o=document.querySelector(".shopping-list-render");if(e.length===0)g.style.display="block";else{const i=e.map(t=>`
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
            <use href="${E}"></use>
          </svg>
        </a>
        <a href="${t.buy_links[1].url}" target="_blank">
          <svg class="ibook" width="16" height="16">
            <use href="${A}"></use>
          </svg>
        </a>
      </div>
      <button data-book-id="${t._id}" class="delete-btn">
        <div class="icon-trash">
          <svg class="trash" width="16" height="16">
            <use href="${O}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");o.insertAdjacentHTML("beforeend",i)}document.querySelectorAll(".delete-btn").forEach(i=>{i.addEventListener("click",()=>{const t=i.getAttribute("data-book-id");P(t);const n=i.closest(".card");n&&n.remove(),C()})})}$();function P(e){const o=getLocalStorageItem(c);if(!o||o.length===0)return;const s=o.filter(i=>i._id!==e);toLocalStorage(c,s)}function j(){return document.querySelector(".shopping-list-render").children.length===0}function C(){const e=document.querySelector(".support-ukraine");j()?(g.style.display="block",e.style.display="none"):(g.style.display="none",e.style.display="block")}
//# sourceMappingURL=shopping-list-8b211d44.js.map

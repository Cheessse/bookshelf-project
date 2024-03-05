import{S}from"./vendor-edf1012f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".header-menu-icon"),n=()=>{const t=e.classList.contains("is-open");e.classList.toggle("is-open"),o.setAttribute("aria-expanded",!t),t?s.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-burger"):s.querySelector("use").setAttribute("href","./img/symbol-defs.svg#icon-x")};o.addEventListener("click",n)})();const m=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SaveChildren.png",img2x:"../img/SaveChildren2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/projectHOPE.png",img2x:"./img/projectHOPE2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/United24.png",img2x:"./img/United24_2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/MedicalCorps.png",img2x:"./img/MedicalCorps2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/MedicalSans.png",img2x:"./img/MedicalSans2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/RAZOM.png",img2x:"./img/RAZOM2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/AgainstHunger.png",img2x:"./img/AgainstHunger2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/WorldVision.png",img2x:"./img/WorldVision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/SergiyPrytula.png",img2x:"./img/SergiyPrytula2x.png"}],b={direction:"vertical",navigation:{nextEl:".swiper-btn-next"},rewind:!0,allowTouchMove:!1,spaceBetween:20,slidesPerView:"auto",slidesPerGroup:6},a=new S(".swiper",b),r={nextBtn:document.querySelector(".swiper-btn-next"),list:document.querySelector(".swiper-wrapper"),btn:document.querySelector(".support-btn")},v=m.map((e,o)=>`<div class ="support-item swiper-slide">
                <span class="support-number">
                    ${(o+1).toString().padStart(2,"0")}
                </span>
                <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
                <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.img2x} 2x" alt = "${e.title} logo"/>
                </a>
            </div>`).join("");r.list.innerHTML=v;h();addEventListener("resize",h);function k(){a.slideNext(),(a.isBeginning||a.isEnd)&&w()}function h(){const e=r.btn.classList.contains("hidden");m.length>a.params.slidesPerGroup?(e&&r.btn.classList.remove("hidden"),r.nextBtn.addEventListener("click",k)):e||r.btn.classList.add("hidden")}function w(){r.btn.classList.toggle("support-btn-up")}const l="list";function L(e){const o=f();o.push(e),localStorage.setItem(l,JSON.stringify(o))}function f(){return JSON.parse(localStorage.getItem(l))||[]}const c={addToShoppingList:L,getAllBooks:f};document.querySelector(".popup-book-image");document.querySelector(".popup-book-title");document.querySelector(".popup-book-author");document.querySelector(".popup-book-review");document.querySelector(".popup-shopping-links-icon.amazon");document.querySelector(".popup-shopping-links-icon.book");const d=document.querySelector("#add"),g=document.querySelector(".under-button-text");g.hidden=!0;d.addEventListener("click",x);function x(e){if(e.target.disabled)return;const o=e.target.attributes.id.value;d.textContent==="Add to shopping list"?B(o):q(o)}function B(e){let o=c.getAllBooks();o.push(e),c.addToShoppingList(o),d.textContent="Remove from the shopping list",g.hidden=!1,y()}function q(e){let o=c.getAllBooks();o.splice(o.indexOf(e),1),c.addToShoppingList(o),d.textContent="Add to shopping list",g.hidden=!0,y()}function y(){try{const e=c.getAllBooks();localStorage.setItem("idBooks",JSON.stringify(e))}catch(e){console.error("Error updating shopping list:",e.message)}}const O="/project-team-6/assets/symbol-defs-f000629d.svg#icon-amazon",A="/project-team-6/assets/symbol-defs-f000629d.svg#icon-ibooks",M="/project-team-6/assets/symbol-defs-f000629d.svg#icon-trash",p=document.querySelector(".shopping-list-default-div");function $(){const e=JSON.parse(localStorage.getItem(l))||[],o=document.querySelector(".shopping-list-render");if(e.length===0)p.style.display="block";else{const n=e.map(t=>`
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
            <use href="${O}"></use>
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
            <use href="${M}"></use>
          </svg>
        </div>
      </button>
       </div>
  `).join("");o.insertAdjacentHTML("beforeend",n)}document.querySelectorAll(".delete-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-book-id");P(t);const i=n.closest(".card");i&&i.remove(),C()})})}$();function P(e){const o=getLocalStorageItem(l);if(!o||o.length===0)return;const s=o.filter(n=>n._id!==e);toLocalStorage(l,s)}function E(){return document.querySelector(".shopping-list-render").children.length===0}function C(){const e=document.querySelector(".support-ukraine");E()?(p.style.display="block",e.style.display="none"):(p.style.display="none",e.style.display="block")}
//# sourceMappingURL=shopping-list-f0839ac3.js.map

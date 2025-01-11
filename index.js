import{i as n,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();document.querySelector(".search-list");function m(t){const o=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:1});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>{throw console.error("Error fetching images:",s),s})}function p(t){return t.map(o=>{const{largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:d,downloads:f}=o;return`
    <div class="card">
  <a class='card_link' href='${s}'><img src="${a}" alt="${e}" loading="lazy" /></a>
  <div class="info">
    <p class="info_item">
      <b>Likes</b>
      <b>${r}</b>
    </p>
    <p class="info_item">
      <b>Views</b>
      <b>${i}</b>
    </p>
    <p class="info_item">
      <b>Comments</b>
      <b>${d}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${f}</b>
    </p>
  </div>
</div>`}).join("")}const c=document.querySelector(".search-list"),g=document.querySelector(".btn"),y=document.querySelector(".search-input");let u="",l;function b(){const t=document.querySelector(".loader");t.style.display="block"}function L(){const t=document.querySelector(".loader");t.style.display="none"}y.addEventListener("input",t=>{u=t.currentTarget.value});g.addEventListener("click",t=>{if(t.preventDefault(),!u){n.error({title:"Error",message:"Please fill out search field"});return}c.innerHTML="",b(),m(u).then(o=>{if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";return}const s=p(o.hits);c.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new h(".search-list a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(o=>{n.error({title:"Error",message:"Failed to fetch images"}),console.error("Error fetching images:",o)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map

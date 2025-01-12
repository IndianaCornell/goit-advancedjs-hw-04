import{a as S,i as d,S as q}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function M(t,o,s){const a=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,limit:s,page:o,per_page:s});return(await S.get(`https://pixabay.com/api/?${a}`)).data}function P(t){return t.map(o=>{const{largeImageURL:s,webformatURL:a,tags:e,likes:r,views:n,comments:w,downloads:v}=o;return`
    <div class="card">
  <a class='card_link' href='${s}'><img src="${a}" alt="${e}" loading="lazy" /></a>
  <div class="info">
    <p class="info_item">
      <b>Likes</b>
      <b>${r}</b>
    </p>
    <p class="info_item">
      <b>Views</b>
      <b>${n}</b>
    </p>
    <p class="info_item">
      <b>Comments</b>
      <b>${w}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${v}</b>
    </p>
  </div>
</div>`}).join("")}const c=document.querySelector(".search-list"),$=document.querySelector(".btn"),m=document.querySelector(".search-input"),y=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let p="",l,h=15,i=1;m.addEventListener("input",t=>{p=m.value.trim()});$.addEventListener("click",async t=>{if(t.preventDefault(),c.innerHTML="",i=1,b(),await g(),!p){u(),d.error({title:"Error",message:"Please fill out search field"});return}L()});f.addEventListener("click",async t=>{t.preventDefault();const s=document.querySelector(".card").getBoundingClientRect().height*2+parseFloat(getComputedStyle(c).rowGap)-200;b(),await g(),_(s),L()});async function g(){const t=await M(p,i,h),o=Math.ceil(t.total/h),s=P(t.hits);if(c.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new q(".search-list a",{captions:!0,captionsData:"alt",captionDelay:250}),B(),!t.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u(),c.innerHTML="";return}if(i>=o){u(),d.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results."});return}i+=1}function _(t){window.scrollBy({top:t,behavior:"smooth"})}function b(){y.style.display="block"}function L(){y.style.display="none"}function B(){f.style.display="block"}function u(){f.style.display="none"}
//# sourceMappingURL=index.js.map

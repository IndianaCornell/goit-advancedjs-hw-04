import{a as v,i as l,S}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function M(e,o,s){const a=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,limit:s,page:o,per_page:s});return(await v.get(`https://pixabay.com/api/?${a}`)).data}function q(e){return e.map(o=>{const{largeImageURL:s,webformatURL:a,tags:t,likes:r,views:n,comments:L,downloads:w}=o;return`
    <div class="card">
  <a class='card_link' href='${s}'><img src="${a}" alt="${t}" loading="lazy" /></a>
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
      <b>${L}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${w}</b>
    </p>
  </div>
</div>`}).join("")}const c=document.querySelector(".search-list"),P=document.querySelector(".btn"),h=document.querySelector(".search-input"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let m="",f,g=15,d=1;h.addEventListener("input",e=>{m=h.value.trim()});P.addEventListener("click",async e=>{if(e.preventDefault(),i(),c.innerHTML="",d=1,!m){u(),l.error({title:"Error",message:"Please fill out search field"});return}await b()});p.addEventListener("click",async e=>{e.preventDefault();const s=document.querySelector(".card").getBoundingClientRect().height*2+parseFloat(getComputedStyle(c).rowGap)+120;await b(),$(s)});async function b(){try{i(),E();const e=await M(m,d,g);if(!e.hits.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i(),c.innerHTML="",u();return}const o=Math.ceil(e.total/g),s=q(e.hits);c.insertAdjacentHTML("beforeend",s),f?f.refresh():f=new S(".search-list a",{captions:!0,captionsData:"alt",captionDelay:250}),d>=o?(i(),l.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results."})):H(),d+=1,u()}catch(e){l.error({title:"Error",message:`An error occurred while loading images: ${e.message}`}),console.error("Error in loadImages:",e),i(),c.innerHTML="",u()}}function $(e){window.scrollBy({top:e,behavior:"smooth"})}function E(){y.style.display="block"}function u(){y.style.display="none"}function H(){p.style.display="block"}function i(){p.style.display="none"}
//# sourceMappingURL=index.js.map

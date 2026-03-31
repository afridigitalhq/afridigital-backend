(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{document.querySelectorAll(`.marquee`).forEach(e=>{e.innerHTML=`<span>`+e.innerHTML+`</span>`;let t=e.querySelector(`span`),n=0;function r(){n-=2,Math.abs(n)>=t.offsetWidth&&(n=e.offsetWidth),t.style.transform=`translateX(`+n+`px)`,requestAnimationFrame(r)}r()})}),document.getElementById(app).innerHTML=`
<header style="background:#0a74da; color:white; padding:3rem; text-align:center;"><h1>Welcome to AfriDigital Ultra</h1></header>
<section class="marquee" style="background:#5aa0f2; color:white; padding:1rem;"><span>🚀 New Features | 💻 DevOps Tips | 🔔 Server Alerts</span></section>
<section style="text-align:center; margin:2rem;"><button>Login</button> <button>Register</button></section>
<section style="text-align:center; padding:2rem;"><h2>Our Services</h2>
<div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
<div style="background:#f0f0f0; padding:1rem; width:200px;">Service 1</div>
<div style="background:#f0f0f0; padding:1rem; width:200px;">Service 2</div>
<div style="background:#f0f0f0; padding:1rem; width:200px;">Service 3</div>
</div></section>
<footer style="background:#0a74da; color:white; text-align:center; padding:1rem;">© 2026 AfriDigital Ultra</footer>
<div id="chat-widget">💬</div>
`;
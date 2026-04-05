(()=>{var c=document.getElementById("app"),s=["hero","marquee","auth","services","footer","chat-widget"];if(!window.__APP_LOADED__){window.__APP_LOADED__=!0;async function o(){try{let e=await Promise.all(s.map(t=>fetch(`/sections/${t}.html`).then(n=>n.text())));c.innerHTML=e.join(`
`),console.log("\u{1F525} Sections loaded")}catch(e){console.error("\u274C Error loading sections:",e)}}o()}})();
//# sourceMappingURL=main.js.map

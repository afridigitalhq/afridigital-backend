(()=>{var n=document.getElementById("app"),c=["hero","marquee","auth","services","footer","chat-widget"];async function s(){try{let e=await Promise.all(c.map(t=>fetch(`/sections/${t}.html`).then(o=>o.text())));n.innerHTML=e.join(`
`),console.log("\u{1F525} Sections loaded")}catch(e){console.error("\u274C Error loading sections:",e)}}s();})();

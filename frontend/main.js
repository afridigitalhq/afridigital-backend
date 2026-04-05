const app = document.getElementById("app");
const sections = ["hero","marquee","auth","services","footer","chat-widget"];

if (!window.__APP_LOADED__) {
  window.__APP_LOADED__ = true;

  async function loadSections() {
    try {
      const htmlParts = await Promise.all(
        sections.map(section =>
          fetch(`/sections/${section}.html`).then(res => res.text())
        )
      );
      app.innerHTML = htmlParts.join("\n");
      console.log("🔥 Sections loaded");
    } catch(e) {
      console.error("❌ Error loading sections:", e);
    }
  }

  loadSections();
}

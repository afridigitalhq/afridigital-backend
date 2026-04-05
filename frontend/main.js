const app = document.getElementById("app");

const sections = [
  "hero",
  "marquee",
  "auth",
  "services",
  "footer",
  "chat-widget"
];

// 🔒 Absolute single execution guard
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

    } catch (err) {
      console.error("Error loading sections:", err);
    }
  }

  loadSections();
}

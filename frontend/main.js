const app = document.getElementById("app");

const sections = [
  "hero",
  "marquee",
  "auth",
  "services",
  "footer",
  "chat-widget"
];

async function loadSections() {
  app.innerHTML = "";

  for (const section of sections) {
    try {
      const res = await fetch(`./sections/${section}.html`);
      const html = await res.text();
      app.innerHTML += html;
    } catch (err) {
      console.error("Failed to load:", section);
    }
  }
}

loadSections();

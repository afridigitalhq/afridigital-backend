const app = document.getElementById("app");

const sections = [
  "hero",
  "marquee",
  "auth",
  "services",
  "footer",
  "chat-widget"
];

// Prevent multiple execution
let loaded = false;

async function loadSections() {
  if (loaded) return;
  loaded = true;

  try {
    const htmlParts = await Promise.all(
      sections.map(section =>
        fetch(`./sections/${section}.html`).then(res => res.text())
      )
    );

    // 🔥 Replace content ONCE (not append in loop)
    app.innerHTML = htmlParts.join("\n");

  } catch (err) {
    console.error("Error loading sections:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadSections);

const sections = ["hero","marquee","auth","services","footer","chat-widget"];
sections.forEach(async (id) => {
  const html = await fetch(`/sections/${id}.html`).then(r => r.text());
  document.getElementById(id).innerHTML = html;
  console.log(`${id} section loaded`);
});
document.addEventListener("click", (e) => {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;
  if (e.target.id === "chat-toggle") chatBox.classList.toggle("hidden");
  if (e.target.id === "chat-send") {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
    if (input.value.trim() === "") return;
    const msg = document.createElement("div"); msg.textContent = `You: ${input.value}`;
    messages.appendChild(msg); messages.scrollTop = messages.scrollHeight;
    input.value = "";
    const reply = document.createElement("div"); reply.textContent = "Support: Thanks! We will get back to you.";
    setTimeout(() => { messages.appendChild(reply); messages.scrollTop = messages.scrollHeight; }, 800);
  }
});

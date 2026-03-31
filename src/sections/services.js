export const services = () => {
  const section = document.createElement('section');
  section.style.textAlign = 'center';
  section.style.padding = '2rem';
  section.innerHTML = `
    <h2>Our Services</h2>
    <div style='display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;'>
      <div style='background:#f0f0f0; padding:1rem; width:200px;'>Service 1</div>
      <div style='background:#f0f0f0; padding:1rem; width:200px;'>Service 2</div>
      <div style='background:#f0f0f0; padding:1rem; width:200px;'>Service 3</div>
    </div>`;
  return section;
};

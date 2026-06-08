/* LittleGurukul — coloring activity engine.
   Pick an object + a colour, then tap any region to fill it. No scoring — just create. */
window.Gurukul = window.Gurukul || {};

Gurukul.coloring = {
  PALETTE: [
    "#e2342f", "#f4a300", "#ffd83d", "#4caf50", "#2bb3a3", "#3f7fd6",
    "#8e5bd1", "#e0729a", "#8a5a2b", "#d4a23a", "#222222", "#ffffff",
  ],

  /** config = { title, subtitle, objects: [{id,name,icon,svg}], palette? } */
  mountGame(root, config) {
    const objects = config.objects;
    const palette = config.palette || Gurukul.coloring.PALETTE;
    let current = objects[0];
    let color = palette[0];

    root.innerHTML = `
      <div class="view-title">
        <h2>${config.title}</h2>
        <p>${config.subtitle || ""}</p>
      </div>
      <div class="color-wrap">
        <div class="color-objects" id="objs">
          ${objects.map((o, i) => `<button data-id="${o.id}" class="${i === 0 ? "on" : ""}" title="${o.name}">${o.icon}</button>`).join("")}
        </div>
        <div class="color-canvas" id="canvas"></div>
        <div class="palette" id="palette">
          ${palette.map((c, i) => `<span class="swatch ${i === 0 ? "on" : ""}" data-c="${c}" style="background:${c}"></span>`).join("")}
        </div>
        <div class="controls">
          <button class="btn primary" id="reset">&#x1F504; Start over</button>
          <span class="color-hint">Pick a colour, then tap a part to fill it.</span>
        </div>
      </div>`;

    const canvas = root.querySelector("#canvas");
    const objsEl = root.querySelector("#objs");
    const paletteEl = root.querySelector("#palette");

    function renderCanvas() { canvas.innerHTML = current.svg; }

    canvas.addEventListener("click", e => {
      const r = e.target.closest(".region");
      if (r) r.setAttribute("fill", color);
    });

    objsEl.querySelectorAll("button").forEach(b => b.onclick = () => {
      objsEl.querySelectorAll("button").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      current = objects.find(o => o.id === b.dataset.id);
      renderCanvas();
    });

    paletteEl.querySelectorAll(".swatch").forEach(s => s.onclick = () => {
      paletteEl.querySelectorAll(".swatch").forEach(x => x.classList.remove("on"));
      s.classList.add("on");
      color = s.dataset.c;
    });

    root.querySelector("#reset").onclick = renderCanvas;

    renderCanvas();
  },
};

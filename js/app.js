/* LittleGurukul — router + home menu. Loaded last (after all games register). */
(function () {
  const backBtn = document.getElementById("backBtn");

  function renderHome() {
    const card = g => `
      <button data-go="${g.id}">
        <div class="ico">${g.icon}</div>
        <h3>${g.title}</h3>
        <p>${g.blurb}</p>
      </button>`;
    const section = (title, items) => items.length ? `
      <h3 class="section-title">${title}</h3>
      <div class="menu">${items.map(card).join("")}</div>` : "";

    const games = Gurukul.registry.filter(g => (g.kind || "game") === "game");
    const activities = Gurukul.registry.filter(g => g.kind === "activity");

    Gurukul.util.setScreen(`
      <div class="hero">
        <div class="om-big">&#x950;</div>
        <h2>Learn Hindu Mythology, Playfully</h2>
        <p>Play games and create — deities, their mounts, weapons, symbols, and more.</p>
        <div class="divider"></div>
      </div>
      ${section("\u{1F3AE} Games", games)}
      ${section("\u{1F3A8} Activities", activities)}`);

    document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  }

  function go(id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id === "home" || !id) {
      backBtn.classList.remove("show");
      renderHome();
      return;
    }
    const game = Gurukul.registry.find(g => g.id === id);
    if (!game) { renderHome(); return; }
    backBtn.classList.add("show");
    const root = Gurukul.util.setScreen("");
    game.mount(root);
  }

  backBtn.onclick = () => go("home");
  Gurukul.go = go; // exposed for convenience
  renderHome();
})();

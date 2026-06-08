/* Vidya Play — router + home menu. Loaded last (after all games register). */
(function () {
  const backBtn = document.getElementById("backBtn");

  function renderHome() {
    const cards = Vidya.registry.map(g => `
      <button data-go="${g.id}">
        <div class="ico">${g.icon}</div>
        <h3>${g.title}</h3>
        <p>${g.blurb}</p>
      </button>`).join("");

    Vidya.util.setScreen(`
      <div class="hero">
        <div class="om-big">&#x950;</div>
        <h2>Learn Hindu Mythology, Playfully</h2>
        <p>Flip, match, and remember the deities, their mounts, weapons, and sacred symbols.</p>
        <div class="divider"></div>
      </div>
      <div class="menu">${cards}</div>`);

    document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  }

  function go(id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id === "home" || !id) {
      backBtn.classList.remove("show");
      renderHome();
      return;
    }
    const game = Vidya.registry.find(g => g.id === id);
    if (!game) { renderHome(); return; }
    backBtn.classList.add("show");
    const root = Vidya.util.setScreen("");
    game.mount(root);
  }

  backBtn.onclick = () => go("home");
  Vidya.go = go; // exposed for convenience
  renderHome();
})();

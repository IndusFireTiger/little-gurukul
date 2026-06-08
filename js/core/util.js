/* LittleGurukul — shared namespace + helpers.
   Loaded first. Classic script (works over file://). */
window.Gurukul = window.Gurukul || {};
Gurukul.registry = Gurukul.registry || []; // games register themselves here, in load order

Gurukul.util = {
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Register a game module into the home menu. */
  register(game) { Gurukul.registry.push(game); },

  /** Build a tile face from an emoji or a named inline SVG. */
  face(item) {
    if (item.svg) return Gurukul.data.svg[item.svg];
    return `<span class="tile-emoji">${item.glyph || item.emoji}</span>`;
  },

  /* Best-score persistence (per game + difficulty) */
  bestKey(game, pairs) { return `littlegurukul.best.${game}.${pairs}`; },
  loadBest(game, pairs) { return localStorage.getItem(Gurukul.util.bestKey(game, pairs)); },
  saveBest(game, pairs, moves) {
    const cur = Gurukul.util.loadBest(game, pairs);
    if (!cur || moves < +cur) { localStorage.setItem(Gurukul.util.bestKey(game, pairs), moves); return true; }
    return false;
  },

  /** Replace the screen with fresh HTML and return the root element. */
  setScreen(html) {
    const screen = document.getElementById("screen");
    screen.innerHTML = html;
    return screen;
  },
};

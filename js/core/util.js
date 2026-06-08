/* Vidya Play — shared namespace + helpers.
   Loaded first. Classic script (works over file://). */
window.Vidya = window.Vidya || {};
Vidya.registry = Vidya.registry || []; // games register themselves here, in load order

Vidya.util = {
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Register a game module into the home menu. */
  register(game) { Vidya.registry.push(game); },

  /** Build a tile face from an emoji or a named inline SVG. */
  face(item) {
    if (item.svg) return Vidya.data.svg[item.svg];
    return `<span class="tile-emoji">${item.glyph || item.emoji}</span>`;
  },

  /* Best-score persistence (per game + difficulty) */
  bestKey(game, pairs) { return `vidya.best.${game}.${pairs}`; },
  loadBest(game, pairs) { return localStorage.getItem(Vidya.util.bestKey(game, pairs)); },
  saveBest(game, pairs, moves) {
    const cur = Vidya.util.loadBest(game, pairs);
    if (!cur || moves < +cur) { localStorage.setItem(Vidya.util.bestKey(game, pairs), moves); return true; }
    return false;
  },

  /** Replace the screen with fresh HTML and return the root element. */
  setScreen(html) {
    const screen = document.getElementById("screen");
    screen.innerHTML = html;
    return screen;
  },
};

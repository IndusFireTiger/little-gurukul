/* Game: Sacred Symbols Memory (memory — identical pairs) */
Vidya.util.register({
  id: "symbols-memory",
  icon: "\u{1F549}️",
  title: "Sacred Symbols Memory",
  blurb: "Flip and match sacred objects — trishula, shankha, gada, swastika & more.",
  mount(root) {
    Vidya.memory.mountGame(root, {
      gameKey: "symbols",
      title: "Sacred Symbols Memory",
      subtitle: "Find matching pairs of sacred objects — and learn their names.",
      winTitle: "🎉 Wonderful!",
      makeTiles(pairs) {
        const chosen = Vidya.util.shuffle(Vidya.data.symbols).slice(0, pairs);
        const tiles = [];
        chosen.forEach(s => {
          const face = Vidya.util.face(s);
          tiles.push({ key: s.name, face, label: s.name, tag: "" });
          tiles.push({ key: s.name, face, label: s.name, tag: "" });
        });
        return tiles;
      },
    });
  },
});

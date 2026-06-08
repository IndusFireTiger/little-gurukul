/* Game: Sacred Symbols Memory (memory — identical pairs) */
Gurukul.util.register({
  id: "symbols-memory",
  icon: "\u{1F549}️",
  title: "Sacred Symbols Memory",
  blurb: "Flip and match sacred objects — trishula, shankha, gada, swastika & more.",
  mount(root) {
    Gurukul.memory.mountGame(root, {
      gameKey: "symbols",
      title: "Sacred Symbols Memory",
      subtitle: "Find matching pairs of sacred objects — and learn their names.",
      winTitle: "🎉 Wonderful!",
      makeTiles(pairs) {
        const chosen = Gurukul.util.shuffle(Gurukul.data.symbols).slice(0, pairs);
        const tiles = [];
        chosen.forEach(s => {
          const face = Gurukul.util.face(s);
          tiles.push({ key: s.name, face, label: s.name, tag: "" });
          tiles.push({ key: s.name, face, label: s.name, tag: "" });
        });
        return tiles;
      },
    });
  },
});

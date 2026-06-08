/* Game: Prasad & Offerings (memory — deity <-> favoured offering) */
Vidya.util.register({
  id: "prasad-match",
  icon: "\u{1F361}",
  title: "Prasad & Offerings",
  blurb: "Memory game: match each deity with the offering they love most.",
  mount(root) {
    Vidya.memory.mountGame(root, {
      gameKey: "prasad",
      title: "Prasad & Offerings",
      subtitle: "Pair each deity with their favoured offering.",
      winTitle: "🎉 Bhog ready!",
      makeTiles(pairs) {
        const chosen = Vidya.util.shuffle(Vidya.data.offerings).slice(0, pairs);
        const tiles = [];
        chosen.forEach(o => {
          tiles.push({ key: o.deity, face: `<span class="tile-emoji">${o.deityEmoji}</span>`, label: o.deity, tag: "Deity" });
          tiles.push({ key: o.deity, face: `<span class="tile-emoji">${o.offeringEmoji}</span>`, label: o.offering, tag: "Offering" });
        });
        return tiles;
      },
    });
  },
});

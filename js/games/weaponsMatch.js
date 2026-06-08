/* Game: Whose Weapon? (memory — weapon <-> owner) */
Gurukul.util.register({
  id: "weapons-match",
  icon: "\u{1F531}",
  title: "Whose Weapon?",
  blurb: "Memory game: match each divine weapon (ayudha) to the god who wields it.",
  mount(root) {
    Gurukul.memory.mountGame(root, {
      gameKey: "weapons",
      title: "Whose Weapon?",
      subtitle: "Pair each sacred weapon (ayudha) with its divine owner.",
      winTitle: "🎉 Jai ho!",
      makeTiles(pairs) {
        const chosen = Gurukul.util.shuffle(Gurukul.data.weapons).slice(0, pairs);
        const tiles = [];
        chosen.forEach(w => {
          const wface = w.svg ? Gurukul.data.svg[w.svg] : `<span class="tile-emoji">${w.emoji}</span>`;
          tiles.push({ key: w.owner, face: wface, label: w.weapon, tag: "Weapon" });
          tiles.push({ key: w.owner, face: `<span class="tile-emoji">\u{1F549}️</span>`, label: w.owner, tag: "Deity" });
        });
        return tiles;
      },
    });
  },
});

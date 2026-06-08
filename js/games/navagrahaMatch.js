/* Game: Navagraha Match (memory — graha <-> weekday) */
Gurukul.util.register({
  id: "navagraha-match",
  icon: "\u{1FA90}",
  title: "Navagraha Match",
  blurb: "Memory game: pair each of the nine planets (graha) with its weekday.",
  mount(root) {
    Gurukul.memory.mountGame(root, {
      gameKey: "navagraha",
      title: "Navagraha Match",
      subtitle: "Pair each graha (planet) with the day of the week it rules.",
      winTitle: "🎉 Well aligned!",
      difficulties: [
        { label: "Easy", pairs: 4 }, { label: "Medium", pairs: 5 }, { label: "Hard", pairs: 7 },
      ],
      makeTiles(pairs) {
        const chosen = Gurukul.util.shuffle(Gurukul.data.navagraha).slice(0, pairs);
        const tiles = [];
        chosen.forEach(g => {
          tiles.push({ key: g.graha, face: `<span class="tile-emoji">${g.emoji}</span>`, label: g.graha, tag: "Graha" });
          tiles.push({ key: g.graha, face: `<span class="tile-emoji">\u{1F4C5}</span>`, label: g.day, tag: "Weekday" });
        });
        return tiles;
      },
    });
  },
});

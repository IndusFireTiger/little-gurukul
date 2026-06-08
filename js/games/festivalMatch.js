/* Game: Festival Match (memory — festival <-> what it celebrates) */
Vidya.util.register({
  id: "festival-match",
  icon: "\u{1FA94}",
  title: "Festival Match",
  blurb: "Memory game: pair each festival with what it celebrates.",
  mount(root) {
    Vidya.memory.mountGame(root, {
      gameKey: "festival",
      title: "Festival Match",
      subtitle: "Flip two tiles to pair a festival with its meaning.",
      winTitle: "🎉 Shubh!",
      makeTiles(pairs) {
        const chosen = Vidya.util.shuffle(Vidya.data.festivals).slice(0, pairs);
        const tiles = [];
        chosen.forEach(f => {
          tiles.push({ key: f.name, face: `<span class="tile-emoji">${f.emoji}</span>`, label: f.name, tag: "Festival" });
          tiles.push({ key: f.name, face: `<span class="tile-emoji">${f.themeEmoji}</span>`, label: f.theme, tag: "Celebrates" });
        });
        return tiles;
      },
    });
  },
});

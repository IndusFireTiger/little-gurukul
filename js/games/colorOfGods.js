/* Game: Color of the Gods (memory — iconography clue <-> deity) */
Gurukul.util.register({
  id: "color-of-gods",
  icon: "\u{1F50E}",
  title: "Color of the Gods",
  blurb: "Memory game: match an iconography clue to the deity it describes.",
  mount(root) {
    Gurukul.memory.mountGame(root, {
      gameKey: "iconography",
      title: "Color of the Gods",
      subtitle: "Pair each visual clue with the right deity.",
      winTitle: "🎉 Darshan!",
      makeTiles(pairs) {
        const chosen = Gurukul.util.shuffle(Gurukul.data.iconography).slice(0, pairs);
        const tiles = [];
        chosen.forEach(c => {
          tiles.push({ key: c.deity, face: `<span class="tile-emoji">\u{1F50E}</span>`, label: c.clue, tag: "Clue" });
          tiles.push({ key: c.deity, face: `<span class="tile-emoji">${c.deityEmoji}</span>`, label: c.deity, tag: "Deity" });
        });
        return tiles;
      },
    });
  },
});

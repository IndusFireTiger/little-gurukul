/* Game: Match the Vahana (connect — link each deity to their mount) */
Gurukul.util.register({
  id: "vahana-match",
  icon: "\u{1F9E0}",
  title: "Match the Vahana",
  blurb: "Draw a line from each deity to the animal they ride.",
  mount(root) {
    Gurukul.connect.mountGame(root, {
      gameKey: "vahana",
      title: "Match the Vahana",
      subtitle: "Tap a deity, then tap their vahana (mount), to draw a line. Match all the pairs!",
      winTitle: "🎉 Shabash!",
      makePairs(count) {
        // unique vahanas only (dedupe by emoji), then pick `count`
        const seen = new Set();
        const pool = Gurukul.data.deityVahana.filter(d => {
          if (seen.has(d.emoji)) return false; seen.add(d.emoji); return true;
        });
        const chosen = Gurukul.util.shuffle(pool).slice(0, count);
        return chosen.map(c => ({
          key: c.deity,
          left:  { emoji: c.deityEmoji, label: c.deity, tag: "Deity" },
          right: { emoji: c.emoji, label: c.vahana, tag: c.animal },
        }));
      },
    });
  },
});

/* Game: What Do They Hold? (connect — link each deity to their signature object) */
Gurukul.util.register({
  id: "held-by-gods",
  icon: "\u{1FA88}",
  title: "What Do They Hold?",
  blurb: "Draw a line from each deity to their signature object — flute → Krishna, veena → Saraswati …",
  mount(root) {
    Gurukul.connect.mountGame(root, {
      gameKey: "held",
      title: "What Do They Hold?",
      subtitle: "Tap a deity, then tap the object they hold, to draw a line. Match all the pairs!",
      winTitle: "🎉 Beautifully linked!",
      makePairs(count) {
        const chosen = Gurukul.util.shuffle(Gurukul.data.deityObjects).slice(0, count);
        return chosen.map(d => ({
          key: d.deity,
          left:  { emoji: "\u{1F549}\u{FE0F}", label: d.deity, tag: "Deity" },
          right: { emoji: d.svg ? Gurukul.data.svg[d.svg] : d.emoji, label: d.object, tag: "Holds" },
        }));
      },
    });
  },
});

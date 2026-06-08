/* Game: Deity & Vahana Flash Cards */
Gurukul.util.register({
  id: "deity-vahana-flash",
  icon: "\u{1F0CF}",
  title: "Deity & Vahana Flash Cards",
  blurb: "Front shows a deity — flip to reveal their vahana (divine mount) and its story.",
  mount(root) {
    Gurukul.flashcards.mountGame(root, {
      title: "Deity & Vahana Flash Cards",
      subtitle: "Click the card to flip. Use Next / Prev to move through the deck.",
      deck: Gurukul.data.deityVahana,
      front: c => ({ kicker: "Deity", emoji: c.deityEmoji, name: c.deity, hint: "tap to reveal the vahana" }),
      back:  c => ({ kicker: "Vahana (mount)", emoji: c.emoji, name: c.vahana, sub: c.animal, note: c.note }),
    });
  },
});

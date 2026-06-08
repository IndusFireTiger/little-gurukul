/* Game: Hold the Mudra (flash cards — mudra -> meaning) */
Gurukul.util.register({
  id: "mudras",
  icon: "\u{1F44C}",
  title: "Hold the Mudra",
  blurb: "Flash cards: see a hand gesture (mudra) and flip to learn its meaning.",
  mount(root) {
    Gurukul.flashcards.mountGame(root, {
      title: "Hold the Mudra",
      subtitle: "Click the card to flip and reveal what each mudra means.",
      deck: Gurukul.data.mudras,
      front: m => ({ kicker: "Mudra", emoji: m.emoji, name: m.name, hint: "tap to reveal its meaning" }),
      back:  m => ({ kicker: "Meaning", emoji: m.emoji, name: m.gloss, note: m.note }),
    });
  },
});

/* Game: Word of the Day (flash cards — Sanskrit term -> meaning) */
Vidya.util.register({
  id: "word-of-day",
  icon: "\u{1F4D6}",
  title: "Word of the Day",
  blurb: "Flash cards: learn key Sanskrit concepts — dharma, karma, ahimsa & more.",
  mount(root) {
    Vidya.flashcards.mountGame(root, {
      title: "Word of the Day",
      subtitle: "Click the card to flip and reveal the meaning.",
      deck: Vidya.data.words,
      front: w => ({ kicker: "Sanskrit", emoji: "\u{1F549}\u{FE0F}", name: w.term, hint: "tap to reveal the meaning" }),
      back:  w => ({ kicker: "Meaning", emoji: "\u{1F549}\u{FE0F}", name: w.gloss, note: w.note }),
    });
  },
});

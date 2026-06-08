/* Game: Perform the Pooja (drag & drop — offer the right items to a fixed deity) */
Gurukul.util.register({
  id: "perform-pooja",
  icon: "\u{1F6D5}",
  title: "Perform the Pooja",
  blurb: "Drag the correct offerings — flowers, leaves, sweets — onto the deity. Avoid the wrong ones!",
  mount(root) {
    Gurukul.dragdrop.mountGame(root, {
      gameKey: "pooja",
      title: "Perform the Pooja",
      subtitle: "The deity is fixed. Drag only the offerings that please them onto the altar.",
      winTitle: "🪔 Pooja sampurna!",
      targetVerb: "Offer to",
      rounds: Gurukul.data.poojaSets,
    });
  },
});

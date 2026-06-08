/* Activity: Color the Symbols (creative — no scoring) */
Gurukul.util.register({
  id: "coloring",
  kind: "activity",
  icon: "\u{1F3A8}",
  title: "Color the Symbols",
  blurb: "A coloring activity — fill in the flute, trishula, diya, lotus, Om, kalasha & rangoli.",
  mount(root) {
    Gurukul.coloring.mountGame(root, {
      title: "Color the Symbols",
      subtitle: "Pick a colour, then tap any part of the picture to fill it.",
      objects: Gurukul.data.colorables,
    });
  },
});

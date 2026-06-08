# LittleGurukul — MVP

A simple, self-contained web app for learning Hindu mythology through play.
**No build step, no dependencies — just open `index.html` in any browser.**

## Games included

**Flash cards**
1. **Deity & Vahana Flash Cards** — front shows a deity; flip to reveal their *vahana*
   (divine mount) with a one-line story.
2. **Hold the Mudra** — see a hand gesture (mudra); flip to learn its meaning.
3. **Word of the Day** — key Sanskrit concepts (dharma, karma, ahimsa, moksha …) + meanings.

**Memory / match**
4. **Match the Vahana** — pair each deity with the animal they ride.
5. **Sacred Symbols Memory** — match pairs of sacred objects (Om, Trishula, Shankha,
   Padma, Chakra, Diya, Kalasha, Japamala, Swastika, Gada) and learn their names.
6. **Whose Weapon?** — match each divine weapon (*ayudha*) to its owner
   (Sudarshana Chakra → Vishnu, Trishula → Shiva, Vajra → Indra, Gada → Hanuman …).
7. **Festival Match** — pair each festival with what it celebrates.
8. **Prasad & Offerings** — match each deity with their favoured offering.
9. **Navagraha Match** — pair each of the nine planets (graha) with its weekday.
10. **Color of the Gods** — match an iconography clue to the deity it describes.

**Connect the pairs** (two columns, always face-up; draw a line between them)
11. **What Do They Hold?** — link each deity to their signature object/instrument
    (flute → Krishna, veena → Saraswati, damaru → Shiva …). A correct link draws a
    green line; a wrong link flashes red so you can try again.

> Note: **Match the Vahana** also uses this connect-the-pairs mechanic.

**Drag & drop**
12. **Perform the Pooja** — the deity is **fixed** (not selectable). Drag the correct
    offerings (flowers, leaves, sweets) onto the altar; wrong ones bounce back with a
    teaching note (e.g. "Tulsi is not offered to Ganesha"). Complete the pooja, then
    advance to the next deity. Uses Pointer Events, so it works with mouse and touch.

## Activities (creative, no scoring)

- **Color the Symbols** — a digital coloring book: pick a colour, then tap any part of an
  object to fill it. Objects: flute, trishula, diya, lotus, Om, kalasha, rangoli. "Start
  over" clears the page. The home menu groups **🎮 Games** and **🎨 Activities** separately.

## Features
- Easy / Medium / Hard difficulty (4 / 6 / 8 pairs) on the memory games.
- Move counter and **best score per difficulty**, saved in the browser (localStorage).
- Gold-on-dark theme consistent with the rest of the project.
- Symbols/weapons use emoji where available; Swastika and Gada are drawn as inline SVG.

## Project structure (one file per game)

```
app/
├── index.html               # shell: loads CSS + scripts, holds the <main id="screen">
├── css/
│   └── styles.css           # all shared styles
└── js/
    ├── core/
    │   ├── util.js          # Gurukul namespace, registry, shuffle, best-score storage
    │   ├── data.js          # all content: deityVahana, weapons, symbols, inline SVG
    │   ├── memory.js        # reusable memory/match engine (Gurukul.memory.mountGame)
    │   └── flashcards.js    # reusable flash-card engine (Gurukul.flashcards.mountGame)
    ├── games/
    │   ├── deityVahanaFlash.js
    │   ├── vahanaMatch.js
    │   ├── symbolsMemory.js
    │   └── weaponsMatch.js   # ← Whose Weapon? (newest)
    └── app.js               # router + home menu (loads last)
```

### How it fits together
- Scripts are plain (non-module) `<script>` tags so the app works directly over `file://`
  (ES modules are blocked by browsers over `file://`).
- Each game file calls `Gurukul.util.register({ id, icon, title, blurb, mount(root) })`.
  The router (`app.js`) builds the home menu from this registry **in script-load order**
  and calls a game's `mount(root)` when selected.
- The two engines (`memory.js`, `flashcards.js`) hold all shared game logic; game files
  are tiny config wrappers.

## Add a new game
1. Create `js/games/myGame.js` that calls `Gurukul.util.register({...})` and, inside
   `mount(root)`, uses `Gurukul.memory.mountGame` / `Gurukul.flashcards.mountGame` (or custom DOM).
2. Add any content to `js/core/data.js`.
3. Add one `<script src="js/games/myGame.js"></script>` line in `index.html`
   **before** `js/app.js`. It appears on the home menu automatically.

## Run
Double-click `index.html`, or serve the folder with any static server.

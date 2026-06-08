/* Vidya Play — reusable flash-card engine.
   A game module calls Vidya.flashcards.mountGame(root, config). */
window.Vidya = window.Vidya || {};

Vidya.flashcards = {
  /**
   * config = {
   *   title, subtitle,
   *   deck: [item, ...],
   *   front(item) -> { kicker, emoji, name, hint },
   *   back(item)  -> { kicker, emoji, name, sub, note },
   * }
   */
  mountGame(root, config) {
    let deck = Vidya.util.shuffle(config.deck);
    let idx = 0;

    root.innerHTML = `
      <div class="view-title">
        <h2>${config.title}</h2>
        <p>${config.subtitle || ""}</p>
      </div>
      <div class="controls">
        <button class="btn" id="prev">&larr; Prev</button>
        <button class="btn primary" id="flip">Flip</button>
        <button class="btn" id="next">Next &rarr;</button>
        <button class="btn" id="shuffle">&#x1F500; Shuffle</button>
        <span class="stat"><b id="pos">1</b> / <span id="total">${deck.length}</span></span>
      </div>
      <div class="flash-stage">
        <div class="flashcard" id="flashcard">
          <div class="flash-inner">
            <div class="flash-face flash-front">
              <div class="flash-kicker" id="fKicker"></div>
              <div class="flash-emoji" id="fEmoji"></div>
              <div class="flash-name" id="fName"></div>
              <div class="flash-hint" id="fHint"></div>
            </div>
            <div class="flash-face flash-back">
              <div class="flash-kicker" id="bKicker"></div>
              <div class="flash-emoji" id="bEmoji"></div>
              <div class="flash-name" id="bName"></div>
              <div class="flash-sub" id="bSub"></div>
              <div class="flash-note" id="bNote"></div>
            </div>
          </div>
        </div>
      </div>`;

    const card = root.querySelector("#flashcard");
    const $ = id => root.querySelector(id);

    function render() {
      const item = deck[idx];
      const f = config.front(item);
      const b = config.back(item);
      card.classList.remove("flipped");
      $("#fKicker").textContent = f.kicker || "";
      $("#fEmoji").textContent = f.emoji || "";
      $("#fName").textContent = f.name || "";
      $("#fHint").textContent = f.hint || "";
      $("#bKicker").textContent = b.kicker || "";
      $("#bEmoji").textContent = b.emoji || "";
      $("#bName").textContent = b.name || "";
      $("#bSub").textContent = b.sub || "";
      $("#bNote").textContent = b.note || "";
      $("#pos").textContent = idx + 1;
    }

    card.onclick = () => card.classList.toggle("flipped");
    $("#flip").onclick = () => card.classList.toggle("flipped");
    $("#next").onclick = () => { idx = (idx + 1) % deck.length; render(); };
    $("#prev").onclick = () => { idx = (idx - 1 + deck.length) % deck.length; render(); };
    $("#shuffle").onclick = () => { deck = Vidya.util.shuffle(config.deck); idx = 0; render(); };

    render();
  },
};

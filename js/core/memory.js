/* Vidya Play — reusable memory/match engine.
   A game module calls Vidya.memory.mountGame(root, config). */
window.Vidya = window.Vidya || {};

Vidya.memory = {
  /**
   * config = {
   *   gameKey: string,            // for best-score storage
   *   title, subtitle,            // header text
   *   winTitle,                   // celebratory heading
   *   difficulties: [{label, pairs}],
   *   makeTiles(pairs) -> [{key, face(html), label, tag}]   // 2 tiles per pair share a key
   * }
   */
  mountGame(root, config) {
    const diffs = config.difficulties || [
      { label: "Easy", pairs: 4 }, { label: "Medium", pairs: 6 }, { label: "Hard", pairs: 8 },
    ];
    let pairs = diffs[0].pairs;

    root.innerHTML = `
      <div class="view-title">
        <h2>${config.title}</h2>
        <p>${config.subtitle || ""}</p>
      </div>
      <div class="controls">
        <span class="seg" id="diff">
          ${diffs.map((d, i) => `<button data-pairs="${d.pairs}" class="${i === 0 ? "on" : ""}">${d.label}</button>`).join("")}
        </span>
        <button class="btn primary" id="restart">&#x1F504; New game</button>
        <span class="stat">Moves: <b id="moves">0</b></span>
        <span class="stat">Pairs: <b id="pairs">0</b></span>
        <span class="stat">Best: <b id="best">—</b></span>
      </div>
      <div class="board" id="board"></div>
      <div class="win" id="win"><h3>${config.winTitle || "🎉 Well done!"}</h3><p id="winMsg"></p></div>`;

    const boardEl = root.querySelector("#board");
    const movesEl = root.querySelector("#moves");
    const pairsEl = root.querySelector("#pairs");
    const bestEl = root.querySelector("#best");
    const winEl = root.querySelector("#win");
    const winMsgEl = root.querySelector("#winMsg");

    function deal() {
      const tiles = config.makeTiles(pairs);
      Vidya.memory.createBoard({
        boardEl, tiles, pairs, gameKey: config.gameKey,
        movesEl, pairsEl, bestEl, winEl, winMsgEl,
      });
    }

    root.querySelector("#restart").onclick = deal;
    root.querySelectorAll("#diff button").forEach(b => b.onclick = () => {
      root.querySelectorAll("#diff button").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      pairs = +b.dataset.pairs;
      deal();
    });

    deal();
  },

  /** Render and wire a single board of tiles. */
  createBoard(opts) {
    const { boardEl, tiles, pairs, gameKey, movesEl, pairsEl, bestEl, winEl, winMsgEl } = opts;
    boardEl.style.gridTemplateColumns = "repeat(4, minmax(64px, 100px))";
    boardEl.innerHTML = "";
    winEl.classList.remove("show");
    let moves = 0, matched = 0, first = null, lock = false;
    movesEl.textContent = "0";
    pairsEl.textContent = `0/${pairs}`;
    bestEl.textContent = Vidya.util.loadBest(gameKey, pairs) || "—";

    Vidya.util.shuffle(tiles).forEach(t => {
      const el = document.createElement("div");
      el.className = "tile";
      el.innerHTML = `
        <div class="tile-inner">
          <div class="tile-face tile-front">&#x950;</div>
          <div class="tile-face tile-back">
            ${t.face}
            <div class="tile-label">${t.label}</div>
            ${t.tag ? `<div class="tile-tag">${t.tag}</div>` : ""}
          </div>
        </div>`;
      el.onclick = () => {
        if (lock || el.classList.contains("flip") || el.classList.contains("matched")) return;
        el.classList.add("flip");
        if (!first) { first = { el, key: t.key }; return; }
        moves++; movesEl.textContent = moves;
        if (first.key === t.key && first.el !== el) {
          first.el.classList.add("matched"); el.classList.add("matched");
          first = null; matched++; pairsEl.textContent = `${matched}/${pairs}`;
          if (matched === pairs) finish();
        } else {
          lock = true;
          const a = first.el; first = null;
          setTimeout(() => { a.classList.remove("flip"); el.classList.remove("flip"); lock = false; }, 850);
        }
      };
      boardEl.appendChild(el);
    });

    function finish() {
      const isBest = Vidya.util.saveBest(gameKey, pairs, moves);
      bestEl.textContent = Vidya.util.loadBest(gameKey, pairs);
      winMsgEl.textContent = `Solved in ${moves} moves.` + (isBest ? " New best! ⭐" : "");
      winEl.classList.add("show");
    }
  },
};

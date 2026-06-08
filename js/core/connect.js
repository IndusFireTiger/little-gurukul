/* LittleGurukul — reusable "connect the pairs" engine.
   Two columns are always face-up; the player links a left card to a right card.
   A correct link draws a permanent green line; a wrong link flashes red and clears. */
window.Gurukul = window.Gurukul || {};
const SVGNS = "http://www.w3.org/2000/svg";

Gurukul.connect = {
  /**
   * config = {
   *   gameKey, title, subtitle, winTitle,
   *   difficulties: [{label, pairs}],
   *   makePairs(count) -> [{ key, left:{emoji,label,tag}, right:{emoji,label,tag} }]
   * }
   */
  mountGame(root, config) {
    const diffs = config.difficulties || [
      { label: "Easy", pairs: 4 }, { label: "Medium", pairs: 6 }, { label: "Hard", pairs: 8 },
    ];
    let count = diffs[0].pairs;

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
        <span class="stat">Tries: <b id="tries">0</b></span>
        <span class="stat">Pairs: <b id="pairs">0</b></span>
        <span class="stat">Best: <b id="best">—</b></span>
      </div>
      <div class="connect-board" id="cboard">
        <svg class="connect-svg" id="csvg"></svg>
        <div class="connect-cols">
          <div class="connect-col left" id="colL"></div>
          <div class="connect-col right" id="colR"></div>
        </div>
      </div>
      <div class="win" id="win"><h3>${config.winTitle || "🎉 Well linked!"}</h3><p id="winMsg"></p></div>`;

    const board = root.querySelector("#cboard");
    const svg = root.querySelector("#csvg");
    const colL = root.querySelector("#colL");
    const colR = root.querySelector("#colR");
    const triesEl = root.querySelector("#tries");
    const pairsEl = root.querySelector("#pairs");
    const bestEl = root.querySelector("#best");
    const winEl = root.querySelector("#win");
    const winMsgEl = root.querySelector("#winMsg");

    let tries = 0, matched = 0, sel = { left: null, right: null }, matchedLines = [], lock = false;

    function cardHTML(side, item) {
      const emoji = `<span class="ce">${item.emoji}</span>`;
      const body = `<span class="cbody"><span class="ct">${item.label}</span>${item.tag ? `<span class="ctag">${item.tag}</span>` : ""}</span>`;
      return side === "right" ? body + emoji : emoji + body;
    }

    function makeCard(side, item) {
      const el = document.createElement("div");
      el.className = "connect-card";
      el.innerHTML = cardHTML(side, item);
      el._key = item.key;
      el.onclick = () => pick(side, el);
      return el;
    }

    function endpoints(L, R) {
      const b = board.getBoundingClientRect();
      const l = L.getBoundingClientRect(), r = R.getBoundingClientRect();
      return {
        x1: l.right - b.left, y1: l.top + l.height / 2 - b.top,
        x2: r.left - b.left,  y2: r.top + r.height / 2 - b.top,
      };
    }

    function drawLine(L, R, color, permanent) {
      const p = endpoints(L, R);
      const line = document.createElementNS(SVGNS, "line");
      line.setAttribute("x1", p.x1); line.setAttribute("y1", p.y1);
      line.setAttribute("x2", p.x2); line.setAttribute("y2", p.y2);
      line.setAttribute("stroke", color);
      line.setAttribute("stroke-width", "4");
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);
      if (permanent) matchedLines.push({ L, R, line });
      return line;
    }

    function layout() {
      svg.setAttribute("width", board.clientWidth);
      svg.setAttribute("height", board.clientHeight);
      matchedLines.forEach(m => {
        const p = endpoints(m.L, m.R);
        m.line.setAttribute("x1", p.x1); m.line.setAttribute("y1", p.y1);
        m.line.setAttribute("x2", p.x2); m.line.setAttribute("y2", p.y2);
      });
    }

    function pick(side, el) {
      if (lock || el.classList.contains("matched")) return;
      if (sel[side] === el) { el.classList.remove("selected"); sel[side] = null; return; }
      if (sel[side]) sel[side].classList.remove("selected");
      sel[side] = el; el.classList.add("selected");
      if (sel.left && sel.right) evaluate();
    }

    function evaluate() {
      tries++; triesEl.textContent = tries;
      const L = sel.left, R = sel.right;
      if (L._key === R._key) {
        L.classList.remove("selected"); R.classList.remove("selected");
        L.classList.add("matched"); R.classList.add("matched");
        drawLine(L, R, getComputedStyle(document.body).getPropertyValue("--good") || "#7bc47f", true);
        sel = { left: null, right: null };
        matched++; pairsEl.textContent = `${matched}/${count}`;
        if (matched === count) finish();
      } else {
        lock = true;
        const tmp = drawLine(L, R, "#e06666", false);
        L.classList.add("wrong"); R.classList.add("wrong");
        const a = L, b = R; sel = { left: null, right: null };
        setTimeout(() => {
          a.classList.remove("wrong", "selected"); b.classList.remove("wrong", "selected");
          if (tmp.parentNode) tmp.parentNode.removeChild(tmp);
          lock = false;
        }, 700);
      }
    }

    function finish() {
      const isBest = Gurukul.util.saveBest(config.gameKey, count, tries);
      bestEl.textContent = Gurukul.util.loadBest(config.gameKey, count);
      const perfect = tries === count;
      winMsgEl.textContent = `Linked all ${count} pairs in ${tries} tries.`
        + (perfect ? " Perfect! ⭐" : "") + (isBest && !perfect ? " New best! ⭐" : "");
      winEl.classList.add("show");
    }

    function deal() {
      const pairs = config.makePairs(count);
      svg.innerHTML = ""; colL.innerHTML = ""; colR.innerHTML = "";
      matchedLines = []; sel = { left: null, right: null }; lock = false;
      tries = 0; matched = 0;
      triesEl.textContent = "0"; pairsEl.textContent = `0/${count}`;
      bestEl.textContent = Gurukul.util.loadBest(config.gameKey, count) || "—";
      Gurukul.util.shuffle(pairs.map(p => ({ ...p.left, key: p.key }))).forEach(it => colL.appendChild(makeCard("left", it)));
      Gurukul.util.shuffle(pairs.map(p => ({ ...p.right, key: p.key }))).forEach(it => colR.appendChild(makeCard("right", it)));
      layout();
    }

    root.querySelector("#restart").onclick = deal;
    root.querySelectorAll("#diff button").forEach(b => b.onclick = () => {
      root.querySelectorAll("#diff button").forEach(x => x.classList.remove("on"));
      b.classList.add("on"); count = +b.dataset.pairs; deal();
    });

    // keep permanent lines aligned if the layout reflows
    const onResize = () => { if (board.isConnected) layout(); };
    window.addEventListener("resize", onResize);

    deal();
  },
};

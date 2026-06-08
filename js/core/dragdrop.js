/* LittleGurukul — reusable drag & drop engine.
   A FIXED target (e.g. a deity) sits in a drop zone; the player drags correct items
   onto it. Correct items are accepted; wrong items bounce back with feedback.
   Uses Pointer Events so it works with both mouse and touch. */
window.Gurukul = window.Gurukul || {};

Gurukul.dragdrop = {
  /**
   * config = {
   *   gameKey, title, subtitle, winTitle,
   *   rounds: [ { deity, deityEmoji, items:[{emoji,label,correct,note}] } ],
   *   targetVerb: "Offer to"   // label prefix before the fixed target name
   * }
   * The target (deity) is FIXED per round and never user-selectable.
   */
  mountGame(root, config) {
    const rounds = config.rounds;
    let roundIndex = Math.floor(Math.random() * rounds.length);

    root.innerHTML = `
      <div class="view-title">
        <h2>${config.title}</h2>
        <p>${config.subtitle || ""}</p>
      </div>
      <div class="controls">
        <button class="btn primary" id="restart">&#x1F504; New pooja</button>
        <span class="stat">Offered: <b id="offeredStat">0</b></span>
        <span class="stat">Oops: <b id="oops">0</b></span>
        <span class="stat">Best: <b id="best">—</b></span>
      </div>
      <div class="pooja-stage">
        <div class="pooja-altar" id="altar">
          <div class="altar-deity" id="altarDeity"></div>
          <div class="altar-label" id="altarLabel"></div>
          <div class="altar-offered" id="offered"></div>
          <div class="altar-hint">Drag the right offerings here &#x1F447;</div>
        </div>
        <div class="pooja-tray" id="tray"></div>
      </div>
      <div class="pooja-feedback" id="fb"></div>
      <div class="win" id="win">
        <h3>${config.winTitle || "🎉 Pooja complete!"}</h3>
        <p id="winMsg"></p>
        <button class="btn primary" id="next" style="margin-top:.8rem">Next pooja &rarr;</button>
      </div>`;

    const altar = root.querySelector("#altar");
    const altarDeity = root.querySelector("#altarDeity");
    const altarLabel = root.querySelector("#altarLabel");
    const offered = root.querySelector("#offered");
    const tray = root.querySelector("#tray");
    const fb = root.querySelector("#fb");
    const offeredStat = root.querySelector("#offeredStat");
    const oopsStat = root.querySelector("#oops");
    const bestEl = root.querySelector("#best");
    const winEl = root.querySelector("#win");
    const winMsgEl = root.querySelector("#winMsg");

    const verb = config.targetVerb || "Offer to";
    let totalCorrect = 0, offeredCount = 0, mistakes = 0, round = null;

    function feedback(msg, kind) { fb.textContent = msg; fb.className = "pooja-feedback " + (kind || ""); }
    function updateStats() {
      offeredStat.textContent = `${offeredCount}/${totalCorrect}`;
      oopsStat.textContent = mistakes;
    }

    function attemptOffer(item, el) {
      if (item.correct) {
        el.classList.add("consumed");
        const s = document.createElement("span");
        s.textContent = item.emoji;
        offered.appendChild(s);
        offeredCount++; updateStats();
        feedback(item.note, "good");
        if (offeredCount === totalCorrect) finish();
        return true;
      }
      mistakes++; updateStats();
      feedback(item.note, "bad");
      return false;
    }

    function bounceBack(el) {
      el.style.transition = "transform .25s";
      el.style.transform = "translate(0,0)";
      setTimeout(() => { el.style.transition = ""; }, 260);
    }

    function makeItem(item) {
      const el = document.createElement("div");
      el.className = "pooja-item";
      el.innerHTML = `<span class="pi-emoji">${item.emoji}</span><span class="pi-label">${item.label}</span>`;
      let dragging = false, sx = 0, sy = 0;

      el.addEventListener("pointerdown", e => {
        if (el.classList.contains("consumed")) return;
        dragging = true; sx = e.clientX; sy = e.clientY;
        el.setPointerCapture(e.pointerId);
        el.classList.add("dragging");
      });
      el.addEventListener("pointermove", e => {
        if (!dragging) return;
        el.style.transform = `translate(${e.clientX - sx}px, ${e.clientY - sy}px)`;
        const a = altar.getBoundingClientRect();
        const over = e.clientX >= a.left && e.clientX <= a.right && e.clientY >= a.top && e.clientY <= a.bottom;
        altar.classList.toggle("over", over);
      });
      el.addEventListener("pointerup", e => {
        if (!dragging) return;
        dragging = false;
        el.classList.remove("dragging");
        altar.classList.remove("over");
        const a = altar.getBoundingClientRect();
        const hit = e.clientX >= a.left && e.clientX <= a.right && e.clientY >= a.top && e.clientY <= a.bottom;
        if (hit && attemptOffer(item, el)) return; // accepted & consumed
        bounceBack(el);
      });
      return el;
    }

    function finish() {
      const isBest = Gurukul.util.saveBest(config.gameKey, round.deity, mistakes);
      bestEl.textContent = Gurukul.util.loadBest(config.gameKey, round.deity);
      winMsgEl.textContent = `Pooja to ${round.deity} complete with ${mistakes} oops.`
        + (mistakes === 0 ? " Flawless! ⭐" : (isBest ? " New best! ⭐" : ""));
      feedback("");
      winEl.classList.add("show");
    }

    function render() {
      round = rounds[roundIndex];
      totalCorrect = round.items.filter(i => i.correct).length;
      offeredCount = 0; mistakes = 0;
      altarDeity.textContent = round.deityEmoji;
      altarLabel.textContent = `${verb} ${round.deity}`;
      offered.innerHTML = ""; tray.innerHTML = ""; feedback("");
      winEl.classList.remove("show");
      Gurukul.util.shuffle(round.items).forEach(it => tray.appendChild(makeItem(it)));
      updateStats();
      bestEl.textContent = Gurukul.util.loadBest(config.gameKey, round.deity) || "—";
    }

    root.querySelector("#restart").onclick = render;            // same fixed deity, reshuffled tray
    root.querySelector("#next").onclick = () => { roundIndex = (roundIndex + 1) % rounds.length; render(); };

    render();
  },
};

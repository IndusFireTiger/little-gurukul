/* LittleGurukul — content data.
   Add to these arrays to expand decks; games pick up new entries automatically. */
window.Gurukul = window.Gurukul || {};

Gurukul.data = {
  /* Deity -> Vahana (used by Flash Cards + Match the Vahana) */
  deityVahana: [
    { deity:"Vishnu",    deityEmoji:"\u{1F535}", vahana:"Garuda",   animal:"Divine eagle",     emoji:"\u{1F985}", note:"The mighty eagle-king, swift carrier of the preserver of the universe." },
    { deity:"Shiva",     deityEmoji:"\u{1F52F}", vahana:"Nandi",    animal:"Bull",             emoji:"\u{1F402}", note:"The devoted bull, guardian of Kailasha and symbol of dharma." },
    { deity:"Brahma",    deityEmoji:"\u{1F4D6}", vahana:"Hamsa",    animal:"Swan",             emoji:"\u{1F9A2}", note:"The swan, able to separate milk from water — a symbol of discernment." },
    { deity:"Lakshmi",   deityEmoji:"\u{1FA99}", vahana:"Uluka",    animal:"Owl",              emoji:"\u{1F989}", note:"The owl accompanies the goddess of wealth and fortune." },
    { deity:"Durga",     deityEmoji:"\u{1F5E1}️", vahana:"Simha", animal:"Lion / Tiger", emoji:"\u{1F981}", note:"The lion embodies the fearless power of the warrior goddess." },
    { deity:"Ganesha",   deityEmoji:"\u{1F418}", vahana:"Mushika",  animal:"Mouse",            emoji:"\u{1F42D}", note:"The humble mouse — even the smallest can carry great wisdom." },
    { deity:"Kartikeya", deityEmoji:"\u{1F3F9}", vahana:"Mayura",   animal:"Peacock",          emoji:"\u{1F99A}", note:"The radiant peacock, mount of the god of war and victory." },
    { deity:"Indra",     deityEmoji:"\u{26A1}",  vahana:"Airavata", animal:"Elephant",         emoji:"\u{1F418}", note:"The white celestial elephant of the king of the heavens." },
    { deity:"Yama",      deityEmoji:"\u{2696}️", vahana:"Mahisha", animal:"Buffalo",      emoji:"\u{1F403}", note:"The buffalo carries the lord of dharma and death." },
    { deity:"Agni",      deityEmoji:"\u{1F525}", vahana:"Mesha",    animal:"Ram",              emoji:"\u{1F40F}", note:"The ram bears the fire god across the worlds." },
    { deity:"Varuna",    deityEmoji:"\u{1F30A}", vahana:"Makara",   animal:"Makara (sea-beast)", emoji:"\u{1F40A}", note:"The makara, a mythical aquatic creature, mount of the water god." },
    { deity:"Yamuna",    deityEmoji:"\u{1F3DE}️", vahana:"Kurma", animal:"Tortoise",      emoji:"\u{1F422}", note:"The steady tortoise, mount of the river goddess Yamuna." },
    { deity:"Vayu",      deityEmoji:"\u{1F4A8}", vahana:"Mriga",    animal:"Deer / Antelope",  emoji:"\u{1F98C}", note:"The swift deer, fitting mount for the god of wind." },
    { deity:"Shani",     deityEmoji:"\u{1FA90}", vahana:"Kaaka",    animal:"Crow / Vulture",   emoji:"\u{1F426}‍⬛", note:"The dark bird, mount of Saturn, lord of karma and time." },
  ],

  /* Weapon (ayudha) -> Owner (used by Whose Weapon?) */
  weapons: [
    { weapon:"Sudarshana Chakra", emoji:"\u{2638}️", owner:"Vishnu",       note:"The whirling discus of Vishnu — order restored in an instant." },
    { weapon:"Trishula",          emoji:"\u{1F531}",       owner:"Shiva",        note:"The trident: creation, preservation, destruction in one." },
    { weapon:"Vajra",             emoji:"\u{26A1}",        owner:"Indra",        note:"The thunderbolt, forged from a sage's bones — unstoppable." },
    { weapon:"Gada",              svg:"gada",              owner:"Hanuman",      note:"The mighty mace — strength, devotion, and protection." },
    { weapon:"Kodanda",           emoji:"\u{1F3F9}",       owner:"Rama",         note:"The great bow of Lord Rama, the perfect archer-king." },
    { weapon:"Parashu",           emoji:"\u{1FA93}",       owner:"Parashurama",  note:"The axe of the warrior-sage avatar of Vishnu." },
    { weapon:"Khadga",            emoji:"\u{1F5E1}️", owner:"Durga",        note:"The sword of the goddess — cutting through ignorance." },
    { weapon:"Pasha",             emoji:"\u{1FAA2}",       owner:"Varuna",       note:"The noose that binds — wielded by the lord of waters and cosmic law." },
    { weapon:"Danda",             emoji:"\u{1F9AF}",       owner:"Yama",         note:"The staff of justice, carried by the lord of dharma and death." },
    { weapon:"Ankusha",           emoji:"\u{1FA9D}",       owner:"Ganesha",      note:"The elephant-goad that guides the mind away from distraction." },
  ],

  /* Sacred symbols / objects (used by Sacred Symbols Memory) */
  symbols: [
    { name:"Om",       glyph:"\u{1F549}️", note:"The primordial sound of the cosmos." },
    { name:"Trishula", glyph:"\u{1F531}",        note:"Shiva's trident: creation, preservation, destruction." },
    { name:"Shankha",  glyph:"\u{1F41A}",        note:"The conch of Vishnu — its sound is sacred." },
    { name:"Padma",    glyph:"\u{1FAB7}",        note:"The lotus — purity rising untouched from the mud." },
    { name:"Chakra",   glyph:"\u{2638}️",   note:"The discus / wheel of cosmic order." },
    { name:"Diya",     glyph:"\u{1FA94}",        note:"The lamp — light dispelling darkness." },
    { name:"Kalasha",  glyph:"\u{1F3FA}",        note:"The sacred pot of abundance & auspicious beginnings." },
    { name:"Japamala", glyph:"\u{1F4FF}",        note:"Prayer beads for chanting mantras." },
    { name:"Swastika", svg:"swastika",           note:"An ancient symbol of auspiciousness & well-being." },
    { name:"Gada",     svg:"gada",               note:"The mace — weapon of Hanuman & Vishnu; strength." },
  ],

  /* Festival -> what it celebrates (used by Festival Match) */
  festivals: [
    { name:"Diwali",          emoji:"\u{1FA94}", themeEmoji:"\u{2728}", theme:"Festival of lights" },
    { name:"Holi",            emoji:"\u{1F3A8}", themeEmoji:"\u{1F338}", theme:"Colours of spring" },
    { name:"Navratri",        emoji:"\u{1F483}", themeEmoji:"\u{1F981}", theme:"Nine nights of Durga" },
    { name:"Janmashtami",     emoji:"\u{1FA88}", themeEmoji:"\u{1F37C}", theme:"Krishna's birth" },
    { name:"Ganesh Chaturthi",emoji:"\u{1F418}", themeEmoji:"\u{1F6D5}", theme:"Ganesha's festival" },
    { name:"Raksha Bandhan",  emoji:"\u{1F9F5}", themeEmoji:"\u{1F91D}", theme:"Sibling bond" },
    { name:"Maha Shivaratri", emoji:"\u{1F531}", themeEmoji:"\u{1F319}", theme:"Night of Shiva" },
    { name:"Ram Navami",      emoji:"\u{1F3F9}", themeEmoji:"\u{2600}\u{FE0F}", theme:"Birth of Rama" },
  ],

  /* Deity -> favoured offering (used by Prasad & Offerings) */
  offerings: [
    { deity:"Ganesha",   deityEmoji:"\u{1F418}", offering:"Modak",        offeringEmoji:"\u{1F361}" },
    { deity:"Krishna",   deityEmoji:"\u{1FA88}", offering:"Makhan (butter)", offeringEmoji:"\u{1F9C8}" },
    { deity:"Shiva",     deityEmoji:"\u{1F531}", offering:"Bilva leaves", offeringEmoji:"\u{1F343}" },
    { deity:"Hanuman",   deityEmoji:"\u{1F412}", offering:"Boondi laddu", offeringEmoji:"\u{1F7E0}" },
    { deity:"Durga",     deityEmoji:"\u{1F981}", offering:"Red hibiscus", offeringEmoji:"\u{1F33A}" },
    { deity:"Lakshmi",   deityEmoji:"\u{1FA99}", offering:"Lotus",        offeringEmoji:"\u{1FAB7}" },
    { deity:"Vishnu",    deityEmoji:"\u{1F535}", offering:"Tulsi leaves", offeringEmoji:"\u{1F33F}" },
    { deity:"Saraswati", deityEmoji:"\u{1F4D6}", offering:"White flowers",offeringEmoji:"\u{1F90D}" },
  ],

  /* Navagraha -> weekday (used by Navagraha Match) */
  navagraha: [
    { graha:"Surya",   emoji:"\u{2600}\u{FE0F}", day:"Sunday" },
    { graha:"Chandra", emoji:"\u{1F319}", day:"Monday" },
    { graha:"Mangala", emoji:"\u{1F534}", day:"Tuesday" },
    { graha:"Budha",   emoji:"\u{1F7E2}", day:"Wednesday" },
    { graha:"Guru",    emoji:"\u{1F7E1}", day:"Thursday" },
    { graha:"Shukra",  emoji:"\u{26AA}",  day:"Friday" },
    { graha:"Shani",   emoji:"\u{1FA90}", day:"Saturday" },
  ],

  /* Iconography clue -> deity (used by Color of the Gods) */
  iconography: [
    { deity:"Krishna",   deityEmoji:"\u{1FA88}", clue:"Blue, holds a flute" },
    { deity:"Shiva",     deityEmoji:"\u{1F531}", clue:"Ash, crescent moon" },
    { deity:"Durga",     deityEmoji:"\u{1F981}", clue:"Many arms, rides a lion" },
    { deity:"Ganesha",   deityEmoji:"\u{1F418}", clue:"Elephant head" },
    { deity:"Vishnu",    deityEmoji:"\u{1F535}", clue:"Rests on serpent Shesha" },
    { deity:"Saraswati", deityEmoji:"\u{1F4D6}", clue:"Holds a veena" },
    { deity:"Lakshmi",   deityEmoji:"\u{1FA99}", clue:"Golden, lotus & coins" },
    { deity:"Hanuman",   deityEmoji:"\u{1F412}", clue:"Mace & devotion" },
  ],

  /* Hasta mudras -> meaning (used by Hold the Mudra) */
  mudras: [
    { name:"Abhaya", emoji:"\u{1F91A}", gloss:"Fearlessness", note:"Raised open palm — 'do not fear', protection & reassurance." },
    { name:"Varada", emoji:"\u{1FAF3}", gloss:"Boon-giving",  note:"Downward open palm — compassion, charity, granting wishes." },
    { name:"Dhyana", emoji:"\u{1F9D8}", gloss:"Meditation",   note:"Hands resting in the lap — deep meditation and balance." },
    { name:"Anjali", emoji:"\u{1F64F}", gloss:"Reverence",    note:"Palms pressed together — greeting, namaste, devotion." },
    { name:"Gyan",   emoji:"\u{1F44C}", gloss:"Knowledge",    note:"Thumb meets index finger — wisdom and concentration." },
  ],

  /* Sanskrit words -> meaning (used by Word of the Day) */
  words: [
    { term:"Dharma",  gloss:"Righteous duty",      note:"The moral order and duty that sustains life." },
    { term:"Karma",   gloss:"Action & consequence",note:"Every action carries a consequence across time." },
    { term:"Ahimsa",  gloss:"Non-violence",        note:"Compassion and non-harm to all living beings." },
    { term:"Satya",   gloss:"Truth",               note:"Truthfulness in thought, word, and deed." },
    { term:"Seva",    gloss:"Selfless service",    note:"Serving others without expecting reward." },
    { term:"Moksha",  gloss:"Liberation",          note:"Freedom from the cycle of birth and death." },
    { term:"Bhakti",  gloss:"Devotion",            note:"Loving devotion to the divine." },
    { term:"Guru",    gloss:"Teacher",             note:"One who leads from darkness to light." },
    { term:"Shanti",  gloss:"Peace",               note:"Inner and outer peace." },
    { term:"Namaste", gloss:"I bow to you",        note:"I honour the divine within you." },
  ],

  /* Deity -> signature object / instrument (used by What Do They Hold?) */
  deityObjects: [
    { deity:"Krishna",   object:"Flute (Bansuri)",      emoji:"\u{1FA88}" },
    { deity:"Saraswati", object:"Veena",                emoji:"\u{1F3BB}" },
    { deity:"Shiva",     object:"Damaru (drum)",        emoji:"\u{1F941}" },
    { deity:"Vishnu",    object:"Shankha (conch)",      emoji:"\u{1F41A}" },
    { deity:"Brahma",    object:"Vedas (scripture)",    emoji:"\u{1F4D6}" },
    { deity:"Lakshmi",   object:"Gold coins",           emoji:"\u{1FA99}" },
    { deity:"Hanuman",   object:"Mountain (Sanjeevani)",emoji:"\u{1F3D4}\u{FE0F}" },
    { deity:"Surya",     object:"Sun",                  emoji:"\u{2600}\u{FE0F}" },
  ],

  /* Perform the Pooja: a FIXED deity + correct/incorrect offerings (drag & drop) */
  poojaSets: [
    { deity:"Ganesha", deityEmoji:"\u{1F418}", items:[
      { emoji:"\u{1F361}", label:"Modak",        correct:true,  note:"Modak — Ganesha's beloved sweet!" },
      { emoji:"\u{1F33E}", label:"Durva grass",  correct:true,  note:"Durva (3-bladed grass) is sacred to Ganesha." },
      { emoji:"\u{1F33A}", label:"Red hibiscus", correct:true,  note:"Red flowers delight Ganesha." },
      { emoji:"\u{1F33F}", label:"Tulsi",        correct:false, note:"Tulsi is traditionally NOT offered to Ganesha." },
      { emoji:"\u{1F343}", label:"Bel leaf",     correct:false, note:"Bel leaves belong to Shiva's worship." },
      { emoji:"\u{1F9C8}", label:"Butter",       correct:false, note:"Butter is Krishna's favourite, not Ganesha's." },
    ]},
    { deity:"Shiva", deityEmoji:"\u{1F531}", items:[
      { emoji:"\u{1F343}", label:"Bel leaves",    correct:true,  note:"Bilva (bel) leaves are dear to Shiva." },
      { emoji:"\u{1F4A7}", label:"Water",         correct:true,  note:"Abhishekam with water/milk delights Shiva." },
      { emoji:"\u{1F90D}", label:"White flowers", correct:true,  note:"Simple white flowers please Shiva." },
      { emoji:"\u{1F33F}", label:"Tulsi",         correct:false, note:"Tulsi is generally not offered to Shiva." },
      { emoji:"\u{1F7E1}", label:"Turmeric",      correct:false, note:"Haldi (turmeric) is avoided in Shiva worship." },
      { emoji:"\u{1F361}", label:"Modak",         correct:false, note:"Modak is Ganesha's sweet." },
    ]},
    { deity:"Vishnu", deityEmoji:"\u{1F535}", items:[
      { emoji:"\u{1F33F}", label:"Tulsi",        correct:true,  note:"Tulsi is essential to Vishnu worship." },
      { emoji:"\u{1FAB7}", label:"Lotus",        correct:true,  note:"The lotus is dear to Vishnu." },
      { emoji:"\u{1F9C8}", label:"Butter",       correct:true,  note:"Makhan delights Krishna, an avatar of Vishnu." },
      { emoji:"\u{1F343}", label:"Bel leaf",     correct:false, note:"Bel leaves are for Shiva." },
      { emoji:"\u{1F33E}", label:"Durva grass",  correct:false, note:"Durva grass is Ganesha's." },
      { emoji:"\u{1F33A}", label:"Red hibiscus", correct:false, note:"Hibiscus is offered to Devi, not typically Vishnu." },
    ]},
    { deity:"Durga", deityEmoji:"\u{1F981}", items:[
      { emoji:"\u{1F33A}", label:"Red hibiscus", correct:true,  note:"Red hibiscus is the goddess's favourite." },
      { emoji:"\u{1F965}", label:"Coconut",      correct:true,  note:"Coconut is a classic offering to Devi." },
      { emoji:"\u{1F534}", label:"Red chunari",  correct:true,  note:"A red chunari adorns the goddess." },
      { emoji:"\u{1F33F}", label:"Tulsi",        correct:false, note:"Tulsi is for Vishnu, not Durga." },
      { emoji:"\u{1F343}", label:"Bel leaf",     correct:false, note:"Bel leaves belong to Shiva." },
      { emoji:"\u{1F9C8}", label:"Butter",       correct:false, note:"Butter is Krishna's." },
    ]},
  ],

  /* Coloring activity — line-art objects; each .region is independently fillable */
  colorables: [
    { id:"flute", name:"Flute", icon:"\u{1FA88}", svg:`<svg viewBox="0 0 200 200">
      <rect class="region" x="20" y="88" width="160" height="26" rx="13"/>
      <rect class="region" x="20" y="88" width="22" height="26" rx="11"/>
      <rect class="region" x="158" y="88" width="22" height="26" rx="11"/>
      <circle class="region" cx="64" cy="101" r="5"/>
      <circle class="region" cx="88" cy="101" r="5"/>
      <circle class="region" cx="112" cy="101" r="5"/>
      <circle class="region" cx="136" cy="101" r="5"/>
    </svg>` },
    { id:"trishula", name:"Trishula", icon:"\u{1F531}", svg:`<svg viewBox="0 0 200 200">
      <polygon class="region" points="70,18 80,60 60,60"/>
      <polygon class="region" points="130,18 140,60 120,60"/>
      <polygon class="region" points="100,6 110,60 90,60"/>
      <rect class="region" x="62" y="58" width="76" height="11" rx="5"/>
      <rect class="region" x="93" y="67" width="14" height="120" rx="7"/>
    </svg>` },
    { id:"diya", name:"Diya", icon:"\u{1FA94}", svg:`<svg viewBox="0 0 200 200">
      <ellipse class="region" cx="100" cy="146" rx="52" ry="8"/>
      <path class="region" d="M46 98 C50 132 76 142 100 142 C124 142 150 132 154 98 Q100 114 46 98 Z"/>
      <ellipse class="region" cx="100" cy="92" rx="21" ry="7"/>
      <path class="region" d="M100 34 C113 55 109 77 100 86 C91 77 87 55 100 34 Z"/>
    </svg>` },
    { id:"lotus", name:"Lotus", icon:"\u{1FAB7}", svg:`<svg viewBox="0 0 200 200">
      <path class="region" d="M38 106 C62 110 86 118 100 126 C86 110 60 100 38 106 Z"/>
      <path class="region" d="M162 106 C138 110 114 118 100 126 C114 110 140 100 162 106 Z"/>
      <path class="region" d="M58 74 C72 100 86 116 100 126 C92 104 76 84 58 74 Z"/>
      <path class="region" d="M142 74 C128 100 114 116 100 126 C108 104 124 84 142 74 Z"/>
      <path class="region" d="M100 52 C80 84 80 114 100 126 C120 114 120 84 100 52 Z"/>
      <ellipse class="region" cx="100" cy="128" rx="23" ry="13"/>
    </svg>` },
    { id:"om", name:"Om", icon:"\u{1F549}\u{FE0F}", svg:`<svg viewBox="0 0 200 200">
      <circle class="region" cx="100" cy="100" r="80"/>
      <text class="region" x="100" y="142" text-anchor="middle" font-size="128" font-family="Georgia, serif">&#x0950;</text>
    </svg>` },
    { id:"kalasha", name:"Kalasha", icon:"\u{1F3FA}", svg:`<svg viewBox="0 0 200 200">
      <path class="region" d="M60 110 C56 152 78 178 100 178 C122 178 144 152 140 110 Z"/>
      <rect class="region" x="68" y="100" width="64" height="14" rx="6"/>
      <path class="region" d="M86 96 C68 90 60 74 70 66 C84 74 90 86 92 98 Z"/>
      <path class="region" d="M114 96 C132 90 140 74 130 66 C116 74 110 86 108 98 Z"/>
      <circle class="region" cx="100" cy="84" r="17"/>
    </svg>` },
    { id:"rangoli", name:"Rangoli", icon:"\u{1F386}", svg:`<svg viewBox="0 0 200 200">
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(0 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(45 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(90 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(135 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(180 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(225 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(270 100 100)"/>
      <path class="region" d="M100 100 L114 52 Q100 40 86 52 Z" transform="rotate(315 100 100)"/>
      <circle class="region" cx="100" cy="100" r="16"/>
    </svg>` },
  ],

  /* Inline SVG for items without a good emoji */
  svg: {
    swastika: `<svg class="tile-svg" viewBox="0 0 100 100" fill="none" stroke="#d4a23a" stroke-width="8" stroke-linecap="round">
      <line x1="50" y1="16" x2="50" y2="84"/><line x1="16" y1="50" x2="84" y2="50"/>
      <line x1="50" y1="16" x2="74" y2="16"/><line x1="84" y1="50" x2="84" y2="26"/>
      <line x1="50" y1="84" x2="26" y2="84"/><line x1="16" y1="50" x2="16" y2="74"/></svg>`,
    gada: `<svg class="tile-svg" viewBox="0 0 100 100" fill="#d4a23a" stroke="#d4a23a">
      <circle cx="50" cy="12" r="6"/><circle cx="50" cy="34" r="17" fill="none" stroke-width="6"/>
      <circle cx="50" cy="34" r="7"/><rect x="46" y="46" width="8" height="44" rx="4"/>
      <rect x="40" y="86" width="20" height="7" rx="3"/></svg>`,
  },
};

/**
 * SVG inner content for each Kihon technique illustration.
 * viewBox="0 0 120 160" — side profile, figure faces LEFT (forward = low x).
 * All elements use stroke="currentColor" to inherit category color from CSS.
 *
 * Stance: Zenkutsu-Dachi (right foot forward = left in image) for most techniques.
 * Kick stances: figure stands on back (left) leg, kicking leg varies.
 */

const BASE_ATTRS = `fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"`;

// ── Shared base: Zenkutsu-Dachi (right/forward leg on left side) ──────────────
// Head cx=78 cy=13 r=9 | Torso 73,22→68,30→62,88
// Front leg 57,88→45,118→28,150 | Back leg 67,88→80,113→95,146
// Front shoulder: 62,33 | Back shoulder: 74,33

function zenkutsu(extraElements: string): string {
  return `
<circle cx="78" cy="13" r="9" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="73,22 68,30 62,88" ${BASE_ATTRS} stroke-width="2.5"/>
<line x1="57" y1="88" x2="67" y2="88" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="57,88 45,118 28,150" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="67,88 80,113 95,146" ${BASE_ATTRS} stroke-width="2.5"/>
${extraElements}`;
}

// ── Shared base: Kicking stance (standing on back/left leg) ───────────────────
// Head cx=70 cy=13 r=9 | Torso 66,22→62,30→57,82
// Standing leg: 61,82→74,112→88,145
// Guard arms: front 52,33→40,40→32,48 | back 66,33→76,40→82,48

function kickBase(extraElements: string): string {
  return `
<circle cx="70" cy="13" r="9" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="66,22 62,30 57,82" ${BASE_ATTRS} stroke-width="2.5"/>
<line x1="51" y1="82" x2="62" y2="82" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="62,82 74,112 88,145" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="52,33 40,40 32,48" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="66,33 76,40 82,48" ${BASE_ATTRS} stroke-width="2.5"/>
${extraElements}`;
}

// ── Kokutsu-Dachi base (knife-hand block) ─────────────────────────────────────
// Weight on back leg: back leg more bent, front leg more straight
function kokutsu(extraElements: string): string {
  return `
<circle cx="78" cy="13" r="9" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="73,22 68,30 62,88" ${BASE_ATTRS} stroke-width="2.5"/>
<line x1="57" y1="88" x2="67" y2="88" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="57,88 50,122 38,153" ${BASE_ATTRS} stroke-width="2.5"/>
<polyline points="67,88 76,110 88,143" ${BASE_ATTRS} stroke-width="2.5"/>
${extraElements}`;
}

// ── Hikite (standard pulled-back arm at hip) ─────────────────────────────────
const HIKITE = `
<polyline points="74,33 83,55 85,76" ${BASE_ATTRS} stroke-width="2"/>
<circle cx="85" cy="76" r="2.5" fill="currentColor"/>`;

const HIKITE_GYAKU = `
<polyline points="62,33 52,55 50,76" ${BASE_ATTRS} stroke-width="2"/>
<circle cx="50" cy="76" r="2.5" fill="currentColor"/>`;

// ─────────────────────────────────────────────────────────────────────────────
// TSUKI (Punching)
// ─────────────────────────────────────────────────────────────────────────────

export const technikIllustrationen: Record<string, string> = {

  'oi-zuki': zenkutsu(`
    <!-- Punch arm (front/right shoulder → forward) -->
    <polyline points="62,33 42,33 20,33" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="20" cy="33" r="3.5" fill="currentColor"/>
    ${HIKITE}
  `),

  'gyaku-zuki': zenkutsu(`
    <!-- Reverse punch (back/left shoulder crosses forward) -->
    <polyline points="74,33 52,30 28,27" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="28" cy="27" r="3.5" fill="currentColor"/>
    ${HIKITE_GYAKU}
  `),

  'kizami-zuki': zenkutsu(`
    <!-- Front jab (short extension, front shoulder) -->
    <polyline points="62,33 48,33 34,33" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="34" cy="33" r="3.5" fill="currentColor"/>
    ${HIKITE}
  `),

  'nukite': zenkutsu(`
    <!-- Spear-hand: same reach as oi-zuki but open hand -->
    <polyline points="62,33 42,33 20,33" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Finger spread indicator -->
    <line x1="20" y1="33" x2="12" y2="27" ${BASE_ATTRS} stroke-width="2"/>
    <line x1="20" y1="33" x2="11" y2="32" ${BASE_ATTRS} stroke-width="2"/>
    <line x1="20" y1="33" x2="12" y2="38" ${BASE_ATTRS} stroke-width="2"/>
    ${HIKITE}
  `),

  // ─────────────────────────────────────────────────────────────────────────────
  // UKE (Blocking)
  // ─────────────────────────────────────────────────────────────────────────────

  'age-uke': zenkutsu(`
    <!-- Rising block: front arm sweeps up above head -->
    <polyline points="62,33 48,22 30,8" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="30" cy="8" r="3.5" fill="currentColor"/>
    ${HIKITE}
  `),

  'soto-uke': zenkutsu(`
    <!-- Outside-in block: from ear level, sweeps across to center -->
    <polyline points="78,16 62,28 47,38" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="47" cy="38" r="3.5" fill="currentColor"/>
    <!-- Back arm at ear position (pre-load) -->
    <polyline points="74,33 78,20 80,12" ${BASE_ATTRS} stroke-width="2"/>
  `),

  'uchi-uke': zenkutsu(`
    <!-- Inside-out block: arm drives from inside across, ending outside -->
    <polyline points="54,50 59,33 72,22" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="72" cy="22" r="3.5" fill="currentColor"/>
    ${HIKITE_GYAKU}
  `),

  'gedan-barai': zenkutsu(`
    <!-- Downward sweep: from ear level, diagonally down-forward -->
    <polyline points="62,33 52,58 38,83" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="38" cy="83" r="3.5" fill="currentColor"/>
    <!-- Back arm (pre-load near ear) -->
    <polyline points="74,33 79,20 81,12" ${BASE_ATTRS} stroke-width="2"/>
  `),

  'shuto-uke': kokutsu(`
    <!-- Knife-hand block (Kokutsu-Dachi): open hand at mid level -->
    <polyline points="62,33 42,37 24,40" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Open hand (knife edge indicator) -->
    <line x1="24" y1="40" x2="15" y2="34" ${BASE_ATTRS} stroke-width="2"/>
    <line x1="24" y1="40" x2="14" y2="40" ${BASE_ATTRS} stroke-width="2"/>
    <line x1="24" y1="40" x2="15" y2="46" ${BASE_ATTRS} stroke-width="2"/>
    <!-- Back arm drawn to ear -->
    <polyline points="74,33 79,22 82,14" ${BASE_ATTRS} stroke-width="2"/>
    <!-- Open back hand indicator -->
    <line x1="82" y1="14" x2="86" y2="9" ${BASE_ATTRS} stroke-width="1.5"/>
    <line x1="82" y1="14" x2="89" y2="14" ${BASE_ATTRS} stroke-width="1.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────────
  // GERI (Kicking)
  // ─────────────────────────────────────────────────────────────────────────────

  'mae-geri-keage': kickBase(`
    <!-- Snap kick: knee raised high, foot snaps forward-up -->
    <polyline points="51,82 62,54 44,33" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Foot (ball of foot) -->
    <circle cx="44" cy="33" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
  `),

  'mae-geri-kekomi': kickBase(`
    <!-- Thrust kick: knee raised, foot drives horizontally forward -->
    <polyline points="51,82 57,60 28,52" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Foot (heel/ball thrust) -->
    <circle cx="28" cy="52" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
  `),

  'yoko-geri-keage': kickBase(`
    <!-- Side snap kick: knee lifts sideways, foot snaps to side -->
    <polyline points="51,82 50,64 20,57" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="20" cy="57" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
  `),

  'yoko-geri-kekomi': kickBase(`
    <!-- Side thrust kick: horizontal drive to the side -->
    <polyline points="51,82 47,70 15,65" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="15" cy="65" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
  `),

  'mawashi-geri': kickBase(`
    <!-- Roundhouse: knee raised to back-right, foot arcs forward -->
    <polyline points="51,82 88,50 60,28" ${BASE_ATTRS} stroke-width="3"/>
    <circle cx="60" cy="28" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
    <!-- Arc direction indicator -->
    <path d="M 88,44 Q 80,30 60,28" ${BASE_ATTRS} stroke-width="1.5" stroke-dasharray="3,3"/>
  `),

  'ushiro-geri': kickBase(`
    <!-- Back kick: leg extends backward (right in side view), heel strike -->
    <polyline points="51,82 52,102 90,112" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Heel indicator -->
    <circle cx="90" cy="112" r="4" ${BASE_ATTRS} stroke-width="2.5"/>
    <!-- Head turned to look back -->
    <path d="M 62,18 Q 68,16 72,20" ${BASE_ATTRS} stroke-width="1.5"/>
  `),

  // ─────────────────────────────────────────────────────────────────────────────
  // UCHI (Striking)
  // ─────────────────────────────────────────────────────────────────────────────

  'uraken-uchi': zenkutsu(`
    <!-- Backfist: arm swings from bent position, back-knuckles strike forward-up -->
    <polyline points="62,33 50,25 30,18" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Backfist knuckle indicator (back of fist) -->
    <circle cx="30" cy="18" r="3.5" ${BASE_ATTRS} stroke-width="2.5"/>
    <line x1="25" y1="16" x2="35" y2="20" ${BASE_ATTRS} stroke-width="2"/>
    ${HIKITE}
  `),

  'empi-uchi': zenkutsu(`
    <!-- Elbow strike: elbow drives forward, forearm bends upward -->
    <polyline points="62,33 38,33 28,16" ${BASE_ATTRS} stroke-width="3"/>
    <!-- Elbow point highlighted (the weapon) -->
    <circle cx="38" cy="33" r="5" ${BASE_ATTRS} stroke-width="2.5"/>
    ${HIKITE}
  `),
};

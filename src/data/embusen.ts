/**
 * Embusen SVG path content for each Kata.
 * viewBox="0 0 200 200" — center (100,100), N=top, S=bottom, E=right, W=left.
 *
 * Each entry is the SVG inner content (no wrapper <svg> tag).
 * Arrow markers and compass labels are added by the EmbusenDiagramm component.
 * Dot at start position, path with direction arrows, open circle at finish.
 */

const A = `fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"`;

// Start dot (Yoi position)
function startDot(cx: number, cy: number) {
  return `<circle cx="${cx}" cy="${cy}" r="5.5" fill="currentColor"/>`;
}

// Yame/end circle
function endDot(cx: number, cy: number) {
  return `<circle cx="${cx}" cy="${cy}" r="4" fill="none" stroke="currentColor" stroke-width="2"/>`;
}

// Arrow segment (line from → to with arrow at end)
function seg(x1: number, y1: number, x2: number, y2: number, width = 2): string {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${A} stroke-width="${width}" marker-end="url(#emb-arrow)"/>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN SERIES
// All Heian kata share a basic H/I embusen along a north-south axis
// ─────────────────────────────────────────────────────────────────────────────

export const embusenSVG: Record<string, string> = {

  // H-shape: Main N-S center line, two E-W branches
  'heian-shodan': `
    ${startDot(100, 168)}
    <!-- West branch (lower) -->
    ${seg(100, 168, 55, 168)}
    ${seg(55, 168, 55, 108)}
    <!-- Cross to east -->
    ${seg(55, 108, 100, 108)}
    ${seg(100, 108, 145, 108)}
    ${seg(145, 108, 145, 168)}
    <!-- Main north axis -->
    ${seg(100, 168, 100, 105)}
    ${seg(100, 105, 100, 40)}
    ${endDot(100, 40)}
  `,

  // H-shape shifted: branches at different heights, slightly wider
  'heian-nidan': `
    ${startDot(100, 168)}
    ${seg(100, 168, 52, 168)}
    ${seg(52, 168, 52, 95)}
    ${seg(52, 95, 100, 95)}
    ${seg(100, 95, 148, 95)}
    ${seg(148, 95, 148, 168)}
    ${seg(100, 168, 100, 88)}
    ${seg(100, 88, 100, 38)}
    ${endDot(100, 38)}
  `,

  // Compact H: shorter branches, tighter shape
  'heian-sandan': `
    ${startDot(100, 165)}
    ${seg(100, 165, 62, 165)}
    ${seg(62, 165, 62, 115)}
    ${seg(62, 115, 100, 115)}
    ${seg(100, 115, 138, 115)}
    ${seg(138, 115, 138, 165)}
    ${seg(100, 165, 100, 110)}
    ${seg(100, 110, 100, 42)}
    ${endDot(100, 42)}
  `,

  // Extended H: extra step on upper-right
  'heian-yondan': `
    ${startDot(100, 168)}
    ${seg(100, 168, 55, 168)}
    ${seg(55, 168, 55, 100)}
    ${seg(55, 100, 100, 100)}
    ${seg(100, 100, 145, 100)}
    ${seg(145, 100, 145, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 38)}
    <!-- Extra step: upper-east branch (Heian 4 characteristic) -->
    ${seg(100, 68, 148, 55)}
    ${endDot(100, 38)}
  `,

  // H with diagonal element (Kosa-Tobi jump characteristic)
  'heian-godan': `
    ${startDot(100, 168)}
    ${seg(100, 168, 55, 168)}
    ${seg(55, 168, 55, 100)}
    ${seg(55, 100, 100, 100)}
    ${seg(100, 100, 145, 100)}
    ${seg(145, 100, 145, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 38)}
    <!-- Diagonal: characteristic of Heian 5 (Juji-Uke, jump) -->
    ${seg(62, 80, 138, 58)}
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // TEKKI SERIES — Single horizontal line
  // ─────────────────────────────────────────────────────────────────────────────

  'tekki-shodan': `
    ${startDot(100, 100)}
    <!-- Single horizontal line only — Kiba-Dachi throughout -->
    ${seg(100, 100, 35, 100)}
    ${seg(35, 100, 165, 100)}
    ${seg(165, 100, 100, 100)}
    ${endDot(100, 100)}
    <!-- Direction dots -->
    <circle cx="35" cy="100" r="2.5" fill="currentColor"/>
    <circle cx="165" cy="100" r="2.5" fill="currentColor"/>
  `,

  'tekki-nidan': `
    ${startDot(100, 100)}
    ${seg(100, 100, 30, 100)}
    ${seg(30, 100, 170, 100)}
    ${seg(170, 100, 100, 100)}
    ${endDot(100, 100)}
    <circle cx="30" cy="100" r="2.5" fill="currentColor"/>
    <circle cx="170" cy="100" r="2.5" fill="currentColor"/>
  `,

  'tekki-sandan': `
    ${startDot(100, 100)}
    ${seg(100, 100, 28, 100)}
    ${seg(28, 100, 172, 100)}
    ${seg(172, 100, 100, 100)}
    ${endDot(100, 100)}
    <circle cx="28" cy="100" r="2.5" fill="currentColor"/>
    <circle cx="172" cy="100" r="2.5" fill="currentColor"/>
    <!-- Extra detail for Sandan (more complex than Nidan) -->
    ${seg(100, 100, 100, 80)}
    ${seg(100, 80, 100, 120)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // BASSAI
  // ─────────────────────────────────────────────────────────────────────────────

  // Cross/plus with strong north emphasis
  'bassai-dai': `
    ${startDot(100, 168)}
    <!-- Strong north axis (main direction) -->
    ${seg(100, 168, 100, 32)}
    <!-- West branch (mid level) -->
    ${seg(100, 105, 42, 105)}
    ${seg(42, 105, 42, 65)}
    <!-- East branch (mid level) -->
    ${seg(100, 105, 158, 105)}
    ${seg(158, 105, 158, 65)}
    <!-- Upper cross -->
    ${seg(42, 65, 158, 65)}
    ${endDot(100, 32)}
  `,

  // Smaller H-variant
  'bassai-sho': `
    ${startDot(100, 165)}
    ${seg(100, 165, 62, 165)}
    ${seg(62, 165, 62, 95)}
    ${seg(62, 95, 100, 95)}
    ${seg(100, 95, 138, 95)}
    ${seg(138, 95, 138, 165)}
    ${seg(100, 165, 100, 88)}
    ${seg(100, 88, 100, 38)}
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // KANKU
  // ─────────────────────────────────────────────────────────────────────────────

  // Large cross with diagonals — comprehensive (mother of Heian kata)
  'kanku-dai': `
    ${startDot(100, 168)}
    ${seg(100, 168, 100, 32)}
    ${seg(32, 100, 168, 100)}
    <!-- Diagonals -->
    ${seg(55, 55, 145, 145)}
    ${seg(145, 55, 55, 145)}
    <!-- Extra outer arcs (characteristic circular movement) -->
    <path d="M 70,35 Q 100,22 130,35" ${A} stroke-width="1.5" stroke-dasharray="4,3"/>
    ${endDot(100, 32)}
  `,

  // Slightly smaller, fewer diagonals
  'kanku-sho': `
    ${startDot(100, 165)}
    ${seg(100, 165, 100, 35)}
    ${seg(35, 100, 165, 100)}
    <!-- Partial diagonals -->
    ${seg(60, 60, 140, 140)}
    ${seg(140, 60, 100, 100)}
    ${endDot(100, 35)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // EMPI — "Flying Swallow": diagonal/zigzag shape
  // ─────────────────────────────────────────────────────────────────────────────

  'empi': `
    ${startDot(100, 155)}
    ${seg(100, 155, 100, 95)}
    ${seg(100, 95, 55, 55)}
    ${seg(55, 55, 55, 35)}
    ${seg(55, 35, 145, 35)}
    ${seg(145, 35, 145, 55)}
    ${seg(145, 55, 100, 95)}
    ${seg(100, 95, 100, 40)}
    ${endDot(100, 40)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // HANGETSU — "Half Moon": curved/crescent movement
  // ─────────────────────────────────────────────────────────────────────────────

  'hangetsu': `
    ${startDot(100, 165)}
    <!-- Characteristic half-moon (hangetsu) stepping pattern -->
    <path d="M 100,165 Q 72,130 80,95 Q 88,62 100,38" ${A} stroke-width="2" marker-end="url(#emb-arrow)"/>
    <path d="M 100,165 Q 128,130 120,95 Q 112,62 100,38" ${A} stroke-width="1.5" stroke-dasharray="4,3"/>
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // JION / JITTE / JIIN — Temple trio
  // ─────────────────────────────────────────────────────────────────────────────

  // Jion: tall H-shape, linear and powerful
  'jion': `
    ${startDot(100, 168)}
    ${seg(100, 168, 55, 168)}
    ${seg(55, 168, 55, 100)}
    ${seg(55, 100, 145, 100)}
    ${seg(145, 100, 145, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 32)}
    <!-- Extra west branch at top -->
    ${seg(100, 60, 42, 60)}
    ${endDot(100, 32)}
  `,

  // Jitte: compact cross
  'jitte': `
    ${startDot(100, 155)}
    ${seg(100, 155, 100, 45)}
    ${seg(45, 100, 155, 100)}
    <!-- Short diagonal branches -->
    ${seg(100, 72, 60, 52)}
    ${seg(100, 72, 140, 52)}
    ${endDot(100, 45)}
  `,

  // Jiin: cross with slight variation (rarest temple kata)
  'jiin': `
    ${startDot(100, 158)}
    ${seg(100, 158, 100, 42)}
    ${seg(42, 100, 158, 100)}
    <!-- Extra lower branch  -->
    ${seg(100, 128, 55, 128)}
    ${endDot(100, 42)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // GANKAKU — "Crane on a Rock": L-shape, characteristic one-legged balance
  // ─────────────────────────────────────────────────────────────────────────────

  'gankaku': `
    ${startDot(100, 160)}
    ${seg(100, 160, 100, 80)}
    ${seg(100, 80, 45, 80)}
    ${seg(45, 80, 45, 38)}
    <!-- Balance point indicator (one-leg section) -->
    <circle cx="45" cy="62" r="6" ${A} stroke-width="1.5" stroke-dasharray="3,2"/>
    ${seg(45, 38, 100, 38)}
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // NIJUSHIHO — "24 Steps": flowing, wavy S-curve
  // ─────────────────────────────────────────────────────────────────────────────

  'nijushiho': `
    ${startDot(100, 165)}
    <!-- Flowing S-curve characteristic of this kata's rhythm -->
    <path d="M 100,165 Q 65,140 70,110 Q 75,80 100,68 Q 125,56 130,40 Q 135,25 115,20" ${A} stroke-width="2" marker-end="url(#emb-arrow)"/>
    ${seg(115, 20, 85, 20)}
    ${endDot(85, 20)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // SOCHIN — "Rooted Power": deep H with strong lines
  // ─────────────────────────────────────────────────────────────────────────────

  'sochin': `
    ${startDot(100, 168)}
    ${seg(100, 168, 50, 168)}
    ${seg(50, 168, 50, 100)}
    ${seg(50, 100, 150, 100)}
    ${seg(150, 100, 150, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 38)}
    <!-- Deep stance indicators -->
    <line x1="50" y1="134" x2="150" y2="134" ${A} stroke-width="1" stroke-dasharray="3,3"/>
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // MEIKYO — "Polished Mirror": circular/arc patterns
  // ─────────────────────────────────────────────────────────────────────────────

  'meikyo': `
    ${startDot(100, 162)}
    <!-- Circular winding path characteristic of Meikyo -->
    <path d="M 100,162 L 100,120 Q 60,110 55,80 Q 50,50 100,42 Q 150,34 150,70 Q 150,100 120,110" ${A} stroke-width="2" marker-end="url(#emb-arrow)"/>
    ${seg(120, 110, 100, 120)}
    ${seg(100, 120, 100, 38)}
    ${endDot(100, 38)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // CHINTE — "Rare Hands": H with distinctive backward hops at end
  // ─────────────────────────────────────────────────────────────────────────────

  'chinte': `
    ${startDot(100, 165)}
    ${seg(100, 165, 58, 165)}
    ${seg(58, 165, 58, 98)}
    ${seg(58, 98, 100, 98)}
    ${seg(100, 98, 142, 98)}
    ${seg(142, 98, 142, 165)}
    ${seg(100, 165, 100, 92)}
    ${seg(100, 92, 100, 42)}
    <!-- Backward hops (characteristic 3 jumps at end) -->
    ${seg(100, 42, 108, 55)}
    ${seg(108, 55, 116, 68)}
    ${seg(116, 68, 124, 80)}
    ${endDot(100, 42)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // UNSU — "Cloud Hands": most complex, 360° jump
  // ─────────────────────────────────────────────────────────────────────────────

  'unsu': `
    ${startDot(100, 165)}
    ${seg(100, 165, 100, 100)}
    ${seg(100, 100, 42, 68)}
    ${seg(42, 68, 42, 35)}
    ${seg(42, 35, 158, 35)}
    ${seg(158, 35, 158, 68)}
    ${seg(158, 68, 100, 100)}
    <!-- 360° jump symbol -->
    <circle cx="100" cy="62" r="12" ${A} stroke-width="1.5" stroke-dasharray="4,2"/>
    <path d="M 95,50 Q 100,46 105,50" ${A} stroke-width="1.5" marker-end="url(#emb-arrow)"/>
    ${seg(100, 100, 60, 130)}
    ${seg(60, 130, 100, 165)}
    ${endDot(100, 165)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // WANKAN — "Crown of King": shortest Shotokan kata, compact I
  // ─────────────────────────────────────────────────────────────────────────────

  'wankan': `
    ${startDot(100, 155)}
    ${seg(100, 155, 72, 155)}
    ${seg(72, 155, 72, 100)}
    ${seg(72, 100, 100, 100)}
    ${seg(100, 100, 128, 100)}
    ${seg(128, 100, 128, 155)}
    ${seg(100, 155, 100, 95)}
    ${seg(100, 95, 100, 45)}
    ${endDot(100, 45)}
  `,

  // ─────────────────────────────────────────────────────────────────────────────
  // GOJUSHIHO — "54 Steps": very long, complex multi-directional
  // ─────────────────────────────────────────────────────────────────────────────

  'gojushiho-dai': `
    ${startDot(100, 168)}
    ${seg(100, 168, 50, 168)}
    ${seg(50, 168, 50, 100)}
    ${seg(50, 100, 150, 100)}
    ${seg(150, 100, 150, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 32)}
    <!-- Extra branches for the longer version -->
    ${seg(100, 65, 42, 50)}
    ${seg(100, 65, 158, 50)}
    ${seg(42, 50, 42, 32)}
    ${endDot(100, 32)}
  `,

  'gojushiho-sho': `
    ${startDot(100, 168)}
    ${seg(100, 168, 52, 168)}
    ${seg(52, 168, 52, 100)}
    ${seg(52, 100, 148, 100)}
    ${seg(148, 100, 148, 168)}
    ${seg(100, 168, 100, 95)}
    ${seg(100, 95, 100, 32)}
    <!-- Slightly different branch pattern than Dai -->
    ${seg(100, 68, 52, 55)}
    ${seg(100, 68, 148, 55)}
    ${endDot(100, 32)}
  `,
};

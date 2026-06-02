export interface KataSchritt {
  nr: number;
  technik: string;
  seite: 'Links' | 'Rechts' | 'Beide';
  richtung: string;
  stand: string;
  beschreibung: string;
  kiai?: boolean;
}

export interface KataAblauf {
  id: string;
  vollstaendig: boolean;
  schritte: KataSchritt[];
}

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN SHODAN  (21 Bewegungen, 2 Kiai)
// Techniken: Gedan-Barai, Oi-Zuki Chudan, Age-Uke
// ─────────────────────────────────────────────────────────────────────────────
const heianShodan: KataAblauf = {
  id: 'heian-shodan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Gedan-Barai',      seite: 'Links',  richtung: 'Links wenden',       stand: 'Zenkutsu-Dachi', beschreibung: 'Linkes Bein tritt nach links; linker Unterarm schlägt diagonal nach unten-außen. Faust endet eine Faust über dem linken Knie.' },
    { nr: 2,  technik: 'Oi-Zuki Chudan',   seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt einen Schritt vor; simultaner rechter Geradstoß auf Chudan-Höhe (Solarplexus).' },
    { nr: 3,  technik: 'Gedan-Barai',      seite: 'Rechts', richtung: '180° rechts wenden', stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig nach rechts drehen; rechter Unterarm-Block nach unten-außen.' },
    { nr: 4,  technik: 'Oi-Zuki Chudan',   seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß tritt einen Schritt vor; linker Geradstoß auf Chudan-Höhe.' },
    { nr: 5,  technik: 'Gedan-Barai',      seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptangriffsrichtung wenden; linker Unterarm-Block nach unten.' },
    { nr: 6,  technik: 'Age-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Unterarm schwingt von innen-unten nach oben-außen, Handgelenk auf Stirnhöhe.' },
    { nr: 7,  technik: 'Age-Uke',          seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß tritt vor; linker Aufwärtsblock schützt den Kopfbereich.' },
    { nr: 8,  technik: 'Age-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Aufwärtsblock mit maximaler Hüftrotation.', kiai: true },
    { nr: 9,  technik: 'Gedan-Barai',      seite: 'Rechts', richtung: 'Rechts wenden',      stand: 'Zenkutsu-Dachi', beschreibung: 'Rechts wenden; rechter Unterarm-Block nach unten-außen.' },
    { nr: 10, technik: 'Oi-Zuki Chudan',   seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß tritt vor; linker Geradstoß Chudan.' },
    { nr: 11, technik: 'Gedan-Barai',      seite: 'Links',  richtung: '180° links wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig nach links drehen; linker Unterarm-Block nach unten.' },
    { nr: 12, technik: 'Oi-Zuki Chudan',   seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Geradstoß Chudan.' },
    { nr: 13, technik: 'Gedan-Barai',      seite: 'Links',  richtung: '90° rechts wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm-Block nach unten.' },
    { nr: 14, technik: 'Age-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Aufwärtsblock.' },
    { nr: 15, technik: 'Age-Uke',          seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß tritt vor; linker Aufwärtsblock.' },
    { nr: 16, technik: 'Age-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Aufwärtsblock mit vollem Kiai.', kiai: true },
    { nr: 17, technik: 'Gedan-Barai',      seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Links wenden; linker Unterarm-Block nach unten-außen.' },
    { nr: 18, technik: 'Oi-Zuki Chudan',   seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß vor; rechter Geradstoß Chudan.' },
    { nr: 19, technik: 'Gedan-Barai',      seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig rechts drehen; rechter Unterarm-Block nach unten.' },
    { nr: 20, technik: 'Oi-Zuki Chudan',   seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß vor; linker Geradstoß Chudan.' },
    { nr: 21, technik: 'Gedan-Barai',      seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zurück zur Startlinie wenden; linker Unterarm-Block nach unten. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN NIDAN  (26 Bewegungen, 2 Kiai)
// Techniken: Uchi-Uke, Uraken-Uchi, Yoko-Geri, Gyaku-Zuki, Mae-Geri, Shuto-Uke
// ─────────────────────────────────────────────────────────────────────────────
const heianNidan: KataAblauf = {
  id: 'heian-nidan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Uchi-Uke',         seite: 'Links',  richtung: 'Links wenden',       stand: 'Kokutsu-Dachi',  beschreibung: 'Links wenden in Kokutsu-Dachi; linker Innenblock von innen nach außen auf Chudan-Höhe.' },
    { nr: 2,  technik: 'Uchi-Uke',         seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Innenblock auf Chudan-Höhe.' },
    { nr: 3,  technik: 'Uchi-Uke',         seite: 'Links',  richtung: '180° rechts wenden', stand: 'Kokutsu-Dachi',  beschreibung: 'Vollständig nach rechts drehen; linker Innenblock auf Chudan-Höhe.' },
    { nr: 4,  technik: 'Uchi-Uke',         seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Innenblock auf Chudan-Höhe.' },
    { nr: 5,  technik: 'Gedan-Barai',      seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm-Block nach unten.' },
    { nr: 6,  technik: 'Uraken-Uchi',      seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Rückhand-Schlag zur Seite (Yoko-Uraken) auf Kopfhöhe. Arm schnappt aus der Beuge heraus.' },
    { nr: 7,  technik: 'Gyaku-Zuki Chudan',seite: 'Links',  richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Stand bleibt; linker Gegenstoß auf Chudan-Höhe. Hüftrotation als Kraftgeber.' },
    { nr: 8,  technik: 'Uchi-Uke',         seite: 'Rechts', richtung: 'Rechts wenden',      stand: 'Kokutsu-Dachi',  beschreibung: 'Rechts wenden; rechter Innenblock auf Chudan-Höhe.' },
    { nr: 9,  technik: 'Uraken-Uchi',      seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß tritt vor; linker Rückhand-Schlag zur Seite.' },
    { nr: 10, technik: 'Gyaku-Zuki Chudan',seite: 'Rechts', richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Gegenstoß auf Chudan-Höhe.' },
    { nr: 11, technik: 'Age-Uke',          seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Aufwärtsblock.' },
    { nr: 12, technik: 'Gyaku-Zuki Chudan',seite: 'Rechts', richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Gegenstoß nach der Abwehr.' },
    { nr: 13, technik: 'Age-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß tritt vor; rechter Aufwärtsblock.' },
    { nr: 14, technik: 'Gyaku-Zuki Chudan',seite: 'Links',  richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Gegenstoß.', kiai: true },
    { nr: 15, technik: 'Yoko-Geri Keage',  seite: 'Rechts', richtung: 'Rechts wenden',      stand: 'Kiba-Dachi',     beschreibung: 'Rechts wenden in Kiba-Dachi; rechter schnappender Seitfußtritt auf Chudan-Höhe.' },
    { nr: 16, technik: 'Uraken-Uchi',      seite: 'Rechts', richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Rechter Rückhand-Schlag zur Seite (Uraken-Yokomen), Fußstellung bleibt.' },
    { nr: 17, technik: 'Yoko-Geri Keage',  seite: 'Links',  richtung: '180° links wenden',   stand: 'Kiba-Dachi',     beschreibung: 'Vollständig nach links drehen; linker schnappender Seitfußtritt auf Chudan-Höhe.' },
    { nr: 18, technik: 'Uraken-Uchi',      seite: 'Links',  richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Linker Rückhand-Schlag zur Seite.' },
    { nr: 19, technik: 'Gedan-Barai',      seite: 'Links',  richtung: '90° rechts wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm-Block nach unten.' },
    { nr: 20, technik: 'Mae-Geri Chudan',  seite: 'Rechts', richtung: 'Tritt',               stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Vorwärtsfußtritt (schnappend) auf Chudan-Höhe. Knie zuerst anziehen, dann Fußballen schnellt vor.' },
    { nr: 21, technik: 'Oi-Zuki Jodan',    seite: 'Rechts', richtung: 'Tritt landet, Schritt vor', stand: 'Zenkutsu-Dachi', beschreibung: 'Nach Tritt rechter Fuß setzt vor; gleichzeitig rechter Geradstoß auf Jodan-Höhe (Gesicht).' },
    { nr: 22, technik: 'Shuto-Uke',        seite: 'Links',  richtung: 'Links wenden',        stand: 'Kokutsu-Dachi',  beschreibung: 'Links wenden; linker Handkanten-Block in Kokutsu-Dachi, Handkante der kleinen Fingerseite.' },
    { nr: 23, technik: 'Shuto-Uke',        seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Handkanten-Block.' },
    { nr: 24, technik: 'Shuto-Uke',        seite: 'Links',  richtung: '90° rechts wenden',   stand: 'Kokutsu-Dachi',  beschreibung: 'Schräg nach vorne wenden; linker Handkanten-Block.' },
    { nr: 25, technik: 'Shuto-Uke',        seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Handkanten-Block.', kiai: true },
    { nr: 26, technik: 'Shuto-Uke',        seite: 'Links',  richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Linker Fuß tritt vor; linker Handkanten-Block. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN SANDAN  (20 Bewegungen, 2 Kiai)
// Techniken: Uchi-Uke, Morote-Uke, Empi-Uchi, Uraken-Uchi, Kiba-Dachi-Sequenz
// ─────────────────────────────────────────────────────────────────────────────
const heianSandan: KataAblauf = {
  id: 'heian-sandan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Uchi-Uke',          seite: 'Links',  richtung: 'Links wenden',        stand: 'Kokutsu-Dachi',  beschreibung: 'Links wenden; linker Innenblock von innen nach außen.' },
    { nr: 2,  technik: 'Uchi-Uke',          seite: 'Rechts', richtung: '90° links wenden',    stand: 'Kokutsu-Dachi',  beschreibung: 'Leicht nach links drehen; rechter Innenblock. Beide Fäuste auf Chudan-Höhe.' },
    { nr: 3,  technik: 'Uchi-Uke',          seite: 'Links',  richtung: '180° rechts wenden',  stand: 'Kokutsu-Dachi',  beschreibung: 'Vollständig rechts drehen; linker Innenblock.' },
    { nr: 4,  technik: 'Uchi-Uke',          seite: 'Rechts', richtung: '90° rechts wenden',   stand: 'Kokutsu-Dachi',  beschreibung: 'Rechts drehen; rechter Innenblock.' },
    { nr: 5,  technik: 'Morote-Uke',        seite: 'Links',  richtung: '90° links wenden',    stand: 'Kokutsu-Dachi',  beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm blockt, rechte Hand stützt den linken Ellenbogen (Doppelarmblock).' },
    { nr: 6,  technik: 'Morote-Uke',        seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Arm blockt, linke Hand stützt.' },
    { nr: 7,  technik: 'Seiken Chudan',     seite: 'Links',  richtung: 'Schritt vor',         stand: 'Kiba-Dachi',     beschreibung: 'Schritt seitwärts in Kiba-Dachi; linker Geradstoß auf Chudan-Höhe zur Seite.' },
    { nr: 8,  technik: 'Empi-Uchi',         seite: 'Rechts', richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Rechter Ellenbogen-Schlag nach vorne (Mae-Empi) auf Chudan-Höhe.' },
    { nr: 9,  technik: 'Uraken-Uchi',       seite: 'Rechts', richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Rechter Rückhand-Schlag zur Seite (Uraken-Yokomen) auf Jodan-Höhe.', kiai: true },
    { nr: 10, technik: 'Gedan-Barai',       seite: 'Links',  richtung: '270° links wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Weitdrehen nach links; linker Unterarm-Block nach unten.' },
    { nr: 11, technik: 'Gyaku-Zuki Chudan', seite: 'Rechts', richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Gegenstoß auf Chudan-Höhe mit starker Hüftrotation.' },
    { nr: 12, technik: 'Gedan-Barai',       seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig rechts drehen; rechter Unterarm-Block nach unten.' },
    { nr: 13, technik: 'Gyaku-Zuki Chudan', seite: 'Links',  richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Gegenstoß auf Chudan-Höhe.' },
    { nr: 14, technik: 'Seiken Chudan',     seite: 'Rechts', richtung: '90° links wenden',    stand: 'Kiba-Dachi',     beschreibung: 'Zur Hauptrichtung wenden in Kiba-Dachi; rechter Geradstoß zur Seite.' },
    { nr: 15, technik: 'Empi-Uchi',         seite: 'Links',  richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Linker Ellenbogen-Schlag nach vorne.' },
    { nr: 16, technik: 'Uraken-Uchi',       seite: 'Links',  richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Linker Rückhand-Schlag zur Seite auf Jodan-Höhe.', kiai: true },
    { nr: 17, technik: 'Gedan-Barai',       seite: 'Links',  richtung: '270° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Weitdrehen nach rechts; linker Unterarm-Block nach unten.' },
    { nr: 18, technik: 'Gyaku-Zuki Chudan', seite: 'Rechts', richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Gegenstoß auf Chudan-Höhe.' },
    { nr: 19, technik: 'Gedan-Barai',       seite: 'Rechts', richtung: '180° links wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig nach links drehen; rechter Unterarm-Block.' },
    { nr: 20, technik: 'Gyaku-Zuki Chudan', seite: 'Links',  richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Gegenstoß. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN YONDAN  (27 Bewegungen, 2 Kiai)
// Techniken: Kakiwake-Uke, Mae-Geri, Morote-Uke, Keito-Uke, Gyaku-Zuki
// ─────────────────────────────────────────────────────────────────────────────
const heianYondan: KataAblauf = {
  id: 'heian-yondan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Haishu-Uke',        seite: 'Links',  richtung: 'Links wenden',        stand: 'Kokutsu-Dachi',  beschreibung: 'Links wenden; linker Handrücken-Block auf Jodan-Höhe; rechte Handfläche schützt den Bauch.' },
    { nr: 2,  technik: 'Haishu-Uke',        seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Kokutsu-Dachi',  beschreibung: 'Vollständig rechts drehen; rechter Handrücken-Block auf Jodan-Höhe.' },
    { nr: 3,  technik: 'Kakiwake-Uke',      seite: 'Beide',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; beide Unterarme öffnen gleichzeitig nach außen und unten (Doppelblock nach unten-außen).' },
    { nr: 4,  technik: 'Mae-Geri Chudan',   seite: 'Rechts', richtung: 'Tritt',               stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Vorwärtsfußtritt auf Chudan-Höhe. Knie hochziehen, Fußballen schnellt vor.' },
    { nr: 5,  technik: 'Oi-Zuki Jodan',     seite: 'Rechts', richtung: 'Tritt landet, Schritt vor', stand: 'Zenkutsu-Dachi', beschreibung: 'Nach Tritt rechter Fuß setzt vor; rechter Geradstoß auf Jodan-Höhe.' },
    { nr: 6,  technik: 'Mae-Geri Chudan',   seite: 'Links',  richtung: 'Tritt',               stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Vorwärtsfußtritt auf Chudan-Höhe.' },
    { nr: 7,  technik: 'Oi-Zuki Jodan',     seite: 'Links',  richtung: 'Tritt landet, Schritt vor', stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß setzt vor; linker Geradstoß auf Jodan-Höhe.', kiai: true },
    { nr: 8,  technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Links wenden; linker Unterarm-Block nach unten.' },
    { nr: 9,  technik: 'Age-Uke',           seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß vor; rechter Aufwärtsblock.' },
    { nr: 10, technik: 'Gedan-Barai',       seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig rechts drehen; rechter Unterarm-Block nach unten.' },
    { nr: 11, technik: 'Age-Uke',           seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß vor; linker Aufwärtsblock.' },
    { nr: 12, technik: 'Keito-Uke',         seite: 'Links',  richtung: '90° links wenden',    stand: 'Kokutsu-Dachi',  beschreibung: 'Zur Hauptrichtung wenden; linker Hahnenkamm-Block (Handgelenk nach oben gebogen) auf Jodan-Höhe.' },
    { nr: 13, technik: 'Gyaku-Zuki Chudan', seite: 'Rechts', richtung: 'Stand halten',        stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Gegenstoß auf Chudan-Höhe.' },
    { nr: 14, technik: 'Keito-Uke',         seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß vor; rechter Hahnenkamm-Block auf Jodan-Höhe.' },
    { nr: 15, technik: 'Gyaku-Zuki Chudan', seite: 'Links',  richtung: 'Stand halten',        stand: 'Kokutsu-Dachi',  beschreibung: 'Linker Gegenstoß auf Chudan-Höhe.' },
    { nr: 16, technik: 'Morote-Uke',        seite: 'Links',  richtung: 'Rechts wenden',      stand: 'Kokutsu-Dachi',  beschreibung: 'Rechts wenden; linker Unterarm blockt, rechte Hand stützt (Doppelarmblock).' },
    { nr: 17, technik: 'Morote-Uke',        seite: 'Rechts', richtung: '180° links wenden',   stand: 'Kokutsu-Dachi',  beschreibung: 'Vollständig links drehen; rechter Unterarm blockt, linke Hand stützt.' },
    { nr: 18, technik: 'Morote-Uke',        seite: 'Links',  richtung: '90° rechts wenden',   stand: 'Kokutsu-Dachi',  beschreibung: 'Schräg wenden; linker Unterarm blockt, rechte Hand stützt.' },
    { nr: 19, technik: 'Morote-Uke',        seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß tritt vor; rechter Arm blockt, linke Hand stützt.' },
    { nr: 20, technik: 'Yoko-Geri Keage',   seite: 'Rechts', richtung: 'Tritt zur Seite',     stand: 'Kiba-Dachi',     beschreibung: 'Rechter schnappender Seitfußtritt zur Seite; gleichzeitig Empi-Uchi mit dem rechten Ellenbogen nach hinten.' },
    { nr: 21, technik: 'Empi-Uchi Ushiro',  seite: 'Rechts', richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Rechter Ellenbogen-Schlag nach hinten (Ushiro-Empi) gleichzeitig mit dem Seitkick.' },
    { nr: 22, technik: 'Yoko-Geri Keage',   seite: 'Links',  richtung: 'Schritt in Kiba-Dachi', stand: 'Kiba-Dachi',   beschreibung: 'Linker schnappender Seitfußtritt; gleichzeitig linker Ellenbogen nach hinten.' },
    { nr: 23, technik: 'Empi-Uchi Ushiro',  seite: 'Links',  richtung: 'Stand halten',        stand: 'Kiba-Dachi',     beschreibung: 'Linker Ellenbogen-Schlag nach hinten.' },
    { nr: 24, technik: 'Gedan-Barai',       seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm-Block nach unten.' },
    { nr: 25, technik: 'Oi-Zuki Chudan',   seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Fuß vor; rechter Geradstoß Chudan.' },
    { nr: 26, technik: 'Oi-Zuki Chudan',   seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Fuß vor; linker Geradstoß Chudan.', kiai: true },
    { nr: 27, technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Links wenden; linker Unterarm-Block. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HEIAN GODAN  (23 Bewegungen, 2 Kiai)
// Techniken: Gedan-Barai, Uchi-Uke, Morote-Uke, Kosa-Tobi (Kreuzsprung), Juji-Uke
// ─────────────────────────────────────────────────────────────────────────────
const heianGodan: KataAblauf = {
  id: 'heian-godan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Links wenden; linker Unterarm-Block nach unten-außen.' },
    { nr: 2,  technik: 'Uchi-Uke',          seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß vor in Kokutsu-Dachi; rechter Innenblock auf Chudan-Höhe.' },
    { nr: 3,  technik: 'Gedan-Barai',       seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig rechts drehen; rechter Unterarm-Block nach unten.' },
    { nr: 4,  technik: 'Uchi-Uke',          seite: 'Links',  richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Linker Fuß vor in Kokutsu-Dachi; linker Innenblock auf Chudan-Höhe.' },
    { nr: 5,  technik: 'Morote-Uke',        seite: 'Links',  richtung: '90° links wenden',    stand: 'Kokutsu-Dachi',  beschreibung: 'Zur Hauptrichtung wenden; Doppelarmblock.' },
    { nr: 6,  technik: 'Gedan-Juji-Uke',    seite: 'Beide',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Schritt vor; beide Arme kreuzen sich nach unten (Kreuzblock Gedan), Rücken der Fäuste nach unten.' },
    { nr: 7,  technik: 'Morote-Uke',        seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Kokutsu-Dachi',  beschreibung: 'Rechter Fuß vor; Doppelarmblock, rechts aktiv.' },
    { nr: 8,  technik: 'Age-Uke',           seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Links wenden; linker Aufwärtsblock.' },
    { nr: 9,  technik: 'Age-Uke',           seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig rechts drehen; rechter Aufwärtsblock.' },
    { nr: 10, technik: 'Gedan-Juji-Uke',    seite: 'Beide',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; Kreuzblock nach unten, Innenseite der Arme nach oben.' },
    { nr: 11, technik: 'Jodan-Juji-Uke',    seite: 'Beide',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Schritt vor; beide Arme kreuzen sich nach oben (Kreuzblock Jodan), Fäuste nach oben.' },
    { nr: 12, technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Schritt vor; linker Unterarm-Block nach unten.' },
    { nr: 13, technik: 'Gyaku-Zuki Chudan', seite: 'Rechts', richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Gegenstoß auf Chudan-Höhe.', kiai: true },
    { nr: 14, technik: 'Gedan-Barai',       seite: 'Rechts', richtung: 'Rechts wenden',      stand: 'Zenkutsu-Dachi', beschreibung: 'Rechts wenden; rechter Unterarm-Block nach unten.' },
    { nr: 15, technik: 'Gedan-Barai',       seite: 'Links',  richtung: '180° links wenden',   stand: 'Zenkutsu-Dachi', beschreibung: 'Vollständig links drehen; linker Unterarm-Block nach unten.' },
    { nr: 16, technik: 'Uchi-Uke',          seite: 'Rechts', richtung: '90° rechts wenden',   stand: 'Kokutsu-Dachi',  beschreibung: 'Zur Seite wenden; rechter Innenblock.' },
    { nr: 17, technik: 'Mae-Geri Chudan',   seite: 'Links',  richtung: 'Tritt',               stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Vorwärtsfußtritt auf Chudan-Höhe.' },
    { nr: 18, technik: 'Uchi-Uke',          seite: 'Links',  richtung: 'Tritt landet',        stand: 'Kokutsu-Dachi',  beschreibung: 'Linker Fuß setzt vor in Kokutsu-Dachi; linker Innenblock.' },
    { nr: 19, technik: 'Mae-Geri Chudan',   seite: 'Rechts', richtung: 'Tritt',               stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Vorwärtsfußtritt auf Chudan-Höhe.' },
    { nr: 20, technik: 'Kosa-Tobi (Sprung)',seite: 'Beide',  richtung: 'Sprung',              stand: 'Kosa-Dachi',     beschreibung: 'Sprung nach vorne-oben; Arme kreuzen sich im Jodan-Juji-Uke beim Abheben. Landung im Kosa-Dachi (Kreuzstand).' },
    { nr: 21, technik: 'Morote-Uke',        seite: 'Links',  richtung: 'Landung, wenden',     stand: 'Kokutsu-Dachi',  beschreibung: 'Aus der Sprunglandung sofort links wenden; Doppelarmblock.' },
    { nr: 22, technik: 'Morote-Uke',        seite: 'Rechts', richtung: '180° rechts wenden',  stand: 'Kokutsu-Dachi',  beschreibung: 'Vollständig rechts drehen; Doppelarmblock.', kiai: true },
    { nr: 23, technik: 'Gedan-Barai',       seite: 'Links',  richtung: '90° links wenden',    stand: 'Zenkutsu-Dachi', beschreibung: 'Zur Hauptrichtung wenden; linker Unterarm-Block. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TEKKI SHODAN  (29 Bewegungen, 2 Kiai)
// Techniken: Alle in Kiba-Dachi; Nami-Gaeshi, Kagi-Zuki, Empi-Uchi, Gedan-Barai
// ─────────────────────────────────────────────────────────────────────────────
const tekkiShodan: KataAblauf = {
  id: 'tekki-shodan',
  vollstaendig: true,
  schritte: [
    { nr: 1,  technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Schritt links in Kiba-Dachi', stand: 'Kiba-Dachi', beschreibung: 'Seitschritt nach links; linker Unterarm-Block nach unten. Alle Techniken der Tekki-Serie werden im Kiba-Dachi auf einer horizontalen Linie ausgeführt.' },
    { nr: 2,  technik: 'Nami-Gaeshi',       seite: 'Links',  richtung: 'Standhaltend',         stand: 'Kiba-Dachi', beschreibung: 'Linkes Bein schnappt aus dem Kiba-Dachi nach innen (Wellenschlag); Knie zieht hoch, Fußsohle trifft einwärts auf Höhe des Knies.' },
    { nr: 3,  technik: 'Kagi-Zuki Chudan',  seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechter Haken-Stoß auf Chudan-Höhe zur Seite. Faust dreht nach innen.' },
    { nr: 4,  technik: 'Gedan-Barai',       seite: 'Rechts', richtung: 'Schritt rechts',        stand: 'Kiba-Dachi', beschreibung: 'Schritt nach rechts; rechter Unterarm-Block nach unten.' },
    { nr: 5,  technik: 'Nami-Gaeshi',       seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechtes Bein schnappt einwärts (Wellenschlag).' },
    { nr: 6,  technik: 'Kagi-Zuki Chudan',  seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linker Haken-Stoß auf Chudan-Höhe zur Seite.' },
    { nr: 7,  technik: 'Empi-Uchi',         seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt nach links; linker Ellenbogen-Schlag nach vorne (Mae-Empi) auf Chudan-Höhe.' },
    { nr: 8,  technik: 'Uraken-Uchi',       seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linker Rückhand-Schlag nach oben-außen (Jodan). Arm schlägt schnappend aus.' },
    { nr: 9,  technik: 'Morote-Uke',        seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt links; linker Unterarm blockt nach außen, rechte Hand stützt am linken Ellenbogen.' },
    { nr: 10, technik: 'Nami-Gaeshi',       seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linkes Bein Wellenschlag einwärts.' },
    { nr: 11, technik: 'Kagi-Zuki Chudan',  seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechter Haken-Stoß zur Seite. Kiai!', kiai: true },
    { nr: 12, technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt links; linker Unterarm-Block nach unten.' },
    { nr: 13, technik: 'Nami-Gaeshi',       seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linkes Bein Wellenschlag.' },
    { nr: 14, technik: 'Kagi-Zuki Chudan',  seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechter Haken-Stoß.' },
    { nr: 15, technik: 'Gedan-Barai',       seite: 'Rechts', richtung: 'Schritt rechts',        stand: 'Kiba-Dachi', beschreibung: 'Schritt nach rechts; rechter Unterarm-Block nach unten.' },
    { nr: 16, technik: 'Nami-Gaeshi',       seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechtes Bein Wellenschlag.' },
    { nr: 17, technik: 'Kagi-Zuki Chudan',  seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linker Haken-Stoß.' },
    { nr: 18, technik: 'Empi-Uchi',         seite: 'Rechts', richtung: 'Schritt rechts',        stand: 'Kiba-Dachi', beschreibung: 'Schritt rechts; rechter Ellenbogen-Schlag nach vorne.' },
    { nr: 19, technik: 'Uraken-Uchi',       seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechter Rückhand-Schlag Jodan.' },
    { nr: 20, technik: 'Morote-Uke',        seite: 'Rechts', richtung: 'Schritt rechts',        stand: 'Kiba-Dachi', beschreibung: 'Schritt rechts; Doppelarmblock, rechts aktiv.' },
    { nr: 21, technik: 'Nami-Gaeshi',       seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechtes Bein Wellenschlag einwärts.' },
    { nr: 22, technik: 'Kagi-Zuki Chudan',  seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linker Haken-Stoß. Kiai!', kiai: true },
    { nr: 23, technik: 'Empi-Uchi',         seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt links; linker Ellenbogen-Schlag nach vorne.' },
    { nr: 24, technik: 'Uraken-Uchi',       seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linker Rückhand-Schlag Jodan.' },
    { nr: 25, technik: 'Morote-Uke',        seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt links; Doppelarmblock, links aktiv.' },
    { nr: 26, technik: 'Nami-Gaeshi',       seite: 'Links',  richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Linkes Bein Wellenschlag.' },
    { nr: 27, technik: 'Kagi-Zuki Chudan',  seite: 'Rechts', richtung: 'Stand halten',         stand: 'Kiba-Dachi', beschreibung: 'Rechter Haken-Stoß.' },
    { nr: 28, technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Schritt links',         stand: 'Kiba-Dachi', beschreibung: 'Schritt links; linker Unterarm-Block nach unten.' },
    { nr: 29, technik: 'Nami-Gaeshi + Kagi-Zuki', seite: 'Beide', richtung: 'Kombiniert',    stand: 'Kiba-Dachi', beschreibung: 'Linkes Bein Wellenschlag; gleichzeitig rechter Haken-Stoß. Yame.' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// BASSAI DAI  (42 Bewegungen, 2 Kiai) – Schlüsselsequenzen
// ─────────────────────────────────────────────────────────────────────────────
const bassaiDai: KataAblauf = {
  id: 'bassai-dai',
  vollstaendig: false,
  schritte: [
    { nr: 1,  technik: 'Gedan-Juji-Uke',    seite: 'Beide',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Kraftvoller Einstieg: Arme kreuzen sich unten (Jodan-Ansatz → Gedan). Charakteristischer Bassai-Dai-Beginn.' },
    { nr: 2,  technik: 'Morote-Uke',        seite: 'Rechts', richtung: 'Schritt vor, Pivot',   stand: 'Zenkutsu-Dachi', beschreibung: 'Rechter Arm blockt mit Unterstützung der linken Hand.' },
    { nr: 3,  technik: 'Shuto-Uke',         seite: 'Links',  richtung: 'Wenden',              stand: 'Kokutsu-Dachi',  beschreibung: 'Handkanten-Block in Kokutsu-Dachi. Wiederholt rechts und links in dieser Sequenz.' },
    { nr: 4,  technik: 'Age-Uke + Gyaku-Zuki', seite: 'Beide', richtung: 'Kombiniert',       stand: 'Zenkutsu-Dachi', beschreibung: 'Aufwärtsblock gefolgt von sofortigem Gegenstoß – schnelle Kombinationssequenz.' },
    { nr: 5,  technik: 'Yoko-Empi',         seite: 'Rechts', richtung: 'Pivot Kiba-Dachi',    stand: 'Kiba-Dachi',     beschreibung: 'Ellenbogen-Schlag zur Seite aus dem Kiba-Dachi – charakteristisches Bassai-Element.' },
    { nr: 6,  technik: 'Fumikomi + Empi',   seite: 'Links',  richtung: 'Stampftritt + Schlag', stand: 'Kiba-Dachi',    beschreibung: 'Stampftritt (Ferse stampft auf den Boden) kombiniert mit Ellenbogen-Schlag.' },
    { nr: 7,  technik: 'Oi-Zuki Jodan',     seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Abschluss mit Schritt-Stoß auf Kopfhöhe. Kiai!', kiai: true },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// KANKU DAI  (65 Bewegungen, 2 Kiai) – Schlüsselsequenzen
// ─────────────────────────────────────────────────────────────────────────────
const kankunDai: KataAblauf = {
  id: 'kanku-dai',
  vollstaendig: false,
  schritte: [
    { nr: 1,  technik: 'Yoi (Dreieck)',     seite: 'Beide',  richtung: 'Startgeste',          stand: 'Hachiji-Dachi',  beschreibung: 'Charakteristischer Beginn: Beide Hände bilden ein Dreieck vor dem Gesicht, Blick durch das Dreieck zum Himmel ("Den Himmel betrachten").' },
    { nr: 2,  technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Linker Unterarm-Block nach unten – Einstieg in die Techniksequenzen der Kata (enthält alle Heian-Techniken).' },
    { nr: 3,  technik: 'Oi-Zuki Chudan',    seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Standard-Oi-Zuki Chudan als erster Angriff.' },
    { nr: 4,  technik: 'Shuto-Uke Sequenz', seite: 'Beide',  richtung: 'Kokutsu-Dachi Reihe', stand: 'Kokutsu-Dachi',  beschreibung: 'Mehrfache Handkanten-Blöcke rechts-links-rechts-links in Kokutsu-Dachi.' },
    { nr: 5,  technik: 'Yoko-Geri Kekomi',  seite: 'Rechts', richtung: 'Pivot',               stand: 'Kiba-Dachi',     beschreibung: 'Stoßender Seitfußtritt im Kiba-Dachi – kraftvoller Angriff zur Seite.' },
    { nr: 6,  technik: 'Sprung Mae-Geri',   seite: 'Rechts', richtung: 'Sprung',              stand: 'Nage',           beschreibung: 'Hoher Sprung mit Vorwärtskick – eines der spektakulärsten Elemente in Kanku Dai.' },
    { nr: 7,  technik: 'Nukite Jodan',      seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Fingerstoß auf Kopfhöhe (Hals) – typisch für Kanku Dai. Kiai!', kiai: true },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// JION  (47 Bewegungen, 2 Kiai) – Schlüsselsequenzen
// ─────────────────────────────────────────────────────────────────────────────
const jion: KataAblauf = {
  id: 'jion',
  vollstaendig: false,
  schritte: [
    { nr: 1,  technik: 'Musubi-Dachi Rei',  seite: 'Beide',  richtung: 'Startgeste',          stand: 'Musubi-Dachi',   beschreibung: 'Linke Faust in die rechte Handfläche – Jion-spezifische Begrüßungsgeste. Symbolisiert den "Tempel des Mitleids".' },
    { nr: 2,  technik: 'Gedan-Barai',       seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Kraftvoller Unterarm-Block nach unten – Jion zeichnet sich durch tiefe, erdverbundene Techniken aus.' },
    { nr: 3,  technik: 'Age-Uke + Gyaku-Zuki + Gyaku-Zuki', seite: 'Rechts', richtung: 'Kombiniert', stand: 'Zenkutsu-Dachi', beschreibung: 'Aufwärtsblock gefolgt von zwei schnellen Gegenstößen – typische Jion-Dreier-Kombination.' },
    { nr: 4,  technik: 'Morote-Uke',        seite: 'Links',  richtung: 'Schritt vor',         stand: 'Zenkutsu-Dachi', beschreibung: 'Doppelarmblock in tiefem Zenkutsu-Dachi – betont Stärke und Standfestigkeit.' },
    { nr: 5,  technik: 'Oi-Zuki Kombinationen', seite: 'Beide', richtung: 'Schritt vor × 3', stand: 'Zenkutsu-Dachi', beschreibung: 'Dreifache Oi-Zuki-Sequenz vorwärts – zeigt das lineare Kraftprinzip von Jion. Kiai!', kiai: true },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HANGETSU  (41 Bewegungen, 2 Kiai) – Schlüsselsequenzen
// ─────────────────────────────────────────────────────────────────────────────
const hangetsu: KataAblauf = {
  id: 'hangetsu',
  vollstaendig: false,
  schritte: [
    { nr: 1,  technik: 'Hangetsu-Schritt',  seite: 'Links',  richtung: 'Schritt vor halbmondförmig', stand: 'Hangetsu-Dachi', beschreibung: 'Charakteristischer Halbmond-Schritt: Fuß wird in einem Bogen nach innen geführt. Alle Schritte folgen diesem Muster.' },
    { nr: 2,  technik: 'Uchi-Uke + Gyaku-Zuki (langsam)', seite: 'Links', richtung: 'Schritt vor', stand: 'Hangetsu-Dachi', beschreibung: 'Langsame, kontrollierte Innenblock-Gegenstoß-Kombination mit tiefer Ibuki-Atmung. Kime durch Spannung, nicht Geschwindigkeit.' },
    { nr: 3,  technik: 'Uraken-Uchi (langsam)', seite: 'Rechts', richtung: 'Stand halten',    stand: 'Hangetsu-Dachi', beschreibung: 'Langsamer Rückhand-Schlag mit Ibuki-Atmung. Sanchin-ähnliches Spannungsprinzip.' },
    { nr: 4,  technik: 'Oi-Zuki (langsam)',  seite: 'Rechts', richtung: 'Schritt vor',         stand: 'Hangetsu-Dachi', beschreibung: 'Langsamer Schrittstoß – gesamte Kata wird in dieser kontrollierten, langsamen Manier ausgeführt. Kiai!', kiai: true },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EMPI  (37 Bewegungen, 2 Kiai) – Schlüsselsequenzen
// ─────────────────────────────────────────────────────────────────────────────
const empi: KataAblauf = {
  id: 'empi',
  vollstaendig: false,
  schritte: [
    { nr: 1,  technik: 'Age-Uke',           seite: 'Links',  richtung: 'Links wenden',        stand: 'Zenkutsu-Dachi', beschreibung: 'Aufwärtsblock aus tiefem Stand – Empi beginnt mit niedrigen, fließenden Positionen (charakteristisches Positionswechsel-Element).' },
    { nr: 2,  technik: 'Niederknien + Haito', seite: 'Rechts', richtung: 'Tief niedergehen',  stand: 'Tief',           beschreibung: 'Niedrige Position mit Haito-Uke (Handkanten-Innenseite-Block) – "Schwalbe die nah über Wasser fliegt".' },
    { nr: 3,  technik: 'Aufspringen + Age-Uke', seite: 'Links', richtung: 'Aufstehen + Schritt', stand: 'Zenkutsu-Dachi', beschreibung: 'Schnelles Aufstehen mit simultanen Aufwärtsblock – dramatischer Kontrast von tief zu hoch.' },
    { nr: 4,  technik: 'Gyaku-Zuki Jodan',  seite: 'Links',  richtung: 'Stand halten',        stand: 'Zenkutsu-Dachi', beschreibung: 'Gegenstoß auf Jodan. Kiai!', kiai: true },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// STUBS für fortgeschrittene Kata (vollstaendig: false, schritte: [])
// ─────────────────────────────────────────────────────────────────────────────
const emptyAblauf = (id: string): KataAblauf => ({ id, vollstaendig: false, schritte: [] });

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT MAP
// ─────────────────────────────────────────────────────────────────────────────
export const kataAblaufMap: Record<string, KataAblauf> = {
  'heian-shodan':   heianShodan,
  'heian-nidan':    heianNidan,
  'heian-sandan':   heianSandan,
  'heian-yondan':   heianYondan,
  'heian-godan':    heianGodan,
  'tekki-shodan':   tekkiShodan,
  'tekki-nidan':    emptyAblauf('tekki-nidan'),
  'tekki-sandan':   emptyAblauf('tekki-sandan'),
  'bassai-dai':     bassaiDai,
  'bassai-sho':     emptyAblauf('bassai-sho'),
  'kanku-dai':      kankunDai,
  'kanku-sho':      emptyAblauf('kanku-sho'),
  'empi':           empi,
  'hangetsu':       hangetsu,
  'jion':           jion,
  'jitte':          emptyAblauf('jitte'),
  'jiin':           emptyAblauf('jiin'),
  'gankaku':        emptyAblauf('gankaku'),
  'nijushiho':      emptyAblauf('nijushiho'),
  'sochin':         emptyAblauf('sochin'),
  'meikyo':         emptyAblauf('meikyo'),
  'chinte':         emptyAblauf('chinte'),
  'unsu':           emptyAblauf('unsu'),
  'wankan':         emptyAblauf('wankan'),
  'gojushiho-dai':  emptyAblauf('gojushiho-dai'),
  'gojushiho-sho':  emptyAblauf('gojushiho-sho'),
};

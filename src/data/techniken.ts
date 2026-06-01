export type Kategorie = 'Tsuki' | 'Uke' | 'Geri' | 'Uchi';
export type Schwierigkeit = 'Anfänger' | 'Mittel' | 'Fortgeschritten';

export interface Technik {
  id: string;
  nameJP: string;
  nameDE: string;
  kategorie: Kategorie;
  beschreibung: string;
  schwierigkeit: Schwierigkeit;
  kyu: number;
}

export const techniken: Technik[] = [
  {
    id: 'oi-zuki',
    nameJP: '追い突き',
    nameDE: 'Schritt-Faustschlag',
    kategorie: 'Tsuki',
    beschreibung: 'Der Oi-Zuki wird gleichzeitig mit dem vorderen Fuß ausgeführt – Faust und Fuß treffen gleichzeitig auf. Der schlagende Arm dreht sich beim Ausführen von der Unterarm-Innen- zur Außenseite (Pronation). Der Rückzug der anderen Faust (Hikite) zur Hüfte verstärkt die Kraft durch den Gegenzug.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'gyaku-zuki',
    nameJP: '逆突き',
    nameDE: 'Gegen-Faustschlag',
    kategorie: 'Tsuki',
    beschreibung: 'Der Gyaku-Zuki wird mit der Hand ausgeführt, die der vorderen Seite gegenüberliegt – im Zenkutsu-Dachi also mit der hinteren Hand. Die Hüftrotation ist der entscheidende Kraftgeber und muss explosiv eingesetzt werden. Die Schulter bleibt tief, der Ellenbogen zeigt beim Ausführen nach unten.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'kizami-zuki',
    nameJP: '刻み突き',
    nameDE: 'Jab / Stoß-Schlag',
    kategorie: 'Tsuki',
    beschreibung: 'Der Kizami-Zuki ist ein schneller, kurzer Schlag mit der vorderen Hand aus dem Stand heraus. Die Schulter wird nach vorne gestoßen, um die Reichweite zu maximieren ohne den Gleichgewichtsschwerpunkt zu verlagern. Er dient oft als Distanzmesser oder zur Eröffnung einer Kombination.',
    schwierigkeit: 'Mittel',
    kyu: 6,
  },
  {
    id: 'nukite',
    nameJP: '貫手',
    nameDE: 'Fingerstoß',
    kategorie: 'Tsuki',
    beschreibung: 'Der Nukite ist ein Stoß mit den Fingerspitzen und zielt auf weiche Ziele wie Hals, Kehlkopf oder Solarplexus. Die vier Finger sind gestreckt und leicht nach unten gewölbt; der Daumen ist eingezogen. Diese Technik erfordert intensive Konditionierung der Finger und erscheint in Kata wie Heian Godan.',
    schwierigkeit: 'Fortgeschritten',
    kyu: 3,
  },
  {
    id: 'age-uke',
    nameJP: '上げ受け',
    nameDE: 'Aufsteigender Block',
    kategorie: 'Uke',
    beschreibung: 'Der Age-Uke schützt den Kopfbereich, indem der Unterarm in einer aufsteigenden Kreisbewegung von unten-innen nach oben-außen geführt wird. Das blockierende Handgelenk endet auf Stirnhöhe, leicht nach vorne geneigt. Der Ellenbogen ist angewinkelt, und der Unterarm dreht sich am Ende der Bewegung nach außen.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'soto-uke',
    nameJP: '外受け',
    nameDE: 'Außenblock',
    kategorie: 'Uke',
    beschreibung: 'Der Soto-Uke leitet einen Angriff auf die Mittelstufe ab, indem der Unterarm von außen nach innen schwingt. Die blockierende Hand startet auf Höhe des gegenüberliegenden Ohres und schlägt quer vor den Körper. Der Ellenbogen bleibt am Ende der Bewegung auf Schulterhöhe und zeigt nach unten.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'uchi-uke',
    nameJP: '内受け',
    nameDE: 'Innenblock',
    kategorie: 'Uke',
    beschreibung: 'Der Uchi-Uke pariert einen Angriff auf die Mittelstufe, indem der Unterarm von innen nach außen geführt wird. Die Ausführung beginnt vor dem Körper mit der Faust in Hüfthöhe und endet mit dem Unterarm vor der Schulter, senkrecht oder leicht geneigt. Die Faustrückseite zeigt am Ende nach außen.',
    schwierigkeit: 'Anfänger',
    kyu: 8,
  },
  {
    id: 'gedan-barai',
    nameJP: '下段払い',
    nameDE: 'Unterstufenfeger',
    kategorie: 'Uke',
    beschreibung: 'Der Gedan-Barai ist die grundlegendste Abwehrtechnik und schützt den Unterleib und die Beine. Der Unterarm wird aus einer Position nahe dem gegenüberliegenden Ohr diagonal nach unten-außen gefegt. Die blockierende Faust endet eine Faust breit über dem vorderen Knie, und der Arm ist leicht gebeugt.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'shuto-uke',
    nameJP: '手刀受け',
    nameDE: 'Handkanten-Block',
    kategorie: 'Uke',
    beschreibung: 'Der Shuto-Uke wird mit der Handkante (der kleinen Fingerseite) ausgeführt und typischerweise im Kokutsu-Dachi angewandt. Die blockierende Hand beschreibt einen Halbkreis vom gegenüberliegenden Ohr nach vorne-außen. Die andere Hand bleibt offen und wird zum Solarplexus zurückgezogen.',
    schwierigkeit: 'Mittel',
    kyu: 7,
  },
  {
    id: 'mae-geri-keage',
    nameJP: '前蹴り蹴上げ',
    nameDE: 'Vorwärtsfußtritt (schnappend)',
    kategorie: 'Geri',
    beschreibung: 'Der Mae-Geri Keage ist ein schnappender Vorwärtskick, bei dem das Knie zuerst stark angehoben und dann der Fuß mit dem Fußballen vorgeschnellt wird. Der Fuß schnellt in einer whip-artigen Bewegung aus und zieht sofort wieder zurück. Die Hüfte wird leicht nach vorne geschoben, um Reichweite und Kraft zu erhöhen.',
    schwierigkeit: 'Anfänger',
    kyu: 9,
  },
  {
    id: 'mae-geri-kekomi',
    nameJP: '前蹴り蹴込み',
    nameDE: 'Vorwärtsfußtritt (stoßend)',
    kategorie: 'Geri',
    beschreibung: 'Im Gegensatz zum Keage wird beim Kekomi die Kraft linear nach vorne in den Gegner hineingestoßen. Das Knie wird angehoben, die Hüfte schiebt sich vor, und der Fußballen wird gerade nach vorne gedrückt. Der Tritt hat eine durchdringende, penetrierende Qualität und verweilt kurz im Ziel.',
    schwierigkeit: 'Mittel',
    kyu: 7,
  },
  {
    id: 'yoko-geri-keage',
    nameJP: '横蹴り蹴上げ',
    nameDE: 'Seitlicher Fußtritt (schnappend)',
    kategorie: 'Geri',
    beschreibung: 'Der Yoko-Geri Keage wird mit dem Fußballen oder der Fußkante seitwärts ausgeführt und schnappt von unten nach oben. Das Knie wird seitlich angehoben, der Fuß schnappt nach außen oben und kehrt sofort zurück. Die Hüfte kippt leicht zur Seite, um die Ausführung zu ermöglichen.',
    schwierigkeit: 'Mittel',
    kyu: 7,
  },
  {
    id: 'yoko-geri-kekomi',
    nameJP: '横蹴り蹴込み',
    nameDE: 'Seitlicher Fußtritt (stoßend)',
    kategorie: 'Geri',
    beschreibung: 'Der Yoko-Geri Kekomi ist ein kraftvoller Seitwärtsstoß mit der Fußkante (Sokuto). Das Knie wird angehoben, die Hüfte schiebt linear zur Seite, und der Fuß wird horizontal in das Ziel gedrückt. Der Kekomi hat maximale Eindringkraft und wird im Kumite zur Distanzkontrolle eingesetzt.',
    schwierigkeit: 'Mittel',
    kyu: 6,
  },
  {
    id: 'mawashi-geri',
    nameJP: '回し蹴り',
    nameDE: 'Rundtritt',
    kategorie: 'Geri',
    beschreibung: 'Der Mawashi-Geri trifft in einem Bogen von außen mit dem Fußballen oder dem Rist. Das Knie wird seitlich-hoch angehoben und dann in einem horizontalen Kreisbogen nach innen geschwungen. Die Hüftrotation ist entscheidend für Kraft und Reichweite; der Fuß schnappt am Treffpunkt.',
    schwierigkeit: 'Mittel',
    kyu: 6,
  },
  {
    id: 'ushiro-geri',
    nameJP: '後ろ蹴り',
    nameDE: 'Rückwärtsfußtritt',
    kategorie: 'Geri',
    beschreibung: 'Der Ushiro-Geri ist ein stoßender Rückwärtskick, der mit der Ferse (Kakato) ausgeführt wird. Das Knie wird nach vorne angehoben, dann der Fuß gerade nach hinten in das Ziel gestoßen, wobei der Blick über die Schulter auf den Gegner gerichtet bleibt. Die Hüfte schiebt linear nach hinten.',
    schwierigkeit: 'Fortgeschritten',
    kyu: 4,
  },
  {
    id: 'uraken-uchi',
    nameJP: '裏拳打ち',
    nameDE: 'Rückhand-Schlag',
    kategorie: 'Uchi',
    beschreibung: 'Der Uraken-Uchi trifft mit den Knöcheln der Faustrückseite in einer schnappenden Kreisbewegung. Der Arm schwingt aus einer angewinkelten Position seitwärts oder nach vorne und schnappt am Ziel zurück. Er zielt häufig auf das Gesicht oder die Schläfe und ist wegen seiner Schnelligkeit effektiv.',
    schwierigkeit: 'Mittel',
    kyu: 5,
  },
  {
    id: 'empi-uchi',
    nameJP: '猿臂打ち',
    nameDE: 'Ellenbogen-Schlag',
    kategorie: 'Uchi',
    beschreibung: 'Der Empi-Uchi nutzt die Spitze oder die hintere Kante des Ellenbogens als Trefferfläche auf kurze Distanz. Er kann nach vorne (Mae-Empi), zur Seite (Yoko-Empi), nach oben (Age-Empi) oder nach hinten (Ushiro-Empi) geführt werden. Wegen seiner kurzen Reichweite ist er eine gefährliche Nahkampftechnik.',
    schwierigkeit: 'Mittel',
    kyu: 5,
  },
];

export const kategoriefarben: Record<Kategorie, string> = {
  Tsuki: '#C0392B',
  Uke: '#2980B9',
  Geri: '#27AE60',
  Uchi: '#8E44AD',
};

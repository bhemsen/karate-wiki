export type Schwierigkeit = 'Anfänger' | 'Mittel' | 'Fortgeschritten';

export interface Dachi {
  id: string;
  nameJP: string;
  nameDE: string;
  beschreibung: string;
  schwierigkeit: Schwierigkeit;
}

export const dachi: Dachi[] = [
  {
    id: 'heisoku-dachi',
    nameJP: '閉足立ち',
    nameDE: 'Geschlossener Fußstand',
    beschreibung: 'Die Füße stehen vollständig geschlossen nebeneinander, Fersen und Zehen berühren sich. Gewicht gleichmäßig auf beide Beine verteilt. Wird als formeller Ausgangsstand beim Rei (Verbeugung) und als Ausgangsposition in einigen Kata verwendet.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'musubi-dachi',
    nameJP: '結び立ち',
    nameDE: 'Verbundener Stand / V-Stand',
    beschreibung: 'Die Fersen berühren sich, während die Fußspitzen in einem 45-Grad-Winkel nach außen zeigen und ein V formen. Gewicht ist gleichmäßig verteilt und der Körper ist aufrecht. Dieser Stand wird als Gruß- und Aufmerksamkeitsstand zu Beginn und Ende des Trainings sowie der Kata verwendet.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'heiko-dachi',
    nameJP: '平行立ち',
    nameDE: 'Paralleler Stand',
    beschreibung: 'Die Füße stehen schulterbreit parallel, Fußspitzen zeigen gerade nach vorne. Das Gewicht ist gleichmäßig auf beide Beine verteilt, die Knie sind leicht gebeugt. Dient als natürlicher, entspannter Ausgangsstand und wird in Kihon-Übungen verwendet.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'hachiji-dachi',
    nameJP: '八字立ち',
    nameDE: 'Natürlicher Stand / Bereitschaftsstand',
    beschreibung: 'Die Füße stehen schulterbreit, die Fußspitzen zeigen in einem Winkel von ca. 30–45 Grad nach außen (ähnelt dem japanischen Zeichen 八 für „acht"). Gewicht ist gleichmäßig verteilt, Knie leicht gebeugt. Er ist der Standard-Ausgangsstand für Kihon.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'zenkutsu-dachi',
    nameJP: '前屈立ち',
    nameDE: 'Vorwärtsgebeugter Stand',
    beschreibung: 'Das vordere Knie ist stark gebeugt (senkrecht über dem Fuß), das hintere Bein ist gestreckt und der hintere Fuß zeigt im 30-Grad-Winkel nach außen. Etwa 60–70 % des Gewichts lastet auf dem vorderen Bein. Er ist der wichtigste Angriffsstand im Shotokan.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'kokutsu-dachi',
    nameJP: '後屈立ち',
    nameDE: 'Rückwärtsgebeugter Stand',
    beschreibung: 'Etwa 70 % des Gewichts lastet auf dem stark gebeugten hinteren Bein, das vordere Bein ist nahezu gestreckt mit nur leicht gebeugtem Knie. Beide Füße befinden sich auf einer Linie, der hintere Fuß zeigt gerade seitwärts. Dieser Stand ist die Grundlage für Shuto-Uke und defensive Techniken.',
    schwierigkeit: 'Anfänger',
  },
  {
    id: 'kiba-dachi',
    nameJP: '騎馬立ち',
    nameDE: 'Reitstand',
    beschreibung: 'Die Füße stehen doppelt schulterbreit parallel, die Knie sind stark nach außen gebeugt wie beim Reiten eines Pferdes. Gewicht ist vollkommen gleichmäßig verteilt, die Oberschenkel sind annähernd parallel zum Boden. Er wird in den Tekki-Kata intensiv trainiert und stärkt Oberschenkel und Hüfte.',
    schwierigkeit: 'Mittel',
  },
  {
    id: 'fudo-dachi',
    nameJP: '不動立ち',
    nameDE: 'Unerschütterlicher Stand (Sochin-Dachi)',
    beschreibung: 'Ähnelt dem Zenkutsu-Dachi, jedoch ist der hintere Fuß mehr nach außen gedreht (ca. 45 Grad) und das hintere Knie ist leicht gebeugt. Die Gewichtsverteilung ist ausgewogener als im Zenkutsu-Dachi (ca. 60/40). Er verbindet Stabilität und Beweglichkeit und ist der Hauptstand der Kata Sochin.',
    schwierigkeit: 'Mittel',
  },
  {
    id: 'sanchin-dachi',
    nameJP: '三戦立ち',
    nameDE: 'Drei-Kämpfe-Stand',
    beschreibung: 'Die Füße stehen schulterbreit, wobei der vordere Fuß direkt vor dem hinteren steht und beide Fußspitzen leicht nach innen zeigen. Knie sind leicht gebeugt und nach innen gedreht, was zu einem festen, verankerten Stand führt. Er erscheint in der Kata Hangetsu.',
    schwierigkeit: 'Mittel',
  },
  {
    id: 'neko-ashi-dachi',
    nameJP: '猫足立ち',
    nameDE: 'Katzenstand',
    beschreibung: 'Etwa 90 % des Gewichts ruht auf dem hinteren, stark gebeugten Bein; das vordere Bein trägt kaum Gewicht und steht auf dem Fußballen. Dieser Stand erlaubt schnelle Tritte mit dem vorderen Fuß ohne Gewichtsverlagerung. Er erscheint in der Kata Wankan.',
    schwierigkeit: 'Mittel',
  },
  {
    id: 'kosa-dachi',
    nameJP: '交差立ち',
    nameDE: 'Kreuzstand',
    beschreibung: 'Ein Bein kreuzt hinter oder vor das andere, die Knie sind gebeugt und berühren sich seitlich. Es handelt sich um einen instabilen Übergangsstand, der kurz eingenommen wird. Er erscheint als dynamisches Element in mehreren Kata und zeigt schnelle Richtungswechsel an.',
    schwierigkeit: 'Mittel',
  },
  {
    id: 'tsuru-ashi-dachi',
    nameJP: '鶴足立ち',
    nameDE: 'Kranichstand',
    beschreibung: 'Der gesamte Körper balanciert auf einem Bein; das andere Knie ist hoch angehoben, der Fuß zeigt nach unten. Er erfordert außergewöhnliche Balance und Stabilität des Standbeins. Er erscheint prominent in der Kata Gankaku und symbolisiert konzentrierte Kraft und Gleichgewicht.',
    schwierigkeit: 'Fortgeschritten',
  },
];

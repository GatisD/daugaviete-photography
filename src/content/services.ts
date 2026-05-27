export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'gimenu-fotosesijas',
    title: 'Ģimeņu fotosesijas',
    subtitle: 'Mirkļi, ko jūsu bērni kādreiz rādīs saviem bērniem',
    image: '/images/family/01',
    description: 'PLACEHOLDER - sieva pievienos pirms launch. ~200-300 vārdi par to, kā sesija norit, atmosfēra, ieteikumi ģimenēm.',
    process: [
      { title: 'Saruna', description: 'Sākam ar īsu sarunu - kāda ir jūsu ģimene, kas ir svarīgi, kur vēlamies fotografēties.' },
      { title: 'Sesija', description: '60-90 minūtes brīvas atmosfēras, bērni var būt bērni, mēs piefiksējam īstos mirkļus.' },
      { title: 'Bildes', description: '2 nedēļas pēc sesijas saņemat 30-50 apstrādātas bildes augstā kvalitātē.' },
    ],
    faq: [
      { question: 'Cik ilgi ilgst sesija?', answer: '60-90 minūtes, atkarībā no bērnu vecuma un noskaņojuma.' },
      { question: 'Kur notiek sesija?', answer: 'Jūsu mājās, dabā vai īpašā vietā - vienojamies pirms sesijas.' },
      { question: 'Cik bildes saņemšu?', answer: '30-50 apstrādātas bildes augstā izšķirtspējā 2 nedēļu laikā.' },
    ],
  },
  {
    slug: 'paru-fotosesijas',
    title: 'Pāru fotosesijas',
    subtitle: 'Jūsu stāsts - tā, kā tas jūtas',
    image: '/images/couples/01',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Iepazīstamies, runājam par jūsu attiecībām un vietām, kas jums ir nozīmīgas.' },
      { title: 'Sesija', description: '60 minūtes mierīgas atmosfēras, kur jūs varat būt īsti.' },
      { title: 'Bildes', description: '2 nedēļas pēc sesijas saņemat 30-40 apstrādātas bildes.' },
    ],
    faq: [
      { question: 'Kāds apģērbs?', answer: 'Iesakām dabīgus toņus, kas saskan ar partneri. Sniegšu papildu ieteikumus pirms sesijas.' },
      { question: 'Vai jāprot pozēt?', answer: 'Nē, es virzu visu sesijas laikā. Jūsu uzdevums ir tikai būt kopā.' },
      { question: 'Cik ilgi gaidīt bildes?', answer: '2 nedēļas pēc sesijas dienas.' },
    ],
  },
  {
    slug: 'portretu-fotosesijas',
    title: 'Portretu fotosesijas',
    subtitle: 'Tu. Tava gaisma. Tavs labākais kadrs.',
    image: '/images/portraits/01',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Vienojamies par mērķi - LinkedIn, mākslinieks, modelis, personīgi portreti.' },
      { title: 'Sesija', description: '45-60 minūtes ar vairākiem gaismas risinājumiem un kadru variantiem.' },
      { title: 'Bildes', description: '1-2 nedēļas pēc sesijas - 15-25 apstrādāti portreti.' },
    ],
    faq: [
      { question: 'Vai der biznesa portretiem?', answer: 'Jā - LinkedIn, CV, web profili - tieši šim mērķim labi piemērots.' },
      { question: 'Studijā vai ārā?', answer: 'Abi varianti pieejami - apspriežam pirms sesijas.' },
      { question: 'Vai varu paņemt vairākus apģērbus?', answer: 'Jā, 2-3 varianti ir lieliski.' },
    ],
  },
  {
    slug: 'kazu-fotografija',
    title: 'Kāzu fotogrāfija',
    subtitle: 'Katrs skatiens. Katra asara. Katrs smiekls.',
    image: '/images/weddings/01',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Tiekamies klātienē vai zvans - apspriežam jūsu kāzu plānus un manu lomu tajā.' },
      { title: 'Sesija', description: 'Visa kāzu diena - no rīta gatavošanās līdz svinībām.' },
      { title: 'Bildes', description: '4-6 nedēļas pēc kāzām saņemat 400-600 apstrādātas bildes.' },
    ],
    faq: [
      { question: 'Cik ilgi strādājat?', answer: 'Visu kāzu dienu - no gatavošanās līdz svinībām, parasti 8-12 stundas.' },
      { question: 'Cik bildes saņemšu?', answer: '400-600 augstas kvalitātes apstrādātas bildes 4-6 nedēļu laikā.' },
      { question: 'Vai braucat ārpus Latvijas?', answer: 'Jā - destination weddings ir iespējami, runājam atsevišķi par nosacījumiem.' },
    ],
  },
];

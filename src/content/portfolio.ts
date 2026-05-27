export type Category = 'family' | 'couples' | 'portraits' | 'weddings';

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  aspectRatio: string;
}

export const portfolio: PortfolioImage[] = [
  // family - 6 items (Jelgava school session)
  { id: 'f1', src: '/images/family/01', alt: 'Bērnu fotosesija dabā', category: 'family', aspectRatio: '3/4' },
  { id: 'f2', src: '/images/family/02', alt: 'Skolas klases portrets', category: 'family', aspectRatio: '2/3' },
  { id: 'f3', src: '/images/family/03', alt: 'Bērni dabā - priecīgi mirkļi', category: 'family', aspectRatio: '4/5' },
  { id: 'f4', src: '/images/family/04', alt: 'Ģimeņu fotosesija ārā', category: 'family', aspectRatio: '3/4' },
  { id: 'f5', src: '/images/family/05', alt: 'Bērnu portrets dabiskā gaismā', category: 'family', aspectRatio: '2/3' },
  { id: 'f6', src: '/images/family/06', alt: 'Jauniešu fotosesija', category: 'family', aspectRatio: '3/4' },
  // couples - 6 items (Sakura session)
  { id: 'c1', src: '/images/couples/01', alt: 'Pāru fotosesija sakuras ziedos', category: 'couples', aspectRatio: '3/4' },
  { id: 'c2', src: '/images/couples/02', alt: 'Pāris pavasarī - romantiski mirkļi', category: 'couples', aspectRatio: '2/3' },
  { id: 'c3', src: '/images/couples/03', alt: 'Mīlestība ziedošā parkā', category: 'couples', aspectRatio: '4/5' },
  { id: 'c4', src: '/images/couples/04', alt: 'Pāru portrets dabā', category: 'couples', aspectRatio: '3/4' },
  { id: 'c5', src: '/images/couples/05', alt: 'Romantisks pāris pavasarī', category: 'couples', aspectRatio: '2/3' },
  { id: 'c6', src: '/images/couples/06', alt: 'Pāris pie sakuras kokiem', category: 'couples', aspectRatio: '3/4' },
  // portraits - 6 items
  { id: 'p1', src: '/images/portraits/01', alt: 'Sievietes portrets dabiskā gaismā', category: 'portraits', aspectRatio: '3/4' },
  { id: 'p2', src: '/images/portraits/02', alt: 'Portrets ar dramatisku gaismu', category: 'portraits', aspectRatio: '2/3' },
  { id: 'p3', src: '/images/portraits/03', alt: 'Elegants sievietes portrets', category: 'portraits', aspectRatio: '4/5' },
  { id: 'p4', src: '/images/portraits/04', alt: 'Portrets dabā', category: 'portraits', aspectRatio: '3/4' },
  { id: 'p5', src: '/images/portraits/05', alt: 'Māksliniecisks portrets', category: 'portraits', aspectRatio: '2/3' },
  { id: 'p6', src: '/images/portraits/06', alt: 'Sievietes portrets ārpus telpām', category: 'portraits', aspectRatio: '3/4' },
  // weddings - 6 items
  { id: 'w1', src: '/images/weddings/01', alt: 'Kāzu fotogrāfija - īpašs brīdis', category: 'weddings', aspectRatio: '3/4' },
  { id: 'w2', src: '/images/weddings/02', alt: 'Kāzu pāris portrets', category: 'weddings', aspectRatio: '2/3' },
  { id: 'w3', src: '/images/weddings/03', alt: 'Kāzu mirkļi', category: 'weddings', aspectRatio: '4/5' },
  { id: 'w4', src: '/images/weddings/04', alt: 'Kāzu reportāža', category: 'weddings', aspectRatio: '3/4' },
  { id: 'w5', src: '/images/weddings/05', alt: 'Svinīgs kāzu brīdis', category: 'weddings', aspectRatio: '2/3' },
  { id: 'w6', src: '/images/weddings/06', alt: 'Kāzu dienas emocijas', category: 'weddings', aspectRatio: '3/4' },
];

export const previewImages = portfolio.slice(0, 6);

export type Category = 'family' | 'couples' | 'portraits' | 'weddings';

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  aspectRatio: string;
}

export const portfolio: PortfolioImage[] = [
  { id: 'f1', src: '/images/family/01', alt: 'Gimenes fotosesija - vakara saule', category: 'family', aspectRatio: '3/4' },
  { id: 'f2', src: '/images/family/02', alt: 'Berns smejas daba', category: 'family', aspectRatio: '2/3' },
  { id: 'c1', src: '/images/couples/01', alt: 'Paris pie juras saulrieta', category: 'couples', aspectRatio: '3/4' },
  { id: 'c2', src: '/images/couples/02', alt: 'Para portrets melnbalts', category: 'couples', aspectRatio: '2/3' },
  { id: 'p1', src: '/images/portraits/01', alt: 'Sievietes portrets dabiga gaisme', category: 'portraits', aspectRatio: '3/4' },
  { id: 'p2', src: '/images/portraits/02', alt: 'Virietis biznesa portrets', category: 'portraits', aspectRatio: '2/3' },
  { id: 'w1', src: '/images/weddings/01', alt: 'Kazu pirmais skupsts', category: 'weddings', aspectRatio: '3/4' },
  { id: 'w2', src: '/images/weddings/02', alt: 'Ligava gatavojas', category: 'weddings', aspectRatio: '2/3' },
];

export const previewImages = portfolio.slice(0, 6);

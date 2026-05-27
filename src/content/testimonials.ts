export interface Testimonial {
  id: string;
  text: string;
  author: string;
  serviceType: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'PLACEHOLDER - sievai jāpievieno reāla atsauksme. Šeit apraksts, kāpēc bija lielisks darbs ar fotogrāfu.',
    author: 'Anna un Jānis',
    serviceType: 'Kāzu fotogrāfija',
  },
  {
    id: 't2',
    text: 'PLACEHOLDER - atsauksme no ģimenes sesijas klienta.',
    author: 'Ieva ar ģimeni',
    serviceType: 'Ģimenes fotosesija',
  },
  {
    id: 't3',
    text: 'PLACEHOLDER - atsauksme no pāru sesijas klienta.',
    author: 'Linda un Roberts',
    serviceType: 'Pāru fotosesija',
  },
];

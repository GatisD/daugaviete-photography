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
    text: 'PLACEHOLDER - sievai japievieno reala atsauksme. Seit aprakstu, kapec bija lielisks darbs ar fotografu.',
    author: 'Anna un Janis',
    serviceType: 'Kazu fotografija',
  },
  {
    id: 't2',
    text: 'PLACEHOLDER - atsauksme no gimenou sesijas klienta.',
    author: 'Ieva ar gimeni',
    serviceType: 'Gimenou fotosesija',
  },
  {
    id: 't3',
    text: 'PLACEHOLDER - atsauksme no para sesijas klienta.',
    author: 'Linda un Roberts',
    serviceType: 'Pau fotosesija',
  },
];

import ServicePageTemplate from './ServicePageTemplate';
import { services } from '../../content/services';

export default function CouplePhotography() {
  const service = services.find((s) => s.slug === 'paru-fotosesijas')!;
  return <ServicePageTemplate service={service} />;
}

import ServicePageTemplate from './ServicePageTemplate';
import { services } from '../../content/services';

export default function PortraitPhotography() {
  const service = services.find((s) => s.slug === 'portretu-fotosesijas')!;
  return <ServicePageTemplate service={service} />;
}

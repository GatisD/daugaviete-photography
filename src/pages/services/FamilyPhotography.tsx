import ServicePageTemplate from './ServicePageTemplate';
import { services } from '../../content/services';

export default function FamilyPhotography() {
  const service = services.find((s) => s.slug === 'gimenu-fotosesijas')!;
  return <ServicePageTemplate service={service} />;
}

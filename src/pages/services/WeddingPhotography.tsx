import ServicePageTemplate from './ServicePageTemplate';
import { services } from '../../content/services';

export default function WeddingPhotography() {
  const service = services.find((s) => s.slug === 'kazu-fotografija')!;
  return <ServicePageTemplate service={service} />;
}

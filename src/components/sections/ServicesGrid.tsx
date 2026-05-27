import { Link } from 'react-router-dom';
import { services } from '../../content/services';
import Image from '../ui/Image';
import ImageReveal from '../animations/ImageReveal';

export default function ServicesGrid() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PAKALPOJUMI</p>
          <h2 className="text-h2 font-serif font-light">Ko es piedāvāju</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <ImageReveal key={service.slug} delay={i * 0.1}>
              <Link to={`/${service.slug}`} className="group block">
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    aspectRatio="3/4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-h3 mb-2">{service.title}</h3>
                  <p className="text-text-secondary italic font-serif">{service.subtitle}</p>
                </div>
              </Link>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

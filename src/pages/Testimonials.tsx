import Button from '../components/ui/Button';
import ImageReveal from '../components/animations/ImageReveal';
import { testimonials } from '../content/testimonials';
import SEO from '../components/ui/SEO';

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Klientu atsauksmes"
        description="Lasi, ko Daugaviete Photography klienti stāsta par sadarbību - ģimenes, pāri, kāzu klienti."
        path="/atsauksmes"
      />
      <section className="pt-12 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">ATSAUKSMES</p>
          <h1 className="text-h1 font-serif font-light">Klienti stasta</h1>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {testimonials.map((t, i) => (
              <ImageReveal key={t.id} delay={(i % 6) * 0.08}>
                <blockquote className="text-text-secondary leading-relaxed text-lg italic font-serif">
                  "{t.text}"
                </blockquote>
                <footer className="mt-6 border-t border-border-subtle pt-4">
                  <p className="font-serif text-lg">{t.author}</p>
                  <p className="text-xs tracking-widest text-text-muted mt-1">{t.serviceType}</p>
                </footer>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-accent text-bg-primary text-center">
        <div className="container-app max-w-2xl">
          <h2 className="text-h2 font-serif font-light mb-6">Gatavs savai sesijai?</h2>
          <Button to="/sazinaties">Pieteikties</Button>
        </div>
      </section>
    </>
  );
}

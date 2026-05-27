import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';
import { testimonials } from '../../content/testimonials';

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);
  return (
    <section className="py-30 bg-bg-secondary">
      <div className="container-app text-center max-w-4xl">
        <p className="text-xs tracking-widest text-accent-gold mb-4">ATSAUKSMES</p>
        <h2 className="text-h2 font-serif font-light mb-16">Ko stāsta klienti</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {preview.map((t, i) => (
            <ImageReveal key={t.id} delay={i * 0.1}>
              <blockquote className="text-text-secondary leading-relaxed">
                "{t.text}"
              </blockquote>
              <footer className="mt-6">
                <p className="font-serif text-lg">{t.author}</p>
                <p className="text-xs tracking-widest text-text-muted mt-1">{t.serviceType}</p>
              </footer>
            </ImageReveal>
          ))}
        </div>

        <div className="mt-16">
          <Button to="/atsauksmes" variant="secondary">Lasīt vairāk</Button>
        </div>
      </div>
    </section>
  );
}

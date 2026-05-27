import ImageReveal from '../animations/ImageReveal';
import type { Service } from '../../content/services';

export default function ServiceProcess({ process }: { process: Service['process'] }) {
  return (
    <section className="py-22 bg-bg-secondary">
      <div className="container-app">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PROCESS</p>
          <h2 className="text-h2 font-serif font-light">Kā mēs strādājam</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {process.map((step, i) => (
            <ImageReveal key={i} delay={i * 0.15} className="text-center">
              <div className="font-serif text-6xl text-accent-gold mb-4">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-h3 mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

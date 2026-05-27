import Image from '../ui/Image';
import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';
import { previewImages } from '../../content/portfolio';

export default function PortfolioPreview() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-widest text-accent-gold mb-4">PORTFOLIO</p>
            <h2 className="text-h2 font-serif font-light">Daži no maniem mīļākajiem mirkļiem</h2>
          </div>
          <Button to="/portfolio" variant="secondary">Skatīt visu portfolio</Button>
        </div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-6">
          {previewImages.map((img, i) => (
            <div key={img.id} className="mb-4 md:mb-6 break-inside-avoid">
              <ImageReveal delay={i * 0.05}>
                <div className="overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="block transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </ImageReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

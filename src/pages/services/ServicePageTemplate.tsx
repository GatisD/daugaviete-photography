import Image from '../../components/ui/Image';
import Button from '../../components/ui/Button';
import ImageReveal from '../../components/animations/ImageReveal';
import ServiceProcess from '../../components/sections/ServiceProcess';
import ServiceFAQ from '../../components/sections/ServiceFAQ';
import { portfolio } from '../../content/portfolio';
import type { Service } from '../../content/services';

interface Props {
  service: Service;
}

const categoryMap: Record<string, 'family' | 'couples' | 'portraits' | 'weddings'> = {
  'gimenu-fotosesijas': 'family',
  'paru-fotosesijas': 'couples',
  'portretu-fotosesijas': 'portraits',
  'kazu-fotografija': 'weddings',
};

export default function ServicePageTemplate({ service }: Props) {
  const images = portfolio.filter((p) => p.category === categoryMap[service.slug]).slice(0, 10);

  return (
    <>
      <section className="relative h-[70vh] overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full block"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-h1 font-serif font-light mb-4">{service.title}</h1>
            <p className="text-xl italic font-serif">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <ImageReveal>
            <p className="text-xs tracking-widest text-accent-gold mb-4">KĀ SESIJA NORIT</p>
            <h2 className="text-h2 font-serif font-light mb-6">Brīva atmosfēra. Reāli mirkļi.</h2>
            <p className="text-text-secondary leading-relaxed">{service.description}</p>
          </ImageReveal>
          <ImageReveal delay={0.1}>
            {images[0] && (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                aspectRatio={images[0].aspectRatio}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </ImageReveal>
        </div>
      </section>

      {images.length > 1 && (
        <section className="py-22 bg-bg-primary">
          <div className="container-app">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.slice(1).map((img, i) => (
                <ImageReveal key={img.id} delay={i * 0.05}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    aspectRatio={img.aspectRatio}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="block"
                  />
                </ImageReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceProcess process={service.process} />
      <ServiceFAQ faq={service.faq} />

      <section className="py-22 bg-bg-accent text-bg-primary text-center">
        <div className="container-app max-w-2xl">
          <h2 className="text-h2 font-serif font-light mb-6">Gatavs uz savu sesiju?</h2>
          <p className="opacity-70 mb-10">Raksti man, lai apspriežam tavu ideju.</p>
          <Button to="/sazinaties">Sazināties</Button>
        </div>
      </section>
    </>
  );
}

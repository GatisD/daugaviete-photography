import Image from '../components/ui/Image';
import Button from '../components/ui/Button';
import ImageReveal from '../components/animations/ImageReveal';
import { about } from '../content/about';

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-app text-center">
          <h1 className="text-h1 font-serif font-light">{about.hero.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-bg-primary">
        <div className="container-app grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ImageReveal>
            <Image
              src={about.hero.image}
              alt={about.hero.imageAlt}
              aspectRatio="3/4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ImageReveal>

          <div>
            {about.story.split('\n\n').map((para, i) => (
              <p key={i} className={`text-text-secondary leading-relaxed mb-6 ${i === 0 ? 'first-letter:font-serif first-letter:text-7xl first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:leading-none' : ''}`}>
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-secondary">
        <div className="container-app">
          <div className="grid md:grid-cols-3 gap-12">
            {about.values.map((v, i) => (
              <ImageReveal key={i} delay={i * 0.1}>
                <h3 className="font-serif text-h3 mb-4">{v.title}</h3>
                <p className="text-text-secondary leading-relaxed">{v.text}</p>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-primary text-center">
        <div className="container-app">
          <Button to="/sazinaties">Sazināties</Button>
        </div>
      </section>
    </>
  );
}

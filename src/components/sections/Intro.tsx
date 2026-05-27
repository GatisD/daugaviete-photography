import ImageReveal from '../animations/ImageReveal';

export default function Intro() {
  return (
    <section className="py-30 bg-bg-secondary">
      <div className="container-app max-w-3xl text-center">
        <ImageReveal>
          <p className="text-xs tracking-widest text-accent-gold mb-6">SVEICINĀTI</p>
          <h2 className="text-h2 font-serif font-light mb-8">
            Es ticu, ka labākās bildes rodas, kad cilvēki aizmirst, ka tos filmē
          </h2>
          <p className="text-text-secondary leading-relaxed">
            PLACEHOLDER - īss intro ~80 vārdu par sievas pieeju, filozofiju, ko klients var sagaidīt.
            Sievai jāpievieno pirms launch.
          </p>
          <p className="mt-8 font-serif italic text-text-secondary">
            - Daugaviete Photography
          </p>
        </ImageReveal>
      </div>
    </section>
  );
}

import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';

export default function FinalCTA() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app text-center max-w-2xl">
        <ImageReveal>
          <h2 className="text-h2 font-serif font-light mb-6">
            Veidosim kopā skaisto
          </h2>
          <p className="text-text-secondary mb-10 leading-relaxed">
            Ja meklē fotogrāfu, kas ne vien fotografē, bet redz - raksti man.
          </p>
          <Button to="/sazinaties">Sazināties</Button>
        </ImageReveal>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';
import ImageReveal from '../components/animations/ImageReveal';

const contact = {
  email: 'sieva@daugavietephotography.com',
  phone: '+371 00 000 000',
  instagram: 'daugavietephotography',
  location: 'Riga, Latvija',
};

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function Contact() {
  return (
    <>
      <section className="pt-12 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">SAZINATIES</p>
          <h1 className="text-h1 font-serif font-light">Veidosim kopa skaisto</h1>
          <p className="mt-6 text-text-secondary max-w-xl mx-auto leading-relaxed">
            Raksti man vai zvani - apspriedisim tavu ideju, atbildeshu uz visiem jautajumiem.
          </p>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app max-w-3xl text-center space-y-12">
          <ImageReveal>
            <div>
              <Mail className="mx-auto text-accent-gold mb-4" size={32} />
              <p className="text-xs tracking-widest text-text-muted mb-2">E-PASTS</p>
              <MagneticButton href={`mailto:${contact.email}`} className="font-serif text-3xl md:text-4xl hover:text-accent-gold transition-colors">
                {contact.email}
              </MagneticButton>
            </div>
          </ImageReveal>

          <ImageReveal delay={0.1}>
            <div>
              <Phone className="mx-auto text-accent-gold mb-4" size={32} />
              <p className="text-xs tracking-widest text-text-muted mb-2">TALRUNIS</p>
              <MagneticButton href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-serif text-3xl md:text-4xl hover:text-accent-gold transition-colors">
                {contact.phone}
              </MagneticButton>
            </div>
          </ImageReveal>

          <ImageReveal delay={0.2}>
            <div className="flex justify-center gap-8 pt-8 border-t border-border-subtle flex-wrap">
              <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors">
                <InstagramIcon size={18} /> @{contact.instagram}
              </a>
              <span className="flex items-center gap-2 text-text-secondary">
                <MapPin size={18} /> {contact.location}
              </span>
            </div>
          </ImageReveal>
        </div>
      </section>
    </>
  );
}

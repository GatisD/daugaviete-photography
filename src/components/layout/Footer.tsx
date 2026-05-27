import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// TODO: replace with real contact info before launch
const contact = {
  email: 'sieva@daugavietephotography.com',
  phone: '+371 00 000 000',
  instagram: 'daugavietephotography',
};

export default function Footer() {
  return (
    <footer className="bg-bg-accent text-bg-primary mt-30">
      <div className="container-app py-22">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Daugaviete Photography</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Mirkļi, kas paliek. Ģimenes, pāri, portreti, kāzas.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest mb-4 opacity-50">PAKALPOJUMI</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/gimenu-fotosesijas"
                  className="hover:text-accent-gold transition-colors"
                >
                  Ģimeņu fotosesijas
                </Link>
              </li>
              <li>
                <Link
                  to="/paru-fotosesijas"
                  className="hover:text-accent-gold transition-colors"
                >
                  Pāru fotosesijas
                </Link>
              </li>
              <li>
                <Link
                  to="/portretu-fotosesijas"
                  className="hover:text-accent-gold transition-colors"
                >
                  Portretu fotosesijas
                </Link>
              </li>
              <li>
                <Link
                  to="/kazu-fotografija"
                  className="hover:text-accent-gold transition-colors"
                >
                  Kāzu fotogrāfija
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest mb-4 opacity-50">KONTAKTS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-accent-gold transition-colors"
                >
                  <Mail size={14} /> {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-accent-gold transition-colors"
                >
                  <Phone size={14} /> {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent-gold transition-colors"
                >
                  <InstagramIcon size={14} /> @{contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs opacity-50 flex flex-col md:flex-row justify-between gap-2">
          <span>2026 Daugaviete Photography</span>
          <span>Izstrādāja Gatis Daugavietis</span>
        </div>
      </div>
    </footer>
  );
}

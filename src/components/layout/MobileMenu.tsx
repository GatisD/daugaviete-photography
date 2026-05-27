import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const allLinks = [
  { to: '/', label: 'Sakums' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/gimenu-fotosesijas', label: 'Gimenu fotosesijas' },
  { to: '/paru-fotosesijas', label: 'Paru fotosesijas' },
  { to: '/portretu-fotosesijas', label: 'Portretu fotosesijas' },
  { to: '/kazu-fotografija', label: 'Kazu fotografija' },
  { to: '/par-mani', label: 'Par mani' },
  { to: '/atsauksmes', label: 'Atsauksmes' },
  { to: '/sazinaties', label: 'Sazinatīes' },
];

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bg-primary flex flex-col">
      <div className="container-app flex items-center justify-between py-5 border-b border-border-subtle">
        <span className="font-serif text-2xl">Daugaviete Photography</span>
        <button onClick={onClose} aria-label="Aizvērt izvelni">
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center gap-6">
        {allLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="font-serif text-3xl hover:text-accent-gold transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

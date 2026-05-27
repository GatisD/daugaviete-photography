import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'SĀKUMS' },
  { to: '/portfolio', label: 'PORTFOLIO' },
];

const serviceLinks = [
  { to: '/gimenu-fotosesijas', label: 'Ģimeņu fotosesijas' },
  { to: '/paru-fotosesijas', label: 'Pāru fotosesijas' },
  { to: '/portretu-fotosesijas', label: 'Portretu fotosesijas' },
  { to: '/kazu-fotografija', label: 'Kāzu fotogrāfija' },
];

const tailLinks = [
  { to: '/par-mani', label: 'PAR MANI' },
  { to: '/atsauksmes', label: 'ATSAUKSMES' },
  { to: '/sazinaties', label: 'SAZINĀTIES' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Always solid background until Hero component (Task 2.3) sets transparent-over-hero state.
  // Avoids invisible white-on-white menu before hero exists.
  const headerBg =
    'bg-bg-primary/95 backdrop-blur-sm text-text-primary border-b border-border-subtle';
  void isHome;
  void scrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container-app flex items-center justify-between py-5">
          <Link to="/" className="font-serif text-2xl tracking-wide">
            Daugaviete Photography
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-widest">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:text-accent-gold transition-colors"
              >
                {link.label}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent-gold transition-colors">
                PAKALPOJUMI <ChevronDown size={12} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-bg-primary text-text-primary border border-border-subtle shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-5 py-3 text-sm hover:bg-bg-secondary hover:text-accent-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {tailLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:text-accent-gold transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Atvērt izvēlni"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

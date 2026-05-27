import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import LenisProvider from '../animations/LenisProvider';
import PageTransition from '../animations/PageTransition';

export default function Layout() {
  const location = useLocation();
  return (
    <LenisProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-primary focus:text-text-primary focus:px-4 focus:py-2 focus:outline-2 focus:outline-accent-gold"
      >
        Iet uz galveno saturu
      </a>
      <Header />
      <main id="main" className="pt-20">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </LenisProvider>
  );
}

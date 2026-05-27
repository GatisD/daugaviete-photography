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
      <Header />
      <main>
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

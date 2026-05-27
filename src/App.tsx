import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FamilyPhotography from './pages/services/FamilyPhotography';
import CouplePhotography from './pages/services/CouplePhotography';
import PortraitPhotography from './pages/services/PortraitPhotography';
import WeddingPhotography from './pages/services/WeddingPhotography';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/gimenu-fotosesijas" element={<FamilyPhotography />} />
      <Route path="/paru-fotosesijas" element={<CouplePhotography />} />
      <Route path="/portretu-fotosesijas" element={<PortraitPhotography />} />
      <Route path="/kazu-fotografija" element={<WeddingPhotography />} />
      <Route path="/par-mani" element={<About />} />
      <Route path="/atsauksmes" element={<Testimonials />} />
      <Route path="/sazinaties" element={<Contact />} />
    </Routes>
  );
}

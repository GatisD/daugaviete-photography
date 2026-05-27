import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import ServicesGrid from '../components/sections/ServicesGrid';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import FinalCTA from '../components/sections/FinalCTA';
import SEO from '../components/ui/SEO';
import { localBusinessSchema } from '../lib/schema';

export default function Home() {
  return (
    <>
      <SEO
        title="Fotogrāfs Rīgā - ģimenes, pāri, kāzas"
        description="Daugaviete Photography - ģimeņu fotosesijas, pāru fotosesijas, portreti un kāzu fotogrāfija Latvijā. Mirkļi, kas paliek."
        path="/"
        jsonLd={localBusinessSchema}
      />
      <Hero
        imageSrc="/images/hero/main"
        imageAlt="Daugaviete Photography hero"
        tagline="Mirkļi, kas paliek"
        subtitle="Daugaviete Photography"
      />
      <Intro />
      <ServicesGrid />
      <PortfolioPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}

import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import ServicesGrid from '../components/sections/ServicesGrid';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
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

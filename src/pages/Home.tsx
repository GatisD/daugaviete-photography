import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/hero/main"
        imageAlt="Daugaviete Photography hero"
        tagline="Mirkļi, kas paliek"
        subtitle="Daugaviete Photography"
      />
      <ServicesGrid />
    </>
  );
}

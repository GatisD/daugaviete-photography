import { useState, useMemo } from 'react';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import Lightbox from '../components/portfolio/Lightbox';
import { portfolio, type Category } from '../content/portfolio';
import SEO from '../components/ui/SEO';

type Filter = Category | 'all';

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'all' ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <SEO
        title="Portfolio - foto galerija"
        description="Daugaviete Photography portfolio - ģimeņu, pāru, portretu un kāzu fotogrāfija."
        path="/portfolio"
      />
      <section className="pt-12 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PORTFOLIO</p>
          <h1 className="text-h1 font-serif font-light">Visi mirkļi</h1>
        </div>
      </section>

      <section className="py-12 bg-bg-primary">
        <div className="container-app">
          <PortfolioFilter active={filter} onChange={(f) => { setFilter(f); setOpenIndex(null); }} />
          <MasonryGrid images={filtered} onClick={(_, i) => setOpenIndex(i)} />
        </div>
      </section>

      <Lightbox
        images={filtered}
        currentIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onPrev={() => setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))}
        onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length))}
      />
    </>
  );
}

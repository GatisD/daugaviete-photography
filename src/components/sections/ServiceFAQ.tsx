import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Service } from '../../content/services';

export default function ServiceFAQ({ faq }: { faq: Service['faq'] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-22 bg-bg-primary">
      <div className="container-app max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-accent-gold mb-4">FAQ</p>
          <h2 className="text-h2 font-serif font-light">Biežāk uzdotie jautājumi</h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border-subtle">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-accent-gold transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg">{item.question}</span>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {isOpen && (
                  <p className="pb-5 text-text-secondary leading-relaxed">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

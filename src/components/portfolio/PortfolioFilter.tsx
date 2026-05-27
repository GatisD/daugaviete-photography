import type { Category } from '../../content/portfolio';

type Filter = Category | 'all';

interface Props {
  active: Filter;
  onChange: (f: Filter) => void;
}

const options: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Visi' },
  { value: 'family', label: 'Ģimenes' },
  { value: 'couples', label: 'Pāri' },
  { value: 'portraits', label: 'Portreti' },
  { value: 'weddings', label: 'Kāzas' },
];

export default function PortfolioFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {options.map((opt) => {
        const isActive = active === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
              isActive
                ? 'bg-bg-accent text-bg-primary'
                : 'border border-border-subtle hover:border-accent-gold hover:text-accent-gold'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

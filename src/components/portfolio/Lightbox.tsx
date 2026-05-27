import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioImage } from '../../content/portfolio';

interface Props {
  images: PortfolioImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    if (currentIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  const img = currentIndex !== null ? images[currentIndex] : null;

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors"
            aria-label="Aizverts"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 text-white hover:text-accent-gold transition-colors"
            aria-label="Ieprieksheja"
          >
            <ChevronLeft size={48} />
          </button>

          <motion.img
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={`${img.src}-1440w.jpg`}
            alt={img.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 text-white hover:text-accent-gold transition-colors"
            aria-label="Nakama"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs tracking-widest">
            {(currentIndex ?? 0) + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

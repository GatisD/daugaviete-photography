import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from '../ui/Image';
import CharReveal from '../animations/CharReveal';
import { useReducedMotion } from '../../lib/useReducedMotion';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  tagline: string;
  subtitle?: string;
}

export default function Hero({ imageSrc, imageAlt, tagline, subtitle }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const reduced = useReducedMotion();
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden -mt-20">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} loading="eager" fill objectPosition="center 75%" className="w-full h-full block" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative h-full flex items-center justify-center text-center text-white px-6">
        <div>
          <h1 className="font-serif font-light text-h1">
            <CharReveal text={tagline} delay={0.3} />
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
              className="mt-6 text-lg italic font-serif"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
}

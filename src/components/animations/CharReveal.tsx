import { motion } from 'framer-motion';
import { useReducedMotion } from '../../lib/useReducedMotion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function CharReveal({ text, className, delay = 0 }: Props) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: delay + i * 0.04 }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

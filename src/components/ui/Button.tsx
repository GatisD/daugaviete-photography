import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

const base = 'inline-block px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300';
const variants = {
  primary: 'bg-bg-accent text-bg-primary hover:bg-accent-gold',
  secondary: 'border border-bg-accent text-bg-accent hover:bg-bg-accent hover:text-bg-primary',
};

export default function Button({ to, href, variant = 'primary', children, className = '' }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

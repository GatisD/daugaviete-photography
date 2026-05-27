interface ImageProps {
  src: string;          // base path without extension, e.g. /images/hero/main
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;       // e.g. "(max-width: 768px) 100vw, 50vw"
  aspectRatio?: string; // e.g. "3/2"
}

export default function Image({ src, alt, className, loading = 'lazy', sizes = '100vw', aspectRatio }: ImageProps) {
  return (
    <picture className={className} style={aspectRatio ? { aspectRatio } : undefined}>
      <source
        type="image/avif"
        srcSet={`${src}-320w.avif 320w, ${src}-768w.avif 768w, ${src}-1440w.avif 1440w`}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={`${src}-320w.webp 320w, ${src}-768w.webp 768w, ${src}-1440w.webp 1440w`}
        sizes={sizes}
      />
      <img
        src={`${src}-1440w.jpg`}
        alt={alt}
        loading={loading}
        decoding="async"
        className="w-full h-full object-cover"
      />
    </picture>
  );
}

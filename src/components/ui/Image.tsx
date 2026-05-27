interface ImageProps {
  src: string;          // base path without extension, e.g. /images/hero/main
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;       // e.g. "(max-width: 768px) 100vw, 50vw"
  aspectRatio?: string; // e.g. "3/2" - forces specific ratio, image gets cropped to fit
  fill?: boolean;       // make image fill parent container (object-cover) - for hero, full-bleed sections
  objectPosition?: string; // e.g. "center 75%" - controls focal point when object-cover crops
}

export default function Image({ src, alt, className, loading = 'lazy', sizes = '100vw', aspectRatio, fill, objectPosition }: ImageProps) {
  // Three modes:
  // - fill: img fills parent (object-cover), parent must have sized container - used for hero, full-bleed
  // - aspectRatio: picture forces specific aspect ratio, img cropped to fit - used for cover grids
  // - natural (default): img at natural ratio (w-full h-auto) - used for masonry, preserves vertical/horizontal
  let imgClass: string;
  if (fill) imgClass = 'w-full h-full object-cover';
  else if (aspectRatio) imgClass = 'w-full h-full object-cover';
  else imgClass = 'w-full h-auto block';
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
        className={imgClass}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </picture>
  );
}

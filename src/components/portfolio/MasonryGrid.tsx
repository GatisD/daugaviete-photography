import Image from '../ui/Image';
import ImageReveal from '../animations/ImageReveal';
import type { PortfolioImage } from '../../content/portfolio';

interface Props {
  images: PortfolioImage[];
  onClick: (img: PortfolioImage, index: number) => void;
}

export default function MasonryGrid({ images, onClick }: Props) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
      {images.map((img, i) => (
        <div key={img.id} className="mb-4 md:mb-6 break-inside-avoid">
          <ImageReveal delay={(i % 6) * 0.05}>
            <button
              onClick={() => onClick(img, i)}
              className="block w-full overflow-hidden group cursor-zoom-in"
              aria-label={`Atvērt: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                aspectRatio={img.aspectRatio}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="block transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </ImageReveal>
        </div>
      ))}
    </div>
  );
}

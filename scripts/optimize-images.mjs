import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const SRC = 'raw-images';
const DST = 'public/images';
const SIZES = [320, 768, 1440];
const FORMATS = [
  { ext: 'avif', options: { quality: 60 } },
  { ext: 'webp', options: { quality: 80 } },
  { ext: 'jpg',  options: { quality: 85, mozjpeg: true } },
];

if (!existsSync(SRC)) {
  console.error(`Source folder ${SRC}/ not found. Create it and add raw images.`);
  process.exit(1);
}

const categories = readdirSync(SRC).filter((d) => !d.startsWith('.'));

for (const category of categories) {
  const srcDir = path.join(SRC, category);
  const dstDir = path.join(DST, category);
  mkdirSync(dstDir, { recursive: true });

  const files = readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const baseName = path.basename(file, path.extname(file));
    const inputPath = path.join(srcDir, file);

    for (const size of SIZES) {
      for (const { ext, options } of FORMATS) {
        const outputPath = path.join(dstDir, `${baseName}-${size}w.${ext}`);
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .toFormat(ext, options)
          .toFile(outputPath);
      }
    }
    console.log(`✓ ${category}/${baseName} (3 sizes × 3 formats)`);
  }
}

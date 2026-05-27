import { writeFileSync } from 'fs';

const BASE = 'https://daugavietephotography.com';
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/portfolio', priority: 0.9 },
  { path: '/gimenu-fotosesijas', priority: 0.9 },
  { path: '/paru-fotosesijas', priority: 0.9 },
  { path: '/portretu-fotosesijas', priority: 0.9 },
  { path: '/kazu-fotografija', priority: 0.9 },
  { path: '/par-mani', priority: 0.7 },
  { path: '/atsauksmes', priority: 0.7 },
  { path: '/sazinaties', priority: 0.8 },
];

const today = new Date().toISOString().split('T')[0];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync('dist/sitemap.xml', xml);
console.log('Sitemap generated');

# Daugaviete Photography Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Production-ready photographer portfolio website at daugavietephotography.com - 9 LV pages, light luxury editorial style after bellephoto.com.au, deployed to Vercel.

**Architecture:** Vite + React 18 + TypeScript + Tailwind + Framer Motion + Lenis. SSG via vite-plugin-ssg. No backend - mailto:/tel: contact CTAs. Static images optimized to AVIF/WebP with `<picture>` srcset.

**Tech Stack:** Vite 5, React 18, TypeScript 5, Tailwind 3, Framer Motion 11, Lenis, React Router 6, vite-plugin-ssg, Vercel.

**Spec:** `docs/superpowers/specs/2026-05-27-website-design.md`

---

## File Structure

```
~/Projects/daugaviete-photography/
├── public/
│   ├── images/
│   │   ├── hero/                    # hero bilžu varianti
│   │   ├── family/                  # ģimeņu fotosesijas
│   │   ├── couples/                 # pāru fotosesijas
│   │   ├── portraits/               # portretu fotosesijas
│   │   ├── weddings/                # kāzu fotogrāfija
│   │   └── about/                   # par mani bildes
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.jpg                 # 1200x630 default OG
│   └── robots.txt
├── src/
│   ├── main.tsx                     # entry point
│   ├── App.tsx                      # router + layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx           # wrapping shell
│   │   │   ├── Header.tsx           # sticky nav
│   │   │   ├── Footer.tsx           # 3-col footer
│   │   │   └── MobileMenu.tsx       # hamburger overlay
│   │   ├── ui/
│   │   │   ├── Button.tsx           # primary/secondary CTA
│   │   │   ├── MagneticButton.tsx   # mouse-following CTA
│   │   │   ├── Image.tsx            # <picture> wrapper ar AVIF/WebP
│   │   │   └── SEO.tsx              # per-page meta tags
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # full-bleed hero with parallax
│   │   │   ├── ServicesGrid.tsx     # 2x2 pakalpojumu grid
│   │   │   ├── PortfolioPreview.tsx # 6-bildes asymmetric grid
│   │   │   ├── TestimonialsPreview.tsx
│   │   │   ├── ServiceProcess.tsx   # 3-soļu Saruna → Sesija → Bildes
│   │   │   ├── ServiceFAQ.tsx       # accordion FAQ
│   │   │   └── FinalCTA.tsx
│   │   ├── portfolio/
│   │   │   ├── MasonryGrid.tsx      # filtrable masonry
│   │   │   ├── PortfolioFilter.tsx  # chips
│   │   │   └── Lightbox.tsx         # zoom + nav + ESC + swipe
│   │   └── animations/
│   │       ├── LenisProvider.tsx    # smooth scroll wrapper
│   │       ├── PageTransition.tsx   # AnimatePresence wrapper
│   │       ├── ImageReveal.tsx      # clip-path reveal on scroll
│   │       └── CharReveal.tsx       # staggered char animation
│   ├── pages/
│   │   ├── Home.tsx                 # /
│   │   ├── Portfolio.tsx            # /portfolio
│   │   ├── services/
│   │   │   ├── ServicePageTemplate.tsx
│   │   │   ├── FamilyPhotography.tsx       # /gimenu-fotosesijas
│   │   │   ├── CouplePhotography.tsx       # /paru-fotosesijas
│   │   │   ├── PortraitPhotography.tsx     # /portretu-fotosesijas
│   │   │   └── WeddingPhotography.tsx      # /kazu-fotografija
│   │   ├── About.tsx                # /par-mani
│   │   ├── Testimonials.tsx         # /atsauksmes
│   │   └── Contact.tsx              # /sazinaties
│   ├── content/
│   │   ├── services.ts              # 4 pakalpojumi - title, subtitle, description, FAQ
│   │   ├── testimonials.ts          # array of testimonials
│   │   ├── portfolio.ts             # all images with category tags
│   │   └── about.ts                 # sievas stāsts (will replace placeholder)
│   ├── lib/
│   │   ├── seo.ts                   # generate meta tags
│   │   ├── schema.ts                # LocalBusiness + Service JSON-LD
│   │   └── utils.ts                 # cn, clsx helpers
│   ├── styles/
│   │   ├── globals.css              # tailwind directives + base styles
│   │   └── fonts.css                # @font-face declarations
│   └── types.ts                     # shared TypeScript types
├── scripts/
│   └── optimize-images.mjs          # batch convert to AVIF/WebP
├── docs/superpowers/
│   ├── specs/2026-05-27-website-design.md
│   └── plans/2026-05-27-website-implementation.md (this file)
├── vercel.json                       # security headers + redirects
├── vite.config.ts                    # SSG + alias config
├── tailwind.config.ts                # custom theme tokens
├── tsconfig.json
├── package.json
└── README.md
```

---

## Phase 1: Foundation (1 day)

### Task 1.1: Initialize Vite + React + TypeScript project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`

- [ ] **Step 1: Scaffold Vite project**

```bash
cd ~/Projects/daugaviete-photography
npm create vite@latest . -- --template react-ts
# When prompted "files exist", choose "Ignore files and continue"
```

- [ ] **Step 2: Install base dependencies**

```bash
npm install
npm install react-router-dom@^6
npm install -D @types/node
```

- [ ] **Step 3: Verify dev server runs**

```bash
npm run dev
# Expected: server on http://localhost:5173, default Vite + React page renders
# Stop with Ctrl+C
```

- [ ] **Step 4: Configure path alias `@/` → `src/`**

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

Edit `tsconfig.json` - add to `compilerOptions`:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```

- [ ] **Step 5: Commit foundation**

```bash
cd ~/Projects/daugaviete-photography
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: scaffold Vite + React + TypeScript project"
```

---

### Task 1.2: Install and configure Tailwind CSS

**Files:**
- Create: `tailwind.config.ts`, `postcss.config.js`, `src/styles/globals.css`
- Modify: `src/main.tsx` (import globals.css)

- [ ] **Step 1: Install Tailwind**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p --ts
```

- [ ] **Step 2: Configure Tailwind theme**

Replace `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF7',
          secondary: '#F2EFE9',
          accent: '#1A1A1A',
        },
        text: {
          primary: '#1F1F1F',
          secondary: '#6B6B6B',
          muted: '#9C9C9C',
        },
        accent: {
          gold: '#B8945C',
          'gold-hover': '#9F7E4A',
        },
        border: {
          subtle: '#E5E1D8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(48px, 8vw, 96px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(32px, 5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(24px, 3vw, 32px)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 3: Create globals.css with base layer**

Create `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-bg-primary text-text-primary font-sans antialiased;
    line-height: 1.7;
  }
  h1, h2, h3, h4 {
    @apply font-serif font-light;
  }
}

@layer utilities {
  .container-app {
    @apply max-w-container mx-auto px-6 md:px-12;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Import globals.css in main.tsx**

Replace `src/main.tsx`:

```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

- [ ] **Step 5: Verify Tailwind compiles**

Replace `src/App.tsx`:

```typescript
export default function App() {
  return (
    <div className="container-app py-22">
      <h1 className="text-h1">Daugaviete Photography</h1>
      <p className="text-text-secondary mt-6">Tailwind compilation test.</p>
    </div>
  );
}
```

Run: `npm run dev`
Expected: Heading in serif Cormorant placeholder (system serif if not loaded yet), off-white bg `#FAFAF7`, container constrained.

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: configure Tailwind with Daugaviete theme tokens"
```

---

### Task 1.3: Self-host Google Fonts

**Files:**
- Create: `src/styles/fonts.css`, `public/fonts/` (directory with `.woff2` files)
- Modify: `src/styles/globals.css` (import fonts.css)

- [ ] **Step 1: Download font files**

```bash
mkdir -p ~/Projects/daugaviete-photography/public/fonts
cd /tmp
# Download Cormorant Garamond (300, 400, 400-italic, 500)
curl -L -o cormorant.zip "https://fonts.google.com/download?family=Cormorant+Garamond"
unzip -j cormorant.zip "static/CormorantGaramond-Light.ttf" "static/CormorantGaramond-Regular.ttf" "static/CormorantGaramond-Italic.ttf" "static/CormorantGaramond-Medium.ttf" -d ~/Projects/daugaviete-photography/public/fonts/
# Download Inter
curl -L -o inter.zip "https://fonts.google.com/download?family=Inter"
unzip -j inter.zip "static/Inter-Regular.ttf" "static/Inter-Medium.ttf" "static/Inter-SemiBold.ttf" -d ~/Projects/daugaviete-photography/public/fonts/
# Convert TTF to WOFF2 (smaller, modern)
cd ~/Projects/daugaviete-photography/public/fonts/
# Use fonttools (pip install fonttools brotli) or online converter
# Resulting files: CormorantGaramond-Light.woff2, etc.
```

If `fonttools` not available: download WOFF2 directly via google-webfonts-helper (https://gwfh.mranftl.com/fonts).

- [ ] **Step 2: Create fonts.css**

Create `src/styles/fonts.css`:

```css
@font-face {
  font-family: 'Cormorant Garamond';
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/CormorantGaramond-Light.woff2') format('woff2');
}
@font-face {
  font-family: 'Cormorant Garamond';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/CormorantGaramond-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'Cormorant Garamond';
  font-weight: 400;
  font-style: italic;
  font-display: swap;
  src: url('/fonts/CormorantGaramond-Italic.woff2') format('woff2');
}
@font-face {
  font-family: 'Cormorant Garamond';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/CormorantGaramond-Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/Inter-Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-weight: 600;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
}
```

- [ ] **Step 3: Import fonts in globals.css**

Add to top of `src/styles/globals.css`:

```css
@import './fonts.css';
```

- [ ] **Step 4: Preload critical fonts in index.html**

Edit `index.html` `<head>`:

```html
<link rel="preload" href="/fonts/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`
Open DevTools → Network → filter Font.
Expected: Both fonts load, body text is Inter, headings are Cormorant Garamond.

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: self-host Cormorant Garamond + Inter fonts"
```

---

### Task 1.4: Set up React Router with 9 routes

**Files:**
- Create: 9 page stubs in `src/pages/`
- Modify: `src/App.tsx` (define routes)

- [ ] **Step 1: Create page stubs**

Create each file with minimal content. Example for `src/pages/Home.tsx`:

```typescript
export default function Home() {
  return (
    <div className="container-app py-22">
      <h1 className="text-h1">Sākums</h1>
    </div>
  );
}
```

Create stubs for all 9 pages:
- `src/pages/Home.tsx` - h1: "Sākums"
- `src/pages/Portfolio.tsx` - h1: "Portfolio"
- `src/pages/services/FamilyPhotography.tsx` - h1: "Ģimeņu fotosesijas"
- `src/pages/services/CouplePhotography.tsx` - h1: "Pāru fotosesijas"
- `src/pages/services/PortraitPhotography.tsx` - h1: "Portretu fotosesijas"
- `src/pages/services/WeddingPhotography.tsx` - h1: "Kāzu fotogrāfija"
- `src/pages/About.tsx` - h1: "Par mani"
- `src/pages/Testimonials.tsx` - h1: "Atsauksmes"
- `src/pages/Contact.tsx` - h1: "Sazināties"

- [ ] **Step 2: Define routes in App.tsx**

Replace `src/App.tsx`:

```typescript
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FamilyPhotography from './pages/services/FamilyPhotography';
import CouplePhotography from './pages/services/CouplePhotography';
import PortraitPhotography from './pages/services/PortraitPhotography';
import WeddingPhotography from './pages/services/WeddingPhotography';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/gimenu-fotosesijas" element={<FamilyPhotography />} />
      <Route path="/paru-fotosesijas" element={<CouplePhotography />} />
      <Route path="/portretu-fotosesijas" element={<PortraitPhotography />} />
      <Route path="/kazu-fotografija" element={<WeddingPhotography />} />
      <Route path="/par-mani" element={<About />} />
      <Route path="/atsauksmes" element={<Testimonials />} />
      <Route path="/sazinaties" element={<Contact />} />
    </Routes>
  );
}
```

- [ ] **Step 3: Verify navigation**

Run: `npm run dev`
Manually visit each URL in browser. Expected: each page renders its h1.

- [ ] **Step 4: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: add 9 routes with page stubs"
```

---

### Task 1.5: Header (sticky nav with transparent-over-hero behavior)

**Files:**
- Create: `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`
- Modify: `src/App.tsx` (wrap in Layout)

- [ ] **Step 1: Install lucide-react for icons**

```bash
npm install lucide-react
```

- [ ] **Step 2: Build Header component**

Create `src/components/layout/Header.tsx`:

```typescript
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'SĀKUMS' },
  { to: '/portfolio', label: 'PORTFOLIO' },
];

const serviceLinks = [
  { to: '/gimenu-fotosesijas', label: 'Ģimeņu fotosesijas' },
  { to: '/paru-fotosesijas', label: 'Pāru fotosesijas' },
  { to: '/portretu-fotosesijas', label: 'Portretu fotosesijas' },
  { to: '/kazu-fotografija', label: 'Kāzu fotogrāfija' },
];

const tailLinks = [
  { to: '/par-mani', label: 'PAR MANI' },
  { to: '/atsauksmes', label: 'ATSAUKSMES' },
  { to: '/sazinaties', label: 'SAZINĀTIES' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerBg = isHome && !scrolled
    ? 'bg-transparent text-white'
    : 'bg-bg-primary/95 backdrop-blur-sm text-text-primary border-b border-border-subtle';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container-app flex items-center justify-between py-5">
          <Link to="/" className="font-serif text-2xl tracking-wide">
            Daugaviete Photography
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-widest">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="hover:text-accent-gold transition-colors">
                {link.label}
              </NavLink>
            ))}

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-accent-gold transition-colors">
                PAKALPOJUMI <ChevronDown size={12} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-bg-primary text-text-primary border border-border-subtle shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link key={link.to} to={link.to} className="block px-5 py-3 text-sm hover:bg-bg-secondary hover:text-accent-gold transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {tailLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="hover:text-accent-gold transition-colors">
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Atvērt izvēlni">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
```

- [ ] **Step 3: Build MobileMenu**

Create `src/components/layout/MobileMenu.tsx`:

```typescript
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const allLinks = [
  { to: '/', label: 'Sākums' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/gimenu-fotosesijas', label: 'Ģimeņu fotosesijas' },
  { to: '/paru-fotosesijas', label: 'Pāru fotosesijas' },
  { to: '/portretu-fotosesijas', label: 'Portretu fotosesijas' },
  { to: '/kazu-fotografija', label: 'Kāzu fotogrāfija' },
  { to: '/par-mani', label: 'Par mani' },
  { to: '/atsauksmes', label: 'Atsauksmes' },
  { to: '/sazinaties', label: 'Sazināties' },
];

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bg-primary flex flex-col">
      <div className="container-app flex items-center justify-between py-5 border-b border-border-subtle">
        <span className="font-serif text-2xl">Daugaviete Photography</span>
        <button onClick={onClose} aria-label="Aizvērt izvēlni">
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center gap-6">
        {allLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={onClose} className="font-serif text-3xl hover:text-accent-gold transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Check:
- Desktop: nav visible, hover dropdown on PAKALPOJUMI works, transparent on `/`, white pēc scroll, white on other pages immediately
- Mobile (DevTools responsive 375px): hamburger opens full-screen overlay menu

- [ ] **Step 5: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: sticky header with transparent-over-hero + mobile menu"
```

---

### Task 1.6: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Build Footer**

Create `src/components/layout/Footer.tsx`:

```typescript
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

// TODO: replace with real contact info before launch
const contact = {
  email: 'sieva@daugavietephotography.com',
  phone: '+371 00 000 000',
  instagram: 'daugavietephotography',
};

export default function Footer() {
  return (
    <footer className="bg-bg-accent text-bg-primary mt-30">
      <div className="container-app py-22">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Daugaviete Photography</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Mirkļi, kas paliek. Ģimenes, pāri, portreti, kāzas.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest mb-4 opacity-50">PAKALPOJUMI</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gimenu-fotosesijas" className="hover:text-accent-gold transition-colors">Ģimeņu fotosesijas</Link></li>
              <li><Link to="/paru-fotosesijas" className="hover:text-accent-gold transition-colors">Pāru fotosesijas</Link></li>
              <li><Link to="/portretu-fotosesijas" className="hover:text-accent-gold transition-colors">Portretu fotosesijas</Link></li>
              <li><Link to="/kazu-fotografija" className="hover:text-accent-gold transition-colors">Kāzu fotogrāfija</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest mb-4 opacity-50">KONTAKTS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                  <Mail size={14} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                  <Phone size={14} /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                  <Instagram size={14} /> @{contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs opacity-50 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 Daugaviete Photography</span>
          <span>Izstrādāja Gatis Daugavietis</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: footer with 3-col layout + contact info placeholders"
```

---

### Task 1.7: Layout wrapper

**Files:**
- Create: `src/components/layout/Layout.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Build Layout**

Create `src/components/layout/Layout.tsx`:

```typescript
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Wire routes through Layout**

Replace `src/App.tsx`:

```typescript
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FamilyPhotography from './pages/services/FamilyPhotography';
import CouplePhotography from './pages/services/CouplePhotography';
import PortraitPhotography from './pages/services/PortraitPhotography';
import WeddingPhotography from './pages/services/WeddingPhotography';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gimenu-fotosesijas" element={<FamilyPhotography />} />
        <Route path="/paru-fotosesijas" element={<CouplePhotography />} />
        <Route path="/portretu-fotosesijas" element={<PortraitPhotography />} />
        <Route path="/kazu-fotografija" element={<WeddingPhotography />} />
        <Route path="/par-mani" element={<About />} />
        <Route path="/atsauksmes" element={<Testimonials />} />
        <Route path="/sazinaties" element={<Contact />} />
      </Route>
    </Routes>
  );
}
```

- [ ] **Step 3: Verify all pages have header + footer**

Run: `npm run dev` and visit each route. Expected: header sticky on top, footer at bottom, content between.

- [ ] **Step 4: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Layout wrapper with Header + Outlet + Footer"
```

---

### Task 1.8: Lenis smooth scroll + Framer Motion page transitions

**Files:**
- Create: `src/components/animations/LenisProvider.tsx`, `src/components/animations/PageTransition.tsx`
- Modify: `src/components/layout/Layout.tsx`

- [ ] **Step 1: Install dependencies**

```bash
npm install lenis framer-motion
```

- [ ] **Step 2: Build LenisProvider**

Create `src/components/animations/LenisProvider.tsx`:

```typescript
import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 3: Build PageTransition**

Create `src/components/animations/PageTransition.tsx`:

```typescript
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Wire into Layout**

Replace `src/components/layout/Layout.tsx`:

```typescript
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import LenisProvider from '../animations/LenisProvider';
import PageTransition from '../animations/PageTransition';

export default function Layout() {
  const location = useLocation();
  return (
    <LenisProvider>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </LenisProvider>
  );
}
```

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`
Expected:
- Scroll uz lapas ir smooth (mīkstāks nekā default)
- Klikšķi starp lapām dod fade + slide transition
- Pārbaudi `prefers-reduced-motion: reduce` Chrome DevTools → Rendering tab - Lenis izslēdzas

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Lenis smooth scroll + Framer Motion page transitions"
```

---

### Task 1.9: vercel.json with security headers + GitHub repo

**Files:**
- Create: `vercel.json`, `.gitignore`, `README.md`

- [ ] **Step 1: Create vercel.json**

Create `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
        },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Note: rewrite needed for SPA fallback. SSG plugin (Task 7) will pre-render each route to static HTML, but rewrites act as fallback.

- [ ] **Step 2: Ensure .gitignore**

Verify `.gitignore` contains:

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
```

- [ ] **Step 3: Create README**

Create `README.md`:

```markdown
# Daugaviete Photography

Photographer portfolio website. Light luxury editorial style.

## Stack
Vite + React 18 + TypeScript + Tailwind + Framer Motion + Lenis + vite-plugin-ssg → Vercel.

## Development

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # static build to dist/
npm run preview
```

## Deploy
Push to `main` → Vercel auto-deploys.

## Spec
See `docs/superpowers/specs/2026-05-27-website-design.md`.
```

- [ ] **Step 4: Create GitHub repo + push**

```bash
cd ~/Projects/daugaviete-photography
gh repo create daugaviete-photography --public --source=. --remote=origin
git push -u origin main
```

- [ ] **Step 5: Connect to Vercel**

```bash
# Install Vercel CLI if not yet
npm i -g vercel
vercel link
# Follow prompts: scope = personal, link to existing project = N, name = daugaviete-photography, directory = ./
vercel --prod
```

Expected: deployment URL like `daugaviete-photography.vercel.app`. Visit to verify it loads.

- [ ] **Step 6: Commit + final foundation commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Vercel security headers + GitHub repo + initial deploy"
git push
```

---

## Phase 2: Sākums + Par mani (1 day)

### Task 2.1: Image component with AVIF/WebP `<picture>` srcset

**Files:**
- Create: `src/components/ui/Image.tsx`

- [ ] **Step 1: Build Image component**

Create `src/components/ui/Image.tsx`:

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Image component with AVIF/WebP srcset"
```

---

### Task 2.2: Image optimization script

**Files:**
- Create: `scripts/optimize-images.mjs`
- Modify: `package.json` (add npm script)

- [ ] **Step 1: Install sharp**

```bash
npm install -D sharp
```

- [ ] **Step 2: Write optimization script**

Create `scripts/optimize-images.mjs`:

```javascript
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const SRC = 'raw-images';        // place source JPG/PNG here
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
```

- [ ] **Step 3: Add npm script**

Edit `package.json` `"scripts"`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "optimize:images": "node scripts/optimize-images.mjs"
}
```

- [ ] **Step 4: Add raw-images to .gitignore**

Add to `.gitignore`:

```
raw-images/
```

- [ ] **Step 5: Document usage in README**

Append to `README.md`:

```markdown
## Image optimization

Place originals in `raw-images/<category>/file.jpg`. Then:

```bash
npm run optimize:images
```

Outputs `public/images/<category>/file-{320,768,1440}w.{avif,webp,jpg}`.
```

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: image optimization script (sharp → AVIF/WebP/JPG × 3 sizes)"
```

---

### Task 2.3: Hero section with parallax

**Files:**
- Create: `src/components/sections/Hero.tsx`, `src/components/animations/CharReveal.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Build CharReveal**

Create `src/components/animations/CharReveal.tsx`:

```typescript
import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function CharReveal({ text, className, delay = 0 }: Props) {
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
```

- [ ] **Step 2: Build Hero**

Create `src/components/sections/Hero.tsx`:

```typescript
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from '../ui/Image';
import CharReveal from '../animations/CharReveal';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  tagline: string;
  subtitle?: string;
}

export default function Hero({ imageSrc, imageAlt, tagline, subtitle }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} loading="eager" className="w-full h-full block" />
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
```

- [ ] **Step 3: Use Hero in Home**

Replace `src/pages/Home.tsx`:

```typescript
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/hero/main"
        imageAlt="Daugaviete Photography hero"
        tagline="Mirkļi, kas paliek"
        subtitle="Daugaviete Photography"
      />
      {/* TODO: more sections in Task 2.4-2.8 */}
    </>
  );
}
```

- [ ] **Step 4: Add hero placeholder image**

Until real images arrive, add a placeholder:

```bash
mkdir -p ~/Projects/daugaviete-photography/public/images/hero
# Download a placeholder from picsum
for size in 320 768 1440; do
  curl -L "https://picsum.photos/${size}/$((size*2/3))" -o ~/Projects/daugaviete-photography/public/images/hero/main-${size}w.jpg
done
# Quick AVIF/WebP variants - skip for placeholder, browser falls back to jpg
```

- [ ] **Step 5: Verify**

Run: `npm run dev`
Expected: full-screen hero, parallax on scroll, "Mirkļi, kas paliek" reveals letter-by-letter, SCROLL indicator pulses.

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Hero with parallax + char reveal"
```

---

### Task 2.4: ImageReveal animation component

**Files:**
- Create: `src/components/animations/ImageReveal.tsx`

- [ ] **Step 1: Build ImageReveal**

Create `src/components/animations/ImageReveal.tsx`:

```typescript
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ImageReveal({ children, delay = 0, className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(20% 0 20% 0)' }}
      animate={inView ? { opacity: 1, clipPath: 'inset(0% 0 0% 0)' } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: ImageReveal animation with clip-path"
```

---

### Task 2.5: ServicesGrid section (2x2)

**Files:**
- Create: `src/content/services.ts`, `src/components/sections/ServicesGrid.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Create services content**

Create `src/content/services.ts`:

```typescript
export interface Service {
  slug: string;
  title: string;          // SEO + UI name
  subtitle: string;       // emocionāls apakšvirsraksts
  image: string;          // /images/<category>/cover
  description: string;    // pakalpojuma apraksts (200-300 vārdi) - PLACEHOLDER, replace pirms launch
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'gimenu-fotosesijas',
    title: 'Ģimeņu fotosesijas',
    subtitle: 'Mirkļi, ko jūsu bērni kādreiz rādīs saviem bērniem',
    image: '/images/family/cover',
    description: 'PLACEHOLDER - sieva pievienos pirms launch. ~200-300 vārdi par to, kā sesija norit, atmosfēra, ieteikumi ģimenēm.',
    process: [
      { title: 'Saruna', description: 'Sākam ar īsu sarunu - kāda ir jūsu ģimene, kas ir svarīgi, kur vēlamies fotografēties.' },
      { title: 'Sesija', description: '60-90 minūtes brīvas atmosfēras, bērni var būt bērni, mēs piefiksējam īstos mirkļus.' },
      { title: 'Bildes', description: '2 nedēļas pēc sesijas saņemat 30-50 apstrādātas bildes augstā kvalitātē.' },
    ],
    faq: [
      { question: 'Cik ilgi ilgst sesija?', answer: '60-90 minūtes, atkarībā no bērnu vecuma un noskaņojuma.' },
      { question: 'Kur notiek sesija?', answer: 'Jūsu mājās, dabā vai īpašā vietā - vienojamies pirms sesijas.' },
      { question: 'Cik bildes saņemšu?', answer: '30-50 apstrādātas bildes augstā izšķirtspējā 2 nedēļu laikā.' },
    ],
  },
  {
    slug: 'paru-fotosesijas',
    title: 'Pāru fotosesijas',
    subtitle: 'Jūsu stāsts - tā, kā tas jūtas',
    image: '/images/couples/cover',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Iepazīstamies, runājam par jūsu attiecībām un vietām, kas jums ir nozīmīgas.' },
      { title: 'Sesija', description: '60 minūtes mierīgas atmosfēras, kur jūs varat būt īsti.' },
      { title: 'Bildes', description: '2 nedēļas pēc sesijas saņemat 30-40 apstrādātas bildes.' },
    ],
    faq: [
      { question: 'Kāds apģērbs?', answer: 'Iesakām dabīgus toņus, kas saskan ar partneri. Sniegšu papildu ieteikumus pirms sesijas.' },
      { question: 'Vai jāprot pozēt?', answer: 'Nē, virza visu sesijas laikā. Jūsu uzdevums ir tikai būt kopā.' },
      { question: 'Cik ilgi gaidīt bildes?', answer: '2 nedēļas pēc sesijas dienas.' },
    ],
  },
  {
    slug: 'portretu-fotosesijas',
    title: 'Portretu fotosesijas',
    subtitle: 'Tu. Tava gaisma. Tavs labākais kadrs.',
    image: '/images/portraits/cover',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Vienojamies par mērķi - LinkedIn, mākslinieks, modelis, personīgi portreti.' },
      { title: 'Sesija', description: '45-60 minūtes ar vairākiem light setups un kadru variantiem.' },
      { title: 'Bildes', description: '1-2 nedēļas pēc sesijas - 15-25 apstrādāti portreti.' },
    ],
    faq: [
      { question: 'Vai der biznesa portreti?', answer: 'Jā - LinkedIn, CV, web profili - tieši šim mērķim labi piemērots.' },
      { question: 'Vai studio vai āra?', answer: 'Abi varianti pieejami - apspriežam pirms sesijas.' },
      { question: 'Vai varu paņemt vairākus apģērbus?', answer: 'Jā, 2-3 varianti ir lieliski.' },
    ],
  },
  {
    slug: 'kazu-fotografija',
    title: 'Kāzu fotogrāfija',
    subtitle: 'Katrs skatiens. Katras asaras. Katrs smiels.',
    image: '/images/weddings/cover',
    description: 'PLACEHOLDER - sieva pievienos pirms launch.',
    process: [
      { title: 'Saruna', description: 'Tiekamies klātienē vai zvans - apspriežam jūsu kāzu plānus un manu lomu tajā.' },
      { title: 'Sesija', description: 'Visa kāzu diena - no rīta gatavošanās līdz svinībām.' },
      { title: 'Bildes', description: '4-6 nedēļas pēc kāzām saņemat 400-600 apstrādātas bildes.' },
    ],
    faq: [
      { question: 'Cik ilgi strādājat?', answer: 'Visu kāzu dienu - no gatavošanās līdz svinībām, parasti 8-12 stundas.' },
      { question: 'Cik bildes saņemšu?', answer: '400-600 augstas kvalitātes apstrādātas bildes 4-6 nedēļu laikā.' },
      { question: 'Vai braucat ārpus Latvijas?', answer: 'Jā - destination weddings ir iespējami, runājam atsevišķi par nosacījumiem.' },
    ],
  },
];
```

- [ ] **Step 2: Build ServicesGrid**

Create `src/components/sections/ServicesGrid.tsx`:

```typescript
import { Link } from 'react-router-dom';
import { services } from '../../content/services';
import Image from '../ui/Image';
import ImageReveal from '../animations/ImageReveal';

export default function ServicesGrid() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PAKALPOJUMI</p>
          <h2 className="text-h2 font-serif font-light">Ko es piedāvāju</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <ImageReveal key={service.slug} delay={i * 0.1}>
              <Link to={`/${service.slug}`} className="group block">
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    aspectRatio="3/4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-h3 mb-2">{service.title}</h3>
                  <p className="text-text-secondary italic font-serif">{service.subtitle}</p>
                </div>
              </Link>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Use in Home**

Edit `src/pages/Home.tsx`:

```typescript
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/hero/main"
        imageAlt="Daugaviete Photography hero"
        tagline="Mirkļi, kas paliek"
        subtitle="Daugaviete Photography"
      />
      <ServicesGrid />
    </>
  );
}
```

- [ ] **Step 4: Add 4 cover placeholders**

```bash
for cat in family couples portraits weddings; do
  mkdir -p ~/Projects/daugaviete-photography/public/images/${cat}
  for size in 320 768 1440; do
    curl -L "https://picsum.photos/seed/${cat}/${size}/$((size*4/3))" -o ~/Projects/daugaviete-photography/public/images/${cat}/cover-${size}w.jpg
  done
done
```

- [ ] **Step 5: Verify**

Run: `npm run dev`. Scroll down from hero - 2x2 services grid revealed with stagger, hover scales image.

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: ServicesGrid 2x2 + services content (placeholders)"
```

---

### Task 2.6: Portfolio preview, testimonials preview, final CTA, intro section

**Files:**
- Create: `src/content/portfolio.ts`, `src/content/testimonials.ts`, `src/components/sections/Intro.tsx`, `src/components/sections/PortfolioPreview.tsx`, `src/components/sections/TestimonialsPreview.tsx`, `src/components/sections/FinalCTA.tsx`, `src/components/ui/Button.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```typescript
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
```

- [ ] **Step 2: Create portfolio content**

Create `src/content/portfolio.ts`:

```typescript
export type Category = 'family' | 'couples' | 'portraits' | 'weddings';

export interface PortfolioImage {
  id: string;
  src: string;             // base path without size suffix
  alt: string;
  category: Category;
  aspectRatio: string;     // e.g. "3/4", "2/3", "16/9"
}

// PLACEHOLDER images - replace with real names after sieva photo selection
export const portfolio: PortfolioImage[] = [
  { id: 'f1', src: '/images/family/01', alt: 'Ģimenes fotosesija - vakara saule', category: 'family', aspectRatio: '3/4' },
  { id: 'f2', src: '/images/family/02', alt: 'Bērns smejas dabā', category: 'family', aspectRatio: '2/3' },
  { id: 'c1', src: '/images/couples/01', alt: 'Pāris pie jūras saulrieta', category: 'couples', aspectRatio: '3/4' },
  { id: 'c2', src: '/images/couples/02', alt: 'Pāra portrets melnbalts', category: 'couples', aspectRatio: '2/3' },
  { id: 'p1', src: '/images/portraits/01', alt: 'Sievietes portrets dabīgā gaismā', category: 'portraits', aspectRatio: '3/4' },
  { id: 'p2', src: '/images/portraits/02', alt: 'Vīrieša biznesa portrets', category: 'portraits', aspectRatio: '2/3' },
  { id: 'w1', src: '/images/weddings/01', alt: 'Kāzu pirmais skūpsts', category: 'weddings', aspectRatio: '3/4' },
  { id: 'w2', src: '/images/weddings/02', alt: 'Līgava gatavojas', category: 'weddings', aspectRatio: '2/3' },
  // ...sieva pievienos pārējos 40-50 ierakstus
];

export const previewImages = portfolio.slice(0, 6);
```

- [ ] **Step 3: Create testimonials content**

Create `src/content/testimonials.ts`:

```typescript
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  serviceType: string;  // "Kāzu fotogrāfija", "Ģimeņu sesija" u.c.
  image?: string;       // optional klienta bilde
}

// PLACEHOLDER - sieva pievienos reālas atsauksmes
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'PLACEHOLDER - sievai jāpievieno reāla atsauksme. Šeit aprakstu, kāpēc bija lielisks darbs ar fotogrāfu.',
    author: 'Anna un Jānis',
    serviceType: 'Kāzu fotogrāfija',
  },
  {
    id: 't2',
    text: 'PLACEHOLDER - atsauksme no ģimeņu sesijas klienta.',
    author: 'Ieva ar ģimeni',
    serviceType: 'Ģimeņu fotosesija',
  },
  {
    id: 't3',
    text: 'PLACEHOLDER - atsauksme no pāra sesijas klienta.',
    author: 'Linda un Roberts',
    serviceType: 'Pāru fotosesija',
  },
];
```

- [ ] **Step 4: Build Intro section**

Create `src/components/sections/Intro.tsx`:

```typescript
import ImageReveal from '../animations/ImageReveal';

export default function Intro() {
  return (
    <section className="py-30 bg-bg-secondary">
      <div className="container-app max-w-3xl text-center">
        <ImageReveal>
          <p className="text-xs tracking-widest text-accent-gold mb-6">SVEICINĀTI</p>
          <h2 className="text-h2 font-serif font-light mb-8">
            Es ticu, ka labākās bildes rodas, kad cilvēki aizmirst, ka tos filmē
          </h2>
          <p className="text-text-secondary leading-relaxed">
            PLACEHOLDER - īss intro ~80 vārdu par sievas pieeju, filozofiju, ko klients var sagaidīt.
            Sievai jāpievieno pirms launch.
          </p>
          <p className="mt-8 font-serif italic text-text-secondary">
            — Daugaviete Photography
          </p>
        </ImageReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Build PortfolioPreview**

Create `src/components/sections/PortfolioPreview.tsx`:

```typescript
import Image from '../ui/Image';
import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';
import { previewImages } from '../../content/portfolio';

export default function PortfolioPreview() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-widest text-accent-gold mb-4">PORTFOLIO</p>
            <h2 className="text-h2 font-serif font-light">Daži no maniem mīļākajiem mirkļiem</h2>
          </div>
          <Button to="/portfolio" variant="secondary">Skatīt visu portfolio</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {previewImages.map((img, i) => (
            <ImageReveal key={img.id} delay={i * 0.05}>
              <div className="overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  aspectRatio={img.aspectRatio}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="block transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Build TestimonialsPreview**

Create `src/components/sections/TestimonialsPreview.tsx`:

```typescript
import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';
import { testimonials } from '../../content/testimonials';

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);
  return (
    <section className="py-30 bg-bg-secondary">
      <div className="container-app text-center max-w-4xl">
        <p className="text-xs tracking-widest text-accent-gold mb-4">ATSAUKSMES</p>
        <h2 className="text-h2 font-serif font-light mb-16">Ko stāsta klienti</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {preview.map((t, i) => (
            <ImageReveal key={t.id} delay={i * 0.1}>
              <blockquote className="text-text-secondary leading-relaxed">
                "{t.text}"
              </blockquote>
              <footer className="mt-6">
                <p className="font-serif text-lg">{t.author}</p>
                <p className="text-xs tracking-widest text-text-muted mt-1">{t.serviceType}</p>
              </footer>
            </ImageReveal>
          ))}
        </div>

        <div className="mt-16">
          <Button to="/atsauksmes" variant="secondary">Lasīt vairāk</Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Build FinalCTA**

Create `src/components/sections/FinalCTA.tsx`:

```typescript
import Button from '../ui/Button';
import ImageReveal from '../animations/ImageReveal';

export default function FinalCTA() {
  return (
    <section className="py-30 bg-bg-primary">
      <div className="container-app text-center max-w-2xl">
        <ImageReveal>
          <h2 className="text-h2 font-serif font-light mb-6">
            Veidosim kopā skaisto
          </h2>
          <p className="text-text-secondary mb-10 leading-relaxed">
            Ja meklē fotogrāfu, kas ne vien fotografē, bet redz - raksti man.
          </p>
          <Button to="/sazinaties">Sazināties</Button>
        </ImageReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Compose Home page**

Replace `src/pages/Home.tsx`:

```typescript
import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import ServicesGrid from '../components/sections/ServicesGrid';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/hero/main"
        imageAlt="Daugaviete Photography hero"
        tagline="Mirkļi, kas paliek"
        subtitle="Daugaviete Photography"
      />
      <Intro />
      <ServicesGrid />
      <PortfolioPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}
```

- [ ] **Step 9: Add portfolio preview placeholder images**

```bash
for cat in family couples portraits weddings; do
  for n in 01 02; do
    for size in 320 768 1440; do
      curl -L "https://picsum.photos/seed/${cat}${n}/${size}/$((size*4/3))" -o ~/Projects/daugaviete-photography/public/images/${cat}/${n}-${size}w.jpg
    done
  done
done
```

- [ ] **Step 10: Verify Home renders all 6 sections**

Run: `npm run dev`. Scroll through hero → intro → services → portfolio → testimonials → final CTA. Each reveals on scroll. Hover scales work.

- [ ] **Step 11: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: complete home page (Intro, PortfolioPreview, Testimonials, FinalCTA)"
```

---

### Task 2.7: About page (Par mani)

**Files:**
- Create: `src/content/about.ts`
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Create about content**

Create `src/content/about.ts`:

```typescript
export const about = {
  hero: {
    image: '/images/about/portrait',
    imageAlt: 'Daugaviete Photography - portrets',
    title: 'Par mani',
  },
  story: `PLACEHOLDER - sievai uzraksta personīgs stāsts pirmajā personā, ~400 vārdi.
  Kāpēc fotografēt, kā viņa nonāca pie tā, kas viņu virza, ko viņa vēlas dot klientam.
  Cilvēciska, godīga valoda - bez korporativisma un buzzwords.

  Sadalīt 2-3 paragrāfos.`,
  values: [
    {
      title: 'Cilvēks, ne poza',
      text: 'Labākās bildes rodas, kad jūs aizmirstat par kameru. Es nevadu pozas - es radu telpu, kur jūs varat būt īsti.',
    },
    {
      title: 'Gaisma kā stāstnieks',
      text: 'Dabīga gaisma, mīkstas ēnas, vakara stundas zelta toņi - tas, kas padara bildi par mākslu.',
    },
    {
      title: 'Mirkļi, kas paliek',
      text: 'Mans mērķis ir radīt bildes, kurās jūs ar prieku atgriezīsieties pēc 10, 20, 30 gadiem.',
    },
  ],
};
```

- [ ] **Step 2: Build About page**

Replace `src/pages/About.tsx`:

```typescript
import Image from '../components/ui/Image';
import Button from '../components/ui/Button';
import ImageReveal from '../components/animations/ImageReveal';
import { about } from '../content/about';

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-app text-center">
          <h1 className="text-h1 font-serif font-light">{about.hero.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-bg-primary">
        <div className="container-app grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ImageReveal>
            <Image
              src={about.hero.image}
              alt={about.hero.imageAlt}
              aspectRatio="3/4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ImageReveal>

          <div>
            {about.story.split('\n\n').map((para, i) => (
              <p key={i} className={`text-text-secondary leading-relaxed mb-6 ${i === 0 ? 'first-letter:font-serif first-letter:text-7xl first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:leading-none' : ''}`}>
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-secondary">
        <div className="container-app">
          <div className="grid md:grid-cols-3 gap-12">
            {about.values.map((v, i) => (
              <ImageReveal key={i} delay={i * 0.1}>
                <h3 className="font-serif text-h3 mb-4">{v.title}</h3>
                <p className="text-text-secondary leading-relaxed">{v.text}</p>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-primary text-center">
        <div className="container-app">
          <Button to="/sazinaties">Sazināties</Button>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Add about portrait placeholder**

```bash
mkdir -p ~/Projects/daugaviete-photography/public/images/about
for size in 320 768 1440; do
  curl -L "https://picsum.photos/seed/portrait/${size}/$((size*4/3))" -o ~/Projects/daugaviete-photography/public/images/about/portrait-${size}w.jpg
done
```

- [ ] **Step 4: Verify**

Run: `npm run dev`, visit `/par-mani`. Expected: title, 2-col layout (bilde kreisajā, teksts labajā), 3 values, CTA.

- [ ] **Step 5: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: About page with story, values, drop-cap"
```

---

## Phase 3: Pakalpojumu lapas (1 day)

### Task 3.1: ServicePageTemplate + ServiceProcess + ServiceFAQ

**Files:**
- Create: `src/components/sections/ServiceProcess.tsx`, `src/components/sections/ServiceFAQ.tsx`, `src/pages/services/ServicePageTemplate.tsx`

- [ ] **Step 1: Build ServiceProcess**

Create `src/components/sections/ServiceProcess.tsx`:

```typescript
import ImageReveal from '../animations/ImageReveal';
import type { Service } from '../../content/services';

export default function ServiceProcess({ process }: { process: Service['process'] }) {
  return (
    <section className="py-22 bg-bg-secondary">
      <div className="container-app">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PROCESS</p>
          <h2 className="text-h2 font-serif font-light">Kā mēs strādājam</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {process.map((step, i) => (
            <ImageReveal key={i} delay={i * 0.15} className="text-center">
              <div className="font-serif text-6xl text-accent-gold mb-4">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-h3 mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build ServiceFAQ**

Create `src/components/sections/ServiceFAQ.tsx`:

```typescript
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Service } from '../../content/services';

export default function ServiceFAQ({ faq }: { faq: Service['faq'] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-22 bg-bg-primary">
      <div className="container-app max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-accent-gold mb-4">FAQ</p>
          <h2 className="text-h2 font-serif font-light">Biežāk uzdotie jautājumi</h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border-subtle">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-accent-gold transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg">{item.question}</span>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {isOpen && (
                  <p className="pb-5 text-text-secondary leading-relaxed">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build ServicePageTemplate**

Create `src/pages/services/ServicePageTemplate.tsx`:

```typescript
import Image from '../../components/ui/Image';
import Button from '../../components/ui/Button';
import ImageReveal from '../../components/animations/ImageReveal';
import ServiceProcess from '../../components/sections/ServiceProcess';
import ServiceFAQ from '../../components/sections/ServiceFAQ';
import { portfolio } from '../../content/portfolio';
import type { Service } from '../../content/services';

interface Props {
  service: Service;
}

export default function ServicePageTemplate({ service }: Props) {
  const images = portfolio.filter((p) => p.category === categoryMap[service.slug]).slice(0, 10);

  return (
    <>
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full block"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-h1 font-serif font-light mb-4">{service.title}</h1>
            <p className="text-xl italic font-serif">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <ImageReveal>
            <p className="text-xs tracking-widest text-accent-gold mb-4">KĀ SESIJA NORIT</p>
            <h2 className="text-h2 font-serif font-light mb-6">Brīva atmosfēra. Reāli mirkļi.</h2>
            <p className="text-text-secondary leading-relaxed">{service.description}</p>
          </ImageReveal>
          <ImageReveal delay={0.1}>
            {images[0] && (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                aspectRatio={images[0].aspectRatio}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </ImageReveal>
        </div>
      </section>

      {images.length > 0 && (
        <section className="py-22 bg-bg-primary">
          <div className="container-app">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.slice(1).map((img, i) => (
                <ImageReveal key={img.id} delay={i * 0.05}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    aspectRatio={img.aspectRatio}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="block"
                  />
                </ImageReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceProcess process={service.process} />
      <ServiceFAQ faq={service.faq} />

      <section className="py-22 bg-bg-accent text-bg-primary text-center">
        <div className="container-app max-w-2xl">
          <h2 className="text-h2 font-serif font-light mb-6">Gatavs uz savu {service.title.toLowerCase()}?</h2>
          <p className="opacity-70 mb-10">Raksti man, lai apspriežam tavu ideju.</p>
          <Button to="/sazinaties">Sazināties</Button>
        </div>
      </section>
    </>
  );
}

const categoryMap: Record<string, 'family' | 'couples' | 'portraits' | 'weddings'> = {
  'gimenu-fotosesijas': 'family',
  'paru-fotosesijas': 'couples',
  'portretu-fotosesijas': 'portraits',
  'kazu-fotografija': 'weddings',
};
```

- [ ] **Step 4: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: ServicePageTemplate + ServiceProcess + ServiceFAQ components"
```

---

### Task 3.2: Wire 4 service pages

**Files:**
- Modify: `src/pages/services/FamilyPhotography.tsx`, `CouplePhotography.tsx`, `PortraitPhotography.tsx`, `WeddingPhotography.tsx`

- [ ] **Step 1: Wire each service**

Replace each service page with template invocation. Example `src/pages/services/FamilyPhotography.tsx`:

```typescript
import ServicePageTemplate from './ServicePageTemplate';
import { services } from '../../content/services';

export default function FamilyPhotography() {
  const service = services.find((s) => s.slug === 'gimenu-fotosesijas')!;
  return <ServicePageTemplate service={service} />;
}
```

Repeat for:
- `CouplePhotography.tsx` → `'paru-fotosesijas'`
- `PortraitPhotography.tsx` → `'portretu-fotosesijas'`
- `WeddingPhotography.tsx` → `'kazu-fotografija'`

- [ ] **Step 2: Verify all 4 service pages**

Run: `npm run dev`. Visit each:
- `/gimenu-fotosesijas`
- `/paru-fotosesijas`
- `/portretu-fotosesijas`
- `/kazu-fotografija`

Each should render hero + description + image grid + process + FAQ + CTA.

- [ ] **Step 3: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: wire 4 service pages through ServicePageTemplate"
```

---

## Phase 4: Portfolio + Atsauksmes (1 day)

### Task 4.1: Portfolio Masonry + Filter + Lightbox

**Files:**
- Create: `src/components/portfolio/PortfolioFilter.tsx`, `src/components/portfolio/MasonryGrid.tsx`, `src/components/portfolio/Lightbox.tsx`
- Modify: `src/pages/Portfolio.tsx`

- [ ] **Step 1: Build PortfolioFilter**

Create `src/components/portfolio/PortfolioFilter.tsx`:

```typescript
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
```

- [ ] **Step 2: Build MasonryGrid (CSS columns approach - no lib needed)**

Create `src/components/portfolio/MasonryGrid.tsx`:

```typescript
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
```

- [ ] **Step 3: Build Lightbox**

Create `src/components/portfolio/Lightbox.tsx`:

```typescript
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
            aria-label="Aizvērt"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 text-white hover:text-accent-gold transition-colors"
            aria-label="Iepriekšējā"
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
            aria-label="Nākamā"
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
```

- [ ] **Step 4: Wire Portfolio page**

Replace `src/pages/Portfolio.tsx`:

```typescript
import { useState, useMemo } from 'react';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import MasonryGrid from '../components/portfolio/MasonryGrid';
import Lightbox from '../components/portfolio/Lightbox';
import { portfolio, type Category } from '../content/portfolio';

type Filter = Category | 'all';

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'all' ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="pt-32 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">PORTFOLIO</p>
          <h1 className="text-h1 font-serif font-light">Visi mirkļi</h1>
        </div>
      </section>

      <section className="py-12 bg-bg-primary">
        <div className="container-app">
          <PortfolioFilter active={filter} onChange={(f) => { setFilter(f); setOpenIndex(null); }} />
          <MasonryGrid images={filtered} onClick={(_, i) => setOpenIndex(i)} />
        </div>
      </section>

      <Lightbox
        images={filtered}
        currentIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onPrev={() => setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))}
        onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length))}
      />
    </>
  );
}
```

- [ ] **Step 5: Verify**

Run: `npm run dev`, visit `/portfolio`. Verify:
- Filter chips switch categories
- Click image opens lightbox
- ESC closes, ← → navigate, click outside closes
- Body scroll locked when lightbox open

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Portfolio with filter + masonry + lightbox"
```

---

### Task 4.2: Testimonials page

**Files:**
- Modify: `src/pages/Testimonials.tsx`

- [ ] **Step 1: Build Testimonials**

Replace `src/pages/Testimonials.tsx`:

```typescript
import Button from '../components/ui/Button';
import ImageReveal from '../components/animations/ImageReveal';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  return (
    <>
      <section className="pt-32 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">ATSAUKSMES</p>
          <h1 className="text-h1 font-serif font-light">Klienti stāsta</h1>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {testimonials.map((t, i) => (
              <ImageReveal key={t.id} delay={(i % 6) * 0.08}>
                <blockquote className="text-text-secondary leading-relaxed text-lg italic font-serif">
                  "{t.text}"
                </blockquote>
                <footer className="mt-6 border-t border-border-subtle pt-4">
                  <p className="font-serif text-lg">{t.author}</p>
                  <p className="text-xs tracking-widest text-text-muted mt-1">{t.serviceType}</p>
                </footer>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 bg-bg-accent text-bg-primary text-center">
        <div className="container-app max-w-2xl">
          <h2 className="text-h2 font-serif font-light mb-6">Gatavs savai sesijai?</h2>
          <Button to="/sazinaties">Pieteikties</Button>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run dev`, visit `/atsauksmes`. Verify grid layout + reveal animations.

- [ ] **Step 3: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Testimonials page with all testimonials grid"
```

---

## Phase 5: Sazināties (0.25 day)

### Task 5.1: Contact page + MagneticButton

**Files:**
- Create: `src/components/ui/MagneticButton.tsx`
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Build MagneticButton**

Create `src/components/ui/MagneticButton.tsx`:

```typescript
import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ href, children, className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.a>
  );
}
```

- [ ] **Step 2: Build Contact page**

Replace `src/pages/Contact.tsx`:

```typescript
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';
import ImageReveal from '../components/animations/ImageReveal';

// TODO: replace with real contact before launch
const contact = {
  email: 'sieva@daugavietephotography.com',
  phone: '+371 00 000 000',
  instagram: 'daugavietephotography',
  location: 'Rīga, Latvija',
};

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-12 bg-bg-primary text-center">
        <div className="container-app">
          <p className="text-xs tracking-widest text-accent-gold mb-4">SAZINĀTIES</p>
          <h1 className="text-h1 font-serif font-light">Veidosim kopā skaisto</h1>
          <p className="mt-6 text-text-secondary max-w-xl mx-auto leading-relaxed">
            Raksti man vai zvani - apspriedīsim tavu ideju, atbildēšu uz visiem jautājumiem.
          </p>
        </div>
      </section>

      <section className="py-22 bg-bg-primary">
        <div className="container-app max-w-3xl text-center space-y-12">
          <ImageReveal>
            <div>
              <Mail className="mx-auto text-accent-gold mb-4" size={32} />
              <p className="text-xs tracking-widest text-text-muted mb-2">E-PASTS</p>
              <MagneticButton href={`mailto:${contact.email}`} className="font-serif text-3xl md:text-4xl hover:text-accent-gold transition-colors">
                {contact.email}
              </MagneticButton>
            </div>
          </ImageReveal>

          <ImageReveal delay={0.1}>
            <div>
              <Phone className="mx-auto text-accent-gold mb-4" size={32} />
              <p className="text-xs tracking-widest text-text-muted mb-2">TĀLRUNIS</p>
              <MagneticButton href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-serif text-3xl md:text-4xl hover:text-accent-gold transition-colors">
                {contact.phone}
              </MagneticButton>
            </div>
          </ImageReveal>

          <ImageReveal delay={0.2}>
            <div className="flex justify-center gap-8 pt-8 border-t border-border-subtle">
              <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors">
                <Instagram size={18} /> @{contact.instagram}
              </a>
              <span className="flex items-center gap-2 text-text-secondary">
                <MapPin size={18} /> {contact.location}
              </span>
            </div>
          </ImageReveal>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`, visit `/sazinaties`. Hover e-pasts/tālrunis - magnetic effect. Klikšķis uz e-pasta atver mail client.

- [ ] **Step 4: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: Contact page with mailto:/tel: + magnetic hover"
```

---

## Phase 6: Animation polish (1 day)

### Task 6.1: prefers-reduced-motion respect across all animations

**Files:**
- Modify: `src/components/animations/PageTransition.tsx`, `src/components/animations/CharReveal.tsx`, `src/components/sections/Hero.tsx`, `src/components/ui/MagneticButton.tsx`

- [ ] **Step 1: Create useReducedMotion hook**

Create `src/lib/useReducedMotion.ts`:

```typescript
import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
```

- [ ] **Step 2: Apply to Hero parallax**

Edit `src/components/sections/Hero.tsx` - import hook and disable scale/y when reduced:

```typescript
import { useReducedMotion } from '../../lib/useReducedMotion';
// ... inside component:
const reduced = useReducedMotion();
const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.15]);
const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '20%']);
```

- [ ] **Step 3: Apply to MagneticButton**

Edit `src/components/ui/MagneticButton.tsx` - disable position update when reduced:

```typescript
import { useReducedMotion } from '../../lib/useReducedMotion';
// ... inside component:
const reduced = useReducedMotion();
const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
  if (reduced || !ref.current) return;
  // ... rest unchanged
};
```

- [ ] **Step 4: Apply to CharReveal**

Edit `src/components/animations/CharReveal.tsx` - render plain text when reduced:

```typescript
import { useReducedMotion } from '../../lib/useReducedMotion';
// ... inside component:
const reduced = useReducedMotion();
if (reduced) return <span className={className}>{text}</span>;
// ... rest unchanged
```

- [ ] **Step 5: Verify**

Run: `npm run dev`. Open Chrome DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion" → "reduce".
Expected: hero loses parallax, magnetic buttons don't follow mouse, char reveals show instantly, Lenis disabled (from earlier).

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: respect prefers-reduced-motion across all animations"
```

---

### Task 6.2: Mobile finetune

- [ ] **Step 1: Test all pages on mobile viewport (375px and 414px) in DevTools**

Run: `npm run dev`. Open DevTools responsive mode. Visit each page:
- Home: hero text not cut off, services grid stacks 1col, portfolio preview 2col, testimonials 1col
- Portfolio: masonry 1col below 640px
- Service pages: hero text wraps OK, image+text stacks
- About: image+text stacks, drop-cap renders
- Testimonials: 1col
- Contact: text sizes OK

- [ ] **Step 2: Fix any spacing issues found**

Common fixes:
- Reduce `py-30` → `py-16` on mobile via responsive classes (e.g., `py-16 md:py-30`)
- Reduce `text-h1` clamp min value if cuts off
- Ensure `container-app` padding `px-6 md:px-12` works

(Make specific edits as needed; no template here since it depends on observation.)

- [ ] **Step 3: Test on real device if possible**

Open `daugaviete-photography.vercel.app` (or local with `vite --host` + iPhone Safari same network).

- [ ] **Step 4: Commit any tweaks**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "fix: mobile spacing finetune across all pages"
```

---

## Phase 7: SEO + perf + a11y + WebAudit (0.5 day)

### Task 7.1: SSG configuration

**Files:**
- Modify: `vite.config.ts`, `package.json`, `src/main.tsx`

- [ ] **Step 1: Install vite-plugin-ssg**

```bash
npm install -D vite-ssg
```

Note: `vite-ssg` is the maintained package. Adjust if alternative needed.

- [ ] **Step 2: Refactor main.tsx for SSG**

Replace `src/main.tsx`:

```typescript
import { ViteSSG } from 'vite-ssg';
import App from './App';
import './styles/globals.css';

const routes = [
  { path: '/', component: () => import('./pages/Home') },
  { path: '/portfolio', component: () => import('./pages/Portfolio') },
  { path: '/gimenu-fotosesijas', component: () => import('./pages/services/FamilyPhotography') },
  { path: '/paru-fotosesijas', component: () => import('./pages/services/CouplePhotography') },
  { path: '/portretu-fotosesijas', component: () => import('./pages/services/PortraitPhotography') },
  { path: '/kazu-fotografija', component: () => import('./pages/services/WeddingPhotography') },
  { path: '/par-mani', component: () => import('./pages/About') },
  { path: '/atsauksmes', component: () => import('./pages/Testimonials') },
  { path: '/sazinaties', component: () => import('./pages/Contact') },
];

export const createApp = ViteSSG(App, { routes });
```

Note: `vite-ssg` API may require adjustment. Alternative: use `react-snap` post-build hook for simpler SSG. If `vite-ssg` doesn't fit React Router 6 well, fall back to:

```bash
npm install -D react-snap
# Configure in package.json:
# "scripts": { "postbuild": "react-snap" }
```

Verify which approach works in this Vite + React 18 + RR6 stack by running build.

- [ ] **Step 3: Build + verify static HTML output**

```bash
npm run build
ls dist/
# Expected: index.html, portfolio/index.html, gimenu-fotosesijas/index.html, ...
```

If route HTMLs aren't generated, revert to react-snap fallback.

- [ ] **Step 4: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: SSG via vite-ssg (pre-rendered static HTML for all 9 routes)"
```

---

### Task 7.2: SEO meta tags + JSON-LD schema

**Files:**
- Create: `src/components/ui/SEO.tsx`, `src/lib/schema.ts`
- Modify: each page to use `<SEO>`

- [ ] **Step 1: Install react-helmet-async**

```bash
npm install react-helmet-async
```

- [ ] **Step 2: Wrap with HelmetProvider**

Modify `src/main.tsx` (or App.tsx if using ViteSSG) to include `<HelmetProvider>`.

In `src/App.tsx` import + wrap:

```typescript
import { HelmetProvider } from 'react-helmet-async';
// ...
return (
  <HelmetProvider>
    <Routes>{/* ... */}</Routes>
  </HelmetProvider>
);
```

- [ ] **Step 3: Build SEO component**

Create `src/components/ui/SEO.tsx`:

```typescript
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  path: string;            // e.g. "/portfolio"
  image?: string;          // OG image URL
  type?: 'website' | 'article';
  jsonLd?: object;
}

const BASE_URL = 'https://daugavietephotography.com';

export default function SEO({ title, description, path, image = '/og-image.jpg', type = 'website', jsonLd }: Props) {
  const fullTitle = `${title} | Daugaviete Photography`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="lv_LV" />
      <meta property="og:site_name" content="Daugaviete Photography" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <html lang="lv" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
```

- [ ] **Step 4: Build schema helpers**

Create `src/lib/schema.ts`:

```typescript
const BASE_URL = 'https://daugavietephotography.com';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Photographer',
  name: 'Daugaviete Photography',
  url: BASE_URL,
  email: 'sieva@daugavietephotography.com', // TODO: real email
  telephone: '+371 00 000 000',              // TODO: real phone
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LV',
    addressLocality: 'Rīga',
  },
  areaServed: { '@type': 'Country', name: 'Latvia' },
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: '€€',
  sameAs: [
    'https://instagram.com/daugavietephotography',
  ],
};

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: {
      '@type': 'Photographer',
      name: 'Daugaviete Photography',
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Latvia' },
    url: `${BASE_URL}/${slug}`,
  };
}
```

- [ ] **Step 5: Add SEO to each page**

Example for `src/pages/Home.tsx`:

```typescript
import SEO from '../components/ui/SEO';
import { localBusinessSchema } from '../lib/schema';

// at top of Home component return:
<SEO
  title="Fotogrāfs Rīgā - ģimenes, pāri, kāzas"
  description="Daugaviete Photography - ģimeņu fotosesijas, pāru fotosesijas, portreti un kāzu fotogrāfija Latvijā. Mirkļi, kas paliek."
  path="/"
  jsonLd={localBusinessSchema}
/>
```

Repeat per page with appropriate `title`, `description`, `path`. For 4 service pages, also include `serviceSchema(...)`.

Suggested meta:
- `/` - "Fotogrāfs Rīgā" + LocalBusiness
- `/portfolio` - "Portfolio | Foto galerija"
- `/gimenu-fotosesijas` - "Ģimeņu fotosesijas Rīgā" + Service schema
- `/paru-fotosesijas` - "Pāru fotosesijas Latvijā" + Service schema
- `/portretu-fotosesijas` - "Portretu fotosesijas" + Service schema
- `/kazu-fotografija` - "Kāzu fotogrāfs Latvijā" + Service schema
- `/par-mani` - "Par fotogrāfu"
- `/atsauksmes` - "Klientu atsauksmes"
- `/sazinaties` - "Sazināties ar fotogrāfu"

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: per-page SEO meta tags + LocalBusiness/Service JSON-LD"
```

---

### Task 7.3: Sitemap.xml + robots.txt

**Files:**
- Create: `public/robots.txt`, `scripts/generate-sitemap.mjs`
- Modify: `package.json` (postbuild hook)

- [ ] **Step 1: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://daugavietephotography.com/sitemap.xml
```

- [ ] **Step 2: Generate sitemap script**

Create `scripts/generate-sitemap.mjs`:

```javascript
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
console.log('✓ sitemap.xml generated');
```

- [ ] **Step 3: Wire into build**

Edit `package.json` `"scripts"`:

```json
"build": "tsc -b && vite build && node scripts/generate-sitemap.mjs"
```

- [ ] **Step 4: Verify**

```bash
npm run build
cat dist/sitemap.xml | head -20
cat dist/robots.txt
```

Expected: sitemap with 9 entries, robots.txt mentions sitemap.

- [ ] **Step 5: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: robots.txt + sitemap.xml generation"
```

---

### Task 7.4: Accessibility audit (axe-core)

- [ ] **Step 1: Install axe-core CLI**

```bash
npm install -g @axe-core/cli
```

- [ ] **Step 2: Run axe against running dev server**

```bash
npm run dev &
sleep 5
axe http://localhost:5173/ http://localhost:5173/portfolio http://localhost:5173/par-mani http://localhost:5173/sazinaties --tags wcag2a,wcag2aa,wcag21a,wcag21aa --exit
```

Fix all serious/critical violations. Common ones:
- Missing alt on images → already addressed via Image component requirement
- Insufficient color contrast → adjust if accent-gold on white fails (we have 4.5:1 baseline)
- Missing labels on buttons → already have `aria-label` on icon buttons
- Heading order skipped → ensure h1 → h2 → h3 strict hierarchy

- [ ] **Step 3: Verify keyboard navigation manually**

Tab through home page from header to footer. Expected: visible focus ring on every interactive element. Tab order logical. Skip-to-content link absent (add if missing).

Add skip link to `Layout.tsx`:

```typescript
<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-primary focus:text-text-primary focus:px-4 focus:py-2">
  Iet uz galveno saturu
</a>
```

And add `id="main"` on `<main>` element.

- [ ] **Step 4: Add focus-visible ring base style**

In `globals.css`:

```css
@layer base {
  :focus-visible {
    @apply outline-2 outline-accent-gold outline-offset-2;
  }
}
```

- [ ] **Step 5: Re-run axe, verify zero violations on critical/serious**

```bash
axe http://localhost:5173/ --tags wcag2a,wcag2aa,wcag21a,wcag21aa
```

- [ ] **Step 6: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: a11y polish - skip link, focus-visible, axe violations fixed"
```

---

### Task 7.5: Lighthouse + WebAudit aģenta run

- [ ] **Step 1: Build + preview**

```bash
npm run build
npm run preview
# server on http://localhost:4173
```

- [ ] **Step 2: Run Lighthouse on production build**

```bash
npx lighthouse http://localhost:4173/ --output html --output-path ./lighthouse-home.html --view --chrome-flags="--headless"
npx lighthouse http://localhost:4173/portfolio --output html --output-path ./lighthouse-portfolio.html
npx lighthouse http://localhost:4173/sazinaties --output html --output-path ./lighthouse-contact.html
```

Target: 95+ on Performance, Accessibility, Best Practices, SEO.

Fix common issues:
- Performance < 95 → check if Lenis/Framer Motion lazy-loaded. Reduce image sizes if needed.
- A11y < 100 → run axe again
- Best Practices < 95 → check console errors, mixed content
- SEO < 100 → verify all pages have `<meta description>`

- [ ] **Step 3: Run WebAudit aģenta full audit on deployed Vercel URL**

```bash
# Deploy latest to Vercel preview first
vercel --prod
# Then invoke WebAudit
# Use @WebAudit aģentu: "@WebAudit auditē https://daugaviete-photography.vercel.app"
```

Expected output: Notion atskaite ar SEO + GEO + UX + a11y + security headers grading. Address P0/P1 findings.

- [ ] **Step 4: Verify security headers**

```bash
curl -I https://daugaviete-photography.vercel.app/
# Verify CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all present
```

- [ ] **Step 5: Commit final perf fixes**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "perf: Lighthouse 95+ across all metrics + WebAudit P0/P1 fixes"
```

---

## Phase 8: Launch (0.5 day)

### Task 8.1: Real content swap

**Files:**
- Modify: `src/content/about.ts`, `src/content/services.ts` (descriptions), `src/content/testimonials.ts`, `src/content/portfolio.ts`, Footer.tsx contact info, Contact.tsx contact info, schema.ts contact info

- [ ] **Step 1: Receive real content from sieva**

Blokeri kas jārisina pirms šī soļa (no spec `## 12. Open questions un blokeri`):
- Drive bilžu piekļuve (skat Task 8.2)
- Sievas Par mani stāsts (~400 vārdi)
- 4 pakalpojumu apraksti (~200-300 vārdi katrs)
- 6-12 reālas atsauksmes
- Reālā e-pasts, tel, Instagram
- Logo (vai veidot serif wordmark)

- [ ] **Step 2: Replace all PLACEHOLDER strings**

Search & replace:

```bash
cd ~/Projects/daugaviete-photography
grep -rn "PLACEHOLDER" src/
```

Replace each match with real content.

Replace TODO contact info:
- `src/components/layout/Footer.tsx` - `contact` object
- `src/pages/Contact.tsx` - `contact` object
- `src/lib/schema.ts` - `localBusinessSchema.email`, `telephone`, `sameAs`

- [ ] **Step 3: Commit real content**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "content: replace placeholders with real content (Par mani, pakalpojumi, atsauksmes, kontakts)"
```

---

### Task 8.2: Real images workflow

- [ ] **Step 1: Get Drive folder access**

Open https://drive.google.com/drive/folders/1IuqagqI-lcSJd7Sbi42shJeBwJKwngs_ - request access or get owner to set "Anyone with link can view".

- [ ] **Step 2: Download to `raw-images/`**

```bash
mkdir -p ~/Projects/daugaviete-photography/raw-images/{family,couples,portraits,weddings,about,hero}
# Either gcloud storage tools, gdrive CLI, or manual download to each category folder
```

Sieva selects best 15-20 per category. Place in respective folder named like `01.jpg`, `02.jpg`, etc.

- [ ] **Step 3: Run optimization**

```bash
npm run optimize:images
# Generates public/images/<category>/01-{320,768,1440}w.{avif,webp,jpg}
```

- [ ] **Step 4: Update portfolio.ts with real list**

Edit `src/content/portfolio.ts` to replace placeholder entries with real image manifest.

- [ ] **Step 5: Commit**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "content: real optimized images for all categories"
```

---

### Task 8.3: Domain + GA4 + Search Console

- [ ] **Step 1: Connect daugavietephotography.com to Vercel**

Vercel dashboard → Project Settings → Domains → Add `daugavietephotography.com`.

Add DNS records as instructed by Vercel (usually A record + CNAME for www).

- [ ] **Step 2: Verify SSL**

After DNS propagates (~5-15 min), visit `https://daugavietephotography.com/`. Should load with valid cert.

- [ ] **Step 3: Set up GA4**

Decide: new GA4 property or use existing.

If new: create at https://analytics.google.com → property "Daugaviete Photography" → web stream `daugavietephotography.com`.

Add to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

(Per CLAUDE.md GDPR default - skip Consent Mode v2 / cookie banner for now.)

- [ ] **Step 4: Submit sitemap to Google Search Console**

https://search.google.com/search-console → add property `daugavietephotography.com` → verify (DNS TXT or HTML file) → submit sitemap `https://daugavietephotography.com/sitemap.xml`.

- [ ] **Step 5: Final smoke test**

Visit live site:
- All 9 pages load
- Images appear (real, not placeholders)
- Mailto: + tel: links work
- Form/CTA hover states
- Mobile viewport renders OK
- Lighthouse on production URL still 95+

- [ ] **Step 6: Commit GA4**

```bash
git add -A
git -c user.email="gatis.design@gmail.com" -c user.name="Gatis Daugavietis" commit -m "feat: GA4 tracking + domain connected + Search Console verified"
git push
```

- [ ] **Step 7: Update Notion project status**

Mark Daugaviete Photography Notion project as Live with URL.

---

## Self-Review Checklist

After plan complete, verified:

- [x] **Spec coverage:** All sections of spec mapped to tasks. Phases 1-8 match spec section 10.
- [x] **Placeholder scan:** Plan contains "PLACEHOLDER" strings in content tasks - these are intentional content placeholders, not plan placeholders. All instructions specify exact code/commands. No "TBD" or "implement later" in steps.
- [x] **Type consistency:** `Service`, `PortfolioImage`, `Testimonial`, `Category` types consistent across files. Hook `useReducedMotion` returns same type everywhere.
- [x] **Component naming:** ServiceProcess, ServiceFAQ, ServicePageTemplate consistent across imports.

Known plan-execution edge case: **SSG via vite-ssg vs react-snap** - the chosen approach in Task 7.1 may require trial. Plan documents fallback to react-snap if vite-ssg doesn't fit RR6 setup.

# Daugaviete Photography - Website Design Spec

**Datums:** 2026-05-27
**Klients:** Sieva (Daugaviete Photography)
**Izstrādātājs:** Gatis Daugavietis
**Reference:** [bellephoto.com.au](https://www.bellephoto.com.au/)
**Domēns:** daugavietephotography.com (pieslēgs pēc launch)

---

## 1. Mērķis un scope

Veidot fotogrāfa portfolio + booking mājaslapu sievai (Daugaviete Photography) light luxury editorial stilā pēc bellephoto.com.au reference. 9 lapas, LV valoda, no cenu rādīšanas, e-pasts + tel kā galvenie kontakta kanāli.

**Mērķauditorija:** LV ģimenes, pāri, portretu klienti, kāzu klienti.

**Out of scope (vēlāk):**
- ENG versija (LV only sākumā)
- Blog
- Privātās klientu galerijas ar paroli
- Online booking ar kalendāru (forma + e-pasts pietiek)
- Cenu rādīšana

---

## 2. Tehniskais stack

| Slānis | Tehnoloģija | Pamatojums |
|---|---|---|
| Frontend | Vite + React 18 + TypeScript | Estire.lv reference pattern |
| Rendering | SSG (static site generation) | SEO + LCP + INP optimizācija |
| Styling | Tailwind CSS ar custom theme | Utility-first, custom Daugaviete tokens |
| Animations | Framer Motion + Lenis | Premium foto niche budžets |
| Routing | React Router | 9 lapas |
| Forms | react-hook-form + zod | Tipa droša validācija |
| Email | Resend API (vai mailto: fallback) | Kontaktforma uz sievas e-pastu |
| Hosting | Vercel | Free tier, auto-deploy no GitHub |
| Repo | GitHub public | Standarts solo projektiem |

**Git commit autors:** `Gatis Daugavietis <gatis.design@gmail.com>` (NE Claude - Vercel bloķē).

---

## 3. Vizuālais sistēms

### 3.1 Krāsu palete

| Token | Hex | Lietojums |
|---|---|---|
| `--bg-primary` | `#FAFAF7` | Galvenais fons (off-white, silts) |
| `--bg-secondary` | `#F2EFE9` | Sekciju mainīgais fons (krēms) |
| `--bg-accent` | `#1A1A1A` | Footer + retie dark blocki |
| `--text-primary` | `#1F1F1F` | Pamata teksts |
| `--text-secondary` | `#6B6B6B` | Subtitles, meta info |
| `--text-muted` | `#9C9C9C` | Captions, dates |
| `--accent-gold` | `#B8945C` | Akcents - pogas, līnijas |
| `--accent-gold-hover` | `#9F7E4A` | Pogu hover state |
| `--border-subtle` | `#E5E1D8` | Smalkas atdalītāj-līnijas |

### 3.2 Tipogrāfija

| Element | Font | Stils |
|---|---|---|
| H1, H2 | Cormorant Garamond (serif) | `font-weight: 300-400`, liels izmērs |
| H3, H4 | Cormorant Garamond | Italic taglineiem |
| Body | Inter (sans-serif) | `font-weight: 400`, `line-height: 1.7` |
| UI/Nav/Buttons | Inter | `font-weight: 500`, `letter-spacing: 0.05em`, UPPERCASE |
| Captions | Inter | `13px`, `text-muted` color |

Google Fonts, self-hosted, `font-display: swap`.

### 3.3 Type scale (responsive)

- H1: `clamp(48px, 8vw, 96px)` - hero
- H2: `clamp(32px, 5vw, 56px)` - sekciju virsraksti
- H3: `clamp(24px, 3vw, 32px)` - kartiņu virsraksti
- Body: `16px` desktop / `15px` mobile
- Caption: `13px`

### 3.4 Spacing un layout

- Bāze 4px: 4, 8, 16, 24, 32, 48, 64, 96, 128, 192px
- Sekciju vertical padding: 96-192px
- Container max-width: 1440px
- Gutter: 24px mobile / 48px desktop
- Generous whitespace (~30-40% katras sekcijas)
- Asimmetriski layouti (NE viss centrēts) - editorial sajūta

---

## 4. Lapu struktūra (9 lapas)

### 4.1 Sākums (`/`)

```
[Hero] Full-bleed bilde + serif tagline
[Intro] Īss teksts + sievas paraksts
[4 pakalpojumu grid] 2x2 ar bildi + nosaukums + apakšvirsraksts
[Portfolio preview] 6 labākās bildes asymmetric grid + CTA
[Atsauksmes] 3 īsākās + CTA
[Final CTA] "Veidosim kopā skaisto" + Pieteikties poga
```

### 4.2 Portfolio (`/portfolio`)

```
[Hero] Mazāks - tikai virsraksts
[Filtrs] All / Ģimenes / Pāri / Portreti / Kāzas (chips)
[Masonry grid] 40-60 bildes ar lazy load
[Lightbox] Pilnekrāna skats ar nav + ESC + swipe
```

### 4.3-4.6 Pakalpojuma lapas

**URL-i:**
- `/gimenu-fotosesijas` - Ģimeņu fotosesijas / Mirkļi, ko jūsu bērni kādreiz rādīs saviem bērniem
- `/paru-fotosesijas` - Pāru fotosesijas / Jūsu stāsts - tā, kā tas jūtas
- `/portretu-fotosesijas` - Portretu fotosesijas / Tu. Tava gaisma. Tavs labākais kadrs.
- `/kazu-fotografija` - Kāzu fotogrāfija / Katrs skatiens. Katras asaras. Katrs smiels.

```
[Hero] Bilde + aprakstošs nosaukums + emocionāls apakšvirsraksts
[Apraksts] "Kā sesija norit" - 200-300 vārdi + bilde labajā
[Bilžu sekcija] 5-10 labākās bildes (mix sized grid)
[Process] 3 soļi - Saruna → Sesija → Bildes
[FAQ] 3-5 jautājumi
[CTA] "Pieteikties" → kontaktforma
```

### 4.7 Par mani (`/par-mani`)

```
[Hero] Sievas portrets + virsraksts
[Stāsts] 2-3 paragrāfi pirmajā personā, drop-cap, ~400 vārdi
[Vizuāls] 2-3 candid bildes
[Vērtības/pieeja] 3 īsi blocki
[CTA] "Sazināties"
```

### 4.8 Atsauksmes (`/atsauksmes`)

```
[Hero] Virsraksts "Klienti stāsta"
[Atsauksmes grid] 6-12 atsauksmes ar bildi + klienta vārdu + sesijas tipu
[CTA] "Pieteikties savai sesijai"
```

### 4.9 Sazināties (`/sazinaties`)

```
[Hero] Virsraksts "Sazināties"
[Forma] Vārds, E-pasts, Tel, Sesijas tips (dropdown), Vēlamais datums, Ziņa, Submit
[Kontakts info] E-pasts, Tel Nr., Instagram link, atrašanās vieta
```

### 4.10 Navigation

- Sticky header, transparent over hero, balts pēc scroll
- Logo (Daugaviete Photography serif wordmark) kreisajā
- Menu: SĀKUMS · PORTFOLIO · PAKALPOJUMI ▼ · PAR MANI · ATSAUKSMES · SAZINĀTIES
- Pakalpojumi dropdown ar 4 saitēm
- Mobile: hamburger + full-screen overlay menu

### 4.11 Footer

- Trīs kolonnas: (1) Brand + tagline (2) Pakalpojumu saraksts (3) Kontakts + sociālie
- Apakšā: © 2026 Daugaviete Photography · Izstrādāja Gatis Daugavietis

---

## 5. Animācijas

### 5.1 Globālie efekti

| Efekts | Bibliotēka | Kur lietots |
|---|---|---|
| Lenis smooth scroll | `@studio-freight/lenis` | Visā lapā |
| Page transitions | Framer Motion `AnimatePresence` | Starp 9 lapām - fade + slight slide (300ms) |
| Image reveal on scroll | Framer Motion `useInView` + clip-path | Bildes atklājas no apakšas augšup (700ms ease-out) |
| Cursor trail (optional) | Custom hook | Liels apaļš kursors uz hover image |

### 5.2 Per-komponente

**Hero:**
- Full-bleed bilde ar `scale: 1.1 → 1.0` parallax
- Tagline serif overlay ar staggered char reveal (50ms aizture)
- "Scroll to explore" indikators ar pulsējošu opacity

**Portfolio/galerija:**
- Masonry vai grid layout
- Hover: bildes `scale: 1.05`, overlay ar gradientu + nosaukums (300ms)
- Klikšķis → lightbox ar Framer Motion zoom transition
- Lightbox: bultu nav, ESC close, swipe mobile

**Pakalpojuma lapas:**
- Hero ar pakalpojuma nosaukumu serif fade-in + apakšvirsraksts blur-to-clear
- Bilžu rinda ar staggered reveal (100ms aizture)
- CTA poga ar magnetic hover

**Par mani:**
- Sievas bilde slide-in no kreisās, teksts no labās
- Stāsts ar drop-cap

**Atsauksmes:**
- Auto-rotating carousel (5s katra), fade between
- Klients var swipot

**Sazināties:**
- Forma ar inline focus glow (zelta akcents)
- Submit poga ar loading spinner → success checkmark

### 5.3 Veiktspējas budžets

- Visas animācijas `transform` + `opacity` (GPU-accelerated)
- `prefers-reduced-motion: reduce` → izslēdz Lenis, parallax, magnetic; saglabā fade-in (300ms)
- Lazy-import Framer Motion ārpus hero

### 5.4 Anti-patterns

- Bez auto-play video hero
- Bez glassmorphism efektiem
- Bez partikulu/snowflakes
- Bez horizontāla scroll

---

## 6. Performance, SEO, A11y, Drošība

### 6.1 Performance baseline

- Bilžu optimizācija: WebP/AVIF, `<picture>` ar 3 izmēriem (320w/768w/1440w)
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- ~150KB JS bundle (Lenis + Framer Motion lazy-imported)
- Lighthouse 95+ visās 4 kategorijās

### 6.2 SEO

- Per-lapa `<title>`, `<meta description>`, OpenGraph + Twitter cards
- LocalBusiness schema (Photographer kategorija) - Latvija, Rīga
- Sitemap.xml + robots.txt auto-ģenerēti
- `Service` schema katrai pakalpojuma lapai
- Hreflang nav vajadzīgs (LV only)

### 6.3 A11y (WCAG 2.1 AA)

- Alt teksti visām bildēm (descriptive, ne tukši)
- Focus management - vizibls focus ring
- Krāsu kontrasti >= 4.5:1 body, >= 3:1 large
- Keyboard navigation (Tab/Shift+Tab visur, ESC modal close)
- `prefers-reduced-motion` respect
- ARIA atributi formām un lightbox

### 6.4 Drošība (vercel.json)

- Content-Security-Policy (strict)
- Strict-Transport-Security (HSTS)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (minimal)

---

## 7. Repo struktūra

```
~/Projects/daugaviete-photography/
├── public/
│   ├── images/                 # optimizētas bildes pa kategorijām
│   ├── og-image.jpg
│   └── favicon
├── src/
│   ├── components/             # Hero, ImageGrid, Lightbox, ContactForm, ...
│   ├── pages/                  # 9 lapas
│   ├── content/                # MDX/JSON saturs (atsauksmes, FAQ)
│   ├── styles/                 # tailwind.config + global
│   ├── lib/                    # utils, schema, SEO helpers
│   └── animations/             # reusable Framer Motion komponentes
├── docs/
│   └── superpowers/specs/      # šis spec + writing-plans plan
├── vercel.json                 # security headers
├── package.json
└── README.md
```

---

## 8. Bibliotēkas

- `react` 18 + `react-dom`
- `react-router-dom` 6
- `vite` + `@vitejs/plugin-react`
- `typescript`
- `tailwindcss` + `postcss` + `autoprefixer`
- `framer-motion`
- `@studio-freight/lenis`
- `react-hook-form` + `zod` + `@hookform/resolvers`
- `vite-plugin-ssg` vai `react-snap` (SSG)
- `vite-plugin-sitemap`

---

## 9. Saturs - kas vajadzīgs no sievas

| Saturs | Statuss | Pickup metode |
|---|---|---|
| Bildes (~80-120 augstas kvalitātes) | Daļēji - Drive folderī | Gatis lejupielādēs, optimizēs, kategorizēs |
| "Par mani" stāsts (~400 vārdi LV) | Vēl nav | Sievai uzraksta vai Gatis dod 3 paraugus |
| 4 pakalpojumu apraksti (~200-300 vārdi katrs) | Vēl nav | Tāpat |
| Atsauksmes (6-12 ar klienta vārdu + tipu) | Vēl nav | Launch ar 3-4 placeholderi, papildina |
| Kontakta info | Testa | Aizvieto pirms domain connect |
| Logo | Nezinu | Gatis var uztaisīt serif wordmark, ja nav |

**Drive piekļuve:** Šobrīd links prasa "Request access". Vajag piekļuvi vai lejupielādēt ZIP uz `~/Downloads/`.

---

## 10. Launch fāzes (8 fāzes, ~6-7 dienas)

| Fāze | Saturs | Laiks |
|---|---|---|
| 1. Foundation | Repo init, tailwind setup, krāsu sistēma, tipogrāfija, layout components, nav, footer | 1 d |
| 2. Sākums + Par mani | Hero, portfolio preview, 4 pakalpojumu grid, atsauksmes preview, Par mani | 1 d |
| 3. Pakalpojumu lapas (4x) | Template + 4 instance ar saturu | 1 d |
| 4. Portfolio + Atsauksmes | Masonry + lightbox + filtri, atsauksmes lapa | 1 d |
| 5. Sazināties | Forma + validācija + Resend email integration | 0.5 d |
| 6. Animācijas + polish | Lenis, image reveals, page transitions, magnetic CTAs, mobile finetune | 1 d |
| 7. SEO + perf + a11y + WebAudit | Schema, meta, sitemap, Lighthouse 95+, WCAG AA check | 0.5 d |
| 8. Launch | Vercel deploy, domain connect, GA4 setup, Search Console | 0.5 d |

---

## 11. Post-launch (optional, ne pirms launch)

- Instagram feed embed
- Klientu galerijas ar paroli (privāti share kāzu bilžu)
- Blog (atvēlēta vieta SEO booster)
- ENG versija

---

## 12. Open questions un blokeri

1. **Drive piekļuve bildēm** - šobrīd "request access". Vajag pirms 1. fāzes.
2. **Sievas saturs** (Par mani, pakalpojumu apraksti, atsauksmes) - var sākt foundation fāzes bez tā, bet pakalpojumu lapas vajag pirms 3. fāzes.
3. **Logo statuss** - vai sievai jau ir, vai Gatis veido serif wordmark.
4. **Resend API account** - vajag account vai izmantojam mailto: fallback.
5. **GA4 setup** - jauns property vai esošs?

---

**Spec apstiprināts:** _gaida user review_
**Nākamais solis:** writing-plans skill - detalizēts implementation plan

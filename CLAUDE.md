# Sleece Technologies Limited — Website

Corporate website for Sleece Technologies Limited, an ICT, telecommunications, power, and engineering solutions company based in Nigeria.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npx shadcn@latest add <component>   # Add a shadcn/ui component
```

## Stack

| Package | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | v4 | Utility-first styling via `@tailwindcss/vite` |
| shadcn/ui | latest | Accessible pre-built components |
| react-router-dom | v7 | Client-side routing |
| lucide-react | latest | Icon set (used by shadcn/ui) |
| react-icons | v5 | Supplemental icons (social, etc.) |
| @emailjs/browser | v4 | Contact form email (no backend needed) |
| clsx + tailwind-merge | latest | `cn()` class merging utility |

## Brand Colors

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `brand-blue` | `#000066` | `bg-brand-blue` / `text-brand-blue` | Navbar headings, hero bg, footer |
| `brand-green` | `#00b050` | `bg-brand-green` / `text-brand-green` | CTAs, active links, accents, logo |
| `brand-green-dark` | `#008a40` | `bg-brand-green-dark` | Button hover state |
| `brand-light` | `#f4f7fb` | `bg-brand-light` | Alternate section backgrounds |

Colors are declared in `src/index.css` under `@theme`. Never use raw hex values in components — always use the Tailwind token classes.

## Typography

- **Font:** Plus Jakarta Sans (Google Fonts, loaded in `index.html`)
- **Base size:** `18px` (set on `html` in `index.css`)
- **Weights used:** 300, 400, 500, 600, 700, 800

## Project Structure

```
sleece-tech/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   │   └── logo.png              # Company logo (green spider-web icon)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Fixed top nav — white bg, logo, 5 links, mobile menu
│   │   │   ├── Footer.jsx        # Brand blue footer — logo, links, contact, socials
│   │   │   └── HeroBackground.jsx # Shared hero bg — gradient + orbs + circuit grid
│   │   └── ui/                   # shadcn/ui components (do not hand-edit)
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       ├── textarea.jsx
│   │       ├── badge.jsx
│   │       └── separator.jsx
│   ├── data/
│   │   └── services.js           # 9 service categories + categories[] filter array
│   ├── hooks/
│   │   └── useInView.js          # IntersectionObserver hook for scroll animations
│   ├── lib/
│   │   └── utils.js              # cn() helper (shadcn/ui requirement)
│   ├── pages/
│   │   ├── Home.jsx              # COMPLETE
│   │   ├── About.jsx             # COMPLETE
│   │   ├── Services.jsx          # COMPLETE
│   │   ├── Team.jsx              # PENDING
│   │   └── Contact.jsx           # PENDING
│   ├── App.jsx                   # BrowserRouter + Layout wrapper + all routes
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles, @theme tokens, keyframes, font-size
├── index.html                    # Plus Jakarta Sans font link
├── vite.config.js                # Vite + React plugin + Tailwind v4 + @ alias
├── jsconfig.json                 # Path alias @/ → src/
└── components.json               # shadcn/ui config
```

## Path Alias

`@/` maps to `src/`. Example: `import { Button } from '@/components/ui/button'`

## Layout & Routing (App.jsx)

All pages are wrapped in a `<Layout>` component that renders `<Navbar />`, `<main className="pt-20">`, and `<Footer />`. The `pt-20` offset accounts for the fixed navbar height (`h-20`).

```jsx
// Adding a new page:
// 1. Create src/pages/MyPage.jsx
// 2. Import it in App.jsx
// 3. Add <Route path="/my-page" element={<MyPage />} />
```

## Animations

Keyframes are defined in `src/index.css`. Use these classes on elements:

| Class | Effect |
|---|---|
| `animate-fade-up` | Slide up + fade in |
| `animate-fade-in` | Fade in only |
| `animate-fade-left` | Slide from left + fade in |
| `animate-fade-right` | Slide from right + fade in |
| `animate-scale-in` | Scale up from 92% + fade in |
| `delay-100` → `delay-600` | Animation delay (100ms steps) |

For scroll-triggered animations use the `useInView` hook:

```jsx
import { useInView } from '@/hooks/useInView'

const [ref, inView] = useInView()
// <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
```

## HeroBackground Component

All page hero sections use `<HeroBackground>` — never recreate hero backgrounds manually.

```jsx
import HeroBackground from '@/components/layout/HeroBackground'

<HeroBackground className="py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* hero content */}
  </div>
</HeroBackground>
```

Layers (bottom to top): dark navy→indigo gradient → green glow orb (top-left) → purple glow orb (bottom-right) → central green haze → circuit-grid lines → node dots → diagonal scanlines → bottom fade.

## Pages — Status & Sections

### `/` — Home (COMPLETE)
- Hero: full-screen HeroBackground, badge, headline, subtext, 2 CTAs, stats strip
- What We Do: 3 pillar cards (Technology & ICT, Power Solutions, Security Systems)
- Services Snapshot: 6 service tiles with icons
- Why Choose Us: 4 value proposition items
- CTA Banner: brand blue, links to /contact and /services

### `/about` — About Us (COMPLETE)
- Hero: HeroBackground, page title
- Company Story: 2-col layout — narrative text + expertise chips grid
- Stats Banner: brand blue strip (5+ yrs, 100+ projects, 50+ clients, 10+ sectors)
- Mission & Vision: 2 cards with top-border accent
- Core Values: 6-tile grid (Innovation, Professionalism, Customer Satisfaction, Reliability, Impact, Quality)
- CTA: links to /contact and /services

### `/services` — Services (COMPLETE)
- Hero: HeroBackground, stats (9 areas, 50+ sub-services, 10+ sectors)
- Sticky filter tabs: All / Technology / Infrastructure / Power / Security / Consulting
- Services Grid: 9 cards from `src/data/services.js` — each has icon, category badge, title, description, checklist of sub-services. Filters live on tab click.
- CTA Banner: dark blue rounded card

### `/team` — Our Team (PENDING)
- Grid of team member cards
- Data from `src/data/team.js` (to be created)

### `/contact` — Contact Us (PENDING)
- Contact form wired to EmailJS
- Contact info sidebar
- Google Maps placeholder

## Contact Info

- **Email:** info@sleecetechnologies.com.ng
- **Phone:** +234 803 0724 271
- **Address:** Plot 2157 B07 Cadastral Zone, Kamtape, Abuja FCT, Nigeria

## EmailJS Setup (Contact Page — Pending)

Requires a free account at emailjs.com. Once set up, add to `src/pages/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY  = 'your_public_key'
```

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
# Examples: dialog, select, accordion, tabs, tooltip
```

Components are generated as `.jsx` files in `src/components/ui/`.

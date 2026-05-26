# Sleece Technologies Limited — Website

Corporate website for Sleece Technologies Limited, an ICT, telecommunications, power, and engineering solutions company based in Nigeria.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Stack

- **React 19** + **Vite 6** — SPA, client-side routing
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite` plugin
- **shadcn/ui** — pre-built accessible components (Button, Card, Input, etc.)
- **react-router-dom v7** — client-side routing
- **react-icons** — supplemental icon library
- **lucide-react** — shadcn/ui icon set
- **@emailjs/browser** — contact form email delivery (no backend)

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#000066` | Navbar, hero background, headings |
| `brand-green` | `#00b050` | CTAs, highlights, accents |
| `brand-light` | `#f4f7fb` | Section backgrounds |

Colors are declared in `src/index.css` under `@theme` and as CSS variables under `:root`.
Use Tailwind classes like `bg-brand-blue`, `text-brand-green`, `bg-brand-light`.

## Project Structure

```
src/
  components/
    layout/     # Navbar, Footer (shared across all pages)
    ui/         # shadcn/ui components (auto-generated — do not hand-edit)
  pages/        # One file per route: Home, About, Services, Team, Contact
  data/         # Static data files: services.js, team.js
  lib/
    utils.js    # cn() helper for class merging (shadcn/ui requirement)
  App.jsx       # Router config — add new routes here
  main.jsx      # React entry point
  index.css     # Global styles + Tailwind + brand theme tokens
```

## Path Alias

`@/` maps to `src/`. Example: `import { Button } from '@/components/ui/button'`

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

Components are written to `src/components/ui/` as `.jsx` files.

## Pages

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/Home.jsx` | — |
| `/about` | `src/pages/About.jsx` | — |
| `/services` | `src/pages/Services.jsx` | — |
| `/team` | `src/pages/Team.jsx` | — |
| `/contact` | `src/pages/Contact.jsx` | — |

## EmailJS (Contact Form)

Requires a free EmailJS account. Set these values in `src/pages/Contact.jsx`:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

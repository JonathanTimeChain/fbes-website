# FBES — Foundation for Bitcoin Education Standards

## Website

Professional institutional website for the Foundation for Bitcoin Education Standards, a non-profit standards body dedicated to establishing rigorous benchmarks for Bitcoin education.

## Structure

```
fbes-website/
├── index.html          # Single-page site with all sections
├── css/
│   └── styles.css      # Full design system & responsive styles
├── js/
│   └── main.js         # Navigation, animations, form handling
├── assets/
│   └── favicon.svg     # FBES favicon
└── README.md           # This file
```

## Architecture

**Single-page scrolling design** with anchor navigation, designed to expand to multi-page later if needed. All sections are self-contained and can be extracted into individual pages.

### Sections
- **Hero** — Bold mission statement with CTAs
- **About/Mission** — Full mission, core principles, what FBES does
- **The Problem** — Why Bitcoin education standards are needed
- **Standards Framework** — FBES endorsement process and evaluation criteria
- **Curriculum Review Board** — Board governance, composition, and placeholder member cards
- **For Educators** — Institutional integration pathways
- **For Industry** — Partnership and involvement opportunities
- **Get Involved** — Newsletter signup, board applications, partnerships
- **Footer** — Contact, social links, legal

## Design System

### Colors
- **Primary:** Deep navy (`#0a1628` → `#24497d`)
- **Accent:** Gold/amber (`#c9a84c` → `#e0cb7a`)
- **Neutral:** Gray scale for text and backgrounds
- **Bitcoin orange** used sparingly as an accent where appropriate

### Typography
- **Headings:** Libre Baskerville (serif) — institutional authority
- **Body:** Inter (sans-serif) — clean readability
- Fonts loaded from Google Fonts

### Design Philosophy
Institutional, authoritative, measured. Think IEEE, CFA Institute — not a crypto startup. The design communicates credibility, independence, and rigor.

## Deployment

### Static Hosting (Recommended)
This is a pure static site — no build step required. Deploy directly.

**Netlify:**
```bash
# Drag-and-drop the folder, or:
netlify deploy --dir=. --prod
```

**Cloudflare Pages:**
```bash
# Connect repo or drag-and-drop
# Build command: (none)
# Output directory: /
```

**GitHub Pages:**
1. Push to a repo
2. Settings → Pages → Source: main branch, root directory
3. Custom domain: fbes.org

**Vercel:**
```bash
vercel --prod
```

**AWS S3 + CloudFront:**
```bash
aws s3 sync . s3://fbes-website --exclude ".git/*" --exclude "README.md"
```

### Custom Domain
Point `fbes.org` (or chosen domain) to your hosting provider. All major static hosts support custom domains with automatic SSL.

### Pre-Launch Checklist
- [ ] Replace placeholder email addresses with real ones
- [ ] Connect newsletter form to email provider (Mailchimp, ConvertKit, etc.)
- [ ] Add real social media URLs
- [ ] Add real board member photos and bios when available
- [ ] Add Google Analytics or Plausible analytics snippet
- [ ] Set up proper Open Graph images for social sharing
- [ ] Create and add a proper FBES logo (replacing the hexagon placeholder)
- [ ] Add Privacy Policy and Terms of Use pages
- [ ] Add Conflict of Interest Policy page
- [ ] Set up contact form or email routing
- [ ] Test across browsers and devices
- [ ] Run Lighthouse audit (target: 90+ on all metrics)

## Expanding to Multi-Page

The site is designed for easy expansion:

1. Each section can become its own page
2. Create `about.html`, `standards.html`, etc.
3. Update nav links from `#section` to `page.html`
4. Extract shared header/footer into includes (or use a simple SSG like 11ty)

## Technical Notes

- **No build tools** — pure HTML/CSS/JS
- **No dependencies** — only Google Fonts (external)
- **Responsive** — mobile-first breakpoints at 480px, 768px, 1024px
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Fast** — minimal assets, no frameworks, deferred animations
- **Print-friendly** — basic print stylesheet included

## Independence Notice

FBES is an independent non-profit organization, separate from any education provider, including Timechain Partners. The endorsement standards are developed through transparent, merit-based processes. No affiliated entity receives preferential treatment.

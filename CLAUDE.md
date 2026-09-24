# Craft Shop Demo (Chokecherry & Wren Makery)

Demo storefront for a fictional handmade craft shop, built by LavaTech Pro as a portfolio piece and a reusable starter template for small seller clients. All shop names, products, and reviews are made up.

## Stack

Vite + React + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`, `@theme` block in `src/index.css`, no `tailwind.config.js`). Same stack as lavatechpro.com.

## Commands

- `npm run dev` for the local dev server
- `npm run build` to type-check (`tsc -b`) and build to `dist/`
- `npm run preview` to serve the production build

## Structure

- `src/data/shop.ts`: all content (shop details, collections, products, hero slides, reviews). Per-client edits happen here first.
- `src/index.css`: theme colors and fonts (`--color-pine`, `--color-honey`, `--font-script`, etc.). The `.script` class is the handwritten accent word used in headlines.
- `src/components/`: `Header`, `Hero` (auto-rotating carousel), `ProductCard`, `QuickView` (modal), `Sections.tsx` (trust strip, collection rows, category tiles, reviews, shop-all grid with filters, about, discount popup, footer), `ProductArt` (drawn SVG placeholders standing in for product photos), `Icons`.
- `App.tsx`: page order plus Quick View, filter, and toast state.

## Conventions

- Checkout is one Stripe Payment Link per product (`stripeLink` on each product), no cart. When `stripeLink` is empty, Buy Now shows a "demo store" toast.
- The email signup in `DiscountPopup` doesn't submit anywhere. Wire it to Mailchimp/Kit/Formspree for a real client.
- Products use SVG illustrations, not photos. Real client builds swap in photos.
- Never use em dashes in copy.

## Deployment

Push to `main` and the GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes `dist/` to GitHub Pages. `base` in `vite.config.ts` is `/craft-shop-demo/` because it's served from a project subpath.

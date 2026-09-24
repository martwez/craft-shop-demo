# Craft Shop Demo (Chokecherry & Wren Makery)

A demo storefront for small handmade/craft sellers, built by LavaTech Pro. The shop, products, and reviews are all made up.

Stack: Vite + React + TypeScript + Tailwind CSS v4. Same setup as lavatechpro.com, so it deploys to GitHub Pages the same way.

## Commands

- `npm run dev` starts the local dev server
- `npm run build` type-checks and builds to `dist/`
- Push to `main` to redeploy (GitHub Actions publishes to GitHub Pages)

## Turning it into a real client shop

1. **Content:** edit `src/data/shop.ts`. It holds the shop name, shipping threshold, discount, collections, products, hero slides, and reviews.
2. **Colors and fonts:** edit the `@theme` block in `src/index.css` and the Google Fonts link in `index.html`. Keep the pairing of a bold sans with one handwritten accent word.
3. **Photos:** the demo uses drawn SVG placeholders (`ProductArt.tsx`). For a real shop, add a photo to each product and render an `<img>` in `ProductCard.tsx` and `QuickView.tsx` in place of `ProductArt`.
4. **Checkout:** create a Stripe Payment Link for each product (Stripe dashboard > Payment Links, turn on shipping address collection) and paste it into that product's `stripeLink`. Buy Now then goes straight to Stripe checkout.
5. **Email signup:** point the form in `DiscountPopup` (`Sections.tsx`) at Mailchimp, Kit, or Formspree, and create the matching discount code in Stripe.
6. **Remove** the "demo store" line in the footer.

Best for shops with up to about 30 products. Bigger catalogs, or owners who want to manage inventory themselves, are a better fit for Shopify.

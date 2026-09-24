// Everything a client-specific version changes lives in this file:
// shop details, collections, products, hero slides, and reviews.
// All names, products, and reviews below are made up for the demo.

export const shop = {
  name: 'Chokecherry & Wren',
  suffix: 'Makery',
  tagline: 'Handmade in small batches in southeast Idaho',
  location: 'McCammon, Idaho',
  email: 'hello@chokecherryandwren.example',
  freeShippingOver: 60,
  discountPercent: 10,
}

export type ArtKind =
  | 'octopus'
  | 'bear'
  | 'bunny'
  | 'whale'
  | 'mushroom'
  | 'pumpkinSign'
  | 'ghost'
  | 'doorSign'
  | 'quilt'
  | 'yarn'

export type Art = {
  kind: ArtKind
  /** Main color of the piece. */
  color: string
  /** Secondary color (bow, dots, patches, painted details). */
  accent: string
  /** Card background. */
  bg: string
  /** Words painted on signs. */
  text?: string
}

export type Collection = {
  id: string
  /** Handwritten word shown before the title, e.g. "Cozy" + "Crochet Friends". */
  script: string
  title: string
  blurb: string
}

export type Product = {
  id: string
  name: string
  subtitle: string
  price: number
  collection: string
  art: Art
  badge?: 'Made to Order' | 'New' | 'Only 3 Left' | 'Bestseller'
  description: string
  /**
   * Stripe Payment Link for this product (Stripe dashboard > Payment Links).
   * Leave empty in the demo; the Buy button shows a note instead.
   */
  stripeLink?: string
}

export const collections: Collection[] = [
  {
    id: 'crochet',
    script: 'Cozy',
    title: 'Crochet Friends',
    blurb: 'Heirloom-quality critters, stitched tight so they last through years of hugs.',
  },
  {
    id: 'wood-kits',
    script: 'Autumn',
    title: 'Wood Craft Kits',
    blurb: 'Pre-cut pieces, paint, and instructions. Just add a free afternoon.',
  },
  {
    id: 'quilts',
    script: 'Snuggly',
    title: 'Quilts & Blankets',
    blurb: 'Bright, soft, and made to be used every single day.',
  },
]

export const products: Product[] = [
  {
    id: 'olive-octopus',
    name: 'Olive the Octopus',
    subtitle: 'Sensory Crochet Critter',
    price: 58,
    collection: 'crochet',
    art: { kind: 'octopus', color: '#b4546a', accent: '#f3c1c6', bg: '#f7e6e3' },
    badge: 'Bestseller',
    description:
      'Eight curly legs to fidget with and a squishy head that is perfect for little hands. Stitched with soft cotton yarn and safety eyes.',
  },
  {
    id: 'barley-bear',
    name: 'Barley the Bear',
    subtitle: 'Handmade Crochet Bear',
    price: 52,
    collection: 'crochet',
    art: { kind: 'bear', color: '#b98556', accent: '#e0a33a', bg: '#f5ebdc' },
    description:
      'A classic little bear with a honey-colored bow. About 10 inches tall, filled with hypoallergenic stuffing.',
  },
  {
    id: 'clover-bunny',
    name: 'Clover the Bunny',
    subtitle: 'Custom Crochet Bunny',
    price: 64,
    collection: 'crochet',
    art: { kind: 'bunny', color: '#ece3d6', accent: '#8fa487', bg: '#e7eee3' },
    badge: 'Made to Order',
    description:
      'Choose her bow color at checkout. Made to order, so please allow 2 to 3 weeks before she hops out the door.',
  },
  {
    id: 'wally-whale',
    name: 'Wally the Whale',
    subtitle: 'Crochet Sea Critter',
    price: 46,
    collection: 'crochet',
    art: { kind: 'whale', color: '#5b8fa8', accent: '#cfe3ea', bg: '#e3eef1' },
    badge: 'New',
    description: 'A chubby little whale with a spout on top. Great first friend for baby showers.',
  },
  {
    id: 'mae-mushroom',
    name: 'Mae the Mushroom',
    subtitle: 'Mini Crochet Keepsake',
    price: 18,
    collection: 'crochet',
    art: { kind: 'mushroom', color: '#c8553d', accent: '#fbf6ef', bg: '#f6e4dc' },
    description: 'A tiny spotted mushroom that fits in a pocket. Sweet on a shelf or clipped to a bag.',
  },
  {
    id: 'hello-pumpkin',
    name: 'Hello Pumpkin Leaner',
    subtitle: 'DIY Wood Craft Kit',
    price: 22,
    collection: 'wood-kits',
    art: { kind: 'pumpkinSign', color: '#d9b98c', accent: '#e07a3c', bg: '#f4ead9', text: 'hello' },
    badge: 'Bestseller',
    description:
      'An 18-inch leaner sign kit with pre-cut pumpkin, paint pods, brush, and step-by-step card. About an hour, start to finish.',
  },
  {
    id: 'boo-ghost',
    name: 'Little Boo Ghost',
    subtitle: 'DIY Wood Craft Kit',
    price: 14,
    collection: 'wood-kits',
    art: { kind: 'ghost', color: '#fbf6ef', accent: '#2b2a33', bg: '#e6e2ee', text: 'boo' },
    description: 'A chunky freestanding ghost that kids can paint themselves. Includes base, paint, and brush.',
  },
  {
    id: 'harvest-door',
    name: 'Happy Harvest Door Round',
    subtitle: 'DIY Wood Craft Kit',
    price: 26,
    collection: 'wood-kits',
    art: { kind: 'doorSign', color: '#d9b98c', accent: '#2f4a3f', bg: '#e9efe5', text: 'harvest' },
    badge: 'Only 3 Left',
    description: 'A 14-inch round door sign with vinyl stencil, jute hanger, and two paint colors.',
  },
  {
    id: 'trick-treat-door',
    name: 'Trick or Treat Door Round',
    subtitle: 'DIY Wood Craft Kit',
    price: 26,
    collection: 'wood-kits',
    art: { kind: 'doorSign', color: '#3b3a45', accent: '#e0a33a', bg: '#efe6d8', text: 'boo!' },
    badge: 'New',
    description: 'Same round sign, spooky edition. Black base with a golden stencil and ribbon hanger.',
  },
  {
    id: 'meadow-quilt',
    name: 'Meadow Patchwork Quilt',
    subtitle: 'Throw Size, 50" x 60"',
    price: 185,
    collection: 'quilts',
    art: { kind: 'quilt', color: '#8fa487', accent: '#f0c96b', bg: '#eef1e8' },
    badge: 'Made to Order',
    description: 'Cotton patchwork top with a minky back. Machine washable and softer every wash.',
  },
  {
    id: 'berry-quilt',
    name: 'Berry Patch Baby Quilt',
    subtitle: 'Crib Size, 36" x 45"',
    price: 120,
    collection: 'quilts',
    art: { kind: 'quilt', color: '#b4546a', accent: '#f3c1c6', bg: '#f7e6e3' },
    description: 'A bright baby quilt in berry and blush. A favorite for baby showers.',
  },
  {
    id: 'honey-quilt',
    name: 'Honeycomb Lap Quilt',
    subtitle: 'Lap Size, 40" x 50"',
    price: 140,
    collection: 'quilts',
    art: { kind: 'quilt', color: '#e0a33a', accent: '#fbf6ef', bg: '#f6ecd6' },
    badge: 'New',
    description: 'Warm honey tones with a soft cream binding, sized for the couch.',
  },
]

export type HeroSlide = {
  eyebrow: string
  script: string
  title: string
  body: string
  cta: string
  target: string
  art: Art
  bg: string
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'New Arrivals',
    script: 'Seaside',
    title: 'Crochet Critters',
    body: 'Curly legs, squishy heads, and a whole lot of personality. Meet Olive and Wally.',
    cta: 'Shop Crochet',
    target: 'crochet',
    art: { kind: 'octopus', color: '#e7a0a8', accent: '#fbf6ef', bg: 'transparent' },
    bg: '#2f4a3f',
  },
  {
    eyebrow: 'Fall Is Here',
    script: 'Paint',
    title: 'Your Own Porch Decor',
    body: 'Everything you need in one box. Grab a kit for family craft night.',
    cta: 'Shop Wood Kits',
    target: 'wood-kits',
    art: { kind: 'pumpkinSign', color: '#d9b98c', accent: '#e07a3c', bg: 'transparent', text: 'hello' },
    bg: '#7a3b3f',
  },
  {
    eyebrow: 'Baby Shower Favorite',
    script: 'Snuggle',
    title: 'Season Is Here',
    body: 'Bright, washable quilts that get softer every time they go through the wash.',
    cta: 'Shop Quilts',
    target: 'quilts',
    art: { kind: 'quilt', color: '#e0a33a', accent: '#fbf6ef', bg: 'transparent' },
    bg: '#3f4a63',
  },
]

export const reviews = [
  {
    quote:
      'The stitching is so even and nothing ever comes loose. My daughter has dragged her bunny everywhere for a year and it still looks new.',
    name: 'Jessica R.',
    place: 'Pocatello, ID',
  },
  {
    quote:
      'We did the pumpkin leaner kit for family night. Everything was in the box and the kids were so proud of it on the porch.',
    name: 'Amanda T.',
    place: 'Lava Hot Springs, ID',
  },
  {
    quote: 'Ordered a quilt as a baby shower gift and it arrived wrapped so beautifully. Already ordering another.',
    name: 'Kaylee M.',
    place: 'Idaho Falls, ID',
  },
]

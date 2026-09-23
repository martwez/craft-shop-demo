import type { Product } from '../data/shop'
import ProductArt from './ProductArt'

export const formatPrice = (n: number) => `$${n.toFixed(2)}`

export type ProductActions = {
  onQuickView: (p: Product) => void
  onBuy: (p: Product) => void
}

const badgeStyles: Record<NonNullable<Product['badge']>, string> = {
  'Made to Order': 'bg-pine text-cream',
  New: 'bg-honey text-ink',
  'Only 3 Left': 'bg-berry text-cream',
  Bestseller: 'bg-cream text-ink ring-1 ring-ink/10',
}

export function Badge({ badge }: { badge: NonNullable<Product['badge']> }) {
  return (
    <span className={`rounded-full px-3 py-1 text-[0.7rem] font-semibold tracking-wide ${badgeStyles[badge]}`}>
      {badge}
    </span>
  )
}

export default function ProductCard({ product, onQuickView, onBuy }: { product: Product } & ProductActions) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-paper shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-line">
        <button
          onClick={() => onQuickView(product)}
          className="block w-full"
          aria-label={`Quick view ${product.name}`}
        >
          <ProductArt art={product.art} className="aspect-square w-full transition duration-500 group-hover:scale-[1.04]" />
        </button>
        {product.badge && (
          <div className="pointer-events-none absolute left-3 top-3">
            <Badge badge={product.badge} />
          </div>
        )}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-x-3 bottom-3 hidden translate-y-3 rounded-full bg-ink/85 py-2.5 text-sm font-semibold text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 md:block"
        >
          Quick View
        </button>
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="font-semibold leading-snug text-ink">{product.name}</h3>
        <p className="text-sm text-muted">{product.subtitle}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-[1.05rem] font-bold">{formatPrice(product.price)}</span>
          <button
            onClick={() => onBuy(product)}
            className="rounded-full border-2 border-pine px-4 py-1.5 text-sm font-semibold text-pine transition hover:bg-pine hover:text-cream"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  )
}

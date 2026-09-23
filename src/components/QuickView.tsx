import { useEffect } from 'react'
import { shop, type Product } from '../data/shop'
import { CloseIcon, HandHeartIcon, LockIcon, TruckIcon } from './Icons'
import { Badge, formatPrice } from './ProductCard'
import ProductArt from './ProductArt'

export default function QuickView({
  product,
  onClose,
  onBuy,
}: {
  product: Product
  onClose: () => void
  onBuy: (p: Product) => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl md:grid-cols-2"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-cream/90 p-2 text-ink shadow hover:bg-paper"
          aria-label="Close"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="flex items-center" style={{ backgroundColor: product.art.bg }}>
          <ProductArt art={product.art} className="aspect-square w-full" />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          {product.badge && (
            <div className="mb-3">
              <Badge badge={product.badge} />
            </div>
          )}
          <h2 className="text-2xl font-extrabold leading-tight">{product.name}</h2>
          <p className="text-muted">{product.subtitle}</p>
          <p className="mt-4 text-2xl font-bold text-pine">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-ink/85">{product.description}</p>

          <ul className="mt-5 space-y-2 text-sm text-ink/80">
            <li className="flex items-center gap-2.5">
              <TruckIcon className="size-5 text-sage" /> Free shipping on orders over ${shop.freeShippingOver}
            </li>
            <li className="flex items-center gap-2.5">
              <HandHeartIcon className="size-5 text-sage" /> Handmade in {shop.location}
            </li>
          </ul>

          <button
            onClick={() => onBuy(product)}
            className="mt-7 rounded-full bg-pine py-3.5 font-semibold text-cream transition hover:bg-pine-dark"
          >
            Buy Now
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
            <LockIcon className="size-4" /> Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  )
}

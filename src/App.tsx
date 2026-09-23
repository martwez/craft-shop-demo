import { useCallback, useEffect, useState } from 'react'
import { collections, type Product } from './data/shop'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickView from './components/QuickView'
import { About, CategoryTiles, CollectionRow, DiscountPopup, Footer, Reviews, ShopAll, TrustStrip } from './components/Sections'

export default function App() {
  const [quickView, setQuickView] = useState<Product | null>(null)
  const [filter, setFilter] = useState('all')
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4500)
    return () => clearTimeout(t)
  }, [toast])

  // Each product gets its own Stripe Payment Link; the demo just explains that.
  const onBuy = useCallback((p: Product) => {
    if (p.stripeLink) {
      window.location.href = p.stripeLink
      return
    }
    setToast(`Demo store: in a real shop this opens a secure Stripe checkout for ${p.name}.`)
  }, [])

  const onShopAll = (id: string) => {
    setFilter(id)
    document.getElementById('shop')?.scrollIntoView()
  }

  const closeQuickView = useCallback(() => setQuickView(null), [])
  const actions = { onQuickView: setQuickView, onBuy }
  const [crochet, woodKits, quilts] = collections

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <CollectionRow collection={crochet} onShopAll={onShopAll} {...actions} />
        <CategoryTiles onShopAll={onShopAll} />
        <CollectionRow collection={woodKits} onShopAll={onShopAll} {...actions} />
        <Reviews />
        <CollectionRow collection={quilts} onShopAll={onShopAll} {...actions} />
        <ShopAll filter={filter} setFilter={setFilter} {...actions} />
        <About />
      </main>
      <Footer />
      <DiscountPopup />

      {quickView && <QuickView product={quickView} onClose={closeQuickView} onBuy={onBuy} />}

      {toast && (
        <div
          role="status"
          className="animate-fade-in fixed inset-x-4 bottom-20 z-[60] mx-auto max-w-md rounded-2xl bg-ink px-5 py-4 text-center text-sm text-cream shadow-xl"
        >
          {toast}
        </div>
      )}
    </>
  )
}

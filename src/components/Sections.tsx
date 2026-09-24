import { useState, type FormEvent } from 'react'
import { collections, products, reviews, shop, type Art, type Collection } from '../data/shop'
import { ArrowIcon, CloseIcon, HandHeartIcon, LockIcon, MailIcon, SparkleIcon, StarIcon, TruckIcon } from './Icons'
import ProductArt from './ProductArt'
import ProductCard, { type ProductActions } from './ProductCard'
import { Logo } from './Header'

/** Headline with one handwritten word: the site's signature look. */
export function ScriptHeading({ script, title, light = false }: { script: string; title: string; light?: boolean }) {
  return (
    <h2 className={`text-[2rem] font-extrabold leading-tight tracking-tight sm:text-[2.6rem] ${light ? 'text-cream' : 'text-ink'}`}>
      <span className={`script mr-2 ${light ? 'text-honey' : 'text-berry'}`}>{script}</span>
      {title}
    </h2>
  )
}

export function TrustStrip() {
  const items = [
    { icon: HandHeartIcon, title: 'Handmade in Idaho', body: 'Every piece made by hand' },
    { icon: TruckIcon, title: `Free shipping $${shop.freeShippingOver}+`, body: 'Ships in 3 to 5 days' },
    { icon: LockIcon, title: 'Secure checkout', body: 'Cards, Apple Pay, Google Pay' },
    { icon: SparkleIcon, title: 'Custom orders', body: 'Colors and names welcome' },
  ]
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-7 sm:px-6 md:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blush text-berry">
              <Icon className="size-[22px]" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">{title}</p>
              <p className="text-xs text-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CollectionRow({
  collection,
  onShopAll,
  ...actions
}: { collection: Collection; onShopAll: (id: string) => void } & ProductActions) {
  const items = products.filter((p) => p.collection === collection.id).slice(0, 4)
  return (
    <section id={collection.id} className="scroll-mt-32 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <ScriptHeading script={collection.script} title={collection.title} />
            <p className="mt-2 max-w-lg text-muted">{collection.blurb}</p>
          </div>
          <button
            onClick={() => onShopAll(collection.id)}
            className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-pine underline-offset-4 hover:underline"
          >
            Shop all <ArrowIcon className="size-4" />
          </button>
        </div>

        <div className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
          {items.map((p) => (
            <div key={p.id} className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-auto">
              <ProductCard product={p} {...actions} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const tiles: { id: string; label: string; script: string; art: Art; from: string }[] = [
  { id: 'crochet', label: 'Crochet Friends', script: 'huggable', from: '$18', art: { kind: 'bear', color: '#b98556', accent: '#b4546a', bg: '#f3e2da' } },
  { id: 'wood-kits', label: 'Wood Craft Kits', script: 'paint it', from: '$14', art: { kind: 'ghost', color: '#fbf6ef', accent: '#2b2a33', bg: '#e6e2ee', text: 'boo' } },
  { id: 'quilts', label: 'Quilts & Blankets', script: 'cozy', from: '$120', art: { kind: 'quilt', color: '#8fa487', accent: '#f0c96b', bg: '#e9efe5' } },
  { id: 'crochet', label: 'Little Keepsakes', script: 'pocket-size', from: '$18', art: { kind: 'mushroom', color: '#c8553d', accent: '#fbf6ef', bg: '#f6e4dc' } },
  { id: 'all', label: 'Custom Orders', script: 'just for you', from: 'Ask', art: { kind: 'yarn', color: '#e0a33a', accent: '#b98556', bg: '#f6ecd6' } },
]

export function CategoryTiles({ onShopAll }: { onShopAll: (id: string) => void }) {
  return (
    <section id="categories" className="scroll-mt-32 bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <ScriptHeading script="Shop" title="by Category" />
          <p className="mt-2 text-muted">Find the right gift, or something just for you.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {tiles.map((t, i) => (
            <button
              key={t.label}
              onClick={() => (t.label === 'Custom Orders' ? document.getElementById('about')?.scrollIntoView() : onShopAll(t.id))}
              className={`group relative overflow-hidden rounded-3xl text-left ${i === 0 ? 'col-span-2 md:row-span-2' : ''}`}
            >
              <ProductArt art={t.art} className="aspect-square w-full transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent p-4 pt-10 text-cream sm:p-5">
                <p className={`script text-honey ${i === 0 ? 'text-3xl' : 'text-xl'}`}>{t.script}</p>
                <p className={`font-extrabold leading-tight ${i === 0 ? 'text-3xl' : 'text-lg'}`}>{t.label}</p>
                <p className="text-sm text-cream/80">{t.from === 'Ask' ? 'Request a quote' : `From ${t.from}`}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-32 bg-pine py-16 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <ScriptHeading script="Kind" title="Words" light />
          <div className="mt-3 flex items-center justify-center gap-1 text-honey">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="size-5" />
            ))}
            <span className="ml-2 text-sm text-cream/80">Loved by local families</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-3xl bg-cream/[0.07] p-7 ring-1 ring-white/10">
              <span className="h-8 font-serif text-6xl leading-none text-honey/80" aria-hidden>&ldquo;</span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-cream/90">{r.quote}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-cream/60"> · {r.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShopAll({ filter, setFilter, ...actions }: { filter: string; setFilter: (f: string) => void } & ProductActions) {
  const chips = [{ id: 'all', title: 'Everything' }, ...collections]
  const list = filter === 'all' ? products : products.filter((p) => p.collection === filter)
  return (
    <section id="shop" className="scroll-mt-32 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <ScriptHeading script="Shop" title="Everything" />
          <p className="mt-2 text-muted">{list.length} handmade items</p>
        </div>
        <div className="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 sm:justify-center">
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === c.id ? 'bg-pine text-cream' : 'bg-paper text-ink/75 ring-1 ring-line hover:ring-pine/40'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
        <div key={filter} className="animate-fade-in mt-10 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 md:gap-x-6">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} {...actions} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-blush/60 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-sage/30" />
          <ProductArt
            art={{ kind: 'yarn', color: '#b4546a', accent: '#b98556', bg: '#fbf6ef' }}
            className="relative aspect-square w-full rounded-[2rem] shadow-sm"
          />
        </div>
        <div>
          <ScriptHeading script="Meet" title="the Maker" />
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/85">
            Hi, I'm Hannah! Chokecherry &amp; Wren started at my kitchen table with a crochet hook and a lot of late nights. Today
            I make critters, craft kits, and quilts in small batches right here in {shop.location}.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/85">
            Want a special color, a name stitched on, or a gift for a baby shower? I love custom orders. Send me a note and
            we'll make something one of a kind.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${shop.email}?subject=Custom%20order%20request`}
              className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 font-semibold text-cream transition hover:bg-pine-dark"
            >
              <MailIcon /> Request a Custom Order
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Floating "Get 10% Off" email signup. In the demo it only shows a thank-you;
 * for a client, point the form at Mailchimp, Kit, or Formspree.
 */
export function DiscountPopup() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setDone(true)
  }
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-30 rounded-full bg-honey px-5 py-3 text-sm font-bold text-ink shadow-lg ring-4 ring-cream transition hover:-translate-y-0.5"
      >
        Get {shop.discountPercent}% Off
      </button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Email signup"
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in relative w-full max-w-md overflow-hidden rounded-3xl bg-cream text-center shadow-2xl"
          >
            <button onClick={() => setOpen(false)} className="absolute right-3 top-3 rounded-full p-2 hover:bg-blush" aria-label="Close">
              <CloseIcon className="size-5" />
            </button>
            <div className="bg-blush px-6 pb-4 pt-8">
              <ProductArt art={{ kind: 'bear', color: '#b98556', accent: '#e0a33a', bg: 'transparent' }} className="mx-auto size-28" />
            </div>
            <div className="p-7">
              {done ? (
                <>
                  <p className="script text-3xl text-berry">Yay, welcome!</p>
                  <p className="mt-2 text-ink/85">Use this code at checkout:</p>
                  <p className="mx-auto mt-3 w-fit rounded-xl border-2 border-dashed border-pine px-5 py-2 text-xl font-extrabold tracking-widest text-pine">
                    WELCOME{shop.discountPercent}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold">
                    <span className="script text-berry">Take</span> {shop.discountPercent}% Off
                  </h3>
                  <p className="mt-2 text-muted">Join the list for new drops, restocks, and a thank-you code for your first order.</p>
                  <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="min-w-0 flex-1 rounded-full border border-line bg-paper px-5 py-3 outline-none focus:border-pine"
                    />
                    <button className="rounded-full bg-pine px-6 py-3 font-semibold text-cream hover:bg-pine-dark">Sign Up</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function Footer() {
  return (
    <footer className="bg-pine-dark text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">{shop.tagline}.</p>
        </div>
        <div>
          <p className="font-semibold">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            {collections.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="hover:text-cream">{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Help</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li>Shipping &amp; Returns</li>
            <li>Care Instructions</li>
            <li><a href="#about" className="hover:text-cream">Custom Orders</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Say Hi</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li>{shop.email}</li>
            <li>{shop.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} Chokecherry &amp; Wren Makery · Demo store built by{' '}
        <a href="https://lavatechpro.com" className="underline hover:text-cream">LavaTech Pro</a>. Products, names, and reviews are examples.
      </div>
    </footer>
  )
}

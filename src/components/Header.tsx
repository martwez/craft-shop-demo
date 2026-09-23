import { useState } from 'react'
import { collections, shop } from '../data/shop'
import { CloseIcon, MenuIcon } from './Icons'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`group inline-flex flex-col leading-none ${light ? 'text-cream' : 'text-ink'}`}>
      <span className="text-[1.55rem] font-extrabold tracking-tight">
        Bramble <span className="script text-honey">&amp;</span> Bee
      </span>
      <span className={`mt-1 text-[0.62rem] font-semibold tracking-[0.42em] ${light ? 'text-cream/70' : 'text-muted'}`}>
        {shop.suffix.toUpperCase()}
      </span>
    </a>
  )
}

const links = [
  { label: 'Shop All', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header id="top" className="sticky top-0 z-40 bg-cream/95 backdrop-blur">
      <div className="bg-pine px-4 py-2 text-center text-[0.8rem] font-medium tracking-wide text-cream">
        Free shipping on orders over ${shop.freeShippingOver} &nbsp;·&nbsp; Handmade in Idaho
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] font-medium text-ink/80 transition hover:text-berry">
              {l.label}
            </a>
          ))}
          <a
            href="#shop"
            className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-pine-dark"
          >
            Shop Now
          </a>
        </nav>

        <button
          className="rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Collection strip, like a department bar */}
      <div className="hidden border-y border-line bg-blush/70 md:block">
        <div className="mx-auto flex max-w-6xl justify-center gap-10 px-6 py-2.5">
          {collections.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="text-sm font-medium text-ink/75 transition hover:text-berry">
              {c.title}
            </a>
          ))}
          <a href="#about" className="text-sm font-medium text-ink/75 transition hover:text-berry">
            Custom Orders
          </a>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-line bg-cream px-4 pb-5 md:hidden">
          {[...links, ...collections.map((c) => ({ label: c.title, href: `#${c.id}` }))].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 font-medium text-ink/85"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { heroSlides } from '../data/shop'
import { ArrowIcon } from './Icons'
import ProductArt from './ProductArt'

const INTERVAL_MS = 6500

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = heroSlides[index]

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL_MS)
    return () => clearTimeout(t)
  }, [index, paused])

  const go = (delta: number) => setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length)

  return (
    <section
      className="relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: slide.bg }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* soft decorative rings */}
      <div className="pointer-events-none absolute -right-24 -top-24 size-[520px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 size-[420px] rounded-full border border-white/10" />

      <div
        key={index}
        className="animate-fade-in mx-auto grid max-w-6xl items-center gap-6 px-4 pb-16 pt-10 sm:px-6 md:min-h-[500px] md:grid-cols-2 md:py-14"
      >
        <div className="order-2 text-cream md:order-1">
          <p className="text-lg font-medium text-cream/80">{slide.eyebrow}</p>
          <h1 className="mt-2 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            <span className="script block text-honey">{slide.script}</span>
            {slide.title}
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-cream/85">{slide.body}</p>
          <a
            href={`#${slide.target}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-cream/80 px-7 py-3 font-semibold text-cream transition hover:bg-cream hover:text-ink"
          >
            {slide.cta} <ArrowIcon />
          </a>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative size-64 rounded-full bg-cream/10 p-6 ring-1 ring-white/15 sm:size-80 md:size-[380px]">
            <div className="absolute inset-4 rounded-full bg-cream/90" />
            <ProductArt art={slide.art} className="relative size-full drop-shadow-lg" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} className="rounded-full p-1.5 text-cream/70 hover:text-cream" aria-label="Previous slide">
          <ArrowIcon dir="left" className="size-4" />
        </button>
        {heroSlides.map((s, i) => (
          <button
            key={s.script}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-7 bg-honey' : 'w-2 bg-cream/50 hover:bg-cream/80'}`}
          />
        ))}
        <button onClick={() => go(1)} className="rounded-full p-1.5 text-cream/70 hover:text-cream" aria-label="Next slide">
          <ArrowIcon className="size-4" />
        </button>
      </div>
    </section>
  )
}

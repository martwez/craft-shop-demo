import { useId, type ReactNode } from 'react'
import type { Art } from '../data/shop'

// Placeholder product illustrations for the demo. A real client build
// swaps these for product photos (see ProductImage in ProductCard).

const INK = '#2b2a33'

function Face({ x, y, gap = 13, size = 4.5 }: { x: number; y: number; gap?: number; size?: number }) {
  return (
    <g>
      <circle cx={x - gap} cy={y} r={size} fill={INK} />
      <circle cx={x + gap} cy={y} r={size} fill={INK} />
      <circle cx={x - gap + 1.5} cy={y - 1.5} r={1.4} fill="#fff" />
      <circle cx={x + gap + 1.5} cy={y - 1.5} r={1.4} fill="#fff" />
      <circle cx={x - gap - 7} cy={y + 9} r={5} fill="#f08c9a" opacity={0.55} />
      <circle cx={x + gap + 7} cy={y + 9} r={5} fill="#f08c9a" opacity={0.55} />
      <path d={`M${x - 5} ${y + 8} q5 5 10 0`} stroke={INK} strokeWidth={2.2} fill="none" strokeLinecap="round" />
    </g>
  )
}

/** Tiny "v" stitches laid over crochet shapes so they read as yarn. */
function StitchPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="9" height="8" patternUnits="userSpaceOnUse">
      <path d="M1 1.5 L4.5 6 L8 1.5" stroke="#000" strokeOpacity={0.13} strokeWidth={1.3} fill="none" strokeLinecap="round" />
    </pattern>
  )
}

function WoodGrain({ id, color }: { id: string; color: string }) {
  return (
    <pattern id={id} width="200" height="14" patternUnits="userSpaceOnUse">
      <rect width="200" height="14" fill={color} />
      <path d="M0 7 q50 -4 100 0 t100 0" stroke="#000" strokeOpacity={0.08} strokeWidth={1.2} fill="none" />
    </pattern>
  )
}

export default function ProductArt({ art, className = '' }: { art: Art; className?: string }) {
  const uid = useId().replace(/:/g, '')
  const stitch = `stitch-${uid}`
  const grain = `grain-${uid}`
  const { color, accent, text } = art
  const knit = `url(#${stitch})`

  let body: ReactNode
  switch (art.kind) {
    case 'octopus':
      body = (
        <g>
          {[
            'M62 118 C44 138 40 158 58 170 C68 176 76 166 70 158',
            'M78 124 C70 146 70 166 86 176',
            'M94 128 C92 150 96 168 110 178',
            'M108 128 C114 150 124 166 140 170',
            'M122 124 C136 142 150 152 160 142 C166 134 156 126 150 134',
            'M136 116 C154 126 170 128 176 114',
          ].map((d) => (
            <g key={d}>
              <path d={d} stroke={color} strokeWidth={15} fill="none" strokeLinecap="round" />
              <path d={d} stroke={knit} strokeWidth={15} fill="none" strokeLinecap="round" />
            </g>
          ))}
          <ellipse cx="100" cy="88" rx="52" ry="48" fill={color} />
          <ellipse cx="100" cy="88" rx="52" ry="48" fill={knit} />
          <ellipse cx="84" cy="64" rx="14" ry="9" fill="#fff" opacity={0.25} />
          <Face x={100} y={98} />
        </g>
      )
      break
    case 'bear':
    case 'bunny': {
      const bunny = art.kind === 'bunny'
      const shapes = (fill: string) => (
        <g fill={fill}>
          {bunny ? (
            <>
              <ellipse cx="80" cy="44" rx="13" ry="34" transform="rotate(-10 80 44)" />
              <ellipse cx="120" cy="44" rx="13" ry="34" transform="rotate(10 120 44)" />
            </>
          ) : (
            <>
              <circle cx="66" cy="56" r="17" />
              <circle cx="134" cy="56" r="17" />
            </>
          )}
          <ellipse cx="100" cy="150" rx="40" ry="34" />
          <ellipse cx="62" cy="142" rx="11" ry="17" transform="rotate(20 62 142)" />
          <ellipse cx="138" cy="142" rx="11" ry="17" transform="rotate(-20 138 142)" />
          <ellipse cx="80" cy="180" rx="15" ry="10" />
          <ellipse cx="120" cy="180" rx="15" ry="10" />
          <circle cx="100" cy="92" r="42" />
        </g>
      )
      body = (
        <g>
          {shapes(color)}
          {shapes(knit)}
          {bunny ? (
            <>
              <ellipse cx="80" cy="46" rx="6" ry="24" fill="#f3c1c6" transform="rotate(-10 80 46)" />
              <ellipse cx="120" cy="46" rx="6" ry="24" fill="#f3c1c6" transform="rotate(10 120 46)" />
            </>
          ) : (
            <>
              <circle cx="66" cy="56" r="8" fill="#000" opacity={0.12} />
              <circle cx="134" cy="56" r="8" fill="#000" opacity={0.12} />
            </>
          )}
          {!bunny && <ellipse cx="100" cy="104" rx="16" ry="12" fill="#fff" opacity={0.35} />}
          <Face x={100} y={92} gap={bunny ? 14 : 15} />
          <path d="M84 128 L100 136 L84 144 Z M116 128 L100 136 L116 144 Z" fill={accent} />
          <circle cx="100" cy="136" r="5" fill={accent} />
        </g>
      )
      break
    }
    case 'whale':
      body = (
        <g>
          <path d="M100 44 q-6 -14 -16 -16 M100 44 q6 -14 16 -16 M100 44 v-18" stroke={accent} strokeWidth={5} fill="none" strokeLinecap="round" />
          <path d="M150 112 C168 96 184 96 186 84 C176 88 168 84 160 90 C162 76 152 70 146 80 C144 92 146 104 150 112 Z" fill={color} />
          <path d="M28 118 C28 76 62 54 100 54 C140 54 162 82 158 116 C154 150 124 164 92 164 C56 164 28 150 28 118 Z" fill={color} />
          <path d="M28 118 C28 76 62 54 100 54 C140 54 162 82 158 116 C154 150 124 164 92 164 C56 164 28 150 28 118 Z" fill={knit} />
          <path d="M34 130 C54 150 120 156 154 128 C150 150 124 164 92 164 C60 164 40 152 34 130 Z" fill={accent} />
          <Face x={82} y={104} gap={14} />
        </g>
      )
      break
    case 'mushroom':
      body = (
        <g>
          <path d="M76 110 C72 140 72 162 80 176 L120 176 C128 162 128 140 124 110 Z" fill="#f4ecdf" />
          <path d="M76 110 C72 140 72 162 80 176 L120 176 C128 162 128 140 124 110 Z" fill={knit} />
          <path d="M30 112 C30 62 62 36 100 36 C138 36 170 62 170 112 C150 122 50 122 30 112 Z" fill={color} />
          <path d="M30 112 C30 62 62 36 100 36 C138 36 170 62 170 112 C150 122 50 122 30 112 Z" fill={knit} />
          {[[70, 70, 11], [112, 58, 9], [140, 88, 10], [96, 94, 8], [56, 100, 7]].map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={accent} />
          ))}
          <Face x={100} y={142} gap={10} size={4} />
        </g>
      )
      break
    case 'pumpkinSign':
      body = (
        <g>
          <rect x="62" y="16" width="76" height="172" rx="6" fill={`url(#${grain})`} />
          <rect x="62" y="16" width="76" height="172" rx="6" fill="none" stroke="#000" strokeOpacity={0.12} strokeWidth={2} />
          <text x="100" y="62" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight={700} fontSize="30" fill={INK}>
            {text}
          </text>
          <text x="100" y="84" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight={800} fontSize="13" letterSpacing="3" fill={INK}>
            FALL
          </text>
          <g transform="translate(100 138)">
            <path d="M0 -30 q4 -10 12 -12" stroke="#5b4630" strokeWidth={5} fill="none" strokeLinecap="round" />
            <ellipse cx="-16" cy="0" rx="16" ry="26" fill={accent} />
            <ellipse cx="16" cy="0" rx="16" ry="26" fill={accent} />
            <ellipse cx="0" cy="0" rx="17" ry="28" fill={accent} />
            <path d="M-16 -24 v48 M16 -24 v48 M0 -28 v56" stroke="#000" strokeOpacity={0.15} strokeWidth={2} />
            <path d="M8 -32 q14 -6 20 4 q-12 4 -20 -4 Z" fill="#5b8a4a" />
          </g>
        </g>
      )
      break
    case 'ghost':
      body = (
        <g>
          <rect x="44" y="170" width="112" height="16" rx="4" fill="#c9a577" />
          <path
            d="M56 172 V92 C56 56 76 32 100 32 C124 32 144 56 144 92 V172 L132 160 L120 172 L108 160 L96 172 L84 160 L72 172 L64 162 Z"
            fill={color}
            stroke="#000"
            strokeOpacity={0.12}
            strokeWidth={2}
          />
          <ellipse cx="86" cy="86" rx="7" ry="10" fill={accent} />
          <ellipse cx="114" cy="86" rx="7" ry="10" fill={accent} />
          <ellipse cx="100" cy="108" rx="8" ry="10" fill={accent} />
          <text x="100" y="146" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight={700} fontSize="30" fill="#e07a3c">
            {text}
          </text>
        </g>
      )
      break
    case 'doorSign':
      body = (
        <g>
          <path d="M100 18 L64 50 M100 18 L136 50" stroke="#a88a5f" strokeWidth={3} />
          <circle cx="100" cy="18" r="5" fill="#a88a5f" />
          <circle cx="100" cy="112" r="72" fill={color} />
          <circle cx="100" cy="112" r="72" fill={`url(#${grain})`} opacity={color.startsWith('#3') ? 0 : 1} />
          <circle cx="100" cy="112" r="62" fill="none" stroke={accent} strokeWidth={2} strokeDasharray="4 6" />
          <text x="100" y="98" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight={800} fontSize="13" letterSpacing="3" fill={accent}>
            HAPPY
          </text>
          <text x="100" y="134" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight={700} fontSize="40" fill={accent}>
            {text}
          </text>
          <path d="M84 150 q16 10 32 0" stroke={accent} strokeWidth={2.5} fill="none" strokeLinecap="round" />
          <g transform="translate(118 44)">
            <path d="M0 0 q-14 -12 -22 -2 q10 8 22 2 q14 -12 22 -2 q-10 8 -22 2 Z" fill="#b4546a" />
            <circle r="4" fill="#8e3c50" />
          </g>
        </g>
      )
      break
    case 'quilt': {
      const cols = [color, accent, '#fbf6ef', color, accent]
      body = (
        <g>
          {[0, 1, 2].map((layer) => {
            const y = 122 - layer * 34
            return (
              <g key={layer}>
                <rect x={30 + layer * 4} y={y} width={140 - layer * 8} height={40} rx={10} fill={layer === 1 ? accent : color} />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <rect
                    key={i}
                    x={36 + layer * 4 + i * ((128 - layer * 8) / 6)}
                    y={y + 8}
                    width={(128 - layer * 8) / 6 - 4}
                    height={24}
                    rx={3}
                    fill={cols[(i + layer) % cols.length]}
                    opacity={0.9}
                  />
                ))}
                <rect x={30 + layer * 4} y={y} width={140 - layer * 8} height={40} rx={10} fill="none" stroke="#fff" strokeOpacity={0.6} strokeWidth={2} strokeDasharray="3 4" />
              </g>
            )
          })}
          <path d="M142 58 q12 -18 28 -8 q-10 18 -28 8 Z" fill={color} opacity={0.4} />
        </g>
      )
      break
    }
    case 'yarn':
      body = (
        <g>
          <circle cx="100" cy="100" r="62" fill={color} />
          {[-40, -20, 0, 20, 40].map((o) => (
            <path key={o} d={`M${60 + o * 0.4} ${44 - o * 0.2} C${130 + o} ${80 + o}, ${120 + o} ${130 + o}, ${70 + o * 0.5} ${156}`} stroke="#000" strokeOpacity={0.14} strokeWidth={3} fill="none" />
          ))}
          <path d="M154 130 C176 150 170 176 146 178" stroke={color} strokeWidth={5} fill="none" strokeLinecap="round" />
          <path d="M140 60 L180 30 M146 66 L186 40" stroke={accent} strokeWidth={6} strokeLinecap="round" />
        </g>
      )
      break
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true">
      <defs>
        <StitchPattern id={stitch} />
        <WoodGrain id={grain} color={color} />
      </defs>
      {art.bg !== 'transparent' && <rect width="200" height="200" fill={art.bg} />}
      <ellipse cx="100" cy="188" rx="64" ry="7" fill="#000" opacity={0.07} />
      {body}
    </svg>
  )
}

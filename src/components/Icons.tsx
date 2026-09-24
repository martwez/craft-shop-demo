// Simple line icons, drawn to match the shop's hand-made feel.

type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const TruckIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
)

export const HandHeartIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 9.5c-1-2-4.5-2-4.5 1 0 2 4.5 4.5 4.5 4.5s4.5-2.5 4.5-4.5c0-3-3.5-3-4.5-1Z" />
    <path d="M3 19c2-1.5 4-2 6-1.5l4 1c1 .3 2-.3 2-1.2 0-.6-.4-1-1-1.2l-2.5-.6M15 17.5l4-1.8c.8-.3 1.7.2 1.7 1 0 .4-.2.8-.6 1L14 21H9l-6-1" />
  </svg>
)

export const LockIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15.5" r="1.2" />
  </svg>
)

export const SparkleIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3c.6 4 2 5.4 6 6-4 .6-5.4 2-6 6-.6-4-2-5.4-6-6 4-.6 5.4-2 6-6Z" />
    <path d="M18.5 15.5c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5Z" />
  </svg>
)

export const MenuIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = ({ className = 'size-6' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ArrowIcon = ({ className = 'size-5', dir = 'right' }: IconProps & { dir?: 'left' | 'right' }) => (
  <svg {...base} className={className} style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const StarIcon = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8Z" />
  </svg>
)

export const MailIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

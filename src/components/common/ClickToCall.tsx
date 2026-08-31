import { business, phoneHref } from '../../content/business.ts'

type ClickToCallProps = {
  variant?: 'primary' | 'secondary' | 'text'
  label?: string
  className?: string
}

const variants = {
  primary:
    'inline-flex min-h-11 items-center justify-center rounded-none bg-clay px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-cream uppercase transition hover:bg-clay-dark',
  secondary:
    'inline-flex min-h-11 items-center justify-center rounded-none border border-ink/25 bg-cream px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink uppercase transition hover:border-clay hover:text-clay',
  text: 'inline-flex items-center text-xs font-bold tracking-[0.18em] text-clay uppercase underline-offset-4 hover:underline',
}

export function ClickToCall({
  variant = 'primary',
  label = `Call ${business.phoneDisplay}`,
  className = '',
}: ClickToCallProps) {
  return (
    <a href={phoneHref} className={`${variants[variant]} ${className}`.trim()}>
      {label}
    </a>
  )
}

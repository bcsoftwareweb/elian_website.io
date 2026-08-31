import { business, phoneHref } from '../../content/business.ts'

type ClickToCallProps = {
  variant?: 'primary' | 'secondary' | 'text'
  label?: string
  className?: string
}

const variants = {
  primary:
    'inline-flex min-h-11 items-center justify-center rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-clay-dark',
  secondary:
    'inline-flex min-h-11 items-center justify-center rounded-full border border-ink/15 bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-stone',
  text: 'inline-flex items-center font-semibold text-clay underline-offset-4 hover:underline',
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

import { business } from '../../content/business.ts'

export function Header() {
  return (
    <header className="border-b border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <p className="font-serif text-2xl tracking-tight text-ink">
          {business.name}
        </p>
      </div>
    </header>
  )
}

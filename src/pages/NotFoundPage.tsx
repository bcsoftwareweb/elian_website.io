import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-muted">
        The page you requested is not in this site. Return home or browse the
        product catalog.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream hover:bg-clay-dark"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-stone"
        >
          Products
        </Link>
      </div>
    </section>
  )
}

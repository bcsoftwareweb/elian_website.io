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
          className="inline-flex items-center justify-center rounded-none bg-clay px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-cream uppercase hover:bg-clay-dark"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-none border border-ink/25 px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink uppercase hover:border-clay"
        >
          Products
        </Link>
      </div>
    </section>
  )
}

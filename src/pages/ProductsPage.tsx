import { CallToAction } from '../components/common/CallToAction.tsx'
import { ProductGrid } from '../components/product/ProductGrid.tsx'
import { getProducts } from '../content/products.ts'

export function ProductsPage() {
  const products = getProducts()

  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Browse the current Elian catalog. Each piece can be purchased by
            phone. Availability, finishes, and lead times are confirmed when you
            call.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ProductGrid products={products} />
      </section>

      <CallToAction
        title="Call to purchase"
        description="There is no shopping cart on this site. Call Elian to reserve a piece or ask about a similar option."
      />
    </>
  )
}

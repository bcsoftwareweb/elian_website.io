import { Link, useParams } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction.tsx'
import { ProductGrid } from '../components/product/ProductGrid.tsx'
import { getCategoryBySlug } from '../content/categories.ts'
import { getProductsByCategory } from '../content/products.ts'

export function CategoryPage() {
  const { categorySlug } = useParams()
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined
  const products = categorySlug ? getProductsByCategory(categorySlug) : []

  if (!category) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="font-serif text-4xl tracking-tight">
          Collection not found
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          This collection is not in the current catalog.
        </p>
        <Link
          to="/collections"
          className="mt-6 inline-flex text-sm font-semibold text-clay underline-offset-4 hover:underline"
        >
          Browse collections
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-clay uppercase">
              Collection
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-muted">
              {category.description}
            </p>
          </div>
          <img
            src={category.image.src}
            alt={category.image.alt}
            className="h-64 w-full rounded-2xl object-cover"
            width={800}
            height={512}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ProductGrid products={products} />
      </section>

      <CallToAction
        title={`Call about ${category.name.toLowerCase()}`}
        description="Ask about current stock, finishes, or a similar piece from this collection."
      />
    </>
  )
}

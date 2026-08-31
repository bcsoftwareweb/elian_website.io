import { CategorySection } from '../components/product/CategorySection.tsx'
import { getCategories } from '../content/categories.ts'

export function CollectionsPage() {
  const categories = getCategories()

  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Collections
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Products are organized by collection. Additional categories can be
            added later through the CMS without changing this page structure.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <CategorySection categories={categories} />
      </section>
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction.tsx'
import { ProductDetails } from '../components/product/ProductDetails.tsx'
import { getProductBySlug } from '../content/products.ts'

export function ProductDetailPage() {
  const { productSlug } = useParams()
  const product = productSlug ? getProductBySlug(productSlug) : undefined

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="font-serif text-4xl tracking-tight">Product not found</h1>
        <p className="mt-4 text-lg text-ink-muted">
          This product is no longer listed. Browse the catalog or call us for
          current availability.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex text-sm font-semibold text-clay underline-offset-4 hover:underline"
        >
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <>
      <ProductDetails product={product} />
      <CallToAction
        title="Call to purchase this piece"
        description="We will confirm the finish, size, and current lead time before you order."
      />
    </>
  )
}

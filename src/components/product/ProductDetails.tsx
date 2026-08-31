import { Link } from 'react-router-dom'
import { getProductCategoryName } from '../../content/products.ts'
import type { Product } from '../../content/types.ts'
import { ClickToCall } from '../common/ClickToCall.tsx'

type ProductDetailsProps = {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const gallery = product.images.length > 0 ? product.images : [product.image]
  const categoryName = getProductCategoryName(product)

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div className="space-y-4">
        {gallery.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full rounded-2xl object-cover"
            width={900}
            height={720}
          />
        ))}
      </div>

      <div>
        <p className="text-sm font-semibold tracking-wide text-clay uppercase">
          <Link
            to={`/collections/${product.categorySlug}`}
            className="hover:underline"
          >
            {categoryName}
          </Link>
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink">
          {product.name}
        </h1>
        {product.price ? (
          <p className="mt-4 text-lg font-semibold">{product.price}</p>
        ) : null}
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {product.description}
        </p>

        <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {product.specifications.map((spec) => (
            <div
              key={spec.label}
              className="grid grid-cols-2 gap-4 py-3 text-sm"
            >
              <dt className="font-semibold text-ink">{spec.label}</dt>
              <dd className="text-ink-muted">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ClickToCall label="Call to Purchase" />
          <ClickToCall
            variant="secondary"
            label="Call for More Information"
          />
        </div>
      </div>
    </article>
  )
}

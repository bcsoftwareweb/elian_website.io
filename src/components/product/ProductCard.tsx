import { Link } from 'react-router-dom'
import { getProductCategoryName } from '../../content/products.ts'
import type { Product } from '../../content/types.ts'
import { ClickToCall } from '../common/ClickToCall.tsx'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-none border border-ink/10 bg-stone">
      <Link to={`/products/${product.slug}`} className="block">
        <img
          src={product.image.src}
          alt={product.image.alt}
          className="h-56 w-full object-cover"
          width={640}
          height={448}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-wide text-leaf uppercase">
          {getProductCategoryName(product)}
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight">
          <Link to={`/products/${product.slug}`} className="hover:text-clay">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {product.description}
        </p>
        {product.price ? (
          <p className="mt-4 text-sm font-semibold text-ink">{product.price}</p>
        ) : null}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <ClickToCall label="Call to Cop" className="px-4 py-2" />
          <Link
            to={`/products/${product.slug}`}
            className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

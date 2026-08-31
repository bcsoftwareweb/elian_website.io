import type { Product } from '../../content/types.ts'
import { ProductCard } from './ProductCard.tsx'

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-ink-muted">
        No products are available in this collection yet. Call the shop for
        current stock.
      </p>
    )
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

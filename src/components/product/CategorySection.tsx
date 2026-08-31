import { Link } from 'react-router-dom'
import type { Category } from '../../content/types.ts'

type CategorySectionProps = {
  categories: Category[]
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            to={`/collections/${category.slug}`}
            className="block overflow-hidden rounded-none border border-ink/10 bg-stone transition hover:border-leaf"
          >
            <img
              src={category.image.src}
              alt={category.image.alt}
              className="h-56 w-full object-cover"
              width={800}
              height={448}
              loading="lazy"
              decoding="async"
            />
            <div className="p-5">
              <h2 className="font-serif text-2xl tracking-tight">
                {category.name}
              </h2>
              <p className="mt-2 text-ink-muted">{category.description}</p>
              <p className="mt-4 text-sm font-semibold text-leaf">
                View collection
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

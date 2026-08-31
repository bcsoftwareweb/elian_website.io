import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCategoryBySlug } from '../../content/categories.ts'
import { getProductBySlug } from '../../content/products.ts'

function titleForPath(pathname: string): string {
  if (pathname === '/') {
    return 'Elian | Home Furnishings'
  }

  if (pathname === '/products') {
    return 'Products | Elian'
  }

  if (pathname.startsWith('/products/')) {
    const product = getProductBySlug(pathname.replace('/products/', ''))
    return product ? `${product.name} | Elian` : 'Product | Elian'
  }

  if (pathname === '/collections') {
    return 'Collections | Elian'
  }

  if (pathname.startsWith('/collections/')) {
    const category = getCategoryBySlug(pathname.replace('/collections/', ''))
    return category ? `${category.name} | Elian` : 'Collection | Elian'
  }

  if (pathname === '/about') {
    return 'About | Elian'
  }

  if (pathname === '/contact') {
    return 'Contact | Elian'
  }

  return 'Page not found | Elian'
}

export function DocumentTitle() {
  const { pathname } = useLocation()
  const title = titleForPath(pathname)

  useEffect(() => {
    document.title = title
  }, [title])

  return null
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCategoryBySlug } from '../../content/categories.ts'
import { getProductBySlug } from '../../content/products.ts'

function titleForPath(pathname: string): string {
  if (pathname === '/') {
    return 'ELIAN | NYC Street Wear'
  }

  if (pathname === '/products') {
    return 'Products | ELIAN'
  }

  if (pathname.startsWith('/products/')) {
    const product = getProductBySlug(pathname.replace('/products/', ''))
    return product ? `${product.name} | ELIAN` : 'Product | ELIAN'
  }

  if (pathname === '/collections') {
    return 'Collections | ELIAN'
  }

  if (pathname.startsWith('/collections/')) {
    const category = getCategoryBySlug(pathname.replace('/collections/', ''))
    return category ? `${category.name} | ELIAN` : 'Collection | ELIAN'
  }

  if (pathname === '/about') {
    return 'About | ELIAN'
  }

  if (pathname === '/contact') {
    return 'Contact | ELIAN'
  }

  return 'Page not found | ELIAN'
}

export function DocumentTitle() {
  const { pathname } = useLocation()
  const title = titleForPath(pathname)

  useEffect(() => {
    document.title = title
  }, [title])

  return null
}

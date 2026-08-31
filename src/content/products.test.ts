import { describe, expect, it } from 'vitest'
import {
  getFeaturedProducts,
  getProductBySlug,
  getProductCategoryName,
  getProducts,
  getProductsByCategory,
} from '../content/products.ts'

describe('product catalog data', () => {
  it('returns reusable product records with required fields', () => {
    const products = getProducts()

    expect(products.length).toBeGreaterThan(0)
    for (const product of products) {
      expect(product.id).toBeTruthy()
      expect(product.slug).toBeTruthy()
      expect(product.name).toBeTruthy()
      expect(product.description).toBeTruthy()
      expect(product.image.src).toBeTruthy()
      expect(product.categorySlug).toBeTruthy()
      expect(product.specifications.length).toBeGreaterThan(0)
    }
  })

  it('returns only featured products', () => {
    const featured = getFeaturedProducts()

    expect(featured.length).toBeGreaterThan(0)
    expect(featured.every((product) => product.featured)).toBe(true)
  })

  it('finds a product by slug', () => {
    const product = getProductBySlug('alder-lounge-chair')

    expect(product?.name).toBe('Alder Lounge Chair')
  })

  it('filters products by category', () => {
    const furniture = getProductsByCategory('furniture')

    expect(furniture.length).toBeGreaterThan(0)
    expect(
      furniture.every((product) => product.categorySlug === 'furniture'),
    ).toBe(true)
  })

  it('resolves a human-readable category name', () => {
    const product = getProductBySlug('ember-table-lamp')

    expect(product).toBeDefined()
    expect(getProductCategoryName(product!)).toBe('Lighting')
  })
})

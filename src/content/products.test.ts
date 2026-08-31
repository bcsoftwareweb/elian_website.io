import { describe, expect, it } from 'vitest'
import { getCategories } from '../content/categories.ts'
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
    const product = getProductBySlug('ironbound-hoodie')

    expect(product?.name).toBe('Ironbound Hoodie')
  })

  it('filters products by category', () => {
    const hoodies = getProductsByCategory('hoodies')

    expect(hoodies.length).toBeGreaterThan(0)
    expect(
      hoodies.every((product) => product.categorySlug === 'hoodies'),
    ).toBe(true)
  })

  it('resolves a human-readable category name', () => {
    const product = getProductBySlug('bowery-box-tee')

    expect(product).toBeDefined()
    expect(getProductCategoryName(product!)).toBe('Tees')
  })

  it('does not use catalog image URLs that 404', () => {
    const brokenIds = [
      'photo-1578768079052-aa76e52d8382',
      'photo-1548883354-94bcfe323ff1',
      'photo-1618354691373-d851c5c3a99b',
      'photo-1588850561407-42e62b481bba',
      'photo-1575428652377-a25b653e0a1b',
    ]
    const catalogUrls = [
      ...getProducts().flatMap((product) => [
        product.image.src,
        ...product.images.map((image) => image.src),
      ]),
      ...getCategories().map((category) => category.image.src),
    ]

    for (const src of catalogUrls) {
      expect(src).toBeTruthy()
      for (const id of brokenIds) {
        expect(src).not.toContain(id)
      }
    }
  })
})

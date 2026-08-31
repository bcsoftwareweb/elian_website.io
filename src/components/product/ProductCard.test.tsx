import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { getProducts } from '../../content/products.ts'
import { ProductCard } from './ProductCard.tsx'

describe('ProductCard', () => {
  it('renders product information and a call-to-purchase action', () => {
    const product = getProducts()[0]

    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: product.name }),
    ).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Call to Purchase' }),
    ).toHaveAttribute('href', 'tel:+15550102400')
    expect(screen.getByRole('link', { name: 'View details' })).toHaveAttribute(
      'href',
      `/products/${product.slug}`,
    )
  })
})

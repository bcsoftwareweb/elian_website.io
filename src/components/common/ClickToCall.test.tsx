import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClickToCall } from './ClickToCall.tsx'

describe('ClickToCall', () => {
  it('uses a click-to-call telephone link', () => {
    render(<ClickToCall label="Call Now" />)

    expect(screen.getByRole('link', { name: 'Call Now' })).toHaveAttribute(
      'href',
      'tel:+15550102400',
    )
  })
})

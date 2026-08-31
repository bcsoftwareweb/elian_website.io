import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContactForm } from './ContactForm.tsx'

describe('ContactForm', () => {
  it('shows validation messages when required fields are empty', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getByText('Enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Enter your email address.')).toBeInTheDocument()
    expect(screen.getByText('Enter a phone number.')).toBeInTheDocument()
    expect(screen.getByText('Enter a message.')).toBeInTheDocument()
  })

  it('shows a success state after a valid submission', async () => {
    const user = userEvent.setup()

    render(<ContactForm />)
    await user.type(screen.getByLabelText('Name'), 'Jordan Lee')
    await user.type(screen.getByLabelText('Email'), 'jordan@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-010-2400')
    await user.type(
      screen.getByLabelText('Message'),
      'Please call me about the Rowan dining table.',
    )
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(await screen.findByText('Message received')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Call Now' })).toBeInTheDocument()
  })
})

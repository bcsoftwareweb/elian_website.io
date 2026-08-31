import { describe, expect, it } from 'vitest'
import {
  hasContactFormErrors,
  validateContactForm,
} from '../utils/validateContactForm.ts'

const validValues = {
  name: 'Jordan Lee',
  email: 'jordan@example.com',
  phone: '555-010-2400',
  message: 'I would like more information about the Alder lounge chair.',
}

describe('validateContactForm', () => {
  it('accepts a complete inquiry', () => {
    const errors = validateContactForm(validValues)

    expect(hasContactFormErrors(errors)).toBe(false)
  })

  it('requires every field', () => {
    const errors = validateContactForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

    expect(errors.name).toBe('Enter your name.')
    expect(errors.email).toBe('Enter your email address.')
    expect(errors.phone).toBe('Enter a phone number.')
    expect(errors.message).toBe('Enter a message.')
  })

  it('rejects an invalid email address', () => {
    const errors = validateContactForm({
      ...validValues,
      email: 'not-an-email',
    })

    expect(errors.email).toBe('Enter a valid email address.')
  })

  it('rejects a phone number with no digits', () => {
    const errors = validateContactForm({
      ...validValues,
      phone: 'call me',
    })

    expect(errors.phone).toBe('Enter a phone number we can call back.')
  })

  it('rejects a message that is too short', () => {
    const errors = validateContactForm({
      ...validValues,
      message: 'Hello',
    })

    expect(errors.message).toBe(
      'Please include a little more detail in your message.',
    )
  })
})

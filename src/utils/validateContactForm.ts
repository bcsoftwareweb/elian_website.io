export type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /[0-9]/

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Enter a phone number.'
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = 'Enter a phone number we can call back.'
  }

  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please include a little more detail in your message.'
  }

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}

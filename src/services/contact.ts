import type { ContactFormValues } from '../utils/validateContactForm.ts'

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as
  | string
  | undefined

/**
 * Submits inquiry data to a future backend when configured.
 * Without an endpoint, the frontend still completes a validated
 * success path so the form can be used before a mail service exists.
 */
export async function submitContactInquiry(
  values: ContactFormValues,
): Promise<void> {
  if (!contactEndpoint) {
    return
  }

  const response = await fetch(contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    throw new Error('The message could not be sent.')
  }
}

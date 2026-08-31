import { useId, useState, type FormEvent } from 'react'
import { submitContactInquiry } from '../../services/contact.ts'
import {
  hasContactFormErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../../utils/validateContactForm.ts'
import { ClickToCall } from '../common/ClickToCall.tsx'

const emptyValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export function ContactForm() {
  const formId = useId()
  const [values, setValues] = useState<ContactFormValues>(emptyValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )

  function fieldId(name: keyof ContactFormValues) {
    return `${formId}-${name}`
  }

  function errorId(name: keyof ContactFormValues) {
    return `${formId}-${name}-error`
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    if (hasContactFormErrors(nextErrors)) {
      return
    }

    setStatus('submitting')

    try {
      await submitContactInquiry(values)
      setStatus('success')
      setValues(emptyValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-none border border-ink/10 bg-stone p-6 sm:p-8" role="status">
        <h2 className="font-serif text-3xl tracking-tight">Message received</h2>
        <p className="mt-3 text-ink-muted">
          Thank you. For the fastest response, call the shop and we can pull the
          piece you asked about.
        </p>
        <div className="mt-6">
          <ClickToCall label="Call Now" />
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-none border border-ink/10 bg-stone p-6 sm:p-8"
    >
      <h2 className="font-serif text-3xl tracking-tight">Send a message</h2>
      <p className="mt-3 text-ink-muted">
        Prefer not to call first? Send your details and we will follow up. For
        the fastest response, call the shop.
      </p>

      <div className="mt-8 grid gap-5">
        <Field
          id={fieldId('name')}
          errorId={errorId('name')}
          label="Name"
          type="text"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => setValues((current) => ({ ...current, name: value }))}
        />
        <Field
          id={fieldId('email')}
          errorId={errorId('email')}
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => setValues((current) => ({ ...current, email: value }))}
        />
        <Field
          id={fieldId('phone')}
          errorId={errorId('phone')}
          label="Phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
        />
        <div>
          <label htmlFor={fieldId('message')} className="block text-sm font-semibold">
            Message
          </label>
          <textarea
            id={fieldId('message')}
            name="message"
            rows={5}
            required
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId('message') : undefined}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            className="mt-2 w-full rounded-none border border-ink/20 bg-sand px-3 py-2.5 text-base text-ink"
          />
          {errors.message ? (
            <p id={errorId('message')} className="mt-2 text-sm text-clay" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {status === 'error' ? (
        <p className="mt-5 text-sm text-clay" role="alert">
          The message could not be sent. Please call the shop instead.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-none bg-clay px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-cream uppercase transition hover:bg-clay-dark disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

type FieldProps = {
  id: string
  errorId: string
  label: string
  type: 'text' | 'email' | 'tel'
  autoComplete: string
  value: string
  error?: string
  onChange: (value: string) => void
}

function Field({
  id,
  errorId,
  label,
  type,
  autoComplete,
  value,
  error,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={label.toLowerCase()}
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-none border border-ink/20 bg-sand px-3 py-2.5 text-base text-ink"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-clay" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

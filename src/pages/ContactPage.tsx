import { ClickToCall } from '../components/common/ClickToCall.tsx'
import { ContactForm } from '../components/contact/ContactForm.tsx'
import { business, phoneHref } from '../content/business.ts'

export function ContactPage() {
  return (
    <>
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Call to inquire about a product, request an appointment, or place an
            order. Elian does not sell products online.
          </p>
          <div className="mt-8">
            <ClickToCall label={`Call ${business.phoneDisplay}`} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl tracking-tight">Studio details</h2>
          <address className="mt-5 space-y-3 text-base not-italic text-ink-muted">
            <div>
              <p className="font-semibold text-ink">Address</p>
              {business.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-ink">Phone</p>
              <a href={phoneHref} className="text-clay hover:underline">
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="font-semibold text-ink">Email</p>
              <a href={`mailto:${business.email}`} className="hover:text-ink">
                {business.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-ink">Hours</p>
              {business.hours.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </address>

          <h2 className="mt-10 font-serif text-3xl tracking-tight">Social</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {business.socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-ink hover:text-clay"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>
    </>
  )
}

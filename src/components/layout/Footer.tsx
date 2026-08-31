import { Link } from 'react-router-dom'
import { business, navLinks, phoneHref } from '../../content/business.ts'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-stone">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl tracking-tight text-ink">
            {business.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {business.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">
            Visit
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">
            Contact
          </h2>
          <address className="mt-3 space-y-2 text-sm not-italic text-ink-muted">
            {business.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div>
              <a href={phoneHref} className="font-semibold text-ink hover:text-clay">
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <a href={`mailto:${business.email}`} className="hover:text-ink">
                {business.email}
              </a>
            </div>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">
            Hours
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {business.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            {business.socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-clay"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights
            reserved.
          </p>
          <p>Call to inquire or purchase. Online checkout is not available.</p>
        </div>
      </div>
    </footer>
  )
}

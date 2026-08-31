import { business } from '../../content/business.ts'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-stone">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {business.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

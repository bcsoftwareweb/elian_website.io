import type { ReactNode } from 'react'
import { DocumentTitle } from './DocumentTitle.tsx'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2.5 focus:font-semibold"
      >
        Skip to main content
      </a>
      <DocumentTitle />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  )
}

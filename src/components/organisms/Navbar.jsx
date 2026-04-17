import { useState } from 'react'
import Button from '../atoms/Button'

function Navbar({ companyName, links, cta, activeHref, onNavLinkClick, onCtaClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    onNavLinkClick?.(href)
    setIsMobileMenuOpen(false)
  }

  const getLinkClasses = (href) =>
    [
      'text-sm font-medium text-body/85 transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
      activeHref === href ? 'text-primary' : '',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/88">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <nav className="mx-auto w-full max-w-6xl px-6 py-4 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" aria-label={`${companyName} homepage`} className="text-base font-bold tracking-[0.12em] text-primary">
            {companyName}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    aria-current={activeHref === link.href ? 'page' : undefined}
                    href={link.href}
                    className={getLinkClasses(link.href)}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {cta ? (
              <Button
                href={cta.href}
                variant="secondary"
                className="px-4 py-2 text-xs md:text-sm"
                onClick={onCtaClick}
                ariaLabel={cta.label}
              >
                {cta.label}
              </Button>
            ) : null}
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex items-center rounded-md border border-primary/25 px-3 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:hidden"
            onClick={() => setIsMobileMenuOpen((previousValue) => !previousValue)}
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div id="mobile-nav-menu" className="mt-4 space-y-3 border-t border-primary/10 pt-4 md:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    aria-current={activeHref === link.href ? 'page' : undefined}
                    href={link.href}
                    className={`block rounded-md px-2 py-2 ${getLinkClasses(link.href)}`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {cta ? (
              <Button
                href={cta.href}
                variant="secondary"
                className="w-full justify-center"
                onClick={onCtaClick}
                ariaLabel={cta.label}
              >
                {cta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar

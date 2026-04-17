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
      'text-sm font-medium transition-colors',
      activeHref === href ? 'text-primary' : 'text-body hover:text-primary',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-surface/95 backdrop-blur">
      <nav
        className="mx-auto w-full max-w-6xl px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="text-base font-bold tracking-[0.12em] text-primary">
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
              >
                {cta.label}
              </Button>
            ) : null}
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            className="inline-flex items-center rounded-md border border-primary/20 px-3 py-2 text-sm font-medium text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
          >
            Menu
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
              <Button href={cta.href} variant="secondary" className="w-full justify-center" onClick={onCtaClick}>
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

import Button from '../atoms/Button'

function Navbar({ companyName, links, cta }) {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-surface/95 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        <a href="#top" className="text-base font-bold tracking-[0.12em] text-primary">
          {companyName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-body transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {cta ? (
          <Button href={cta.href} variant="secondary" className="px-4 py-2 text-xs md:text-sm">
            {cta.label}
          </Button>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar

function Footer({ companyName, description, links, contact }) {
  const footerLinkClasses =
    'text-sm text-white/90 transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary'

  return (
    <footer className="border-t border-primary/15 bg-primary py-14 text-white" aria-label="Footer">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-3 lg:px-8">
        <section aria-label="Company overview">
          <h2 className="text-lg font-bold tracking-[0.08em]">{companyName}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">{description}</p>
        </section>

        <nav aria-label="Footer links">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Explore</h3>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={footerLinkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic" aria-label="Contact details">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Contact</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90">{contact.address}</p>
          <a className={`mt-3 block ${footerLinkClasses}`} href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </address>
      </div>
    </footer>
  )
}

export default Footer

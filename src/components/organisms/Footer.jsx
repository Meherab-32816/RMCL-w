function Footer({ companyName, description, links, contact }) {
  return (
    <footer className="border-t border-primary/10 bg-primary py-12 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-3 lg:px-8">
        <section>
          <h2 className="text-lg font-bold tracking-[0.08em]">{companyName}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">{description}</p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Explore</h3>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/85 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <address className="not-italic">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/85">{contact.address}</p>
          <a
            className="mt-3 block text-sm text-white/85 transition-colors hover:text-accent"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </address>
      </div>
    </footer>
  )
}

export default Footer

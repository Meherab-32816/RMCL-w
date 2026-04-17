function SectionWrapper({
  id,
  context,
  title,
  subtitle,
  children,
  className = '',
  contentClassName = '',
}) {
  const headingId = title && id ? `${id}-title` : undefined

  return (
    <section
      id={id}
      role={headingId ? 'region' : undefined}
      aria-labelledby={headingId}
      className={`py-16 md:py-24 ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {(context || title || subtitle) && (
          <header className="mb-10 max-w-3xl space-y-4">
            {context && (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent">{context}</p>
            )}
            {title && (
              <h2 id={headingId} className="text-3xl font-bold tracking-tight text-primary md:text-[2.4rem]">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-base leading-relaxed text-body/75">{subtitle}</p>}
          </header>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}

export default SectionWrapper

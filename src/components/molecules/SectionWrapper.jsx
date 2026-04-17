function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  contentClassName = '',
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-8 max-w-3xl space-y-3">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-base leading-relaxed text-body/80">{subtitle}</p>}
          </header>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}

export default SectionWrapper

const baseClasses =
  'inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'

const variantClasses = {
  primary: 'border-primary bg-primary text-white hover:bg-primary/90',
  secondary: 'border-primary bg-transparent text-primary hover:bg-primary/5',
}

function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}) {
  const classes = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim()

  if (href) {
    return (
      <a aria-label={ariaLabel} className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button aria-label={ariaLabel} className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

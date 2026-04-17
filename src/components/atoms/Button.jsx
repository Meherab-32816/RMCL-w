const baseClasses =
  'inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'

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
}) {
  const classes = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

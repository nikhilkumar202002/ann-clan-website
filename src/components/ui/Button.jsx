const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  icon: Icon,
  iconPosition = 'right',
  href,
  type = 'button',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none group'

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-xs',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-black hover:text-white hover:border-black',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    link: 'text-black border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 rounded-none bg-transparent',
    ghost: 'text-gray-500 hover:text-black bg-transparent',
    dark: 'bg-gray-950 text-white hover:bg-white hover:text-gray-950 border border-gray-800',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-3 gap-2',
    lg: 'text-sm sm:text-base px-8 py-4 gap-2.5',
    none: 'p-0 gap-1.5',
  }

  const roundeds = {
    full: 'rounded-full',
    none: 'rounded-none',
    md: 'rounded-md',
    lg: 'rounded-lg',
  }

  const appliedSize = variant === 'link' ? sizes.none : sizes[size] || sizes.md
  const appliedRounded = variant === 'link' ? '' : roundeds[rounded] || roundeds.full
  const widthStyle = fullWidth ? 'w-full' : ''
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${appliedSize} ${appliedRounded} ${widthStyle} ${disabledStyles} ${className}`.trim()

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  )
}

export default Button

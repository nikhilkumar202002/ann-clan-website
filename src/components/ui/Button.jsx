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
  glowing = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none group'

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-xs',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-black hover:text-white hover:border-black',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    link: 'text-black border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 rounded-none bg-transparent px-0 py-0',
    ghost: 'text-gray-500 hover:text-black bg-transparent px-0 py-0',
    dark: 'bg-gray-950 text-white hover:bg-white hover:text-gray-950 border border-gray-800',
    glow: 'bg-black text-white',
  }

  // Explicit font sizes and gaps so font size is ALWAYS strictly controlled
  const fontSizes = {
    sm: 'text-xs gap-1.5',
    md: 'text-xs sm:text-sm gap-2',
    lg: 'text-sm sm:text-base gap-2.5',
  }

  const paddings = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }

  const roundeds = {
    full: 'rounded-full',
    none: 'rounded-none',
    md: 'rounded-md',
    lg: 'rounded-lg',
  }

  const isTextOnly = variant === 'link' || variant === 'ghost'
  const appliedFont = fontSizes[size] || fontSizes.md
  const appliedPadding = isTextOnly ? 'px-0 py-0' : paddings[size] || paddings.md
  const appliedRounded = isTextOnly ? 'rounded-none' : roundeds[rounded] || roundeds.full
  const widthStyle = fullWidth ? 'w-full' : ''
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${appliedFont} ${appliedPadding} ${appliedRounded} ${widthStyle} ${disabledStyles} ${className}`.trim()

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

  const isGlowing = glowing || variant === 'glow'

  if (isGlowing) {
    const Component = href ? 'a' : 'button'
    const buttonProps = href ? { href, ...props } : { type, disabled, ...props }
    const radiusClass = roundeds[rounded] || roundeds.full

    return (
      <Component
        {...buttonProps}
        className={`relative inline-flex items-center justify-center ${radiusClass} ${widthStyle} ${disabledStyles} group cursor-pointer select-none transition-transform duration-200 active:scale-95 ${className}`.trim()}
      >
        {/* Sharp Border Clipping Track with Neon Line Glow (NO rotating background) */}
        <span
          className={`relative w-full h-full p-[2px] ${radiusClass} overflow-hidden inline-flex items-center justify-center glow-filter`}
        >
          {/* Moving Multi-Color Border Beam */}
          <span
            className="absolute inset-[-250%] animate-border-spin bg-multicolor-beam pointer-events-none"
          />

          {/* Inner Static Solid Button Core */}
          <span
            className={`relative z-10 w-full h-full inline-flex items-center justify-center font-bold uppercase tracking-wider bg-black text-white group-hover:bg-neutral-900 transition-colors duration-200 ${appliedFont} ${appliedPadding} ${radiusClass}`}
          >
            {content}
          </span>
        </span>
      </Component>
    )
  }

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

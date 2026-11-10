const FlipText = ({ children, className = '', stagger = 16, duration = 300 }) => {
  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>
  }

  return (
    <span className={`inline-flex items-center overflow-hidden ${className}`}>
      {children.split('').map((char, index) => {
        if (char === ' ') {
          return (
            <span key={index} className="inline-block whitespace-pre">
              {' '}
            </span>
          )
        }
        return (
          <span
            key={index}
            className="relative inline-flex flex-col h-[1.2em] overflow-hidden"
          >
            {/* Primary Character (rolls up out of view on hover) */}
            <span
              className="inline-flex items-center justify-center h-full w-full transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * stagger}ms`,
              }}
            >
              {char}
            </span>
            {/* Duplicate Character (rolls up into view from below on hover) */}
            <span
              className="absolute inset-0 inline-flex items-center justify-center h-full w-full transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0"
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * stagger}ms`,
              }}
              aria-hidden="true"
            >
              {char}
            </span>
          </span>
        )
      })}
    </span>
  )
}

export default FlipText


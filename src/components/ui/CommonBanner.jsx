import { motion } from 'framer-motion'

const CommonBanner = ({
  badge = '[ ABOUT US ]',
  title = 'WHO WE ARE & WHAT WE DO.',
  description = '',
  bgImage,
  videoSrc,
  overlayClassName = 'bg-gradient-to-t from-black via-black/70 to-black/80',
  align = 'center',
  breadcrumb,
  className = '',
  children,
}) => {
  const isCentered = align === 'center'

  return (
    <section
      className={`relative min-h-[80vh] flex flex-col justify-center bg-black text-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/10 ${className}`}
    >
      {/* Background Media: Video, Image, or Default Atmospheric Dark Ambient */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : bgImage ? (
          <img
            src={bgImage}
            alt={typeof title === 'string' ? title : 'Banner background'}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Subtle ambient brutalist grid / texture backdrop */
          <div className="w-full h-full bg-neutral-950" />
        )}

        {/* Film / Scrim Overlay */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </motion.div>

      {/* Banner Content Container */}
      <div className="site-container relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-5xl ${isCentered ? 'mx-auto text-center flex flex-col items-center' : 'text-left'}`}
        >
          {/* Breadcrumb (Optional) */}
          {breadcrumb && breadcrumb.length > 0 && (
            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 mb-6 ${isCentered ? 'justify-center' : ''}`}>
              {breadcrumb.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {idx < breadcrumb.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className={`flex items-center gap-3 mb-5 sm:mb-6 ${isCentered ? 'justify-center' : ''}`}>
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                {badge}
              </span>
            </div>
          )}

          {/* Title / Main Heading */}
          {title && (
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className={`mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl ${isCentered ? 'text-center mx-auto' : ''}`}>
              {description}
            </p>
          )}

          {/* Extra Content Slot (Buttons, Stats, Filters) */}
          {children && <div className="mt-8 sm:mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}

export default CommonBanner

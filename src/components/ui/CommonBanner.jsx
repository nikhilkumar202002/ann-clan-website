import { isValidElement, cloneElement } from 'react'
import { motion } from 'framer-motion'
import { usePreloader } from '../../context/PreloaderContext'

// Heading word-by-word variants matching Hero.jsx
const headingWordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
}

const headingWordItem = {
  hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Description word-by-word variants matching Hero.jsx
const descWordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.55,
    },
  },
}

const descWordItem = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Recursive helper to split text and JSX trees into motion.span word items
const renderAnimatedWords = (node, itemVariants, prefix = 'w') => {
  if (!node && node !== 0) return null

  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node)
    if (!text.trim()) return ' '

    const words = text.trim().split(/\s+/)
    return words.map((word, i) => (
      <motion.span
        key={`${prefix}-${word}-${i}`}
        variants={itemVariants}
        className="inline-block mr-[0.28em]"
      >
        {word}
      </motion.span>
    ))
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => (
      <span key={`${prefix}-arr-${idx}`} className="inline">
        {renderAnimatedWords(child, itemVariants, `${prefix}-${idx}`)}
      </span>
    ))
  }

  if (isValidElement(node)) {
    if (node.type === 'br') {
      return node
    }

    if (node.props && node.props.children) {
      return cloneElement(node, {
        children: renderAnimatedWords(
          node.props.children,
          itemVariants,
          prefix
        ),
      })
    }

    return node
  }

  return node
}

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
  const { isLoaded } = usePreloader()
  const isCentered = align === 'center'

  return (
    <section
      className={`relative min-h-[80vh] flex flex-col justify-center bg-black text-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/10 ${className}`}
    >
      {/* Background Media: Video, Image, or Ambient Dark Backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
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
          <div className="w-full h-full bg-neutral-950" />
        )}

        {/* Film / Scrim Overlay */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </motion.div>

      {/* Banner Content Container */}
      <div className="site-container relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-5xl ${isCentered ? 'mx-auto text-center flex flex-col items-center' : 'text-left'}`}
        >
          {/* Breadcrumb (Optional) */}
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 mb-6 ${isCentered ? 'justify-center' : ''}`}
            >
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
            </motion.div>
          )}

          {/* Eyebrow Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center gap-3 mb-5 sm:mb-6 ${isCentered ? 'justify-center' : ''}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title / Main Heading: Word-by-word smooth fade */}
          {title && (
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              <motion.span
                variants={headingWordContainer}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                className="inline-block"
              >
                {renderAnimatedWords(title, headingWordItem, 'title')}
              </motion.span>
            </h1>
          )}

          {/* Description: Word-by-word smooth fade */}
          {description && (
            <p className={`mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl ${isCentered ? 'text-center mx-auto' : ''}`}>
              <motion.span
                variants={descWordContainer}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                className="inline-block"
              >
                {renderAnimatedWords(description, descWordItem, 'desc')}
              </motion.span>
            </p>
          )}

          {/* Extra Content Slot (Buttons, Stats, Filters) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.75, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default CommonBanner

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from './Button'

const CommonCta = ({
  id = 'cta',
  badge = '[ START A CONVERSATION ]',
  title = (
    <>
      LET'S MAKE YOUR BRAND <br />
      IMPOSSIBLE TO IGNORE.
    </>
  ),
  description = 'Have an idea? We have the creativity and expertise to bring it to life.',
  buttonText = "LET'S TALK ABOUT YOUR PROJECT",
  buttonHref = '#contact',
  buttonVariant = 'secondary',
  buttonIcon = FiArrowUpRight,
  secondaryButtonText,
  secondaryButtonHref = '/our-work',
  secondaryButtonVariant = 'outlineWhite',
  secondaryButtonIcon = FiArrowUpRight,
  videoSrc = '/video/cta-home-video.mp4',
  imageSrc,
  overlayClassName = 'bg-black/65',
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`relative min-h-[540px] sm:min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-black py-24 sm:py-32 ${className}`}
    >
      {/* Background Media (Video or Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
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
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="CTA Banner"
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* Cinematic dark scrim overlay */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </motion.div>

      {/* Content Container */}
      <div className="site-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          {badge && (
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                {badge}
              </span>
            </div>
          )}

          {/* Headline */}
          {title && (
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.06]">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mt-6 sm:mt-8">
              {description}
            </p>
          )}

          {/* CTA Action Button or Custom Content */}
          {children ? (
            <div className="mt-8 sm:mt-12">{children}</div>
          ) : (
            buttonText && (
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <Button
                  href={buttonHref}
                  variant={buttonVariant}
                  size="lg"
                  rounded="none"
                  icon={buttonIcon}
                >
                  {buttonText}
                </Button>
                {secondaryButtonText && (
                  <Button
                    href={secondaryButtonHref}
                    variant={secondaryButtonVariant}
                    size="lg"
                    rounded="none"
                    icon={secondaryButtonIcon}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default CommonCta

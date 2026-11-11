import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const HomeCta = () => {
  return (
    <section
      id="home-cta"
      className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/cta-home-video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic dark scrim overlay */}
        <div className="absolute inset-0 bg-black/65" />
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
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">
              [ START A CONVERSATION ]
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl min-[400px]:text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.04]">
            LET'S MAKE YOUR BRAND <br className="hidden sm:inline" />
            IMPOSSIBLE TO IGNORE.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mt-6 sm:mt-8">
            Have an idea? We have the creativity and expertise to bring it to life.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-12">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              rounded="none"
              icon={FiArrowUpRight}
            >
              LET'S TALK ABOUT YOUR PROJECT
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeCta

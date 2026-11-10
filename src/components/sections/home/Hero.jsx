import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'
import FlipText from '../../ui/FlipText'

// Word-by-word and container animation variants
const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
}

const headingWordVariant = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(10px)',
  },
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

const descContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.75,
    },
  },
}

const descWordVariant = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const ctaVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const Hero = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const videos = [
    '/video/banner-video-1.mp4',
    '/video/banner-video-2.mp4',
  ]

  const headingWords = ['WE', 'GROW', 'YOUR', 'BRAND.']
  const descWords =
    'We create powerful brand experiences through media, marketing, creativity and technology.'.split(
      ' '
    )

  const videoRefs = useRef([])

  // Automatically cycle through background videos smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videos.length)
    }, 10000) // Change video every 10 seconds

    return () => clearInterval(interval)
  }, [videos.length])

  // Play active video when index changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeVideoIndex) {
          video.currentTime = 0
          video.play().catch(() => {})
        }
      }
    })
  }, [activeVideoIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden py-24 sm:py-28"
    >
      {/* Background Running Videos (Smoothly change in background with subtle entrance scale) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        {videos.map((src, index) => {
          const isActive = activeVideoIndex === index
          return (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[index] = el
              }}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '1200ms',
              }}
            />
          )
        })}

        {/* Cinematic Film Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/75" />
      </motion.div>

      {/* Hero Core Content: Center Aligned with Smooth Framer Motion */}
      <div className="relative z-10 site-container my-auto flex flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Sub Heading: Text only with hover flip animation */}
          <motion.div variants={subHeadingAnim} className="mb-4 sm:mb-6">
            <span className="group text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-gray-300 hover:text-white transition-colors duration-200 select-none drop-shadow-sm cursor-pointer inline-flex">
              <FlipText>Ideas. Stories. Impact.</FlipText>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemFadeUp}
            className="text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.2vw] xl:text-[110px] 2xl:text-[132px] font-black uppercase tracking-tight leading-[0.92] text-white select-none drop-shadow-lg"
          >
            WE GROW YOUR BRAND.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemFadeUp}
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm"
          >
            We create powerful brand experiences through media, marketing, creativity and technology.
          </motion.p>

          {/* CTAs: Center Aligned, Sharp (No border-radius, no multicolor) */}
          <motion.div
            variants={itemFadeUp}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                rounded="none"
                icon={FiArrowUpRight}
                className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white hover:border-white transition-all font-black shadow-lg"
              >
                Start a Project
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                href="#our-work"
                variant="outlineWhite"
                size="lg"
                rounded="none"
                icon={FiArrowUpRight}
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:!text-black hover:border-white transition-all font-bold backdrop-blur-sm [&>svg]:transition-colors [&>svg]:group-hover:!text-black [&>span]:transition-colors [&>span]:group-hover:!text-black"
              >
                Explore Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

import { useState, useRef, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const Hero = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const videos = [
    '/video/banner-video-1.mp4',
    '/video/banner-video-2.mp4',
  ]

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
      {/* Background Running Videos (Smoothly change in background) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
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
      </div>

      {/* Hero Core Content: Center Aligned */}
      <div className="relative z-10 site-container my-auto flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Sub Heading: Text only without any background color or scrolling */}
          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-gray-300 select-none drop-shadow-sm">
              Ideas. Stories. Impact.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.2vw] xl:text-[110px] 2xl:text-[132px] font-black uppercase tracking-tight leading-[0.92] text-white select-none drop-shadow-lg">
            WE GROW YOUR BRAND.
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm">
            We create powerful brand experiences through media, marketing, creativity and technology.
          </p>

          {/* CTAs: Center Aligned, Sharp (No border-radius, no multicolor) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              rounded="none"
              icon={FiArrowUpRight}
              className="bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-white transition-all font-black shadow-lg"
            >
              Start a Project
            </Button>
            <Button
              href="#our-work"
              variant="outline"
              size="lg"
              rounded="none"
              icon={FiArrowUpRight}
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all font-bold backdrop-blur-sm"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

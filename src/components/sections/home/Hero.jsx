import { useState, useRef, useEffect } from 'react'
import { FiArrowUpRight, FiArrowDown, FiVolume2, FiVolumeX } from 'react-icons/fi'
import Button from '../../ui/Button'

const Hero = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  const videos = [
    {
      id: '01',
      title: 'Live Stage Production',
      subtitle: 'Cinematic Concert & Event Capture',
      src: '/video/banner-video-1.mp4',
    },
    {
      id: '02',
      title: 'Broadcast Control Suite',
      subtitle: 'Multi-Cam Live Switch & Engineering',
      src: '/video/banner-video-2.mp4',
    },
  ]

  const videoRefs = useRef([])

  // Synchronize mute state
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = isMuted
      }
    })
  }, [isMuted])

  // Play active video when index changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeVideoIndex) {
          video.play().catch(() => {})
        }
      }
    })
  }, [activeVideoIndex])

  const handleVideoEnded = () => {
    setActiveVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const toggleSound = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden select-none"
    >
      {/* Background Running Videos Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {videos.map((video, index) => {
          const isActive = activeVideoIndex === index
          return (
            <video
              key={video.id}
              ref={(el) => {
                videoRefs.current[index] = el
              }}
              src={video.src}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
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

        {/* Cinematic Film Overlay: Gradients + Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 mix-blend-multiply" />
      </div>

      {/* Content Container (Layered above video) */}
      <div className="relative z-10 site-container flex-1 flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-300">
              REEL {videos[activeVideoIndex].id} • {videos[activeVideoIndex].title}
            </span>
          </div>

          <span className="text-xs font-mono tracking-widest uppercase text-gray-400 hidden sm:inline-block">
            [ ANN'S CLAN PICTURE COMPANY ]
          </span>
        </div>

        {/* Main Massive Editorial Headline */}
        <div className="my-auto py-10 sm:py-16">
          <div className="text-[13vw] sm:text-[11.5vw] md:text-[10vw] lg:text-[8.8vw] xl:text-[132px] 2xl:text-[156px] font-black uppercase tracking-tighter leading-[0.88] text-white">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              <span className="flex-shrink-0 drop-shadow-sm">
                WE GROW
              </span>

              {/* Subtitle & Action CTAs aligned with the top line of typography */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md normal-case font-normal tracking-normal text-left lg:pb-2">
                <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-medium">
                  We turn creative ideas into powerful brand experiences through media production, marketing and technology.
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-5">
                  <Button href="#contact" variant="primary" size="md" glowing icon={FiArrowUpRight}>
                    Start a Project
                  </Button>
                  <Button
                    href="#our-work"
                    variant="secondary"
                    size="md"
                    icon={FiArrowDown}
                    className="bg-white/10 text-white border-white/25 hover:bg-white hover:text-black hover:border-white backdrop-blur-sm"
                  >
                    Explore Work
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-2 sm:mt-4 drop-shadow-sm">
              YOUR BRAND.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Video Reel Switcher, Audio Toggle & Scroll Guide */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/15">
          {/* Reel Switcher Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mr-2 hidden md:inline-block">
              REEL SELECT:
            </span>
            {videos.map((video, index) => {
              const isActive = activeVideoIndex === index
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveVideoIndex(index)}
                  className={`px-3.5 sm:px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-black shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/15'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-black' : 'bg-gray-400'
                    }`}
                  />
                  <span>
                    {video.id} / {video.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Controls: Mute/Unmute & Scroll Down */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={toggleSound}
              className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer bg-white/10 px-3.5 py-2 rounded-full border border-white/15"
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isMuted ? (
                <>
                  <FiVolumeX className="w-4 h-4 text-gray-400" />
                  <span>AUDIO OFF</span>
                </>
              ) : (
                <>
                  <FiVolume2 className="w-4 h-4 text-emerald-400" />
                  <span>AUDIO ON</span>
                </>
              )}
            </button>

            {/* Scroll Indicator */}
            <a
              href="#about"
              className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              <span>SCROLL</span>
              <FiArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

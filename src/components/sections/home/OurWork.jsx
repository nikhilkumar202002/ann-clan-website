import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

// 10 Curated Videos from /portfolio/video
const portfolioVideos = [
  { id: 'v1', src: '/portfolio/video/Video-30987.mp4' },
  { id: 'v2', src: '/portfolio/video/Video-37527.mp4' },
  { id: 'v3', src: '/portfolio/video/Video-82365.mp4' },
  { id: 'v4', src: '/portfolio/video/Video-54169.mp4' },
  { id: 'v5', src: '/portfolio/video/Video-52619.mp4' },
  { id: 'v6', src: '/portfolio/video/Video-75150.mp4' },
  { id: 'v7', src: '/portfolio/video/Video-34037.mp4' },
  { id: 'v8', src: '/portfolio/video/Video-33864.mp4' },
  { id: 'v9', src: '/portfolio/video/Video-62311.mp4' },
  { id: 'v10', src: '/portfolio/video/Video-65728.mp4' },
]

// 10 Curated Creatives from /portfolio/creatives
const portfolioCreatives = [
  { id: 'c1', src: '/portfolio/creatives/Image-14107.jpg', title: 'Creative 01' },
  { id: 'c2', src: '/portfolio/creatives/Image-15117.jpg', title: 'Creative 02' },
  { id: 'c3', src: '/portfolio/creatives/Image-21236.jpg', title: 'Creative 03' },
  { id: 'c4', src: '/portfolio/creatives/Image-22149.jpg', title: 'Creative 04' },
  { id: 'c5', src: '/portfolio/creatives/Image-23925.jpg', title: 'Creative 05' },
  { id: 'c6', src: '/portfolio/creatives/Image-24014.jpg', title: 'Creative 06' },
  { id: 'c7', src: '/portfolio/creatives/Image-26498.jpg', title: 'Creative 07' },
  { id: 'c8', src: '/portfolio/creatives/Image-32973.jpg', title: 'Creative 08' },
  { id: 'c9', src: '/portfolio/creatives/Image-33213.jpg', title: 'Creative 09' },
  { id: 'c10', src: '/portfolio/creatives/Image-36581.jpg', title: 'Creative 10' },
]

// Duplicate both lists for seamless infinite looping
const videoTrack = [...portfolioVideos, ...portfolioVideos]
const creativeTrack = [...portfolioCreatives, ...portfolioCreatives]

const OurWork = ({ showHeader = true }) => {
  return (
    <section id="our-work" className="py-24 sm:py-32 bg-white border-t border-gray-100 overflow-hidden">
      {/* ======================================================== */}
      {/* SECTION HEADER */}
      {/* ======================================================== */}
      {showHeader && (
        <div className="site-container mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ SELECTED WORKS / PORTFOLIO ]
              </span>
            </div>

            <h2 className="section-heading text-gray-900">
              STORIES THAT MOVE. <br />
              CREATIVES THAT INSPIRE.
            </h2>
          </motion.div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2-ROW DUAL OPPOSITE DIRECTION SLIDERS */}
      {/* ======================================================== */}
      <div className="space-y-6 sm:space-y-8 relative">
        {/* Left & Right Soft Fade Vignettes for Clean Viewport Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-white to-transparent z-20" />

        {/* ---------------------------------------------------- */}
        {/* ROW 1: 10 VIDEOS (SLIDES TO THE LEFT) */}
        {/* ---------------------------------------------------- */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee gap-4 sm:gap-6">
            {videoTrack.map((item, index) => (
              <div
                key={`vid-${item.id}-${index}`}
                className="shrink-0 h-[340px] sm:h-[400px] lg:h-[450px] aspect-[9/16] overflow-hidden bg-black border border-gray-200 shadow-sm relative group"
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* ROW 2: 10 CREATIVES (SLIDES TO THE RIGHT - OPPOSITE) */}
        {/* ---------------------------------------------------- */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-reverse gap-4 sm:gap-6">
            {creativeTrack.map((item, index) => (
              <div
                key={`img-${item.id}-${index}`}
                className="shrink-0 h-[300px] sm:h-[360px] lg:h-[400px] aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM CTA: VIEW ALL WORKS BUTTON */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 sm:mt-20 flex justify-center site-container"
      >
        <Button
          href="/our-work"
          variant="primary"
          size="lg"
          rounded="none"
          icon={FiArrowUpRight}
        >
          VIEW ALL WORKS
        </Button>
      </motion.div>
    </section>
  )
}

export default OurWork

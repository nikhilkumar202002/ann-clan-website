import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiMaximize2, FiX } from 'react-icons/fi'

// All 25 videos from /public/portfolio/video
const allVideos = [
  { id: 'v-21706', src: '/portfolio/video/Video-21706.mp4', type: 'video', title: 'Brand Story 01' },
  { id: 'v-24755', src: '/portfolio/video/Video-24755.mp4', type: 'video', title: 'Brand Story 02' },
  { id: 'v-30987', src: '/portfolio/video/Video-30987.mp4', type: 'video', title: 'Social Reel 01' },
  { id: 'v-33864', src: '/portfolio/video/Video-33864.mp4', type: 'video', title: 'Visual Campaign 01' },
  { id: 'v-34037', src: '/portfolio/video/Video-34037.mp4', type: 'video', title: 'Commercial Spot 01' },
  { id: 'v-37527', src: '/portfolio/video/Video-37527.mp4', type: 'video', title: 'Short Film 01' },
  { id: 'v-47844', src: '/portfolio/video/Video-47844.mp4', type: 'video', title: 'Brand Motion 01' },
  { id: 'v-51062', src: '/portfolio/video/Video-51062.mp4', type: 'video', title: 'Cinematic Reel 01' },
  { id: 'v-52619', src: '/portfolio/video/Video-52619.mp4', type: 'video', title: 'Social Activation 01' },
  { id: 'v-54169', src: '/portfolio/video/Video-54169.mp4', type: 'video', title: 'Creative Reel 01' },
  { id: 'v-55010', src: '/portfolio/video/Video-55010.mp4', type: 'video', title: 'Brand Narrative 01' },
  { id: 'v-57752', src: '/portfolio/video/Video-57752.mp4', type: 'video', title: 'Commercial Teaser 01' },
  { id: 'v-62311', src: '/portfolio/video/Video-62311.mp4', type: 'video', title: 'Campaign Spotlight 01' },
  { id: 'v-65728', src: '/portfolio/video/Video-65728.mp4', type: 'video', title: 'Social Promo 01' },
  { id: 'v-68762', src: '/portfolio/video/Video-68762.mp4', type: 'video', title: 'Digital Film 01' },
  { id: 'v-68965', src: '/portfolio/video/Video-68965.mp4', type: 'video', title: 'Brand Showcase 01' },
  { id: 'v-72238', src: '/portfolio/video/Video-72238.mp4', type: 'video', title: 'Motion Graphic 01' },
  { id: 'v-7456', src: '/portfolio/video/Video-7456.mp4', type: 'video', title: 'Visual Reel 02' },
  { id: 'v-75150', src: '/portfolio/video/Video-75150.mp4', type: 'video', title: 'Creator Film 01' },
  { id: 'v-8087', src: '/portfolio/video/Video-8087.mp4', type: 'video', title: 'Production Story 01' },
  { id: 'v-82365', src: '/portfolio/video/Video-82365.mp4', type: 'video', title: 'Promo Short 01' },
  { id: 'v-8447', src: '/portfolio/video/Video-8447.mp4', type: 'video', title: 'Cinematic Spot 02' },
  { id: 'v-95846', src: '/portfolio/video/Video-95846.mp4', type: 'video', title: 'Brand Reel 03' },
  { id: 'v-96147', src: '/portfolio/video/Video-96147.mp4', type: 'video', title: 'Campaign Video 02' },
  { id: 'v-96459', src: '/portfolio/video/Video-96459.mp4', type: 'video', title: 'Creative Story 02' },
]

// All 49 image creatives from /public/portfolio/creatives
const allCreativeFilenames = [
  'Image-1177.jpg', 'Image-1281.jpg', 'Image-14107.jpg', 'Image-14741.jpg', 'Image-15117.jpg',
  'Image-21236.jpg', 'Image-22149.jpg', 'Image-23925.jpg', 'Image-24014.jpg', 'Image-25539.jpg',
  'Image-26498.jpg', 'Image-3093.jpg', 'Image-32973.jpg', 'Image-33213.jpg', 'Image-34514.jpg',
  'Image-35746.jpg', 'Image-36581.jpg', 'Image-40504.jpg', 'Image-43994.jpg', 'Image-45322.jpg',
  'Image-47325.jpg', 'Image-48426.jpg', 'Image-48929.jpg', 'Image-57267.jpg', 'Image-5926.jpg',
  'Image-68156.jpg', 'Image-68363.jpg', 'Image-68507.jpg', 'Image-71825.jpg', 'Image-72393.jpg',
  'Image-73744.jpg', 'Image-75312.jpg', 'Image-77394.jpg', 'Image-77797.jpg', 'Image-79714.jpg',
  'Image-81367.jpg', 'Image-8341.jpg', 'Image-83907.jpg', 'Image-84909.jpg', 'Image-8642.jpg',
  'Image-87815.jpg', 'Image-91816.jpg', 'Image-92071.jpg', 'Image-92749.jpg', 'Image-94079.jpg',
  'Image-94324.jpg', 'Image-96543.jpg', 'Image-98117.jpg', 'Image-99455.jpg',
]

const allCreatives = allCreativeFilenames.map((filename, i) => ({
  id: `c-${filename}`,
  src: `/portfolio/creatives/${filename}`,
  type: 'image',
  title: `Creative Design ${String(i + 1).padStart(2, '0')}`,
}))

const tabs = [
  { key: 'All', label: 'All Work', count: allVideos.length + allCreatives.length },
  { key: 'Videos', label: 'Videos & Reels', count: allVideos.length },
  { key: 'Creatives', label: 'Brand Creatives', count: allCreatives.length },
]

const PortfolioMasonry = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  // Evenly interleave 1 video followed by 2 creatives for balanced masonry columns
  const interleavedAll = useMemo(() => {
    const list = []
    let v = 0
    let c = 0
    while (v < allVideos.length || c < allCreatives.length) {
      if (v < allVideos.length) list.push(allVideos[v++])
      if (c < allCreatives.length) list.push(allCreatives[c++])
      if (c < allCreatives.length) list.push(allCreatives[c++])
    }
    return list
  }, [])

  const displayedItems = useMemo(() => {
    if (activeTab === 'Videos') return allVideos
    if (activeTab === 'Creatives') return allCreatives
    return interleavedAll
  }, [activeTab, interleavedAll])

  // Prevent background scrolling and support ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  return (
    <section id="portfolio-masonry" className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="site-container">
        {/* ======================================================== */}
        {/* TAB CONTROLS */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-gray-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">
              [ PORTFOLIO ARCHIVE ]
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-900">
              EXPLORE OUR PRODUCTIONS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? 'bg-black text-white border-black shadow-xs'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* RESPONSIVE MASONRY GRID (CSS COLUMNS) */}
        {/* ======================================================== */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="break-inside-avoid mb-6 group cursor-pointer overflow-hidden border border-gray-200 bg-white hover:border-black transition-all duration-300 hover:shadow-xl relative"
            >
              {item.type === 'video' ? (
                <div className="relative bg-black overflow-hidden">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto block"
                  />
                  {/* Subtle Top-Left Category Badge */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20">
                      VIDEO
                    </span>
                  </div>
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FiPlay className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative bg-gray-50 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Top-Left Category Badge */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-black border border-gray-200">
                      CREATIVE
                    </span>
                  </div>
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FiMaximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* INTERACTIVE FULLSCREEN PREVIEW LIGHTBOX */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer z-50"
              aria-label="Close Preview"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Media Content Wrapper */}
            <div
              className="relative max-w-5xl max-h-[88vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[85vh] w-auto max-w-full rounded shadow-2xl"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[85vh] w-auto max-w-full object-contain rounded shadow-2xl"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioMasonry


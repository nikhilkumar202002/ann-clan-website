import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Team = () => {
  const team = [
    {
      id: '01',
      name: 'Geo Antony George',
      role: 'Chief Executive Officer (CEO)',
      bio: "Leads the company's vision, business strategy and overall operations, driving growth through creative thinking and strategic leadership.",
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '02',
      name: 'Ann Mary George',
      role: 'Founder',
      bio: "The visionary behind ANTS CLAN, shaping the company's foundation, creative direction and commitment to building meaningful brand experiences.",
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: '03',
      name: 'Mithun Martin Paul',
      role: 'Chief Operating Officer (COO)',
      bio: 'Oversees operational excellence, team coordination and project execution, ensuring ideas move seamlessly from planning to delivery.',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-switch active leader every 5.5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [isPaused, team.length])

  const currentLeader = team[activeIndex]

  return (
    <section
      id="team"
      className="py-24 sm:py-32 bg-white border-t border-gray-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ======================================================== */}
          {/* LEFT SIDE: TOP-TO-BOTTOM IMAGE SLIDER */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentLeader.id}
                  src={currentLeader.image}
                  alt={currentLeader.name}
                  initial={{ y: '-100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: ONE FOUNDER DETAIL AT A TIME */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {/* Header: Badge, Headline & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  [ LEADERSHIP & TEAM ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
                THE PEOPLE BEHIND THE VISION.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mt-5 max-w-2xl">
                Great ideas are driven by great people. Meet the leadership team shaping the vision, creativity and growth of ANTS CLAN.
              </p>
            </div>

            {/* Active Leader Details (Only ONE at a time, no numbering/dots) */}
            <div className="pt-6 border-t border-gray-200 min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLeader.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900">
                      {currentLeader.name}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-gray-500 uppercase tracking-wider mt-2">
                      {currentLeader.role}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-xl pt-2">
                    {currentLeader.bio}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

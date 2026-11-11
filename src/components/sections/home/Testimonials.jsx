import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ann's Clan brought our vision to life with clarity and precision. Their collaborative approach made the process seamless and the outcome exceptional.",
      author: 'Emily Carter',
      role: 'Brand Director, Northfield',
    },
    {
      id: 2,
      quote:
        "The attention to detail and quality of work exceeded our expectations. Ann's Clan is a trusted partner we'll keep coming back to.",
      author: 'Daniel Lee',
      role: 'Co-Founder, Makers & Co',
    },
    {
      id: 3,
      quote:
        "From brand identity to full digital execution, their creative depth and strategic insight gave our platform breakout market momentum.",
      author: 'Sophia Martinez',
      role: 'Chief Marketing Officer, Arcus Media',
    },
    {
      id: 4,
      quote:
        "Working with Ann's Clan felt like an organic extension of our core team. High-velocity execution paired with uncompromising design standards.",
      author: 'Alexander Vance',
      role: 'Founder & CEO, Horizon Studio',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const currentPair = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-black text-white border-t border-neutral-900">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* ======================================================== */}
          {/* LEFT SIDE: ARCHITECTURAL & MATERIAL IMAGE */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[620px] overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Tactile materials, architecture and natural light"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: HEADLINE & 2-COLUMN TESTIMONIALS */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:py-4">
            {/* Header: Badge & Unified Title */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  [ CLIENT TESTIMONIALS ]
                </span>
              </div>

              <h2 className="section-heading text-white mb-12 sm:mb-16">
                Real collaboration.
                <br />
                Remarkable results.
              </h2>
            </div>

            {/* Testimonials 2-Column Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-4"
              >
                {/* Column 1 */}
                <div className="flex flex-col justify-between space-y-6 md:pr-8 md:border-r md:border-neutral-800">
                  <div className="space-y-4">
                    {/* White Quotation Mark */}
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      className="text-white shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 18V10.8C0 4.32 4.32 0 10.44 0V4.32C6.84 4.32 4.86 6.66 4.86 10.8H10.44V18H0ZM13.56 18V10.8C13.56 4.32 17.88 0 24 0V4.32C20.4 4.32 18.42 6.66 18.42 10.8H24V18H13.56Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {currentPair[0].quote}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-neutral-800">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {currentPair[0].author}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {currentPair[0].role}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                    >
                      <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col justify-between space-y-6 md:pl-2">
                  <div className="space-y-4">
                    {/* White Quotation Mark */}
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                      className="text-white shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 18V10.8C0 4.32 4.32 0 10.44 0V4.32C6.84 4.32 4.86 6.66 4.86 10.8H10.44V18H0ZM13.56 18V10.8C13.56 4.32 17.88 0 24 0V4.32C20.4 4.32 18.42 6.66 18.42 10.8H24V18H13.56Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {currentPair[1].quote}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-neutral-800">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {currentPair[1].author}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {currentPair[1].role}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                    >
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

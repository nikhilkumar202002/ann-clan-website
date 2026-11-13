import { motion } from 'framer-motion'

const WhatDrivesUs = () => {
  return (
    <section id="what-drives-us" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* ======================================================== */}
        {/* ROW 1: LARGE CONTENT - CENTER ALIGNED */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center flex flex-col items-center mb-16 sm:mb-24"
        >
          {/* Eyebrow Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ WHAT DRIVES US ]
            </span>
          </div>

          {/* Section Heading: Strictly on 2 lines */}
          <h2 className="section-heading text-gray-900 mb-8 sm:mb-10">
            GREAT BRANDS ARE BUILT <br />
            ON GREAT STORIES.
          </h2>

          {/* Core Body Narratives */}
          <div className="w-full space-y-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
            <p>
              We believe creativity is more than making something look good. It is about understanding people, discovering opportunities and communicating ideas that make a difference. At Antsclanmedia, we combine creative thinking with purposeful execution. Every strategy, visual and campaign begins with understanding the brand and its audience.
            </p>
          
            <p className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl pt-2">
              We don't just create content. We create meaningful brand experiences.
            </p>
          </div>

          {/* Tagline / Motto Block */}
          <div className="mt-10 sm:mt-12 py-3.5 px-6 sm:px-8 border border-black bg-black text-white inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 select-none shadow-xs">
            <span className="font-black text-xs sm:text-sm uppercase tracking-widest">
              THINK CREATIVELY.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 hidden sm:inline-block" aria-hidden="true"></span>
            <span className="font-black text-xs sm:text-sm uppercase tracking-widest">
              COMMUNICATE POWERFULLY.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 hidden sm:inline-block" aria-hidden="true"></span>
            <span className="font-black text-xs sm:text-sm uppercase tracking-widest">
              GROW TOGETHER.
            </span>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* ROW 2: 2 COLUMNS - MISSION & VISION */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: OUR MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="group border border-gray-200 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between hover:border-black transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  [ OUR MISSION ]
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-6 group-hover:text-black transition-colors">
                TO MAKE EVERY BRAND MATTER.
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Our mission is to empower businesses through creative communication, impactful storytelling and innovative digital solutions that build stronger connections and support sustainable brand growth.
              </p>
            </div>
          </motion.div>

          {/* Column 2: OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group border border-gray-200 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between hover:border-black transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  [ OUR VISION ]
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-6 group-hover:text-black transition-colors">
                TO CREATE WHAT MOVES BRANDS FORWARD.
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Our vision is to become a trusted creative partner for brands, recognised for transforming ideas into meaningful experiences and creating lasting value through creativity and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatDrivesUs

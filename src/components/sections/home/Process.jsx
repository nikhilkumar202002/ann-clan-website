import { motion } from 'framer-motion'

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understanding your brand, audience and objectives.',
    },
    {
      step: '02',
      title: 'Strategise',
      description: 'Developing the right creative and marketing approach.',
    },
    {
      step: '03',
      title: 'Create',
      description: 'Bringing concepts to life through design, media and technology.',
    },
    {
      step: '04',
      title: 'Deliver & Grow',
      description: 'Executing, evaluating and improving the brand experience.',
    },
  ]

  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-t border-gray-100 overflow-hidden">
      {/* ======================================================== */}
      {/* SECTION HEADING: CONFINED TO CONTAINER */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="site-container mb-16 sm:mb-24"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ OUR PROCESS ]
          </span>
        </div>

        <h2 className="section-heading text-gray-900 max-w-4xl">
          FROM IDEA TO IMPACT.
        </h2>
      </motion.div>

      {/* ======================================================== */}
      {/* PROCESS DIAGRAM: FULL WIDTH (OUTSIDE CONTAINER) */}
      {/* ======================================================== */}
      <div className="relative w-full">
        {/* Continuous Horizontal Connecting Line (Desktop) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="hidden md:block absolute top-10 sm:top-12 lg:top-14 left-0 right-0 h-[2px] bg-gray-200 z-0"
          aria-hidden="true"
        />

        {/* Continuous Vertical Connecting Line (Mobile) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top center' }}
          className="md:hidden absolute top-10 bottom-10 left-[43px] w-[2px] bg-gray-200 z-0"
          aria-hidden="true"
        />

        {/* Process Steps Grid: Edge-to-Edge Fluid Padding */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-row md:flex-col items-start gap-6 md:gap-0"
              >
                {/* Circle Node with Number */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-black bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-105 shadow-xs">
                    <span className="font-anton text-2xl sm:text-3xl lg:text-4xl text-black group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content: Title & Description */}
                <div className="pt-2 md:pt-6 sm:md:pt-8 flex-1">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-2.5 max-w-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

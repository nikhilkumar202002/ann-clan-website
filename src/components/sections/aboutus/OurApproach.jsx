import { motion } from 'framer-motion'

const OurApproach = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description:
        'We understand your brand, business goals, audience and challenges.',
    },
    {
      step: '02',
      title: 'Strategise',
      description:
        'We develop creative directions and practical strategies aligned with your objectives.',
    },
    {
      step: '03',
      title: 'Create',
      description:
        'We bring ideas to life through content, campaigns, design and digital experiences.',
    },
    {
      step: '04',
      title: 'Execute',
      description:
        'We turn creative plans into meaningful brand experiences across relevant platforms.',
    },
    {
      step: '05',
      title: 'Grow',
      description:
        'We focus on building stronger brand connections and supporting continuous growth.',
    },
  ]

  return (
    <section id="our-approach" className="py-24 sm:py-32 bg-white border-t border-gray-100 overflow-hidden">
      
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
            [ HOW WE WORK ]
          </span>
        </div>

        <h2 className="section-heading text-gray-900 max-w-4xl">
          FROM THE FIRST IDEA <br />
          TO THE FINAL IMPACT.
        </h2>
      </motion.div>

      <div className="relative w-full">
      
        <div
          className="hidden lg:block absolute top-12 xl:top-14 left-0 right-0 h-[2px] bg-black z-0 pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="lg:hidden absolute top-10 bottom-10 left-[63px] sm:left-[95px] w-[2px] bg-black z-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-full px-6 sm:px-12 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 xl:gap-10 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-row lg:flex-col items-start gap-6 lg:gap-0"
              >
               
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full border-2 border-black bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-105 shadow-xs">
                    <span className="font-anton text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-black group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="pt-2 lg:pt-8 flex-1">
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

export default OurApproach

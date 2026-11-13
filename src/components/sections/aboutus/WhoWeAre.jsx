import { motion } from 'framer-motion'

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ======================================================== */}
          {/* LEFT SIDE: EDITORIAL STUDIO IMAGE */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-h-[640px] w-full overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Antsclanmedia creative strategy & media studio"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: CONTENT & NARRATIVE */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8"
          >
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ WHO WE ARE ]
              </span>
            </div>

            {/* Section Heading: Strictly 35-40px on 2 lines */}
            <h2 className="section-heading text-gray-900">
              CREATIVITY MEETS STRATEGY. <br />
              STORIES CREATE IMPACT.
            </h2>

            {/* Lead Statement */}
            <p className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              Antsclanmedia is a creative media and marketing company focused on helping brands grow in an ever-evolving digital world.
            </p>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              <p>
                We bring together creativity, strategy and storytelling to build meaningful connections between brands and people. From shaping brand communication to producing engaging visual content and creating digital experiences, we approach every project with a clear purpose — helping businesses communicate better and grow stronger.
              </p>
              <p>
                We believe every brand has a story worth telling. Our role is to bring that story to life through ideas that inspire, experiences that connect and solutions that make an impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

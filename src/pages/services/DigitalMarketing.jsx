import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const dmCapabilities = [
  {
    title: 'Social Media Marketing',
    description:
      'Building engaging social media experiences that strengthen brand identity and encourage audience interaction.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Digital Campaign Management',
    description:
      'Planning and coordinating digital campaigns that communicate your message across relevant platforms.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Content Strategy',
    description:
      'Developing purposeful content ideas and communication plans aligned with your brand identity.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Search Engine Optimisation (SEO)',
    description:
      'Improving website visibility through relevant keywords, content optimisation and search-friendly website practices.',
    image:
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Digital Advertising',
    description:
      'Supporting brand promotion through targeted advertising campaigns across suitable digital platforms.',
    image:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Online Brand Promotion',
    description:
      'Strengthening your digital presence through consistent messaging and creative online communication.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=80',
  },
]

const dmApproachSteps = [
  {
    step: '01',
    title: 'UNDERSTAND',
    description: 'Learn about your brand, audience and objectives.',
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'Build a digital marketing direction aligned with your goals.',
  },
  {
    step: '03',
    title: 'CREATE',
    description: 'Develop creative content, campaign concepts and marketing materials.',
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'Execute campaigns across selected digital channels.',
  },
  {
    step: '05',
    title: 'OPTIMISE',
    description: 'Review performance and identify opportunities for improvement.',
  },
]

const dmMattersFocus = [
  'Reach relevant audiences.',
  'Strengthen brand awareness.',
  'Build meaningful engagement.',
  'Communicate consistently.',
  'Create opportunities for business growth.',
]

const DigitalMarketing = () => {
  return (
    <>
      {/* ======================================================== */}
      {/* BANNER: BREADCRUMBS & HEADING ONLY */}
      {/* ======================================================== */}
      <CommonBanner
        align="center"
        minHeight="min-h-[50vh] sm:min-h-[55vh]"
        className="pt-28 pb-14 sm:pt-36 sm:pb-20"
        bgImage="/banners/service-page-background.jpg"
        overlayClassName=""
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Digital Marketing' },
        ]}
        title={
          <>
            MAKE YOUR DIGITAL <br className="hidden sm:inline" />
            PRESENCE COUNT.
          </>
        }
      />

      {/* ======================================================== */}
      {/* SECTION 1: ABOUT DIGITAL MARKETING (LEFT CONTENT / RIGHT IMAGE) */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  [ ABOUT DIGITAL MARKETING ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                TURN DIGITAL OPPORTUNITIES <br />
                INTO BRAND GROWTH.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  Having an online presence is just the beginning. The real opportunity lies in reaching the right people with the right message.
                </p>
                <p>
                  At Antsclanmedia, we combine creative thinking and digital strategy to help brands communicate effectively across online platforms.
                </p>
                <p>
                  From social media management to digital advertising and content strategy, we create marketing solutions designed around your brand and business objectives.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rounded="none"
                  icon={FiArrowUpRight}
                >
                  DISCUSS YOUR DIGITAL STRATEGY
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[580px] w-full overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="About Digital Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHAT WE OFFER / DIGITAL CAPABILITIES (CARD LAYOUT) */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100">
        <div className="site-container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20"
          >
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ WHAT WE OFFER ]
              </span>
            </div>

            <h2 className="section-heading text-gray-900">
              OUR DIGITAL CAPABILITIES
            </h2>
          </motion.div>

          {/* 3-Column Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {dmCapabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black h-full"
              >
                {/* Capability Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: WHY DIGITAL MARKETING MATTERS (LEFT IMAGE / RIGHT CONTENT) */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[580px] w-full overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Why Digital Marketing Matters"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column: Narrative Content & Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  [ WHY DIGITAL MARKETING MATTERS ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                YOUR AUDIENCE IS ONLINE. <br />
                YOUR BRAND SHOULD BE TOO.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                A strategic digital presence helps businesses:
              </p>

              <div className="pt-2">
                <ul className="space-y-3 sm:space-y-3.5">
                  {dmMattersFocus.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: OUR APPROACH (STRATEGY THAT MOVES WITH YOUR BRAND) */}
      {/* ======================================================== */}
      <section id="our-approach" className="py-24 sm:py-32 bg-white border-b border-gray-100 overflow-hidden">
        {/* Section Heading: Confined to Container */}
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
              [ OUR APPROACH ]
            </span>
          </div>

          <h2 className="section-heading text-gray-900 max-w-4xl">
            STRATEGY THAT MOVES WITH YOUR BRAND.
          </h2>
        </motion.div>

        {/* Process Diagram: Full Width Fluid Track */}
        <div className="relative w-full">
          {/* Continuous Horizontal Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-12 xl:top-14 left-0 right-0 h-[2px] bg-black z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Continuous Vertical Connecting Line (Mobile & Tablet) */}
          <div
            className="lg:hidden absolute top-10 bottom-10 left-[63px] sm:left-[95px] w-[2px] bg-black z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Steps Grid: Edge-to-Edge Fluid Padding */}
          <div className="w-full px-6 sm:px-12 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 xl:gap-10 relative z-10">
              {dmApproachSteps.map((item, index) => (
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
                  {/* Circle Node with Number */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full border-2 border-black bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:scale-105 shadow-xs">
                      <span className="font-anton text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-black group-hover:text-white transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Content: Title & Description */}
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

      {/* ======================================================== */}
      {/* SECTION 5: FINAL CTA */}
      {/* ======================================================== */}
      <CommonCta
        id="digital-marketing-cta"
        badge="[ START A PROJECT ]"
        title={
          <>
            LET&apos;S MAKE YOUR BRAND <br className="hidden sm:inline" />
            IMPOSSIBLE TO IGNORE.
          </>
        }
        description="Ready to build a stronger digital presence? Let's create a strategy that brings your brand closer to its audience."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
    </>
  )
}

export default DigitalMarketing

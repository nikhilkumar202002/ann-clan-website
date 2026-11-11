import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const webCapabilities = [
  {
    title: 'Business Website Development',
    description:
      'Custom corporate websites engineered for brand credibility, performance and scalability.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Custom Website Development',
    description:
      'Tailor-made web solutions designed around your unique business workflows and functional requirements.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Flawless cross-device experiences ensuring optimal viewing on mobile, tablet and desktop displays.',
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'UI/UX Design',
    description:
      'Human-centered interface design, wireframing and user journeys focused on effortless navigation and conversion.',
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Landing Page Development',
    description:
      'High-impact, conversion-focused landing pages built to maximize advertising ROI and lead generation.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Website Maintenance',
    description:
      'Ongoing technical support, performance audits, security updates and feature enhancements for continuous reliability.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  },
]

const webApproachSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand your brand identity, user personas and project objectives.',
  },
  {
    step: '02',
    title: 'WIREFRAME',
    description: 'Plan user flows, wireframes and intuitive UI/UX architecture.',
  },
  {
    step: '03',
    title: 'DEVELOP',
    description: 'Write clean, high-performance code adhering to modern standards.',
  },
  {
    step: '04',
    title: 'TEST',
    description: 'Rigorously test across devices, browsers, and performance benchmarks.',
  },
  {
    step: '05',
    title: 'LAUNCH',
    description: 'Deploy seamlessly and provide continuous monitoring and maintenance.',
  },
]

const webMattersFocus = [
  'Establish unshakeable brand credibility.',
  'Deliver intuitive and fast user journeys.',
  'Enhance search engine visibility and discovery.',
  'Support conversion and qualified lead capture.',
  'Provide an adaptable foundation for future growth.',
]

const WebDevelopment = () => {
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
          { label: 'Web Development' },
        ]}
        title={
          <>
            DIGITAL EXPERIENCES <br className="hidden sm:inline" />
            BUILT FOR YOUR BRAND.
          </>
        }
      />

      {/* ======================================================== */}
      {/* SECTION 1: ABOUT WEB DEVELOPMENT (LEFT CONTENT / RIGHT IMAGE) */}
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
                  [ ABOUT WEB DEVELOPMENT ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                PERFORMANCE-DRIVEN WEBSITES. <br />
                SEAMLESS USER EXPERIENCES.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  Your website is more than an online presence. It is an important part of your brand experience.
                </p>
                <p>
                  We create modern, responsive and user-friendly websites that communicate your identity, engage visitors and support your business goals. From robust web applications to sleek landing pages and immersive brand showcases, our code is built to excel.
                </p>
                <p>
                  At ANTS CLAN, our engineering bridges aesthetic elegance with technical precision to deliver platforms that turn visitors into loyal advocates.
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
                  BUILD YOUR WEBSITE
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
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="About Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHAT WE OFFER / WEB CAPABILITIES (CARD LAYOUT) */}
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
              OUR WEB CAPABILITIES
            </h2>
          </motion.div>

          {/* 3-Column Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {webCapabilities.map((item, index) => (
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
      {/* SECTION 3: WHY WEB DEVELOPMENT MATTERS (LEFT IMAGE / RIGHT CONTENT) */}
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
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Why Web Development Matters"
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
                  [ WHY WEB DEVELOPMENT MATTERS ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                YOUR WEBSITE IS YOUR 24/7 BRAND AMBASSADOR.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                A thoughtfully built website establishes instant credibility, engages visitors and turns curiosity into lasting business partnerships.
              </p>

              <div className="pt-2">
                <ul className="space-y-3 sm:space-y-3.5">
                  {webMattersFocus.map((point) => (
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
      {/* SECTION 4: OUR APPROACH */}
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
            FROM ARCHITECTURE TO FLUID INTERACTION.
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
              {webApproachSteps.map((item, index) => (
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
        id="web-cta"
        badge="[ START A PROJECT ]"
        title={
          <>
            READY TO BUILD YOUR <br className="hidden sm:inline" />
            NEXT DIGITAL PLATFORM?
          </>
        }
        description="From bespoke corporate platforms to high-performance web applications, let's build something extraordinary together."
        buttonText="BUILD YOUR WEBSITE"
        buttonHref="/contact"
      />
    </>
  )
}

export default WebDevelopment

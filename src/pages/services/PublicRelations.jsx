import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const prCapabilities = [
  {
    title: 'Media Relations',
    description:
      'Building professional relationships with media outlets and relevant publications to improve brand visibility.',
    image:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Press Releases',
    description:
      'Creating clear, engaging and newsworthy press communications that highlight important brand announcements.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Brand Communication',
    description:
      'Developing consistent brand messaging that communicates your identity, values and vision.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Media Outreach',
    description:
      'Connecting brand stories with relevant media contacts and opportunities.',
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Brand Positioning',
    description:
      'Helping businesses establish a distinctive identity and communicate their value effectively.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Publicity Campaigns',
    description:
      'Supporting brand awareness initiatives through coordinated communication and publicity activities.',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
  },
]

const prApproachSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand your brand, audience and communication goals.',
  },
  {
    step: '02',
    title: 'STRATEGISE',
    description: 'Identify the right messages, media opportunities and communication direction.',
  },
  {
    step: '03',
    title: 'CREATE',
    description: 'Develop compelling press materials and brand communication.',
  },
  {
    step: '04',
    title: 'CONNECT',
    description: 'Coordinate relevant media outreach and publicity activities.',
  },
  {
    step: '05',
    title: 'STRENGTHEN',
    description: 'Build consistent communication that supports your brand reputation.',
  },
]

const prMattersFocus = [
  'Building brand credibility.',
  'Strengthening public visibility.',
  'Communicating your brand story.',
  'Developing meaningful media connections.',
  'Supporting long-term brand reputation.',
]

const PublicRelations = () => {
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
          { label: 'Public Relations' },
        ]}
        title={
          <>
            BUILD YOUR REPUTATION. <br className="hidden sm:inline" />
            AMPLIFY YOUR STORY.
          </>
        }
      />

      {/* ======================================================== */}
      {/* SECTION 1: ABOUT PUBLIC RELATIONS (LEFT CONTENT / RIGHT IMAGE) */}
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
                  [ ABOUT PUBLIC RELATIONS ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                STRATEGIC COMMUNICATION. <br />
                LASTING IMPRESSIONS.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  Public relations is about building trust, shaping perceptions and creating meaningful connections between brands and their audiences.
                </p>
                <p>
                  We develop communication strategies that help businesses share their stories, strengthen their reputation and establish a recognisable presence across relevant media platforms.
                </p>
                <p>
                  From brand announcements to media outreach, we help turn your message into a story worth sharing.
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
                  DISCUSS YOUR PR STRATEGY
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
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                  alt="About Public Relations"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHAT WE OFFER / PR CAPABILITIES (CARD LAYOUT) */}
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
              OUR PR CAPABILITIES
            </h2>
          </motion.div>

          {/* 3-Column Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {prCapabilities.map((item, index) => (
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
      {/* SECTION 3: WHY PUBLIC RELATIONS MATTERS (LEFT IMAGE / RIGHT CONTENT) */}
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
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Why Public Relations Matters"
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
                  [ WHY PUBLIC RELATIONS MATTERS ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                YOUR REPUTATION IS YOUR BRAND&apos;S STRENGTH.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                A strong public presence helps people recognise your brand, understand your values and develop confidence in your business.
              </p>

              <div className="pt-2">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                  Our approach focuses on:
                </h3>
                <ul className="space-y-3 sm:space-y-3.5">
                  {prMattersFocus.map((point) => (
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
      {/* SECTION 4: OUR APPROACH (FROM MESSAGE TO MEDIA IMPACT) */}
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
            FROM MESSAGE TO MEDIA IMPACT.
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
              {prApproachSteps.map((item, index) => (
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
      {/* SECTION 5: CALL TO ACTION */}
      {/* ======================================================== */}
      <CommonCta
        id="pr-cta"
        badge="[ START A PROJECT ]"
        title={
          <>
            YOUR STORY DESERVES <br className="hidden sm:inline" />
            THE RIGHT AUDIENCE.
          </>
        }
        description="Let's build a stronger public presence for your brand through meaningful communication and strategic storytelling."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
    </>
  )
}

export default PublicRelations

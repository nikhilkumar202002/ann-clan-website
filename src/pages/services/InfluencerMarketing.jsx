import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const influencerCapabilities = [
  {
    title: 'Influencer Identification',
    description:
      'Vetting and selecting creators whose values, audience demographics and aesthetic match your brand.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Creator Collaborations',
    description:
      'Co-creating authentic storytelling and sponsored activations that resonate organically with followers.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Influencer Campaign Planning',
    description:
      'Strategic roadmapping, campaign objectives, deliverable timelines and creative guidelines.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Brand Partnerships',
    description:
      'Facilitating long-term ambassador programs that build deep brand affinity over time.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Campaign Coordination',
    description:
      'End-to-end management of creator communications, product gifting, approvals and live dates.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Content Collaboration',
    description:
      'Repurposing top-performing creator assets across paid ads, social channels and brand websites.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  },
]

const influencerApproachSteps = [
  {
    step: '01',
    title: 'SCOUT',
    description: 'Pinpoint vetted creators aligned with your target niche and brand tone.',
  },
  {
    step: '02',
    title: 'CURATE',
    description: 'Craft creative briefs that empower creator authentic expression.',
  },
  {
    step: '03',
    title: 'ENGAGE',
    description: 'Manage contracts, deliverables, legal compliance, and briefing.',
  },
  {
    step: '04',
    title: 'AMPLIFY',
    description: 'Coordinate simultaneous drops and amplify high-performing creator posts.',
  },
  {
    step: '05',
    title: 'MEASURE',
    description: 'Track engagement, audience sentiment, clicks, and conversions.',
  },
]

const influencerMattersFocus = [
  'Unlock warm, highly engaged audience communities.',
  'Humanize your brand with relatable voices.',
  'Generate fresh, high-performing creative content.',
  'Drive authentic conversations and social proof.',
  'Accelerate word-of-mouth brand discovery.',
]

const InfluencerMarketing = () => {
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
          { label: 'Influencer Marketing' },
        ]}
        title={
          <>
            THE RIGHT VOICES. <br className="hidden sm:inline" />
            THE RIGHT AUDIENCE. REAL CONNECTIONS.
          </>
        }
      />

      {/* ======================================================== */}
      {/* SECTION 1: ABOUT INFLUENCER MARKETING (LEFT CONTENT / RIGHT IMAGE) */}
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
                  [ ABOUT INFLUENCER MARKETING ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                AUTHENTIC VOICES. <br />
                CULTURALLY RELEVANT IMPACT.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  People connect with people. We help brands collaborate with relevant content creators and influencers to communicate their message in an authentic and engaging way.
                </p>
                <p>
                  By bringing brands and creators together, we help create collaborations that strengthen visibility, encourage engagement and introduce brands to new audiences.
                </p>
                <p>
                  At ANTS CLAN, we handle everything from talent matchmaking and contract negotiation to campaign creative direction and ROI measurement.
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
                  START AN INFLUENCER CAMPAIGN
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
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                  alt="About Influencer Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: WHAT WE OFFER / INFLUENCER CAPABILITIES (CARD LAYOUT) */}
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
              OUR INFLUENCER CAPABILITIES
            </h2>
          </motion.div>

          {/* 3-Column Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {influencerCapabilities.map((item, index) => (
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
      {/* SECTION 3: WHY INFLUENCER MARKETING MATTERS (LEFT IMAGE / RIGHT CONTENT) */}
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
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Why Influencer Marketing Matters"
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
                  [ WHY INFLUENCER MARKETING MATTERS ]
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
                TRUST IS THE NEW CURRENCY.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Consumers trust creators they follow far more than traditional advertisements. Authentic recommendations spark action.
              </p>

              <div className="pt-2">
                <ul className="space-y-3 sm:space-y-3.5">
                  {influencerMattersFocus.map((point) => (
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
            FROM TALENT DISCOVERY TO CAMPAIGN REACH.
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
              {influencerApproachSteps.map((item, index) => (
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
        id="influencer-cta"
        badge="[ START A PROJECT ]"
        title={
          <>
            READY TO COLLABORATE <br className="hidden sm:inline" />
            WITH TOP CREATORS?
          </>
        }
        description="Let's build creator partnerships that expand your audience, establish trust, and inspire real engagement."
        buttonText="START AN INFLUENCER CAMPAIGN"
        buttonHref="/contact"
      />
    </>
  )
}

export default InfluencerMarketing

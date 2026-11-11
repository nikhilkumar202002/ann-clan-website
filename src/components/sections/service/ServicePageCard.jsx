import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const ServicePageCard = () => {
  const serviceList = [
    {
      id: 'pr',
      number: '01 / PUBLIC RELATIONS',
      title: 'PUBLIC RELATIONS',
      tagline: 'BUILD CONNECTIONS. SHAPE PERCEPTIONS. EARN TRUST.',
      description1:
        'Your brand deserves to be heard. We help businesses communicate their stories, strengthen their public image and build meaningful relationships with audiences and media.',
      description2:
        'Through strategic communication and creative storytelling, we help brands establish visibility and credibility.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      capabilities: [
        'Brand Communication',
        'Media Relations',
        'Press Releases',
        'Media Outreach',
        'Brand Positioning',
        'Publicity Campaigns',
      ],
      cta: 'DISCUSS YOUR PR STRATEGY',
    },
    {
      id: 'dm',
      number: '02 / DIGITAL MARKETING',
      title: 'DIGITAL MARKETING',
      tagline: 'MAKE YOUR DIGITAL PRESENCE COUNT.',
      description1:
        'In a connected world, being visible is only the beginning. We help brands reach the right audiences through creative digital campaigns and strategic online communication.',
      description2:
        'Our approach focuses on creating engaging experiences, strengthening brand presence and supporting meaningful audience connections.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      capabilities: [
        'Social Media Marketing',
        'Digital Campaign Management',
        'Content Strategy',
        'Online Brand Promotion',
        'Search Engine Optimisation (SEO)',
        'Digital Advertising',
      ],
      cta: 'GROW YOUR DIGITAL PRESENCE',
    },
    {
      id: 'web',
      number: '03 / WEB DEVELOPMENT',
      title: 'WEB DEVELOPMENT',
      tagline: 'DIGITAL EXPERIENCES BUILT FOR YOUR BRAND.',
      description1:
        'Your website is more than an online presence. It is an important part of your brand experience.',
      description2:
        'We create modern, responsive and user-friendly websites that communicate your identity, engage visitors and support your business goals.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      capabilities: [
        'Business Website Development',
        'Custom Website Development',
        'Responsive Web Design',
        'UI/UX Design',
        'Landing Page Development',
        'Website Maintenance',
      ],
      cta: 'BUILD YOUR WEBSITE',
    },
    {
      id: 'media',
      number: '04 / MEDIA PRODUCTION',
      title: 'MEDIA PRODUCTION',
      tagline: 'STORIES THAT DESERVE TO BE SEEN.',
      description1:
        'Great visuals capture attention. Powerful stories create lasting impressions.',
      description2:
        'We produce engaging visual content that brings brand ideas to life. From concept development to final production, we focus on creating compelling stories that connect with audiences.',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      capabilities: [
        'Corporate Videos',
        'Brand Films',
        'Commercial Advertisements',
        'Product Photography',
        'Promotional Videos',
        'Creative Content Production',
      ],
      cta: 'CREATE YOUR NEXT STORY',
    },
    {
      id: 'influencer',
      number: '05 / INFLUENCER MARKETING',
      title: 'INFLUENCER MARKETING',
      tagline: 'THE RIGHT VOICES. THE RIGHT AUDIENCE. REAL CONNECTIONS.',
      description1:
        'People connect with people. We help brands collaborate with relevant content creators and influencers to communicate their message in an authentic and engaging way.',
      description2:
        'By bringing brands and creators together, we help create collaborations that strengthen visibility, encourage engagement and introduce brands to new audiences.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      capabilities: [
        'Influencer Identification',
        'Creator Collaborations',
        'Influencer Campaign Planning',
        'Brand Partnerships',
        'Campaign Coordination',
        'Content Collaboration',
      ],
      cta: 'START AN INFLUENCER CAMPAIGN',
    },
  ]

  return (
    <section id="our-expertise" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* ======================================================== */}
        {/* SECTION HEADER */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          {/* Eyebrow Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ OUR EXPERTISE ]
            </span>
          </div>

          {/* Section Heading: Strictly 2 lines */}
          <h2 className="section-heading text-gray-900">
            EVERYTHING YOUR BRAND <br />
            NEEDS TO MOVE FORWARD.
          </h2>
        </motion.div>

        {/* ======================================================== */}
        {/* 2-COLUMN CARDS GRID (5 SERVICES + 1 CUSTOM CTA CARD) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black h-full"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category / Number Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-xs font-bold font-mono tracking-widest uppercase text-gray-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Main Service Title */}
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Bold Punchy Tagline */}
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-gray-800 mb-4">
                    {service.tagline}
                  </h4>

                  {/* Narrative Paragraphs */}
                  <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-6">
                    <p>{service.description1}</p>
                    <p>{service.description2}</p>
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-6 border-t border-gray-100">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400 block mb-3">
                      [ OUR CAPABILITIES ]
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {service.capabilities.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    rounded="none"
                    icon={FiArrowUpRight}
                    className="w-full sm:w-auto"
                  >
                    {service.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ======================================================== */}
          {/* CARD 6: CUSTOM BESPOKE PARTNERSHIP (BLACK BACKGROUND) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className="group bg-black text-white border border-black flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:shadow-2xl h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="text-xs font-bold font-mono tracking-widest uppercase text-gray-400">
                  06 / CUSTOM PROJECT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                HAVE A CUSTOM BRIEF?
              </h3>

              <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-gray-200 mb-4">
                LET&apos;S BUILD WHAT MOVES YOUR BRAND FORWARD.
              </h4>

              <div className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed font-normal mb-6">
                <p>
                  Every brand has unique goals and challenges. Whether you need an integrated 360° campaign, a high-impact launch, or specialized creative direction, we assemble the ideal team for your project.
                </p>
                <p>
                  Collaborate with ANTS CLAN to craft meaningful brand experiences and stories that create lasting value.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400 block mb-3">
                  [ HOW WE PARTNER ]
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    'Full-Service Brand Strategy',
                    'Cross-Channel Campaign Execution',
                    'Dedicated Production Team',
                    'Interactive Digital Engineering',
                    'Influencer & Media Collaborations',
                    'Ongoing Brand Growth & Support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                rounded="none"
                icon={FiArrowUpRight}
                className="w-full sm:w-auto"
              >
                START A CONVERSATION
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicePageCard

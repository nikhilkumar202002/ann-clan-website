import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const OurExpertise = () => {
  const expertiseList = [
    {
      id: '01',
      title: 'Public Relations',
      description:
        'Building meaningful relationships between brands, media and audiences through strategic communication and brand visibility.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '02',
      title: 'Digital Marketing',
      description:
        'Connecting brands with the right audiences through creative campaigns, digital strategies and engaging online experiences.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '03',
      title: 'Web Development',
      description:
        'Creating functional, engaging and user-friendly digital platforms that bring brands to life online.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '04',
      title: 'Media Production',
      description:
        'Producing compelling visual stories through photography, videography, advertisements and creative content.',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '05',
      title: 'Influencer Marketing',
      description:
        'Connecting brands with relevant creators to build authentic engagement, reach new audiences and strengthen brand influence.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
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
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-20"
        >
          {/* Eyebrow Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ OUR EXPERTISE ]
            </span>
          </div>

          {/* Section Heading: Strictly 2 lines, formal 35-40px */}
          <h2 className="section-heading text-gray-900 mb-6">
            EVERYTHING YOUR BRAND <br />
            NEEDS TO GROW.
          </h2>

          {/* Section Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
            We bring different creative and digital capabilities together to help brands communicate, connect and grow.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* 3 COLUMNS x 2 ROWS GRID (5 SERVICE CARDS + 1 CTA CARD) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* CARDS 1 to 5: Informational Service Cards (no link redirection) */}
          {expertiseList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-black h-full"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Content: Name & Description */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CARD 6: 2nd ROW LAST CARD - CTA CARD ON BLACK BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.7,
              delay: 5 * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className="group bg-black text-white border border-black flex flex-col justify-between p-8 sm:p-10 overflow-hidden transition-all duration-300 hover:shadow-xl h-full min-h-[380px]"
          >
            <div>
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  [ WORK WITH US ]
                </span>
              </div>

              {/* CTA Heading */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                LET'S BUILD <br />
                SOMETHING GREAT.
              </h3>

              {/* CTA Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal mt-4">
                Ready to take your brand forward? Partner with us to craft meaningful stories and digital experiences that create lasting impact.
              </p>
            </div>

            {/* CTA Action Button */}
            <div className="pt-8 sm:pt-10">
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                rounded="none"
                icon={FiArrowUpRight}
                className="w-full sm:w-auto"
              >
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurExpertise

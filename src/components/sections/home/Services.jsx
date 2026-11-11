import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Public Relations',
      description:
        'Strategic brand communications, media relations, high-impact press coverage, and reputation management that build unshakeable credibility.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '02',
      title: 'Digital Marketing',
      description:
        'Data-driven performance campaigns, omnichannel growth strategies, precision targeting, and conversion funnels engineered to scale revenue.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '03',
      title: 'Web Development',
      description:
        'Bespoke digital platforms, high-speed modern web applications, interactive 3D experiences, and robust architectures built for long-term scalability.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '04',
      title: 'Media Production',
      description:
        'Cinematic video production, commercial photography, motion design, and high-production brand films that evoke emotion and drive action.',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '05',
      title: 'Influencer Marketing',
      description:
        'Connecting brands with vetted creators and culture-shapers to run authentic ambassador programs, viral activations, and creator-led campaigns.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '06',
      title: 'Creative Strategy',
      description:
        'Uncompromising brand positioning, visual identity systems, creative direction, and cultural narratives that set you apart from competitors.',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ SERVICES & CAPABILITIES ]
            </span>
          </div>

          <h2 className="section-heading text-gray-900">
            Everything Your Brand Needs to Grow.
          </h2>
        </motion.div>

        {/* 3-Column Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Content: Name & Expert Text */}
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
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA for All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            rounded="none"
            icon={FiArrowUpRight}
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

import { motion } from 'framer-motion'

const OurClients = () => {
  const clients = [
    {
      name: 'Britannia',
      logo: '/client-logos/britania.png',
    },
    {
      name: 'CIAL',
      logo: '/client-logos/cial.png',
    },
    {
      name: 'Kumbuckal Pepper',
      logo: '/client-logos/kumbuckal-peper.png',
    },
    {
      name: 'Malayala Manorama',
      logo: '/client-logos/malayala-manorama-logo-01.png',
    },
    {
      name: 'Vanitha',
      logo: '/client-logos/vanitha.png',
    },
    {
      name: 'Xylem Learning',
      logo: '/client-logos/xylem.png',
    },
    {
      name: 'Teakwood Aristy',
      logo: '/client-logos/TA_Branding-1.png',
    },
    {
      name: 'GoAmaze',
      logo: '/client-logos/main-logo.png',
    },
  ]

  return (
    <section id="clients" className="py-24 sm:py-32 bg-white text-gray-900 border-t border-gray-100">
      <div className="site-container">
        {/* Section Heading: Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ OUR CLIENTS ]
            </span>
          </div>

          <h2 className="section-heading text-gray-900 max-w-4xl">
            TRUSTED BY BRANDS THAT THINK BIG.
          </h2>
        </motion.div>

        {/* Client Logos: Inside Grid Style (4 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border border-gray-200 bg-gray-200 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white flex items-center justify-center h-32 sm:h-36 lg:h-40 p-5 sm:p-6 lg:p-8 hover:bg-gray-50 transition-colors duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="max-h-11 sm:max-h-14 max-w-[75%] sm:max-w-[70%] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default OurClients

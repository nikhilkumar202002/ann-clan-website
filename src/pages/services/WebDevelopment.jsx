import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import ServiceProcess from '../../components/sections/service/ServiceProcess'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const capabilities = [
  'Business Website Development',
  'Custom Website Development',
  'Responsive Web Design',
  'UI/UX Design',
  'Landing Page Development',
  'Website Maintenance',
]

const WebDevelopment = () => {
  return (
    <>
      <CommonBanner
        align="center"
        minHeight="min-h-[50vh] sm:min-h-[55vh]"
        className="pt-28 pb-14 sm:pt-36 sm:pb-20"
        badgeClassName="text-white"
        bgImage="/banners/service-page-background.jpg"
        overlayClassName=""
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Development' },
        ]}
        badge="[ 03 / WEB DEVELOPMENT ]"
        title={
          <>
            DIGITAL EXPERIENCES <br className="hidden sm:inline" />
            BUILT FOR YOUR BRAND.
          </>
        }
        description="Your website is more than an online presence. It is an important part of your brand experience. We create modern, responsive and user-friendly websites that communicate your identity, engage visitors and support your business goals."
      />

      {/* Main Content: Overview & Capabilities */}
      <section className="py-20 sm:py-28 bg-white text-gray-900 border-b border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative & Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    [ DIGITAL CRAFTSMANSHIP ]
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 leading-tight">
                  ENGINEERED FOR BEAUTY, SPEED AND FLAWLESS CONVERSION.
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  Your website is more than an online presence. It is an important part of your brand experience.
                </p>
                <p>
                  We create modern, responsive and user-friendly websites that communicate your identity, engage visitors and support your business goals. From robust web applications to sleek landing pages and immersive brand showcases, our code is built to excel.
                </p>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column: Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 bg-neutral-50 border border-gray-200 p-8 sm:p-10 sticky top-28"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  [ WHAT WE DELIVER ]
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-6">
                OUR CAPABILITIES
              </h3>

              <div className="space-y-3.5 mb-8">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm sm:text-base font-semibold text-gray-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rounded="none"
                icon={FiArrowUpRight}
                className="w-full"
              >
                BUILD YOUR WEBSITE
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceProcess />

      <CommonCta
        id="web-dev-cta"
        badge="[ LAUNCH YOUR VISION ]"
        title={
          <>
            READY TO BUILD YOUR <br />
            NEXT DIGITAL PLATFORM?
          </>
        }
        description="From clean corporate platforms to high-performance e-commerce experiences, let's build something exceptional."
        buttonText="BUILD YOUR WEBSITE"
        buttonHref="/contact"
      />
    </>
  )
}

export default WebDevelopment

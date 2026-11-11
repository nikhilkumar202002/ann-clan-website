import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import CommonBanner from '../../components/ui/CommonBanner'
import ServiceProcess from '../../components/sections/service/ServiceProcess'
import CommonCta from '../../components/ui/CommonCta'
import Button from '../../components/ui/Button'

const capabilities = [
  'Corporate Videos',
  'Brand Films',
  'Commercial Advertisements',
  'Product Photography',
  'Promotional Videos',
  'Creative Content Production',
]

const MediaProduction = () => {
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
          { label: 'Media Production' },
        ]}
        badge="[ 04 / MEDIA PRODUCTION ]"
        title={
          <>
            STORIES THAT <br className="hidden sm:inline" />
            DESERVE TO BE SEEN.
          </>
        }
        description="Great visuals capture attention. Powerful stories create lasting impressions. We produce engaging visual content that brings brand ideas to life."
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
                    [ CINEMATIC STORYTELLING ]
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 leading-tight">
                  VISUALS THAT CAPTIVATE AND NARRATIVES THAT INSPIRE.
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  Great visuals capture attention. Powerful stories create lasting impressions.
                </p>
                <p>
                  We produce engaging visual content that brings brand ideas to life. From concept development to final production, we focus on creating compelling stories that connect with audiences across broadcast, digital, and social formats.
                </p>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Media Production"
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
                CREATE YOUR NEXT STORY
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceProcess />

      <CommonCta
        id="media-production-cta"
        badge="[ BRING IDEAS TO LIFE ]"
        title={
          <>
            HAVE A VISION THAT <br />
            NEEDS PRODUCTION?
          </>
        }
        description="From commercial spots and high-end brand films to corporate documentaries, our production crew is ready."
        buttonText="CREATE YOUR NEXT STORY"
        buttonHref="/contact"
      />
    </>
  )
}

export default MediaProduction

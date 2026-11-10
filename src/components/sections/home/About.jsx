import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
         
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
         
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ ABOUT US ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              More Than Creativity. <br className="hidden sm:inline" />
              <span className="text-gray-400">We Create Growth.</span>
            </h2>


            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
              Ann's Clan is a multidisciplinary creative collective dedicated to transforming forward-thinking brands into market leaders. By fusing thoughtful design, strategic narrative, and modern engineering, we elevate ambitious brands with bespoke solutions that drive measurable, sustainable growth.
            </p>

            {/* Numbering Stats from Design */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 pb-2 border-y border-gray-100">
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-black">
                  05+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  Core Services
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-black">
                  08+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  Featured Brands
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-black">
                  360°
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  Creative Solutions
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="#services"
                variant="primary"
                size="lg"
                rounded="none"
                icon={FiArrowUpRight}
              >
                Discover Our Approach
              </Button>
            </div>
          </div>

         
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-h-[620px] w-full overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Ann's Clan creative studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

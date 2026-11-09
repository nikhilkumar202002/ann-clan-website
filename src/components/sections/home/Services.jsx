import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: '01',
      title: 'Brand Strategy & Identity',
      description:
        'We craft distinct visual languages and strategic positioning that capture attention, establish authority, and resonate deeply with your audience.',
      tags: ['Brand Architecture', 'Visual Identity', 'Voice & Tone', 'Design Systems', 'Brand Guidelines'],
    },
    {
      id: '02',
      title: 'UI/UX & Digital Experience',
      description:
        'Human-centric interface design built for modern web standards. We design interactive products and web experiences that convert and delight.',
      tags: ['User Research', 'Wireframing & Prototyping', 'Website Design', 'Mobile UI/UX', 'Interaction Design'],
    },
    {
      id: '03',
      title: 'Web & Creative Development',
      description:
        'Cutting-edge engineering built for speed, responsiveness, and scale. We bring bold creative concepts into high-performance digital reality.',
      tags: ['React & Next.js', 'Tailwind CSS', 'Headless CMS', 'Creative Development', 'Speed Optimization'],
    },
    {
      id: '04',
      title: 'Media, Video & Motion',
      description:
        'Dynamic visuals, 3D animations, and cinematic video production that bring stories to life and give brands an unforgettable edge.',
      tags: ['Art Direction', '3D Motion Design', 'Video Production', 'Micro-interactions', 'Brand Films'],
    },
    {
      id: '05',
      title: 'Growth & Digital Marketing',
      description:
        'Data-backed distribution, SEO strategies, and content pipelines designed to amplify your reach and maximize measurable ROI.',
      tags: ['Technical SEO', 'Performance Marketing', 'Content Strategy', 'Social Campaigns', 'Conversion Optimization'],
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 02 / SERVICES & CAPABILITIES ]
          </span>
        </div>

        {/* Section Title & Subheading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              Capabilities built to propel your brand forward.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We combine strategic rigor, exquisite craft, and technical mastery to solve complex challenges and build category-defining brands.
            </p>
          </div>
        </div>

        {/* Interactive Services List */}
        <div className="border-t border-gray-200">
          {services.map((service, index) => {
            const isActive = activeService === index
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`group border-b border-gray-200 py-8 sm:py-12 transition-all duration-300 cursor-pointer ${
                  isActive ? 'bg-gray-50/60 -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-xl' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Number & Service Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono font-bold text-gray-400 group-hover:text-black transition-colors">
                      /{service.id}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags & Action Indicator */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-4">
                    <div className="flex flex-wrap gap-1.5 lg:justify-end">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black group-hover:scale-110 transition-all">
                      <FiArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Banner inside Services */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-2xl bg-gray-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              Have a custom project in mind?
            </h4>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
              We offer bespoke solutions tailored to your brand's unique goals and vision.
            </p>
          </div>
          <Button
            href="#contact"
            variant="secondary"
            icon={FiArrowUpRight}
            className="flex-shrink-0"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services


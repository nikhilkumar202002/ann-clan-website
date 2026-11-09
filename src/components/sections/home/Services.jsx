import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="py-24 sm:py-32 bg-white border-t border-gray-100 relative"
    >
      {/* Floating Tilt Image Preview on Hover with Smooth Vertical Slide (Desktop) */}
      <div
        className="fixed pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePos.x + 30}px`,
          top: `${mousePos.y - 140}px`,
          opacity: hoveredIndex !== null ? 1 : 0,
          transform:
            hoveredIndex !== null
              ? 'rotate(-4deg) scale(1)'
              : 'rotate(0deg) scale(0.92)',
          transition:
            'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Compact 3:4 Aspect Ratio Container without border */}
        <div className="w-48 sm:w-56 aspect-[3/4] bg-black overflow-hidden shadow-2xl relative">
          {/* Vertical sliding track: slides smoothly to top when hovering another service */}
          <div
            className="w-full h-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateY(-${(hoveredIndex ?? 0) * 100}%)`,
            }}
          >
            {services.map((service) => (
              <div key={service.id} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 02 / SERVICES & CAPABILITIES ]
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[1.05] max-w-5xl">
            Everything Your Brand Needs to Grow.
          </h2>
        </div>

        {/* Interactive Services List */}
        <div>
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index
            const isLast = index === services.length - 1
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group ${
                  !isLast ? 'border-b border-gray-200' : ''
                } py-8 sm:py-12 transition-all duration-300 cursor-pointer ${
                  isHovered ? 'bg-gray-50/70 -mx-4 px-4 sm:-mx-8 sm:px-8' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Bold Number (No slash) & Service Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-5 sm:gap-8">
                    <span className="text-base sm:text-xl font-black font-mono text-black transition-transform duration-300 group-hover:scale-110">
                      {service.id}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-gray-900 group-hover:text-black transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Arrow Indicator */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end items-center pt-1">
                    <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-black group-hover:border-black group-hover:scale-110 transition-all duration-300">
                      <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

                {/* Mobile Inline Preview on Touch / Small Screens */}
                <div className="mt-4 lg:hidden">
                  <div className="w-full max-w-[220px] aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

  
      </div>
    </section>
  )
}

export default Services

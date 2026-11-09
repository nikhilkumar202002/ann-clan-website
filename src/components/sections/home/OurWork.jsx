import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Brand Identity', 'Digital Experience', '3D & Motion', 'Development']

  const projects = [
    {
      id: '01',
      title: 'Aura Luxury Global',
      category: 'Brand Identity',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      description: 'Complete digital rebrand and bespoke e-commerce experience for an international luxury lifestyle brand.',
    },
    {
      id: '02',
      title: 'Kinetic AI Labs',
      category: '3D & Motion',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      description: 'Interactive generative 3D visual platform exploring the intersection of creative AI and digital aesthetics.',
    },
    {
      id: '03',
      title: 'Monolith Studio',
      category: 'Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Minimalist editorial portfolio and custom headless architecture for a premier architectural atelier.',
    },
    {
      id: '04',
      title: 'Synapse Media',
      category: 'Digital Experience',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80',
      description: 'Dynamic visual identity system, immersive motion direction, and interactive product campaign.',
    },
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="our-work" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 03 / SELECTED WORK & CASE STUDIES ]
          </span>
        </div>

        {/* Title & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              Work that shapes culture and drives growth.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 lg:justify-end flex-shrink-0">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 mb-6 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Meta Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md rounded-full text-black shadow-xs">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-mono font-semibold bg-black/60 backdrop-blur-md rounded-full text-white shadow-xs">
                    {project.year}
                  </span>
                </div>

                {/* Hover Arrow Overlay Button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Project Meta & Details */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-black transition-colors pt-1">
                  /{project.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-20 text-center">
          <Button href="#contact" variant="outline" size="lg" icon={FiArrowUpRight}>
            Have a project in mind? Let's talk
          </Button>
        </div>
      </div>
    </section>
  )
}

export default OurWork


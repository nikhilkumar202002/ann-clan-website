import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const Insights = () => {
  const articles = [
    {
      id: '01',
      tag: 'Brand Strategy',
      readTime: '5 min read',
      date: 'Nov 2026',
      title: 'The Death of Generic Brands: Why Extreme Craft Wins in the AI Era',
      excerpt:
        'As automated content saturates every channel, distinctive point-of-view, human taste, and uncompromising aesthetic craft become your only true moats.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '02',
      tag: 'Creative Tech',
      readTime: '7 min read',
      date: 'Oct 2026',
      title: 'Interactive 3D on the Web: Turning Visual Novelty into Conversions',
      excerpt:
        'How spatial design, WebGL performance engineering, and micro-interactions transform passive visitors into deeply engaged brand advocates.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '03',
      tag: 'Design Systems',
      readTime: '4 min read',
      date: 'Sep 2026',
      title: 'Scaling Modern Design Systems Without Sacrificing Visual Soul',
      excerpt:
        'Building dynamic design tokens and motion guidelines that empower growing teams while keeping your brand voice sharp and unapologetic.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="insights" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 04 / PERSPECTIVES & INSIGHTS ]
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              Thoughts on design, tech & culture.
            </h2>
          </div>
          <div>
            <Button to="/insights" variant="link" icon={FiArrowUpRight}>
              Explore All Articles
            </Button>
          </div>
        </div>

        {/* Articles 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <Link
              key={article.id}
              to="/insights"
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6 shadow-xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-black">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:underline">
                  Read Article
                </span>
                <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights


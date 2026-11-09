import Layout from './components/layout/Layout'
import Hero from './components/sections/home/Hero'

const App = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-100">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">About Us</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A collaborative creative collective driven by purpose and craft.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              At Ann's Clan, we believe that great design bridges the gap between vision and reality. Our multidisciplinary approach combines thoughtful design, deep technical expertise, and storytelling to deliver meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Services</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Capabilities built for the modern digital era.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Strategy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Brand positioning, verbal and visual identity, guidelines, and naming that establish emotional resonance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Design & UI/UX</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Intuitive interfaces, design systems, and responsive layouts crafted for delightful user experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast, responsive, and accessible modern web applications built using cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="py-20 border-t border-gray-100">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Our Work</h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Featured Projects & Case Studies
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 hover:border-gray-400 transition-colors p-8">
              <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Identity & Web</span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">Digital Experience Platform</h3>
              <p className="mt-2 text-sm text-gray-600">
                End-to-end design and engineering delivering unmatched performance and high conversion rates.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 hover:border-gray-400 transition-colors p-8">
              <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Rebranding & Strategy</span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">NextGen Brand Transformation</h3>
              <p className="mt-2 text-sm text-gray-600">
                A modernized visual language and brand foundation designed to scale globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Insights</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thoughts on design, technology, and culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl border border-gray-200">
              <span className="text-xs text-gray-500">Design Systems</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors">
                Crafting Scalable Design Systems for Modern Teams
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Why consistent components and shared tokens accelerate product delivery.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl border border-gray-200">
              <span className="text-xs text-gray-500">Web Performance</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors">
                Speed as a Differentiator in Web Development
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                The technical choices that keep web applications instant and engaging.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl border border-gray-200">
              <span className="text-xs text-gray-500">Brand Strategy</span>
              <h3 className="mt-2 text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors">
                The Anatomy of a Lasting Brand Narrative
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                How authentic storytelling forms genuine connections with customers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-100">
        <div className="site-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Contact</h2>
            <p className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Let's build something remarkable together.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? We'd love to hear from you.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@annsclan.com"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-md"
              >
                hello@annsclan.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App

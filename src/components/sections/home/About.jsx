const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ 01 / ABOUT ANN'S CLAN ]
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.08]">
              More Than Creativity. <br className="hidden sm:inline" />
              <span className="text-gray-400">We Create Growth.</span>
            </h2>

            {/* Short Description Introducing the Agency and its Approach */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
              Ann's Clan is a multidisciplinary creative collective dedicated to transforming forward-thinking brands into market leaders. We believe compelling design must be paired with commercial rigor. By uniting strategic research, bespoke visual identity, and high-performance engineering, our collaborative approach ensures that every creative solution directly drives measurable, long-term brand equity and business growth.
            </p>

            {/* Key Approach Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-gray-400">/01</span>
                <h3 className="text-base font-bold uppercase tracking-tight text-gray-900">
                  Strategic Clarity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Deep research and positioning to ensure your narrative cuts through noise and connects authentically.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-gray-400">/02</span>
                <h3 className="text-base font-bold uppercase tracking-tight text-gray-900">
                  Engineered For Scale
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Uncompromising visual craft built on ultra-fast, modern architectures ready for global expansion.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black rounded-full hover:bg-gray-800 transition-all shadow-sm"
              >
                <span>Discover Our Approach</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Side: Image with Border Radius & Shadow */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Decorative Gradient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Main Image Container with Border Radius and Shadow */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-200/80">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Ann's Clan creative team collaborating in studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/60 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold uppercase text-gray-400">
                      Our Philosophy
                    </p>
                    <p className="text-sm font-extrabold uppercase tracking-tight text-gray-900">
                      Craft • Purpose • Scale
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

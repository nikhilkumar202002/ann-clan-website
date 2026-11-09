const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ 01 / ABOUT US ]
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
              More Than Creativity. <br className="hidden sm:inline" />
              <span className="text-gray-400">We Create Growth.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
              Ann's Clan is a multidisciplinary creative collective dedicated to transforming forward-thinking brands into market leaders. By fusing thoughtful design, strategic narrative, and modern engineering, we elevate ambitious brands with bespoke solutions that drive measurable, sustainable growth.
            </p>

            {/* CTA */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black rounded-full hover:bg-gray-800 transition-all"
              >
                <span>Discover Our Approach</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image only without border radius and without shadow */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] max-h-[550px] w-full overflow-hidden bg-gray-100">
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

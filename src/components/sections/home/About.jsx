const About = () => {
  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention' },
    { value: '12+', label: 'Industry Recognitions' },
    { value: '15+', label: 'Global Markets' },
  ]

  const pillars = [
    {
      number: '01',
      title: 'Strategy First',
      description:
        'Every project begins with deep research, market insight, and brand positioning to ensure your voice resonates in a crowded digital landscape.',
    },
    {
      number: '02',
      title: 'Design & Craft',
      description:
        'We believe every pixel matters. We create bespoke visual systems, immersive motion, and intuitive interfaces that turn passive visitors into loyal advocates.',
    },
    {
      number: '03',
      title: 'Engineered to Scale',
      description:
        'We build on modern, robust architectures designed for lightning-fast performance, rock-solid security, and effortless scalability as you grow.',
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 01 / ABOUT ANN'S CLAN ]
          </span>
        </div>

        {/* Large Statement Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 sm:pb-24 border-b border-gray-100">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.08]">
              A multidisciplinary collective crafting digital experiences that move people and build lasting brand equity.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              At Ann's Clan, we don't just build websites; we sculpt brand experiences. By fusing thoughtful design, strategic narrative, and modern engineering, we elevate ambitious brands into category leaders.
            </p>
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                <span>Our Capabilities</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 sm:py-20 border-b border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <span className="text-4xl sm:text-6xl font-black tracking-tighter text-black">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 sm:pt-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm group"
            >
              <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-black transition-colors">
                /{pillar.number}
              </span>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

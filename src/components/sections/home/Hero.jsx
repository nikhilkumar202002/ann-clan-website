const Hero = ({ videoSrc }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-white overflow-hidden"
    >
      <div className="site-container my-auto">
        {/* Massive Agency Headline Container */}
        <div className="text-[14vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[9.8vw] xl:text-[145px] 2xl:text-[168px] font-black uppercase tracking-tighter leading-[0.86] text-black select-none">
          {/* First Line: "WE GROW" + Text Description & CTAs aligned on the first line */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <span className="flex-shrink-0">
              WE GROW
            </span>

            {/* Text description on the first line of heading */}
            <div className="max-w-xs sm:max-w-sm md:max-w-md normal-case font-normal tracking-normal text-left lg:pb-3">
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug font-medium">
                We turn creative ideas into powerful brand experiences through media, marketing and technology.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-4 sm:mt-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-all"
                >
                  <span>Start a Project</span>
                  <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </a>
                <a
                  href="#our-work"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                >
                  <span>Explore Our Work</span>
                  <span className="inline-block transform group-hover:translate-y-0.5 transition-transform duration-200">
                    ↓
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Second Line: Indented "YOUR [4:5 VIDEO BOX] BRAND." (Top-aligned) */}
          <div className="flex flex-wrap items-start mt-3 sm:mt-5 lg:pl-16 xl:pl-28">
            <span>YOUR</span>

            {/* 4:5 Aspect Ratio Video / Media Asset Box (Sharp edges, top-aligned, clean without play button) */}
            <div
              className="relative inline-flex items-center justify-center mx-3 sm:mx-6 md:mx-8 mb-2 w-28 sm:w-40 md:w-52 lg:w-64 xl:w-72 2xl:w-80 aspect-[4/5] overflow-hidden bg-black shadow-2xl flex-shrink-0 group cursor-pointer"
              title="Brand Showcase Reel"
            >
              {videoSrc ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                /* Aesthetic 3D Abstract Image from Unsplash with 4:5 portrait crop */
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&h=1250&q=80"
                  alt="Ann's Clan Media Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
            </div>

            <span>BRAND.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

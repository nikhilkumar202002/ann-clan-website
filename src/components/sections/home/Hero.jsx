const Hero = ({ videoSrc }) => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 sm:py-16 bg-white overflow-hidden"
    >
      <div className="site-container">
        {/* Massive Agency Headline Container */}
        <div className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.2vw] xl:text-[124px] font-black uppercase tracking-tighter leading-[0.88] text-black select-none">
          {/* Top Row: "WE GROW" on left + Subtext & CTAs on right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
            <span className="flex-shrink-0">
              WE GROW
            </span>

            {/* Top-Right Description & CTAs (like in reference UI screenshot) */}
            <div className="max-w-xs lg:max-w-sm normal-case font-normal tracking-normal text-left lg:pt-3">
              <p className="text-xs sm:text-sm md:text-[15px] text-gray-700 leading-snug font-medium">
                We turn creative ideas into powerful brand experiences through media, marketing and technology.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-5 sm:mt-6">
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

          {/* Bottom Row: Indented "YOUR [MEDIA BOX] BRAND." */}
          <div className="flex flex-wrap items-center mt-2 sm:mt-3 lg:pl-16 xl:pl-28">
            <span>YOUR</span>

            {/* Media Asset (Unsplash Aesthetic Placeholder / Ready for Video) */}
            <div
              className="relative inline-flex items-center align-middle mx-2 sm:mx-4 md:mx-6 my-1 h-[0.78em] aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl flex-shrink-0 group cursor-pointer"
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
                /* Aesthetic 3D Abstract Image from Unsplash (matching reference screenshot) */
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80"
                  alt="Ann's Clan Media Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}

              {/* Overlay with subtle glass play indicator */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current ml-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <span>BRAND.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

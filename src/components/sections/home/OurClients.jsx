const OurClients = () => {
  const clients = [
    {
      name: 'Britannia',
      logo: '/client-logos/britania.png',
    },
    {
      name: 'CIAL',
      logo: '/client-logos/cial.png',
    },
    {
      name: 'Kumbuckal Pepper',
      logo: '/client-logos/kumbuckal-peper.png',
    },
    {
      name: 'Malayala Manorama',
      logo: '/client-logos/malayala-manorama-logo-01.png',
    },
    {
      name: 'Vanitha',
      logo: '/client-logos/vanitha.png',
    },
    {
      name: 'Xylem Learning',
      logo: '/client-logos/xylem.png',
    },
  ]

  return (
    <section id="clients" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        {/* Section Heading: Left Aligned */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ OUR CLIENTS ]
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05] max-w-4xl">
            TRUSTED BY BRANDS THAT THINK BIG.
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-white border border-gray-200 h-32 sm:h-40 flex items-center justify-center p-6 sm:p-8 transition-all duration-300 hover:border-black shadow-xs hover:shadow-md"
            >
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                className="max-h-12 sm:max-h-16 max-w-[80%] w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients

import CommonBanner from '../components/ui/CommonBanner'
import Services from '../components/sections/home/Services'
import Process from '../components/sections/home/Process'

const ServicesPage = () => {
  return (
    <>
      <CommonBanner
        badge="[ WHAT WE DO ]"
        title={
          <>
            CAPABILITIES THAT SCALE <br className="hidden sm:inline" />
            YOUR BRAND.
          </>
        }
        description="From high-impact public relations and digital performance marketing to bespoke web engineering and cinematic media production."
      />
      <Services />
      <Process />
    </>
  )
}

export default ServicesPage


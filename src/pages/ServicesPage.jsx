import CommonBanner from '../components/ui/CommonBanner'
import Services from '../components/sections/home/Services'
import Process from '../components/sections/home/Process'

const ServicesPage = () => {
  return (
    <>
      <CommonBanner
        align="center"
        bgImage="/banners/service-page-background.jpg"
        badge="[ WHAT WE DO ]"
        title={
          <>
            CREATIVE SOLUTIONS. <br className="hidden sm:inline" />
            MEANINGFUL IMPACT.
          </>
        }
      />
      <Services />
      <Process />
    </>
  )
}

export default ServicesPage

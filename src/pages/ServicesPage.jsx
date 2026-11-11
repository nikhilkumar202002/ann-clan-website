import CommonBanner from '../components/ui/CommonBanner'
import ServicePageCard from '../components/sections/service/ServicePageCard'
import Process from '../components/sections/home/Process'

const ServicesPage = () => {
  return (
    <>
      <CommonBanner
        align="center"
        bgImage="/banners/service-page-background.jpg"
        overlayClassName=""
        badge="[ WHAT WE DO ]"
        title={
          <>
            CREATIVE SOLUTIONS. <br className="hidden sm:inline" />
            MEANINGFUL IMPACT.
          </>
        }
      />
      <ServicePageCard />
      <Process />
    </>
  )
}

export default ServicesPage

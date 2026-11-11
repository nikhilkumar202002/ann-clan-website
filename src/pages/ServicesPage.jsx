import CommonBanner from '../components/ui/CommonBanner'
import ServicePageCard from '../components/sections/service/ServicePageCard'
import ServiceProcess from '../components/sections/service/ServiceProcess'

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
      <ServiceProcess />
    </>
  )
}

export default ServicesPage

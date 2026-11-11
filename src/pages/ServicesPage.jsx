import CommonBanner from '../components/ui/CommonBanner'
import ServicePageCard from '../components/sections/service/ServicePageCard'
import ServiceProcess from '../components/sections/service/ServiceProcess'
import CommonCta from '../components/ui/CommonCta'

const ServicesPage = () => {
  return (
    <>
      <CommonBanner
        align="center"
        minHeight="min-h-[50vh] sm:min-h-[55vh]"
        className="pt-28 pb-14 sm:pt-36 sm:pb-20"
        badgeClassName="text-white"
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
      <CommonCta
        id="services-cta"
        badge="[ GET IN TOUCH ]"
        title={
          <>
            READY TO TAKE YOUR <br />
            BRAND FURTHER?
          </>
        }
        description="Whether you have a clear strategy or just the beginning of an idea, we're ready to explore what's possible together."
        buttonText="LET'S START A PROJECT."
        buttonHref="/contact"
      />
    </>
  )
}

export default ServicesPage

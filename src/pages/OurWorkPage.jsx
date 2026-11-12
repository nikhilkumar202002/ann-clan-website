import CommonBanner from '../components/ui/CommonBanner'
import PortfolioMasonry from '../components/sections/portfolio/PortfolioMasonry'
import OurClients from '../components/sections/home/OurClients'
import CommonCta from '../components/ui/CommonCta'

const OurWorkPage = () => {
  return (
    <>

      <CommonBanner
        align="center"
        minHeight="min-h-[50vh] sm:min-h-[55vh]"
        className="pt-28 pb-14 sm:pt-36 sm:pb-20"
        bgImage="/banners/service-page-background.jpg"
        overlayClassName=""
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Our Work' },
        ]}
        title={
          <>
            STORIES OF IMPACT, <br className="hidden sm:inline" />
            MEASURED BY GROWTH.
          </>
        }
      />

      <PortfolioMasonry />
      <OurClients />
      <CommonCta
        id="our-work-cta"
        badge="[ START A PROJECT ]"
        title={
          <>
            READY TO CREATE YOUR <br className="hidden sm:inline" />
            NEXT BIG STORY?
          </>
        }
        description="Whether you have an upcoming launch, a rebranding vision, or need high-production media assets, let's explore what's possible."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
    </>
  )
}

export default OurWorkPage

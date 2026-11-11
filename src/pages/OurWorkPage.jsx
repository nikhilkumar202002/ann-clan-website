import CommonBanner from '../components/ui/CommonBanner'
import OurClients from '../components/sections/home/OurClients'

const OurWorkPage = () => {
  return (
    <>
      <CommonBanner
        badge="[ SELECTED WORKS ]"
        title={
          <>
            STORIES OF IMPACT, <br className="hidden sm:inline" />
            MEASURED BY GROWTH.
          </>
        }
        description="Explore our portfolio of brand transformations, digital platforms, media activations, and cultural campaigns."
      />
      <OurClients />
    </>
  )
}

export default OurWorkPage


import CommonBanner from '../components/ui/CommonBanner'
import WhoWeAre from '../components/sections/aboutus/WhoWeAre'
import WhatDrivesUs from '../components/sections/aboutus/3GridLayout'
import OurExpertise from '../components/sections/aboutus/OurExpertise'
import Team from '../components/sections/home/Team'

const AboutUs = () => {
  return (
    <>
      <CommonBanner
        align="center"
        bgImage="/banners/about-banner.jpg"
        badge="[ ABOUT ANTS CLAN ]"
        title={
          <>
            WE TURN IDEAS <br className="hidden sm:inline" />
            INTO IMPACT.
          </>
        }
        description="We are ANTS CLAN — a creative media company driven by ideas, storytelling and innovation. We help brands find their voice, connect with their audience and grow through meaningful creative experiences."
      />
      <WhoWeAre />
      <WhatDrivesUs />
      <OurExpertise />
      <Team />
    </>
  )
}

export default AboutUs

import CommonBanner from '../components/ui/CommonBanner'
import WhoWeAre from '../components/sections/aboutus/WhoWeAre'
import WhatDrivesUs from '../components/sections/aboutus/3GridLayout'
import OurExpertise from '../components/sections/aboutus/OurExpertise'
import OurApproach from '../components/sections/aboutus/OurApproach'
import Team from '../components/sections/home/Team'
import OurClients from '../components/sections/home/OurClients'
import CommonCta from '../components/ui/CommonCta'

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
       
      />
      <WhoWeAre />
      <WhatDrivesUs />
      <OurExpertise />
      <OurApproach />
      <OurClients />
      <Team />
      <CommonCta
        id="about-cta"
        badge="[ GET IN TOUCH ]"
        title={
          <>
            YOUR NEXT BIG IDEA <br />
            STARTS HERE.
          </>
        }
        description="Have a brand to build, a story to tell or an idea waiting to happen? Let's create something meaningful together."
        buttonText="START A PROJECT"
        buttonHref="/contact"
        secondaryButtonText="EXPLORE OUR WORK"
        secondaryButtonHref="/our-work"
      />
    </>
  )
}

export default AboutUs

import CommonBanner from '../components/ui/CommonBanner'
import About from '../components/sections/home/About'
import Team from '../components/sections/home/Team'

const AboutUs = () => {
  return (
    <>
      <CommonBanner
        badge="[ ABOUT ANTS CLAN ]"
        title={
          <>
            WE TURN IDEAS <br className="hidden sm:inline" />
            INTO IMPACT.
          </>
        }
        description="We are ANTS CLAN — a creative media company driven by ideas, storytelling and innovation. We help brands find their voice, connect with their audience and grow through meaningful creative experiences."
      />
      <About />
      <Team />
    </>
  )
}

export default AboutUs

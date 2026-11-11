import CommonBanner from '../components/ui/CommonBanner'

const AboutUs = () => {
  return (
    <>
      <CommonBanner
        badge="[ ABOUT ANTS CLAN ]"
        title={
          <>
            TURNING AMBITIOUS IDEAS <br className="hidden sm:inline" />
            INTO LASTING IMPACT.
          </>
        }
        description="We are a multidisciplinary creative collective dedicated to transforming brands through strategic storytelling, cinematic production, and cutting-edge digital experiences."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />
    </>
  )
}

export default AboutUs

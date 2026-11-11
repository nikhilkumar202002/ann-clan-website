import CommonBanner from '../components/ui/CommonBanner'
import Contact from '../components/sections/contact/Contact'

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        align="center"
        bgImage="/banners/contact-us-banner.jpg"
        badge="[ LET'S CONNECT ]"
        title={
          <>
            HAVE A STORY TO TELL? <br className="hidden sm:inline" />
            LET'S MAKE IT HAPPEN.
          </>
        }
      />
      <Contact />
    </>
  )
}

export default ContactPage

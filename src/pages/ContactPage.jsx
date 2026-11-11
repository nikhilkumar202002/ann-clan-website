import CommonBanner from '../components/ui/CommonBanner'
import CommonCta from '../components/ui/CommonCta'

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        badge="[ GET IN TOUCH ]"
        title={
          <>
            LET'S START A <br className="hidden sm:inline" />
            CONVERSATION.
          </>
        }
        description="Have a brief, an ambitious project, or an inquiry? We would love to hear from you."
      />
      <CommonCta
        id="contact-cta"
        badge="[ REACH OUT DIRECTLY ]"
        title={
          <>
            READY TO BUILD <br />
            SOMETHING ICONIC?
          </>
        }
        description="Write to us at contact@antsclan.com or connect with our studio."
        buttonText="EMAIL US"
        buttonHref="mailto:contact@antsclan.com"
      />
    </>
  )
}

export default ContactPage


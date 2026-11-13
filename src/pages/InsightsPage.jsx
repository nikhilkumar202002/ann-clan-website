import CommonBanner from '../components/ui/CommonBanner'
import Insights from '../components/sections/home/Insights'
import CommonCta from '../components/ui/CommonCta'

const InsightsPage = () => {
  return (
    <>
      <CommonBanner
        badge="[ THOUGHT LEADERSHIP ]"
        title={
          <>
            PERSPECTIVES ON CULTURE, <br className="hidden sm:inline" />
            MEDIA & TECHNOLOGY.
          </>
        }
        description="Articles, industry analysis, and creative playbooks from the minds behind Ann's Clan."
      />

      <Insights />

      <CommonCta
        id="insights-cta"
        badge="[ START A CONVERSATION ]"
        title={
          <>
            HAVE A PERSPECTIVE OR <br className="hidden sm:inline" />
            PROJECT TO DISCUSS?
          </>
        }
        description="Let's build meaningful brand experiences together. Reach out to our strategy and creative team."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
    </>
  )
}

export default InsightsPage

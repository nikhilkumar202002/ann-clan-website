import CommonBanner from '../components/ui/CommonBanner'

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
    </>
  )
}

export default InsightsPage


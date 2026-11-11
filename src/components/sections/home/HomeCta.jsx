import CommonCta from '../../ui/CommonCta'

const HomeCta = () => {
  return (
    <CommonCta
      id="home-cta"
      videoSrc="/video/cta-home-video.mp4"
      badge="[ START A CONVERSATION ]"
      title={
        <>
          LET'S MAKE YOUR BRAND <br />
          IMPOSSIBLE TO IGNORE.
        </>
      }
      description="Have an idea? We have the creativity and expertise to bring it to life."
      buttonText="LET'S TALK ABOUT YOUR PROJECT"
      buttonHref="#contact"
    />
  )
}

export default HomeCta

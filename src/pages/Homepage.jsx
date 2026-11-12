import Hero from '../components/sections/home/Hero'
import About from '../components/sections/home/About'
import Services from '../components/sections/home/Services'
import OurWork from '../components/sections/home/OurWork'
import Process from '../components/sections/home/Process'
import OurClients from '../components/sections/home/OurClients'
import Team from '../components/sections/home/Team'
import Testimonials from '../components/sections/home/Testimonials'
import HomeCta from '../components/sections/home/HomeCta'

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Process />
      <OurClients />
      <HomeCta />
      <Team />
      <Testimonials />
    </>
  )
}

export default Homepage

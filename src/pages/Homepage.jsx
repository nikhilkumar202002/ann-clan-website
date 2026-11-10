import Hero from '../components/sections/home/Hero'
import About from '../components/sections/home/About'
import Services from '../components/sections/home/Services'
import Process from '../components/sections/home/Process'
import OurClients from '../components/sections/home/OurClients'
import Team from '../components/sections/home/Team'
import Testimonials from '../components/sections/home/Testimonials'

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <OurClients />
      <Team />
      <Testimonials />
    </>
  )
}

export default Homepage

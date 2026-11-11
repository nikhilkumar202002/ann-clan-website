import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import ServicesPage from '../pages/ServicesPage'
import OurWorkPage from '../pages/OurWorkPage'
import InsightsPage from '../pages/InsightsPage'
import ContactPage from '../pages/ContactPage'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/our-work" element={<OurWorkPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Homepage />} />
    </RouterRoutes>
  )
}

export default Routes

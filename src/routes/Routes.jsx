import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import ServicesPage from '../pages/services/ServicesPage'
import PublicRelations from '../pages/services/PublicRelations'
import DigitalMarketing from '../pages/services/DigitalMarketing'
import WebDevelopment from '../pages/services/WebDevelopment'
import MediaProduction from '../pages/services/MediaProduction'
import InfluencerMarketing from '../pages/services/InfluencerMarketing'
import OurWorkPage from '../pages/OurWorkPage'
import InsightsPage from '../pages/InsightsPage'
import ContactPage from '../pages/ContactPage'
import PrivacyPolicy from '../pages/legal/PrivacyPolicy'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/public-relations" element={<PublicRelations />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/media-production" element={<MediaProduction />} />
      <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
      <Route path="/our-work" element={<OurWorkPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Homepage />} />
    </RouterRoutes>
  )
}

export default Routes

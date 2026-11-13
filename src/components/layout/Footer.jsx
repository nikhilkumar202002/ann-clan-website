import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiInstagram, FiLinkedin, FiFacebook, FiYoutube, FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'
import { navRoutes } from '../../routes/navRoutes'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { name: 'Public Relations', path: '/services/public-relations' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Media Production', path: '/services/media-production' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Creative Strategy', path: '/services' },
  ]

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10 overflow-hidden">

      <section className="py-8 sm:py-15 lg:py-20 border-b border-white/10 overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="site-container text-center"
        >
          <Link
            to="/contact"
            className="group inline-block"
            aria-label="Let's get started"
          >
            <h2 className="text-[clamp(1.85rem,7.5vw,8.5rem)] font-black uppercase tracking-tight text-white leading-none whitespace-nowrap transition-transform duration-500 group-hover:scale-[1.02]">
              LET'S GET STARTED
            </h2>
          </Link>
        </motion.div>
      </section>

      {/* ======================================================== */}
      {/* LOWER FOOTER: NAVIGATION & INFO */}
      {/* ======================================================== */}
      <div className="site-container py-16 sm:py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12"
        >
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="Ann's Clan Home">
              <img
                src="/logo/main-logo-white.png"
                alt="Ann's Clan"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We create meaningful digital experiences, strategic branding and modern web solutions designed to elevate your vision.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-black border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-black border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-black border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-black border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navRoutes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">
              GET IN TOUCH
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="text-gray-300">
                Kochi, Kerala, India
              </p>
              <div>
                <a
                  href="mailto:antproductionsclan@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                >
                  antproductionsclan@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <div>
                  <a
                    href="tel:+919562148852"
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block font-mono"
                  >
                    +91 95621 48852
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+919037693852"
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block font-mono"
                  >
                    +91 90376 93852
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/contact"
                variant="ghostWhite"
                size="md"
                icon={FiArrowUpRight}
              >
                Let's Talk About Your Project
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom copyright bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} Antsclanmedia. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

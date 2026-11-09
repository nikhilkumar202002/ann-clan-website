import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Button from '../ui/Button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ]

  const serviceLinks = [
    { name: 'Brand Strategy', href: '#services' },
    { name: 'Web Design & UI/UX', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Content & Media', href: '#services' },
    { name: 'Digital Growth', href: '#services' },
  ]

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <a href="#" className="inline-block" aria-label="Ann's Clan Home">
              <img
                src="/logo/main-logo-white.png"
                alt="Ann's Clan"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting meaningful digital experiences, strategic branding, and modern web solutions designed to elevate your vision.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to receive updates on our latest work and insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <Button
                type="submit"
                variant="secondary"
                rounded="lg"
                fullWidth
                size="sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} Ann's Clan. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

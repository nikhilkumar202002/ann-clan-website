import { useState } from 'react'
import Navigation from '../ui/Navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center" aria-label="Ann's Clan Home">
              <img
                src="/logo/main-logo-black.png"
                alt="Ann's Clan"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex items-center" />

          {/* Right Action / CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="site-container py-5 space-y-4">
            <Navigation
              mobile
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

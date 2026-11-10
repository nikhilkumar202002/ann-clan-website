import { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { number: '01', name: 'Home', href: '#home' },
    { number: '02', name: 'About', href: '#about' },
    { number: '03', name: 'Services', href: '#services' },
    { number: '04', name: 'Our Work', href: '#our-work' },
    { number: '05', name: 'Insights', href: '#insights' },
    { number: '06', name: 'Contact', href: '#contact' },
  ]

  // Handle scroll detection: transparent at top, hide on scroll down, fade in when scrolling up (to top)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if scrolled past top
      if (currentScrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hide when scrolling down, fade in when scrolling up to top
      if (currentScrollY <= 20) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent background scroll when menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.lenis?.stop()
    } else {
      document.body.style.overflow = ''
      window.lenis?.start()
    }
    return () => {
      document.body.style.overflow = ''
      window.lenis?.start()
    }
  }, [isMenuOpen])

  const isDark = !isScrolled && !isMenuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible || isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isScrolled && !isMenuOpen
            ? 'bg-white/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container">
          <div
            className={`flex items-center justify-between h-20 transition-colors duration-300 ${
              isDark ? 'border-b border-white/15' : 'border-b border-gray-200'
            }`}
          >
            {/* Left Side: Logo (white on dark hero, black on light/scrolled) */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center" aria-label="Ann's Clan Home">
                <img
                  src={isDark ? '/logo/main-logo-white.png' : '/logo/main-logo-black.png'}
                  alt="Ann's Clan"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity duration-300"
                />
              </a>
            </div>

            {/* Right Side: CTA Button + 2-Line Hamburger Menu */}
            <div className="flex items-center gap-3 sm:gap-5">
              <Button
                href="#contact"
                variant={isDark ? 'secondary' : 'primary'}
                size="sm"
                rounded="none"
                className={
                  isDark
                    ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                    : ''
                }
              >
                Get in Touch
              </Button>

              {/* 2-Line Hamburger Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative z-50 flex flex-col justify-center items-center w-11 h-11 rounded-full transition-colors focus:outline-none cursor-pointer ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
                }`}
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-3 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out origin-center ${
                      isDark ? 'bg-white' : 'bg-black'
                    } ${
                      isMenuOpen ? 'translate-y-[5px] rotate-45 !bg-black' : 'translate-y-0 rotate-0'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out origin-center ${
                      isDark ? 'bg-white' : 'bg-black'
                    } ${
                      isMenuOpen ? '-translate-y-[5px] -rotate-45 !bg-black' : 'translate-y-0 rotate-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out flex flex-col justify-between pt-24 pb-10 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="site-container h-full flex flex-col justify-between">
          {/* Main Navigation Links */}
          <nav className="my-auto py-8">
            <ul className="space-y-4 sm:space-y-6">
              {navItems.map((item) => (
                <li key={item.name} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group inline-flex items-baseline gap-4 sm:gap-6 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black hover:text-gray-500 transition-colors duration-200"
                  >
                    <span className="text-xs sm:text-sm font-mono font-medium text-gray-400 group-hover:text-black transition-colors">
                      {item.number}
                    </span>
                    <span className="inline-block transform group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Info Bar inside Drawer */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
            <div>
              <p className="font-semibold text-black">Ann's Clan Picture Company</p>
              <p className="text-gray-400 mt-0.5">Media, Marketing & Technology</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@annsclan.com"
                className="font-semibold text-black hover:underline"
              >
                hello@annsclan.com
              </a>
              <span className="text-gray-300">•</span>
              <Button
                href="#contact"
                variant="link"
                icon={FiArrowUpRight}
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

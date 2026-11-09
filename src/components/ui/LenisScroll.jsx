import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const LenisScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with refined agency physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Store on window for global access (e.g. stop/start in modals/menus)
    window.lenis = lenis

    // Smooth anchor link scrolling via Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#' || href.length <= 1) return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target, {
          offset: 0,
          duration: 1.2,
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return children || null
}

export default LenisScroll

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePreloader } from '../../context/PreloaderContext'

const words = ['WE CREATE.', 'WE CONNECT.', 'WE INSPIRE.', 'WE GROW.']

const wordVariants = {
  initial: {
    y: '-100%',
    opacity: 0,
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const Preloader = () => {
  const { setIsLoaded, setIsPreloaderComplete } = usePreloader()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isCurtainLifting, setIsCurtainLifting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Disable scroll while preloader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    if (window.lenis) {
      window.lenis.stop()
    }

    return () => {
      document.body.style.overflow = ''
      if (window.lenis) {
        window.lenis.start()
      }
    }
  }, [])

  // Sequence the 4 words one by one, then trigger curtain lift
  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1)
      }, 700)
      return () => clearTimeout(timer)
    } else {
      // Last keyword (WE GROW.) displayed: hold briefly, then lift the curtain
      const exitTimer = setTimeout(() => {
        setIsCurtainLifting(true)
        setIsLoaded(true)
        document.body.style.overflow = ''
        if (window.lenis) {
          window.lenis.start()
        }

        // Safety fallback: ensure complete state is dispatched even if animation event is delayed
        setTimeout(() => {
          setIsComplete(true)
          if (setIsPreloaderComplete) {
            setIsPreloaderComplete(true)
          }
        }, 1100)
      }, 850)
      return () => clearTimeout(exitTimer)
    }
  }, [currentWordIndex, setIsLoaded, setIsPreloaderComplete])

  if (isComplete) return null

  return (
    <motion.div
      initial={{ y: '0%' }}
      animate={isCurtainLifting ? { y: '-100%' } : { y: '0%' }}
      transition={{
        duration: 1.0,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isCurtainLifting) {
          setIsComplete(true)
          if (setIsPreloaderComplete) {
            setIsPreloaderComplete(true)
          }
        }
      }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center select-none"
      aria-label="Loading site"
      role="status"
    >
      {/* Centered Word Container: Fixed height with overflow-hidden for crisp top-to-bottom motion */}
      <div className="relative h-[44px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentWordIndex]}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-[30px] font-black uppercase text-black tracking-tight leading-none block whitespace-nowrap text-center"
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Preloader

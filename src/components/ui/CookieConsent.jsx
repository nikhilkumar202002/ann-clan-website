import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'antsclan_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  // Show banner on initial visit if consent has not yet been saved
  useEffect(() => {
    let timer
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        timer = setTimeout(() => {
          setVisible(true)
        }, 1200)
      }
    } catch {
      timer = setTimeout(() => {
        setVisible(true)
      }, 1200)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [])

  // Listen for global custom event to re-open Cookie Notice from footer
  useEffect(() => {
    const handleOpenSettings = () => {
      setVisible(true)
    }

    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const saveConsent = (status) => {
    const record = {
      status, // 'accepted' | 'rejected'
      updatedAt: new Date().toISOString(),
      version: 1,
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
    } catch {
      // ignore
    }
    setVisible(false)
  }

  const acceptAll = () => {
    saveConsent('accepted')
  }

  const rejectOptional = () => {
    saveConsent('rejected')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 35 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-[9999] mx-auto max-w-2xl bg-white p-6 sm:p-8 shadow-2xl"
        >
          {/* Content Above */}
          <div>
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                [ COOKIE NOTICE ]
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">
              YOUR PRIVACY MATTERS.
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-normal">
              We use cookies to improve your browsing experience, understand website traffic and deliver tailored content. You can choose to accept all cookies or continue with only essential cookies. Read our{' '}
              <a
                href="/privacy-policy"
                className="font-bold text-black underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Buttons Below */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={acceptAll}
              className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Accept All
            </button>

            <button
              type="button"
              onClick={rejectOptional}
              className="px-6 py-2.5 bg-gray-100 text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Reject Optional
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

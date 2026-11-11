import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'

const STORAGE_KEY = 'antsclan_cookie_consent'

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  // Initialize consent state directly from localStorage
  const [consent, setConsent] = useState(() => {
    if (typeof window === 'undefined') return defaultPreferences
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed?.preferences) {
          return { ...defaultPreferences, ...parsed.preferences }
        }
      }
    } catch {
      // Fallback to default
    }
    return defaultPreferences
  })

  // Show banner on initial visit if consent has not yet been given
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

  // Listen for global custom event to open Cookie Settings from footer or anywhere
  useEffect(() => {
    const handleOpenSettings = () => {
      setVisible(true)
      setShowSettings(true)
    }

    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const saveConsent = (preferences) => {
    const record = {
      preferences,
      updatedAt: new Date().toISOString(),
      version: 1,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
    setConsent(preferences)
    setVisible(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    })
  }

  const rejectOptional = () => {
    saveConsent(defaultPreferences)
  }

  const togglePreference = (key) => {
    if (key === 'essential') return

    setConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const closeSettings = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setVisible(false)
    }
    setShowSettings(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop Overlay when Customize Modal is active */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSettings}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9998]"
            />
          )}

          {/* Modal / Banner Container */}
          <motion.div
            initial={{ opacity: 0, y: showSettings ? 30 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: showSettings ? 30 : 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-[9999] border border-black bg-white shadow-2xl ${
              showSettings
                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8'
                : 'bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 mx-auto max-w-5xl p-6 sm:p-8'
            }`}
          >
            {!showSettings ? (
              /* ======================================================== */
              /* COMPACT BOTTOM BANNER */
              /* ======================================================== */
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
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
                    We use cookies to improve your browsing experience, analyse website traffic and deliver tailored content. You can choose which cookies to allow or manage your preferences at any time. Read our{' '}
                    <a
                      href="/privacy-policy"
                      className="font-bold text-black underline underline-offset-2 hover:text-gray-600 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Banner Actions */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Accept All
                  </button>

                  <button
                    type="button"
                    onClick={rejectOptional}
                    className="px-5 py-2.5 border border-black bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    Reject Optional
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 underline underline-offset-4 hover:text-black transition-colors cursor-pointer"
                  >
                    Customize
                  </button>
                </div>
              </div>
            ) : (
              /* ======================================================== */
              /* FULL SETTINGS DIALOG */
              /* ======================================================== */
              <div>
                {/* Header with Close Icon */}
                <div className="flex items-start justify-between pb-4 border-b border-gray-200">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-black"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        [ COOKIE PREFERENCES ]
                      </span>
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                      MANAGE COOKIES
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={closeSettings}
                    aria-label="Close Cookie Preferences"
                    className="p-1.5 border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-colors cursor-pointer"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <p className="mt-4 mb-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Customize your cookie preferences below. Essential cookies are required for the website to function properly and cannot be switched off.
                </p>

                {/* Preference Categories */}
                <div className="space-y-4">
                  {[
                    {
                      key: 'essential',
                      title: 'Essential Cookies',
                      description: 'Required for core website security, session management and fundamental functionality.',
                      required: true,
                    },
                    {
                      key: 'analytics',
                      title: 'Analytics Cookies',
                      description: 'Help us understand visitor traffic and interaction patterns to continuously improve website performance.',
                      required: false,
                    },
                    {
                      key: 'marketing',
                      title: 'Marketing Cookies',
                      description: 'Used to measure campaign effectiveness and deliver relevant brand communication.',
                      required: false,
                    },
                    {
                      key: 'preferences',
                      title: 'Preference Cookies',
                      description: 'Remember your selected settings and localized preferences for future visits.',
                      required: false,
                    },
                  ].map(({ key, title, description, required }) => (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 p-4 border border-gray-200 bg-gray-50 hover:border-black transition-colors"
                    >
                      <div className="flex-1 pr-2">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold uppercase tracking-wider text-gray-900">
                            {title}
                          </p>
                          {required && (
                            <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 bg-black text-white">
                              Always Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-normal mt-1.5">
                          {description}
                        </p>
                      </div>

                      {/* Custom Checkbox Toggle */}
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={consent[key]}
                          disabled={required}
                          onChange={() => togglePreference(key)}
                          className="sr-only peer"
                          aria-label={title}
                        />
                        <div className={`w-11 h-6 transition-colors duration-200 border border-black ${
                          consent[key] ? 'bg-black' : 'bg-white'
                        } ${required ? 'opacity-60 cursor-not-allowed' : ''}`}>
                          <div className={`w-4 h-4 mt-[3px] transition-transform duration-200 flex items-center justify-center ${
                            consent[key] ? 'translate-x-5 bg-white text-black' : 'translate-x-1 bg-black text-white'
                          }`}>
                            {consent[key] && <FiCheck className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Dialog Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => saveConsent(consent)}
                      className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Save Preferences
                    </button>

                    <button
                      type="button"
                      onClick={acceptAll}
                      className="px-6 py-2.5 border border-black bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      Accept All
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={closeSettings}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

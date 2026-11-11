
import { useEffect, useState } from "react";

const STORAGE_KEY = "antsclan_cookie_consent";

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      setConsent({ ...defaultPreferences, ...parsed.preferences });
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (preferences) => {
    const record = {
      preferences,
      updatedAt: new Date().toISOString(),
      version: 1,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));

    setConsent(preferences);
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const rejectOptional = () => {
    saveConsent(defaultPreferences);
  };

  const togglePreference = (key) => {
    if (key === "essential") return;

    setConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl md:p-7">

          {!showSettings ? (
            <>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div className="max-w-2xl">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C70025]">
                    ANTS CLAN
                  </p>

                  <h2 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
                    Your privacy matters.
                  </h2>

                  <p className="text-sm leading-6 text-gray-600">
                    We use cookies to improve your browsing experience,
                    understand website traffic and support our marketing
                    activities. You can choose which cookies to allow.
                    Read our{" "}
                    <a
                      href="/privacy-policy"
                      className="font-semibold text-[#C70025] underline"
                    >
                      Privacy Policy
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    onClick={acceptAll}
                    className="rounded-lg bg-[#C70025] px-5 py-3 text-sm font-semibold text-white hover:bg-red-800"
                  >
                    Accept All
                  </button>

                  <button
                    onClick={rejectOptional}
                    className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                  >
                    Reject Optional
                  </button>

                  <button
                    onClick={() => setShowSettings(true)}
                    className="rounded-lg px-5 py-3 text-sm font-semibold text-gray-700 underline"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-2 text-xl font-bold text-gray-900">
                Cookie preferences
              </h2>

              <p className="mb-5 text-sm text-gray-600">
                Choose which types of cookies you want to allow.
              </p>

              {[
                ["essential", "Essential Cookies", "Required for website functionality."],
                ["analytics", "Analytics Cookies", "Help us understand website usage."],
                ["marketing", "Marketing Cookies", "Help measure advertising and campaigns."],
                ["preferences", "Preference Cookies", "Remember your website preferences."],
              ].map(([key, title, description]) => (
                <div
                  key={key}
                  className="flex items-center justify-between border-t border-gray-200 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {description}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={consent[key]}
                    disabled={key === "essential"}
                    onChange={() => togglePreference(key)}
                    className="h-5 w-5 accent-[#C70025]"
                    aria-label={title}
                  />
                </div>
              ))}

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => saveConsent(consent)}
                  className="rounded-lg bg-[#C70025] px-5 py-3 text-sm font-semibold text-white"
                >
                  Save Preferences
                </button>

                <button
                  onClick={() => setShowSettings(false)}
                  className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

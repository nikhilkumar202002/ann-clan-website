import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <main className="bg-white min-h-screen text-gray-900 pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              [ LEGAL & COMPLIANCE ]
            </span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900 mb-6">
            PRIVACY POLICY
          </h1>

          {/* Effective & Updated Dates */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-gray-500 pb-8 border-b border-gray-200 mb-12">
            <span>Effective Date: 11 November 2026</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>Last Updated: 11 November 2026</span>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-12 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                1. Introduction
              </h2>
              <p>
                Welcome to Antsclanmedia (&quot;Antsclanmedia&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;).
              </p>
              <p>
                At Antsclanmedia, we respect your privacy and are committed to protecting the personal information you share with us through our website,{' '}
                <a
                  href="https://antsclanmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  https://antsclanmedia.com/
                </a>
                .
              </p>
              <p>
                This Privacy Policy explains what information we collect, how we use it, when we may share it and the measures we take to protect it when you visit our website or contact us about our services.
              </p>
              <p>
                By using our website, you acknowledge that you have read this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                  Personal Information
                </h3>
                <p>
                  When you contact us, submit an enquiry or request our services, we may collect:
                </p>
                <ul className="space-y-2 pl-2">
                  {[
                    'Full name',
                    'Email address',
                    'Phone number',
                    'Company or organisation name',
                    'Project details and requirements',
                    'Any additional information you voluntarily provide',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                  Technical Information
                </h3>
                <p>
                  When you visit our website, certain technical information may be collected automatically, including:
                </p>
                <ul className="space-y-2 pl-2">
                  {[
                    'IP address',
                    'Browser type and version',
                    'Device and operating system information',
                    'Pages visited and time spent on the website',
                    'Referring website or source',
                    'General website usage information',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                3. How We Use Your Information
              </h2>
              <p>We may use the collected information to:</p>
              <ul className="space-y-2 pl-2">
                {[
                  'Respond to enquiries and messages.',
                  'Provide information about our services.',
                  'Understand your project requirements.',
                  'Communicate about potential business opportunities.',
                  'Improve our website, services and user experience.',
                  'Analyse website traffic and performance.',
                  'Maintain website security and prevent fraudulent activity.',
                  'Comply with applicable legal obligations.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                We will only use your personal information for legitimate business purposes and other purposes explained in this policy.
              </p>
            </section>

            {/* 4. Cookies and Tracking Technologies */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website may use cookies and similar technologies to improve functionality, understand visitor behaviour and analyse website performance.
              </p>
              <p>
                Cookies are small text files stored on your device when you visit a website.
              </p>
              <p>
                You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect some website functionalities.
              </p>
              <p>
                Where required by applicable law, we will seek consent before using non-essential cookies.
              </p>
            </section>

            {/* 5. Sharing of Information */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                5. Sharing of Information
              </h2>
              <p>
                Antsclanmedia does not sell or rent your personal information to third parties.
              </p>
              <p>
                We may share information with trusted service providers when necessary to operate our website or business, including:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  'Website hosting and technical service providers.',
                  'Website analytics providers.',
                  'Communication and email service providers.',
                  'Professional advisers or legal authorities where required by law.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Such parties may access information only to the extent necessary to perform their services or fulfil legal obligations.
              </p>
            </section>

            {/* 6. Data Security */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                6. Data Security
              </h2>
              <p>
                We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, loss or misuse.
              </p>
              <p>
                However, no method of transmitting or storing information online is completely secure. Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                7. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this policy, respond to enquiries, maintain business records and comply with applicable legal requirements.
              </p>
              <p>
                When information is no longer required, we take reasonable steps to delete or securely dispose of it.
              </p>
            </section>

            {/* 8. Your Privacy Rights */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                8. Your Privacy Rights
              </h2>
              <p>Depending on applicable law, you may have the right to:</p>
              <ul className="space-y-2 pl-2">
                {[
                  'Request access to your personal information.',
                  'Request correction of inaccurate information.',
                  'Request deletion of your personal information.',
                  'Withdraw consent where processing is based on consent.',
                  'Raise concerns about how your information is being used.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </section>

            {/* 9. Third-Party Websites */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                9. Third-Party Websites
              </h2>
              <p>
                Our website may contain links to external websites, social media platforms or third-party services.
              </p>
              <p>
                We are not responsible for the privacy practices, content or security of these external websites. We encourage you to review their respective privacy policies before sharing personal information.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not specifically directed towards children. We do not knowingly collect personal information from children in violation of applicable laws.
              </p>
              <p>
                If you believe that a child has provided personal information to us without appropriate authorisation, please contact us so that we can take appropriate action.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section className="space-y-4 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality or applicable legal requirements.
              </p>
              <p>
                Any updates will be published on this page along with the revised effective or last updated date.
              </p>
              <p>We encourage visitors to review this page periodically.</p>
            </section>

            {/* 12. Contact Us */}
            <section className="space-y-6 pt-6 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
                12. Contact Us
              </h2>
              <p>
                If you have any questions, concerns or requests regarding this Privacy Policy or the handling of your personal information, please contact us:
              </p>

              <div className="border border-gray-200 bg-gray-50 p-6 sm:p-8 space-y-3">
                <p className="font-black text-lg sm:text-xl text-gray-900 uppercase tracking-tight">
                  Antsclanmedia
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Location:</span> Kochi, Kerala, India
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Email:</span>{' '}
                  <a
                    href="mailto:antproductionsclan@gmail.com"
                    className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    antproductionsclan@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Phone:</span>{' '}
                  <a
                    href="tel:+919562148852"
                    className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    +91 95621 48852
                  </a>
                  {', '}
                  <a
                    href="tel:+919037693852"
                    className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    +91 90376 93852
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Website:</span>{' '}
                  <a
                    href="https://antsclanmedia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    https://antsclanmedia.com/
                  </a>
                </p>
              </div>
            </section>

            {/* Brand Motto Sign-Off */}
            <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-black text-xl sm:text-2xl uppercase tracking-wider text-black">
                WE GROW YOUR BRAND.
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                Antsclanmedia &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default PrivacyPolicy

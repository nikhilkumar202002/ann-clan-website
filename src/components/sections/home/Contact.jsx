import { useState } from 'react'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Strategy',
    budget: '$10k - $25k',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Brand Strategy',
    'Web Design & UI/UX',
    'Web Development',
    'Video & 3D Motion',
    'Full Scope / Retainer',
  ]

  const budgetRanges = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+']

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            [ 05 / INITIATE A PROJECT ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline & Studio Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
                Let's build something remarkable.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                Have an ambitious idea, a rebrand in mind, or a product that needs world-class design and engineering? We'd love to hear from you.
              </p>
            </div>

            {/* Direct Studio Contacts */}
            <div className="mt-12 space-y-6 pt-8 border-t border-gray-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Direct Inquiries
                </span>
                <p className="mt-1">
                  <a
                    href="mailto:hello@annsclan.com"
                    className="text-lg sm:text-xl font-bold text-gray-900 hover:underline"
                  >
                    hello@annsclan.com
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Headquarters
                </span>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  Ann's Clan Picture Company • Los Angeles, CA
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Response Time
                </span>
                <p className="mt-1 text-sm text-gray-600">
                  We typically reply within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <span className="w-16 h-16 rounded-full bg-black text-white inline-flex items-center justify-center text-2xl font-bold">
                  <FiCheck className="w-8 h-8" />
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
                  Inquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your project details and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    What service are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({ ...formData, service })}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                          formData.service === service
                            ? 'bg-black text-white border-black'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    Estimated Budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget })}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                          formData.budget === budget
                            ? 'bg-black text-white border-black'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Tell us about the project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your goals, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black rounded-full hover:bg-gray-800 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


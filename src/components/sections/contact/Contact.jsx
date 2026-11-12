import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiChevronDown } from 'react-icons/fi'
import Button from '../../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Public Relations',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Public Relations',
    'Digital Marketing',
    'Web Development',
    'Media Production',
    'Influencer Marketing',
    'Other',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ======================================================== */}
          {/* LEFT COLUMN: STUDIO CONTACT DETAILS */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  [ REACH OUT ]
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-[1.05]">
                WE&apos;RE JUST A <br />
                MESSAGE AWAY.
              </h2>

              {/* Narrative Subtitle */}
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-md font-normal">
                Have a question or want to discuss a potential collaboration? Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Direct Studio Channels */}
            <div className="mt-10 sm:mt-12 space-y-6 pt-8 border-t border-gray-200">
              {/* 1. EMAIL US */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  EMAIL US
                </span>
                <p className="mt-1">
                  <a
                    href="mailto:antproductionsclan@gmail.com"
                    className="text-lg sm:text-xl font-bold text-gray-900 hover:text-black underline underline-offset-4 transition-colors"
                  >
                    antproductionsclan@gmail.com
                  </a>
                </p>
              </div>

              {/* 2. CALL US */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  CALL US
                </span>
                <div className="mt-1 space-y-1">
                  <div>
                    <a
                      href="tel:+919562148852"
                      className="text-lg sm:text-xl font-bold font-mono text-gray-900 hover:text-black transition-colors"
                    >
                      +91 95621 48852
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919037693852"
                      className="text-lg sm:text-xl font-bold font-mono text-gray-900 hover:text-black transition-colors"
                    >
                      +91 90376 93852
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. OUR LOCATION */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  OUR LOCATION
                </span>
                <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">
                  Kochi, Kerala, India
                </p>
              </div>

             
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: PROJECT ENQUIRY FORM */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 border border-gray-200 shadow-xs"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <span className="w-16 h-16 bg-black text-white inline-flex items-center justify-center text-2xl font-bold">
                  <FiCheck className="w-8 h-8" />
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
                  Enquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out to ANTS CLAN. Our team will review your project details and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Header */}
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
                    ENQUIRY FORM
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
                    Fill in the details below and we will get back to you shortly.
                  </p>
                </div>

                {/* 1. Full Name & 2. Company / Brand Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Studios"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all rounded-none"
                    />
                  </div>
                </div>

                {/* 3. Email Address & 4. Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all rounded-none"
                    />
                  </div>
                </div>

                {/* 5. What Service Are You Interested In? (Select Dropdown) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    What Service Are You Interested In? *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-black focus:bg-white transition-all rounded-none cursor-pointer appearance-none pr-10"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 6. Tell Us About Your Project */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your goals, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all resize-none rounded-none"
                  ></textarea>
                </div>

                {/* 7. Button: SEND ENQUIRY */}
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    rounded="none"
                    icon={FiArrowUpRight}
                    className="w-full sm:w-auto"
                  >
                    SEND ENQUIRY
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

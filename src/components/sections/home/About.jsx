import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../../ui/Button'

const Counter = ({ target, suffix = '', padZero = true, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setCount(Math.round(latest))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  const formattedCount = padZero && count < 10 ? `0${count}` : `${count}`

  return (
    <span ref={ref} className="tabular-nums font-anton">
      {formattedCount}
      {suffix}
    </span>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white border-t border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
         
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                [ ABOUT US ]
              </span>
            </div>

            <h2 className="section-heading text-gray-900">
              More Than Creativity. <br className="hidden sm:inline" />
              <span className="text-gray-400">We Create Growth.</span>
            </h2>


            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
              Ann's Clan is a multidisciplinary creative collective dedicated to transforming forward-thinking brands into market leaders. By fusing thoughtful design, strategic narrative, and modern engineering, we elevate ambitious brands with bespoke solutions that drive measurable, sustainable growth.
            </p>

            {/* Numbering Stats: In between lines only with Anton font and counter animation */}
            <div className="border-y border-gray-200 py-6 sm:py-8 my-6 sm:my-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-black tracking-wide leading-none">
                    <Counter target={5} suffix="+" padZero={true} duration={1.8} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium mt-2">
                    Core Services
                  </div>
                </div>
                <div>
                  <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-black tracking-wide leading-none">
                    <Counter target={8} suffix="+" padZero={true} duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium mt-2">
                    Featured Brands
                  </div>
                </div>
                <div>
                  <div className="font-anton text-4xl sm:text-5xl lg:text-6xl text-black tracking-wide leading-none">
                    <Counter target={360} suffix="°" padZero={false} duration={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium mt-2">
                    Creative Solutions
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/about"
                variant="primary"
                size="lg"
                rounded="none"
                icon={FiArrowUpRight}
              >
                Discover Our Approach
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] max-h-[620px] w-full overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Ann's Clan creative studio"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

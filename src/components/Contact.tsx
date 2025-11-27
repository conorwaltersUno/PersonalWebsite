import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="contact"
      className="section-spacing px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)]
                 bg-paper-cream dark:bg-ink-dark/50"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-2xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="section-header">
          <span className="section-title">Contact</span>
          <span className="section-number">04</span>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-display-section font-serif text-ink-black dark:text-paper-white"
          >
            Let's talk.
          </motion.h2>

          {/* Context */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-body-lg text-ink-medium dark:text-paper-mid leading-relaxed">
              I'm based in Northern Ireland and open to remote opportunities worldwide.
              Currently exploring senior roles in product-focused engineering teams.
            </p>
            <p className="text-body text-ink-light dark:text-paper-mid/70 leading-relaxed">
              If you're building something interesting, or just want to connect—I'd like to hear from you.
            </p>
          </motion.div>

          {/* Email CTA - Primary */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:cwalters01@qub.ac.uk"
              className="group inline-flex items-center gap-3 text-heading-1 font-serif
                         text-ink-black dark:text-paper-white hover:text-accent transition-colors"
            >
              <span className="link-underline">cwalters01@qub.ac.uk</span>
              <ArrowUpRight
                size={24}
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border-subtle dark:border-ink-medium/20 pt-8"
          >
            {/* Links Row */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://www.linkedin.com/in/conor-walters-99b49a173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-ink-medium dark:text-paper-mid hover:text-accent transition-colors link-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/conorwaltersUno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-ink-medium dark:text-paper-mid hover:text-accent transition-colors link-underline"
              >
                GitHub
              </a>
              <a
                href="/Conor-Walters-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-ink-medium dark:text-paper-mid hover:text-accent transition-colors link-underline"
              >
                Resume (PDF)
              </a>
            </div>
          </motion.div>

          {/* Location - subtle */}
          <motion.p
            variants={itemVariants}
            className="text-caption text-ink-light dark:text-paper-mid/50"
          >
            Northern Ireland  (Flexible)
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

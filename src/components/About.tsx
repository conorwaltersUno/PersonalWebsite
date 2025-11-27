import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
      id="about"
      className="section-spacing px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)]"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="section-header">
          <span className="section-title">About</span>
          <span className="section-number">01</span>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Large Initials / Visual */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex items-start"
          >
            <div className="relative">
              <span
                className="font-serif text-[12rem] lg:text-[16rem] leading-none
                           text-paper-warm dark:text-ink-dark select-none"
                aria-hidden="true"
              >
                CW
              </span>
              {/* Accent mark */}
              <div className="absolute bottom-8 right-0 w-16 h-1 bg-accent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio - Prose format */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-body-lg text-ink-dark dark:text-paper-cream leading-relaxed">
                I'm a software engineer with a first-class honours degree from Queen's University Belfast.
                Since 2017, I've been building things for the web—starting with curiosity, now with conviction.
              </p>

              <p className="text-body text-ink-medium dark:text-paper-mid leading-relaxed">
                Currently at <span className="text-ink-dark dark:text-paper-cream font-medium">Unosquare</span>,
                where I architect medical device software. Before that, payment systems at Payroc and
                healthcare technology at Philips. Each role taught me that good engineering is less about
                the code and more about the problems you choose to solve.
              </p>

              <p className="text-body text-ink-medium dark:text-paper-mid leading-relaxed">
                I think in TypeScript and React. My backend work spans Node.js and Java Spring.
                I've shipped to AWS, Railway, and bare metal. I care about developer experience
                as much as user experience—because the two are more connected than most realize.
              </p>
            </motion.div>

            {/* Beliefs - Short punchy statements */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border-subtle dark:border-ink-medium/20"
            >
              <h3 className="text-label uppercase tracking-[0.15em] text-ink-light dark:text-paper-mid mb-6">
                Beliefs
              </h3>
              <ul className="space-y-3">
                {[
                  'Code should be readable first, clever second.',
                  'Ship early, iterate often, listen always.',
                  'Documentation is a feature, not an afterthought.',
                  'The best architecture is the one you can explain in five minutes.',
                ].map((belief, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="text-body text-ink-dark dark:text-paper-cream">
                      {belief}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills as flowing text, not badges */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border-subtle dark:border-ink-medium/20"
            >
              <h3 className="text-label uppercase tracking-[0.15em] text-ink-light dark:text-paper-mid mb-6">
                Tools I Use
              </h3>
              <p className="text-body text-ink-medium dark:text-paper-mid leading-relaxed">
                <span className="text-ink-dark dark:text-paper-cream">Languages:</span> TypeScript, JavaScript, Java, Go
                <span className="mx-2 text-ink-light dark:text-paper-mid/50">/</span>
                <span className="text-ink-dark dark:text-paper-cream">Frontend:</span> React, React Native, Tailwind, Material-UI
                <span className="mx-2 text-ink-light dark:text-paper-mid/50">/</span>
                <span className="text-ink-dark dark:text-paper-cream">Backend:</span> Node.js, Express, Spring Boot
                <span className="mx-2 text-ink-light dark:text-paper-mid/50">/</span>
                <span className="text-ink-dark dark:text-paper-cream">Infrastructure:</span> AWS, Docker, PostgreSQL, MongoDB
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

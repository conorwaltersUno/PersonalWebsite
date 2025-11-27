import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const offset = 80
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative
                 px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl"
      >
        {/* Main Name - Massive Typography */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={lineVariants}
            className="font-serif text-display-hero text-ink-black dark:text-paper-white"
          >
            Conor
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            variants={lineVariants}
            className="font-serif text-display-hero text-ink-black dark:text-paper-white"
          >
            Walters
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          variants={fadeVariants}
          className="text-display-sub font-sans font-medium uppercase tracking-[0.15em]
                     text-ink-medium dark:text-paper-mid"
        >
          Software Engineer
        </motion.p>

        {/* Brief intro - subtle, not overpowering */}
        <motion.p
          variants={fadeVariants}
          className="mt-8 max-w-lg text-body-lg text-ink-light dark:text-paper-mid leading-relaxed"
        >
          Building for the web since 2020. Based in Northern Ireland, working globally.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-6 lg:left-[120px]
                   flex items-center gap-3 text-ink-light dark:text-paper-mid
                   hover:text-accent transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-label uppercase tracking-[0.15em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.button>
    </section>
  )
}

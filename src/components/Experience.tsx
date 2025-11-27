import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    company: 'Unosquare',
    role: 'Software Engineer',
    period: '2021 — Present',
    description: 'Medical device software, compliance automation, mobile development.',
    current: true,
    achievements: [
      'Architecting Software as a Medical Device (SaMD) platform that monitors software releases and identifies compliance issues before deployment',
      'Built microservices platform serving 1000+ daily active users',
      'Reduced deployment time by 60% through CI/CD pipeline optimization',
      'Led team of 4 engineers developing React Native mobile application',
    ],
    tech: ['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Payroc',
    role: 'Software Engineer I',
    period: '2021',
    description: 'Payment processing systems, fintech APIs, automated testing.',
    achievements: [
      'Developed RESTful APIs for payment processing with 99.9% uptime',
      'Implemented automated testing suite improving code coverage to 85%',
      'Collaborated with cross-functional teams to deliver features on schedule',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
  },
  {
    company: 'Philips',
    role: 'Associate Software Engineer',
    period: '2019 — 2020',
    description: 'Healthcare technology, patient monitoring systems.',
    achievements: [
      'Developed critical features for patient monitoring systems',
      'Improved application performance by 30% through code optimization',
      'Participated in Agile ceremonies and sprint planning',
    ],
    tech: ['Java', 'JavaScript', 'REST APIs'],
  },
  {
    company: "Queen's University Belfast",
    role: 'Software Engineering',
    period: '2017 — 2021',
    description: 'First-class Honours degree. Distributed systems, cloud computing.',
    achievements: [
      'Graduated with First-class Honours',
      'Advanced modules in distributed systems and cloud computing',
      'Multiple full-stack projects demonstrating technical versatility',
    ],
    tech: ['Java', 'Python', 'JavaScript', 'React', 'Node.js'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      id="experience"
      className="section-spacing px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)]
                 bg-paper-cream dark:bg-ink-dark/50"
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
          <span className="section-title">Experience</span>
          <span className="section-number">02</span>
        </motion.div>

        {/* Experience Table */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="border-b border-border-subtle dark:border-ink-medium/20 last:border-b-0"
            >
              {/* Row Header - Always Visible */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full py-6 flex items-start gap-6 text-left group
                           hover:bg-paper-warm/50 dark:hover:bg-ink-black/30 transition-colors -mx-4 px-4"
              >
                {/* Date */}
                <span className="w-32 flex-shrink-0 text-caption font-mono text-ink-light dark:text-paper-mid">
                  {exp.period}
                  {exp.current && (
                    <span className="ml-2 inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                  )}
                </span>

                {/* Company & Role */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-3 font-serif text-ink-black dark:text-paper-white mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-body-sm text-ink-medium dark:text-paper-mid">
                    {exp.role}
                  </p>
                  <p className="text-caption text-ink-light dark:text-paper-mid/70 mt-1">
                    {exp.description}
                  </p>
                </div>

                {/* Expand Toggle */}
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center
                                text-ink-light dark:text-paper-mid group-hover:text-accent transition-colors">
                  {expandedIndex === index ? (
                    <Minus size={18} strokeWidth={1.5} />
                  ) : (
                    <Plus size={18} strokeWidth={1.5} />
                  )}
                </span>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-[calc(8rem+1.5rem)] pr-12">
                      {/* Achievements */}
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-body-sm text-ink-medium dark:text-paper-mid"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Tech - Simple text list */}
                      <p className="text-caption text-ink-light dark:text-paper-mid/70">
                        {exp.tech.join(' / ')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  url?: string
  size: 'large' | 'medium' | 'small'
}

const projects: Project[] = [
  {
    title: 'East Down Yacht Club',
    description: 'Full-stack platform for sailing club management. Membership systems, event coordination, race results, and newsletter distribution. Built for scale with hybrid cloud infrastructure.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Railway'],
    url: 'https://edyc.nc-web-solutions.com/',
    size: 'large',
  },
  {
    title: 'Strangford Lough Regattas',
    description: 'Event management platform for the sailing community. Real-time race schedules, document management, and admin dashboard for content control.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    url: 'https://slrc.nc-web-solutions.com/',
    size: 'large',
  },
  {
    title: 'NC Web Solutions',
    description: 'Professional services showcase. Collaborative platform highlighting web development projects and technical expertise.',
    tech: ['React', 'Railway'],
    url: 'https://nc-web-solutions.com/',
    size: 'medium',
  },
  {
    title: 'This Portfolio',
    description: 'The site you\'re looking at.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    size: 'small',
  },
]

export default function Projects() {
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
      id="projects"
      className="section-spacing px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)]"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="section-header">
          <span className="section-title">Work</span>
          <span className="section-number">03</span>
        </motion.div>

        {/* Projects - Variable Layout */}
        <div className="space-y-8">
          {/* Large Projects - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.size === 'large')
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>

          {/* Medium & Small Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.size === 'medium')
              .map((project) => (
                <motion.div key={project.title} variants={itemVariants} className="lg:col-span-2">
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            {projects
              .filter((p) => p.size === 'small')
              .map((project) => (
                <motion.div key={project.title} variants={itemVariants} className="lg:col-span-1">
                  <ProjectCard project={project} />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Subtle note */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-caption text-ink-light dark:text-paper-mid/70"
        >
          Selected work. More projects and contributions on{' '}
          <a
            href="https://github.com/conorwaltersUno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-dark dark:text-paper-cream hover:text-accent transition-colors link-underline"
          >
            GitHub
          </a>
          .
        </motion.p>
      </motion.div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const CardWrapper = project.url ? 'a' : 'div'
  const cardProps = project.url
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <CardWrapper
      {...cardProps}
      className={`block p-6 lg:p-8 border border-border-visible dark:border-ink-medium/20
                 bg-surface-elevated dark:bg-ink-dark
                 transition-all duration-200 group
                 ${project.url ? 'hover:-translate-y-0.5 hover:shadow-lg hover:border-accent/30 cursor-pointer' : ''}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-heading-2 font-serif text-ink-black dark:text-paper-white
                       group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.url && (
          <ArrowUpRight
            size={20}
            className="text-ink-light dark:text-paper-mid group-hover:text-accent
                       transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                       transition-all flex-shrink-0 ml-4"
          />
        )}
      </div>

      {/* Description */}
      <p className="text-body text-ink-medium dark:text-paper-mid mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tech - Simple slash-separated */}
      <p className="text-caption text-ink-light dark:text-paper-mid/70">
        {project.tech.join(' / ')}
      </p>
    </CardWrapper>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, Folder } from 'lucide-react'

type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'mobile'

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  github?: string
  demo?: string
  category: ProjectCategory
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'East Down Yacht Club',
    description: 'Enterprise-grade sailing club management platform with membership and event systems.',
    longDescription: 'Comprehensive full-stack platform serving a sailing community with advanced membership management, dynamic event coordination, real-time race results tracking, and integrated news distribution. Features sophisticated email integration for personalized newsletters and direct member communication. Architected with hybrid cloud infrastructure leveraging AWS for scalability and Railway for optimized deployment.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Railway'],
    demo: 'https://edyc.nc-web-solutions.com/',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Strangford Lough Regattas',
    description: 'Dynamic content management system for sailing event coordination and documentation.',
    longDescription: 'Full-stack web application enabling real-time event management for the Strangford Lough sailing community. Features an intuitive admin dashboard for content control, document management system for event materials, and live updates for race schedules and results. Built with a modern cloud infrastructure combining AWS and Railway for reliable, scalable hosting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Railway'],
    demo: 'https://slrc.nc-web-solutions.com/',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'NC Web Solutions',
    description: 'Professional landing page showcasing collaborative web development services.',
    longDescription: 'Modern, responsive landing page designed to showcase web development projects and services. Built as a collaborative platform to highlight technical expertise and project portfolio. Optimized for performance and deployed using Railway cloud platform for fast, reliable hosting.',
    tech: ['React', 'Railway'],
    demo: 'https://nc-web-solutions.com/',
    category: 'frontend',
    featured: true
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern portfolio showcasing technical skills and professional experience.',
    longDescription: 'Professional portfolio website built with React and styled using Tailwind CSS, demonstrating proficiency in modern frontend development. Hosted on Firebase platform with optimized performance and responsive design across all devices. Features smooth animations and an intuitive user experience.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    demo: 'https://personal-cv-90a61.web.app/',
    category: 'frontend'
  },
]

const categories = [
  { id: 'all' as const, label: 'All Projects' },
  { id: 'fullstack' as const, label: 'Full Stack' },
  { id: 'frontend' as const, label: 'Frontend' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my technical skills and problem-solving abilities
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 }}
                className={`glass glass-hover rounded-2xl p-8 md:p-10 group hover:scale-[1.02] transition-all ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                } max-w-5xl`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-accent-cyan/10 rounded-xl group-hover:bg-accent-cyan/20 transition-colors">
                      <Folder className="text-accent-cyan" size={48} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-sm rounded-full border border-accent-cyan/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Projects Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              All <span className="text-gradient">Projects</span>
            </h3>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/30'
                      : 'glass glass-hover text-gray-400'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass glass-hover rounded-2xl p-6 group hover:scale-105 transition-all"
                >
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-lg">
                      <Folder className="text-accent-cyan" size={32} />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-accent-cyan text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-gray-500 text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

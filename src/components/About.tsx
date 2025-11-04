import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code2, Layers, Cloud, Users } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Projects Delivered', value: 5, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
]

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'GoLang', level: 75 },
    ]
  },
  {
    icon: Layers,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Material-UI', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'React Native', level: 85 },
    ]
  },
  {
    icon: Cloud,
    title: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 90 },
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 85 },
    ]
  },
  {
    icon: Users,
    title: 'Tools & More',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'CI/CD', level: 85 },
    ]
  },
]

function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about building exceptional digital experiences and solving complex technical challenges
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Stats Cards */}
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="glass glass-hover rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-accent-cyan font-semibold">Senior Software Engineer</span> with a first-class honours degree
                from Queen's University Belfast. With over 4 years of professional experience, I've delivered robust solutions across
                diverse industries including healthcare, fintech, and enterprise software.
              </p>
              <p>
                My expertise spans the full stack, from crafting intuitive user interfaces with <span className="text-accent-cyan">React</span> and
                <span className="text-accent-cyan"> TypeScript</span> to building scalable backend systems with <span className="text-accent-cyan">Node.js</span> and
                <span className="text-accent-cyan"> Java Spring Boot</span>. I'm particularly passionate about cloud architecture,
                microservices, and DevOps practices that enable teams to ship faster and more reliably.
              </p>
              <p>
                Beyond coding, I believe in continuous learning and knowledge sharing. I stay current with emerging technologies
                and enjoy mentoring junior developers to help them grow their skills and confidence.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technical <span className="text-gradient">Expertise</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + categoryIndex * 0.1 }}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent-cyan/10 rounded-lg">
                      <category.icon className="text-accent-cyan" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-sm text-accent-cyan font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-primary-light rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

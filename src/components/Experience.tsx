import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    company: 'Unosquare',
    role: 'Software Engineer',
    period: 'November 2021 - Present',
    duration: '3+ years',
    description: 'Leading full-stack development initiatives and architectural decisions for enterprise clients.',
    achievements: [
      'Working on Software as a Medical Device (SaMD) team using cutting-edge technology to reduce deployment times for all software teams across the company by monitoring software releases and identifying non-compliance issues before they become problems',
      'Architected and delivered microservices platform serving 1000+ daily active users',
      'Reduced deployment time by 60% through CI/CD pipeline optimization with Jenkins and GitHub Actions',
      'Led team of 4 engineers in developing React Native mobile application',
      'Mentored 2 junior developers resulting in their promotion to mid-level roles',
    ],
    tech: ['TypeScript', 'React', 'React Native', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'Jenkins', 'GitHub Actions']
  },
  {
    company: 'Payroc',
    role: 'Software Engineer I',
    period: 'July 2021 - November 2021',
    duration: '5 months',
    description: 'Contributed to payment processing systems and fintech solutions.',
    achievements: [
      'Developed RESTful APIs for payment processing with 99.9% uptime',
      'Implemented automated testing suite improving code coverage to 85%',
      'Collaborated with cross-functional teams to deliver features on schedule',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Jenkins']
  },
  {
    company: 'Philips',
    role: 'Associate Software Engineer',
    period: 'July 2019 - July 2020',
    duration: '1 year',
    description: 'Contributed to healthcare technology solutions during industrial placement.',
    achievements: [
      'Developed critical features for patient monitoring systems',
      'Improved application performance by 30% through code optimization',
      'Participated in Agile ceremonies and contributed to sprint planning',
    ],
    tech: ['Java', 'JavaScript', 'REST APIs', 'Git']
  },
  {
    company: 'Queen\'s University Belfast',
    role: 'Software Engineering Student',
    period: '2017 - 2021',
    duration: '4 years',
    description: 'First-class Honours degree in Software Engineering.',
    achievements: [
      'Graduated with First-class Honours',
      'Completed advanced modules in distributed systems and cloud computing',
      'Developed multiple full-stack projects showcasing technical versatility',
    ],
    tech: ['Java', 'Python', 'JavaScript', 'React', 'Node.js']
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-primary-light/30">
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
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My career journey and the impact I've made along the way
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple hidden sm:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%] md:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50 hidden sm:block">
                  <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className="glass glass-hover rounded-2xl p-6 md:p-8 ml-16 sm:ml-20 md:ml-0 group hover:scale-[1.02] transition-all">
                  {/* Icon */}
                  <div className={`inline-flex p-3 bg-accent-cyan/10 rounded-xl mb-4 ${index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'}`}>
                    <Briefcase className="text-accent-cyan" size={24} />
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-accent-cyan text-sm mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{exp.duration}</span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-xl text-accent-cyan mb-3">{exp.company}</h4>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded-full border border-accent-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

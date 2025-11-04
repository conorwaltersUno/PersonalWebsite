import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cwalters01@qub.ac.uk',
    href: 'mailto:cwalters01@qub.ac.uk',
    color: 'from-accent-cyan to-accent-blue'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Conor Walters',
    href: 'https://www.linkedin.com/in/conor-walters-99b49a173/',
    color: 'from-accent-blue to-accent-purple'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@conorwaltersUno',
    href: 'https://github.com/conorwaltersUno',
    color: 'from-accent-purple to-accent-cyan'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Northern Ireland (Flexible)',
    href: null,
    color: 'from-accent-cyan to-accent-blue'
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology
            </motion.p>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8 md:p-12 mb-12 text-center relative overflow-hidden group"
          >
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you're looking for a senior engineer to join your team or
                want to collaborate on an exciting project, I'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:cwalters01@qub.ac.uk"
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-cyan/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Get In Touch
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </a>

                <div className="flex gap-3">
                  <a
                    href="/Conor-Walters-Resume.pages"
                    download
                    className="group/btn px-6 py-4 glass glass-hover rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Resume (.pages)
                  </a>
                  <a
                    href="/Conor-Walters-Resume.docx"
                    download
                    className="group/btn px-6 py-4 glass glass-hover rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Resume (.docx)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass glass-hover rounded-2xl p-6 flex items-start gap-4 group hover:scale-105 transition-all"
                  >
                    <div className={`p-3 bg-gradient-to-br ${method.color} bg-opacity-10 rounded-xl group-hover:scale-110 transition-transform`}>
                      <method.icon className="text-accent-cyan" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1 group-hover:text-accent-cyan transition-colors">
                        {method.label}
                      </h4>
                      <p className="text-gray-400 text-sm break-all">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-6 flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${method.color} bg-opacity-10 rounded-xl`}>
                      <method.icon className="text-accent-cyan" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">
                        {method.label}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">
              Response time: Usually within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

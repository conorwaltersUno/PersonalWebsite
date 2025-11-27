import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  number: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'projects', label: 'Work', number: '03' },
  { id: 'contact', label: 'Contact', number: '04' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/conorwaltersUno', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/conor-walters-99b49a173/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:cwalters01@qub.ac.uk', label: 'Email' },
]

interface NavigationProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)

      // Determine active section
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
      else if (scrollTop < 100) setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Vertical Edge */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="fixed left-0 top-0 bottom-0 w-[80px] z-50 hidden lg:flex flex-col
                   bg-paper-white dark:bg-ink-black border-r border-border-subtle dark:border-ink-medium/20"
      >
        {/* Scroll Progress Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-paper-warm dark:bg-ink-dark">
          <motion.div
            className="w-full bg-accent"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Logo / Home */}
        <button
          onClick={() => scrollToSection('home')}
          className="h-20 flex items-center justify-center border-b border-border-subtle dark:border-ink-medium/20
                     hover:bg-paper-cream dark:hover:bg-ink-dark transition-colors"
          aria-label="Go to top"
        >
          <span className="font-serif text-heading-3 text-ink-black dark:text-paper-white">
            CW
          </span>
        </button>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center py-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative py-4 px-4 text-left transition-colors
                         ${activeSection === item.id
                           ? 'text-accent'
                           : 'text-ink-light dark:text-paper-mid hover:text-ink-dark dark:hover:text-paper-white'
                         }`}
              aria-label={item.label}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Number */}
              <span className="block text-micro font-mono tracking-wider mb-1
                             text-ink-light/50 dark:text-paper-mid/50
                             group-hover:text-ink-medium dark:group-hover:text-paper-cream/70">
                {item.number}
              </span>

              {/* Label - rotated for vertical reading */}
              <span className="block text-caption font-medium uppercase tracking-[0.15em]
                             writing-vertical rotate-180 origin-center
                             h-[80px] flex items-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Section - Theme Toggle & Social */}
        <div className="border-t border-border-subtle dark:border-ink-medium/20">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full h-14 flex items-center justify-center
                       text-ink-light dark:text-paper-mid hover:text-ink-dark dark:hover:text-paper-white
                       hover:bg-paper-cream dark:hover:bg-ink-dark transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Social Links */}
          <div className="flex flex-col items-center py-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-light dark:text-paper-mid hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Bar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden
                   bg-paper-white/95 dark:bg-ink-black/95 backdrop-blur-sm
                   border-t border-border-subtle dark:border-ink-medium/20 safe-bottom"
      >
        <div className="flex items-center justify-around h-16 px-4">
          {/* Nav dots */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors
                         ${activeSection === item.id
                           ? 'text-accent'
                           : 'text-ink-light dark:text-paper-mid'
                         }`}
              aria-label={item.label}
            >
              <span className="text-micro font-mono">{item.number}</span>
              <span className={`w-1.5 h-1.5 rounded-full transition-colors
                              ${activeSection === item.id ? 'bg-accent' : 'bg-ink-light/30 dark:bg-paper-mid/30'}`} />
            </button>
          ))}

          {/* Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-ink-dark dark:text-paper-white"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink-black/40 dark:bg-black/60 z-50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 lg:hidden
                         bg-paper-white dark:bg-ink-black border-l border-border-subtle dark:border-ink-medium/20"
            >
              <div className="flex flex-col h-full p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <span className="font-serif text-heading-2 text-ink-black dark:text-paper-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-ink-dark dark:text-paper-white hover:text-accent transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 mb-12">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-baseline gap-4 py-3 text-left transition-colors
                                 ${activeSection === item.id
                                   ? 'text-accent'
                                   : 'text-ink-dark dark:text-paper-white hover:text-accent'
                                 }`}
                    >
                      <span className="text-caption text-ink-light dark:text-paper-mid font-mono">
                        {item.number}
                      </span>
                      <span className="text-heading-2 font-serif">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 py-3 text-ink-medium dark:text-paper-mid
                             hover:text-ink-dark dark:hover:text-paper-white transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-body-sm">
                    {isDark ? 'Light mode' : 'Dark mode'}
                  </span>
                </motion.button>

                {/* Social Links */}
                <div className="flex gap-6 mt-auto pt-8 border-t border-border-subtle dark:border-ink-medium/20">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-ink-light dark:text-paper-mid hover:text-accent transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

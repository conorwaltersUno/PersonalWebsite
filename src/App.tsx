import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Default to dark mode
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }

    setIsLoaded(true)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-paper-white dark:bg-ink-black transition-colors duration-300"
    >
      {/* Subtle grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer - Minimal */}
      <footer className="main-content border-t border-border-subtle dark:border-ink-medium/20">
        <div className="px-6 lg:px-0 lg:pl-[120px] lg:pr-[clamp(1.5rem,5vw,6rem)] py-12">
          <div className="max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-caption text-ink-light dark:text-paper-mid/70">
              © {new Date().getFullYear()} Conor Walters
            </p>
            <p className="text-caption text-ink-light/50 dark:text-paper-mid/50">
              Built with intention, not templates.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App

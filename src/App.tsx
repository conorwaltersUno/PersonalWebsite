import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background with animated gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary via-primary-dark to-primary animate-gradient-shift"
           style={{ backgroundSize: '400% 400%' }}>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="container-custom text-center text-sm text-gray-400">
          <p>Built with React 18, TypeScript, Tailwind CSS & Framer Motion</p>
          <p className="mt-2">© {new Date().getFullYear()} Conor Walters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

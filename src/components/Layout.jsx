import { Link, useLocation } from 'react-router-dom'
import AIAssistant from './AIAssistant'
import AnimatedBots from './AnimatedBots'

function Layout({ children }) {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated Bots Background */}
      <AnimatedBots />
      
      {/* AI Assistant */}
      <AIAssistant />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-primary-200 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white text-xl font-bold">🌍</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                  Africa AI Stack
                </h1>
                <p className="text-xs text-primary-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                  Tracking Africa's AI Ecosystem
                </p>
              </div>
            </Link>
            
            <nav className="flex space-x-1" id="graveyard">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-primary-700 text-white shadow-lg scale-105' 
                    : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/graveyard"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/graveyard') 
                    ? 'bg-primary-700 text-white shadow-lg scale-105' 
                    : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                }`}
              >
                Graveyard
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/about') 
                    ? 'bg-primary-700 text-white shadow-lg scale-105' 
                    : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-primary-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-600">
                © 2026 Africa AI Stack. Documenting the AI revolution across Africa.
              </p>
              <p className="text-xs text-primary-500 mt-1">
                Built with care for the African tech ecosystem
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/fyunusa/africa-ai-stack/issues/new" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-900 transition-colors">
                Submit Project
              </a>
              <a href="https://github.com/fyunusa/africa-ai-stack" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-900 transition-colors">
                GitHub
              </a>
              <a href="mailto:fyunusa.tech@gmail.com" className="text-sm text-primary-600 hover:text-primary-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

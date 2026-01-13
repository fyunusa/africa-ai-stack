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
      <header className="bg-black/95 backdrop-blur-xl border-b-2 border-purple-500/50 sticky top-0 z-40 transition-all duration-300 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <span className="relative text-white text-xl font-bold">🌍</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:from-cyan-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all font-mono tracking-tight">
                  AFRICA_AI_STACK
                </h1>
                <p className="text-xs text-purple-400 flex items-center font-mono">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  {'>'} LIVE_TRACKING
                </p>
              </div>
            </Link>
            
            <nav className="flex space-x-2" id="graveyard">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-200 border-2 ${
                  isActive('/') 
                    ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/50 scale-105' 
                    : 'text-purple-400 border-purple-500/30 hover:text-purple-300 hover:bg-purple-950/50 hover:border-purple-400'
                }`}
              >
                {'>'} PROJECTS
              </Link>
              <Link
                to="/graveyard"
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-200 border-2 ${
                  isActive('/graveyard') 
                    ? 'bg-red-600 text-white border-red-400 shadow-lg shadow-red-500/50 scale-105' 
                    : 'text-red-400 border-red-500/30 hover:text-red-300 hover:bg-red-950/50 hover:border-red-400'
                }`}
              >
                {'<'} GRAVEYARD
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-200 border-2 ${
                  isActive('/about') 
                    ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/50 scale-105' 
                    : 'text-cyan-400 border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400'
                }`}
              >
                [?] ABOUT
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
      <footer className="bg-black/95 backdrop-blur-xl border-t-2 border-purple-500/50 mt-16 relative overflow-hidden">
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.3) 2px, rgba(139, 92, 246, 0.3) 4px)',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-purple-300 font-mono mb-2">
                <span className="text-purple-500">©</span> 2026 AFRICA_AI_STACK <span className="text-purple-600">|</span> <span className="text-cyan-400">TRACKING_AI_REVOLUTION</span>
              </p>
              <p className="text-xs text-gray-500 font-mono">
                <span className="text-green-400">[✓]</span> Built for the African tech ecosystem
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-mono">SYSTEM_OPERATIONAL</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/fyunusa/africa-ai-stack/issues/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center space-x-2 px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg text-sm text-purple-400 hover:text-purple-300 hover:border-purple-400 transition-all font-mono font-bold hover:bg-purple-950/30"
                >
                  <span className="text-pink-400 group-hover:text-pink-300">{'+'}</span>
                  <span>SUBMIT_PROJECT</span>
                </a>
                <a 
                  href="https://github.com/fyunusa/africa-ai-stack" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center space-x-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all font-mono font-bold hover:bg-cyan-950/30"
                >
                  <span className="text-cyan-400 group-hover:text-cyan-300">{'<>'}</span>
                  <span>GITHUB</span>
                </a>
              </div>
              <a 
                href="mailto:fyunusa.tech@gmail.com" 
                className="group flex items-center justify-center space-x-2 px-4 py-2 bg-slate-900/50 border border-green-500/30 rounded-lg text-sm text-green-400 hover:text-green-300 hover:border-green-400 transition-all font-mono font-bold hover:bg-green-950/30"
              >
                <span className="text-green-400 group-hover:text-green-300">{'@'}</span>
                <span>CONTACT</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

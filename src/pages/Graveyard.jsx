import { useState, useEffect } from 'react'
import projectsData from '../data/projects.json'
import CasketBots from '../components/CasketBots'

function Graveyard() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [glitchText, setGlitchText] = useState('THE GRAVEYARD')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Glitch effect on title
    const glitchInterval = setInterval(() => {
      const glitchChars = '█▓▒░ⓉⒽⒺⒼⓇⒶⓋⒺⓎⒶⓇⒹ'
      const original = 'THE GRAVEYARD'
      let glitched = ''
      for (let i = 0; i < original.length; i++) {
        glitched += Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : original[i]
      }
      setGlitchText(glitched)
      setTimeout(() => setGlitchText(original), 100)
    }, 3000)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(glitchInterval)
    }
  }, [])
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }
  
  const calculateLifespan = (founded, defunct) => {
    const start = new Date(founded)
    const end = new Date(defunct)
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years > 0) {
      return `${years}y ${remainingMonths}m`
    }
    return `${months}m`
  }
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Casket-Carrying Bots */}
      <CasketBots />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-flow 20s linear infinite'
        }} />
      </div>
      
      {/* Radial gradient following cursor */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.4), transparent 60%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Cyberpunk Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 blur-3xl bg-purple-600 opacity-50 animate-pulse"></div>
            <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 relative tracking-wider" style={{ fontFamily: 'monospace' }}>
              {glitchText}
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
          </div>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8 font-light">
            <span className="text-red-400 font-bold">[SYSTEM_LOG]</span> Analyzing terminated AI projects... 
            <span className="typing-cursor">▋</span>
          </p>
          
          {/* Holographic Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'TERMINATED', value: projectsData.graveyard.length, color: 'from-red-500 to-pink-600', icon: '⚠️' },
              { label: 'CAPITAL_LOST', value: `$${projectsData.graveyard.reduce((sum, p) => sum + parseFloat(p.fundingRaised.replace(/[$K]/g, '')), 0)}K`, color: 'from-purple-500 to-indigo-600', icon: '💸' },
              { label: 'IMPACTED', value: `${projectsData.graveyard.reduce((sum, p) => sum + p.team, 0)}+`, color: 'from-blue-500 to-cyan-600', icon: '👥' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative group"
                style={{ animation: `float 3s ease-in-out infinite ${i * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-xl p-6 group-hover:border-purple-400 transition-all">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-purple-300 font-mono tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Memorial Cards - Cyberpunk Style */}
        <div className="space-y-6">
          {projectsData.graveyard.map((project, index) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
              style={{ 
                animation: `slide-up 0.6s ease-out ${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl p-6 group-hover:border-red-400 transition-all overflow-hidden">
                {/* Scanline effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                  animation: 'scanline 8s linear infinite'
                }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">💀</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {project.name}
                        </h3>
                        <div className="px-3 py-1 bg-red-500/20 border border-red-500 rounded-full">
                          <span className="text-xs font-mono text-red-400 uppercase tracking-wider">DEFUNCT</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm text-purple-300 mb-3 font-mono">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                          {project.country}
                        </span>
                        <span>|</span>
                        <span>{project.category}</span>
                        <span>|</span>
                        <span className="text-red-400">
                          ⏳ {calculateLifespan(project.founded, project.defunct)}
                        </span>
                      </div>
                      
                      <p className="text-purple-200 mb-4 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-purple-500/30">
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-xs text-purple-400 mb-1 font-mono">TIMELINE</div>
                      <div className="text-sm font-bold text-white">
                        {formatDate(project.founded)} → {formatDate(project.defunct)}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-xs text-purple-400 mb-1 font-mono">CAPITAL</div>
                      <div className="text-sm font-bold text-yellow-400">{project.fundingRaised}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-xs text-purple-400 mb-1 font-mono">TEAM_SIZE</div>
                      <div className="text-sm font-bold text-cyan-400">{project.team} devs</div>
                    </div>
                  </div>
                  
                  {/* Failure Analysis */}
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-500/50 p-4">
                      <div className="absolute top-0 right-0 text-6xl opacity-10">⚠️</div>
                      <div className="relative">
                        <div className="flex items-center mb-2">
                          <span className="text-red-400 font-mono text-xs tracking-wider uppercase">ERROR_LOG:</span>
                        </div>
                        <p className="text-red-200 text-sm leading-relaxed">{project.reasonForClosure}</p>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/50 p-4">
                      <div className="absolute top-0 right-0 text-6xl opacity-10">💡</div>
                      <div className="relative">
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-400 font-mono text-xs tracking-wider uppercase">LESSON_EXTRACTED:</span>
                        </div>
                        <p className="text-yellow-200 text-sm leading-relaxed">{project.lessonLearned}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Futuristic CTA */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-purple-500 rounded-2xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(139, 92, 246, 0.1) 20px, rgba(139, 92, 246, 0.1) 40px)'
            }}></div>
            
            <div className="relative">
              <div className="inline-block mb-6">
                <div className="text-6xl mb-4 animate-pulse">⚡</div>
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4 font-mono">
                  SHARE_YOUR_STORY();
                </h2>
              </div>
              <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your failure is a <span className="text-yellow-400 font-bold">lesson</span> for the ecosystem. 
                Document your journey and help others avoid the same pitfalls.
              </p>
              <a 
                href="https://github.com/fyunusa/africa-ai-stack/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center font-mono">
                  {'> SUBMIT_MEMORIAL'}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes grid-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}

export default Graveyard

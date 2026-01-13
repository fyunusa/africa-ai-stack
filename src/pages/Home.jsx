import { useState, useMemo, useEffect, useRef } from 'react'
import projectsData from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'
import FilterBar from '../components/FilterBar'
import ParticleBackground from '../components/ParticleBackground'
import GuidedTour from '../components/GuidedTour'

function Home() {
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    category: 'all',
    openSource: false,
    seekingFunding: false,
  })
  const [showTour, setShowTour] = useState(true)
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const canvasRef = useRef(null)
  
  const filteredProjects = useMemo(() => {
    return projectsData.projects.filter((project) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          project.name.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(searchLower)) ||
          project.category.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }
      
      // Status filter
      if (filters.status !== 'all' && project.status !== filters.status) {
        return false
      }
      
      // Category filter
      if (filters.category !== 'all' && project.category !== filters.category) {
        return false
      }
      
      // Open source filter
      if (filters.openSource && !project.openSource) {
        return false
      }
      
      // Seeking funding filter
      if (filters.seekingFunding && !project.lookingForFunding) {
        return false
      }
      
      return true
    })
  }, [filters])
  
  const stats = useMemo(() => {
    return {
      total: projectsData.projects.length,
      healthy: projectsData.projects.filter((p) => p.status === 'healthy').length,
      alive: projectsData.projects.filter((p) => p.status === 'alive').length,
      suffering: projectsData.projects.filter((p) => p.status === 'suffering').length,
    }
  }, [])

  // Terminal typing effect
  useEffect(() => {
    const fullText = '$ analyzing african_ai_ecosystem --scan-depth=continental --mode=real-time'
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  // Neural network canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes = []
    const numNodes = 50

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 92, 246, 0.8)'
        ctx.fill()

        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Neural Network Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-scanline" style={{ zIndex: 1 }}></div>
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{ zIndex: 1 }}>
        <div className="matrix-rain"></div>
      </div>

      <div className="relative z-10">
        {/* Guided Tour */}
        {showTour && <GuidedTour onComplete={() => setShowTour(false)} />}
        
        {/* Hero Section - Terminal Style */}
        <div className="relative min-h-screen flex items-center justify-center" id="hero">
          {/* Terminal Window */}
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="relative">
              {/* Terminal Header */}
              <div className="bg-slate-900/90 backdrop-blur-xl border-2 border-purple-500/50 rounded-t-2xl p-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-purple-300 text-sm font-mono">africa-ai-stack@terminal</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="bg-black/95 backdrop-blur-xl border-x-2 border-b-2 border-purple-500/50 rounded-b-2xl p-8 shadow-2xl">
                {/* Terminal Command */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-400 font-mono">➜</span>
                    <span className="text-cyan-400 font-mono">~</span>
                  </div>
                  <div className="font-mono text-purple-200 mb-4">
                    {terminalText}
                    {showCursor && <span className="text-purple-400">▋</span>}
                  </div>
                  
                  {terminalText.length > 50 && (
                    <div className="space-y-2 text-sm font-mono slide-up-animation">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-400">[✓]</span>
                        <span className="text-gray-400">Connecting to African AI nodes...</span>
                        <span className="text-green-400 ml-auto">COMPLETE</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-400">[✓]</span>
                        <span className="text-gray-400">Analyzing {stats.total} active projects...</span>
                        <span className="text-green-400 ml-auto">COMPLETE</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-400">[i]</span>
                        <span className="text-gray-400">Found {projectsData.graveyard.length} archived cases...</span>
                        <span className="text-yellow-400 ml-auto">LOGGED</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-400">[→]</span>
                        <span className="text-gray-400">Streaming real-time updates...</span>
                        <span className="text-blue-400 ml-auto flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></span>
                          LIVE
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Title */}
                <div className="text-center mb-8">
                  <h1 className="text-7xl md:text-8xl font-black mb-6 relative">
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-2xl opacity-50 scale-110">
                      AFRICA AI STACK
                    </span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-mono tracking-tighter">
                      AFRICA AI STACK
                    </span>
                  </h1>
                  
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
                    <span className="text-purple-300 text-sm font-mono px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded">
                      REAL-TIME CONTINENTAL AI TRACKER
                    </span>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
                  </div>
                  
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 font-mono leading-relaxed">
                    <span className="text-purple-400">&gt;</span> Real-time intelligence on African AI innovation. 
                    <span className="text-cyan-400"> Tracking</span> success stories, 
                    <span className="text-pink-400"> analyzing</span> failures, 
                    <span className="text-green-400"> learning</span> from every data point.
                  </p>

                  {/* Data Metrics - Holographic Style */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                      <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 border border-purple-500/50 rounded-lg hover:border-purple-400 transition-all">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400 font-mono">{stats.total}</div>
                        <div className="text-xs text-purple-400 uppercase tracking-wider font-mono mt-1">Total Projects</div>
                        <div className="text-xs text-gray-600 font-mono mt-2">[ TRACKED ]</div>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                      <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 border border-green-500/50 rounded-lg hover:border-green-400 transition-all">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-400 font-mono">{stats.healthy}</div>
                        <div className="text-xs text-green-400 uppercase tracking-wider font-mono mt-1">Healthy</div>
                        <div className="text-xs text-gray-600 font-mono mt-2">[ THRIVING ]</div>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                      <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 border border-yellow-500/50 rounded-lg hover:border-yellow-400 transition-all">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-400 font-mono">{stats.alive}</div>
                        <div className="text-xs text-yellow-400 uppercase tracking-wider font-mono mt-1">Active</div>
                        <div className="text-xs text-gray-600 font-mono mt-2">[ STABLE ]</div>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                      <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 border border-red-500/50 rounded-lg hover:border-red-400 transition-all">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-pink-400 font-mono">{projectsData.graveyard.length}</div>
                        <div className="text-xs text-red-400 uppercase tracking-wider font-mono mt-1">Archived</div>
                        <div className="text-xs text-gray-600 font-mono mt-2">[ LESSONS ]</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => document.getElementById('filters').scrollIntoView({ behavior: 'smooth' })}
                      className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg overflow-hidden hover:scale-105 transition-all font-mono font-bold text-white"
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">{'>'}</span>
                        EXPLORE_DATABASE
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <button
                      onClick={() => window.location.href = '/graveyard'}
                      className="px-8 py-4 bg-slate-900/80 border-2 border-red-500/50 rounded-lg hover:border-red-400 hover:bg-red-950/30 transition-all font-mono font-bold text-red-400 hover:text-red-300"
                    >
                      {'<'} ACCESS_GRAVEYARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters Section */}
          <div id="filters" className="mb-12">
            <div className="bg-slate-900/50 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-purple-400 font-mono">&gt;</span>
                <span className="text-purple-300 font-mono text-sm">FILTER_PARAMETERS</span>
              </div>
              <FilterBar filters={filters} setFilters={setFilters} stats={stats} />
            </div>
          </div>
          
          {/* Results Status Bar */}
          <div className="mb-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  QUERY_RESULTS:{' '}
                  <span className="text-purple-400 font-bold">{filteredProjects.length}</span>
                  <span className="text-gray-600"> / </span>
                  <span className="text-gray-500">{projectsData.projects.length}</span>
                </span>
              </div>
              {filteredProjects.length > 0 && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">STREAMING_LIVE</span>
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div id="projects">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="slide-up-animation"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-900/30 backdrop-blur-sm border-2 border-dashed border-purple-500/30 rounded-2xl">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-purple-100 mb-2 font-mono">
                  {'>'} NO_RESULTS_FOUND
                </h3>
                <p className="text-purple-400 mb-6 font-mono text-sm">QUERY returned 0 matches. Try adjusting parameters.</p>
                <button
                  onClick={() => setFilters({ search: '', status: 'all', category: 'all', openSource: false, seekingFunding: false })}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all font-mono font-bold hover:scale-105"
                >
                  {'<'} RESET_FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .animate-scanline {
          animation: scanline 8s linear infinite;
        }

        .matrix-rain {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 92, 246, 0.03) 2px,
            rgba(139, 92, 246, 0.03) 4px
          );
          animation: matrix-fall 20s linear infinite;
        }

        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-up-animation {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Glowing text effect */
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5); }
        }
      `}</style>
    </div>
  )
}

export default Home

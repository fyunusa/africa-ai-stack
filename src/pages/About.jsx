import { useState, useEffect } from 'react'

function About() {
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const statusItems = [
    {
      status: 'Healthy',
      color: 'emerald',
      icon: '💚',
      description: 'Well-funded, growing team, clear traction, and sustainable operations. These projects are thriving and executing their vision.',
      gradient: 'from-emerald-400 to-green-600'
    },
    {
      status: 'Alive',
      color: 'blue',
      icon: '💙',
      description: 'Active and shipping, but may be early-stage, bootstrapped, or facing typical startup challenges. Still pushing forward.',
      gradient: 'from-blue-400 to-indigo-600'
    },
    {
      status: 'Suffering',
      color: 'amber',
      icon: '⚠️',
      description: 'Struggling with funding, team attrition, or technical challenges. May need support or be at risk of shutting down.',
      gradient: 'from-amber-400 to-orange-600'
    },
    {
      status: 'Defunct',
      color: 'gray',
      icon: '🪦',
      description: 'Project has shut down. We document the story and lessons learned in the Graveyard.',
      gradient: 'from-gray-400 to-slate-600'
    }
  ]
  
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Hero Section with 3D Effect */}
        <div className="text-center mb-20 relative">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-900 via-blue-900 to-primary-900 mb-4 relative slide-up-animation tracking-tight">
                Africa AI Stack
              </h1>
            </div>
          </div>
          <p className="text-2xl text-primary-600 max-w-3xl mx-auto slide-up-animation font-light" style={{ animationDelay: '0.2s' }}>
            Documenting and celebrating the AI revolution happening across Africa
          </p>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            {['🚀 Active', '🪦 Graveyard', '🔬 Research'].map((item, i) => (
              <div 
                key={i}
                className="relative group cursor-pointer"
                style={{ 
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-primary-200 shadow-xl group-hover:scale-110 transition-transform">
                  <div className="text-3xl mb-2">{item.split(' ')[0]}</div>
                  <div className="text-sm font-semibold text-primary-700">{item.split(' ')[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission - Morphing Cards */}
        <div className="mb-24 relative">
          <div className="absolute -left-20 top-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative glassmorphism rounded-3xl p-12 border-2 border-primary-200 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-primary-900 mb-6 flex items-center">
                <span className="w-2 h-12 bg-gradient-to-b from-primary-600 to-blue-600 mr-4 rounded-full"></span>
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-primary-700 leading-relaxed">
                <p className="relative pl-6 border-l-4 border-primary-300 hover:border-primary-600 transition-colors">
                  Africa AI Stack was born from a simple question: <span className="font-semibold text-primary-900">What is Africa actually building in AI?</span> When our CEO traveled from South Korea to Africa to understand the AI ecosystem, he discovered a vibrant but undocumented landscape of innovation.
                </p>
                <p className="relative pl-6 border-l-4 border-blue-300 hover:border-blue-600 transition-colors">
                  We're building a living directory that tracks not just the successes, but also the struggles and failures. Every project tells a story—whether it's thriving, seeking support, or has shut down—and these stories collectively paint a picture of Africa's AI journey.
                </p>
                <p className="relative pl-6 border-l-4 border-emerald-300 hover:border-emerald-600 transition-colors">
                  This isn't just a database. It's a <span className="font-semibold text-primary-900">knowledge base</span> for founders, investors, researchers, and anyone interested in understanding the real state of AI development in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Track - Hexagon Grid */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">What We Track</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🚀', title: 'Active Projects', desc: 'Startups and initiatives building AI solutions across healthcare, agriculture, education, and more. We track their funding, team size, and health status.', color: 'from-blue-500 to-indigo-600' },
              { icon: '🪦', title: 'The Graveyard', desc: 'Projects that didn\'t make it. We document why they failed and what lessons the ecosystem can learn from their experience.', color: 'from-gray-500 to-slate-600' },
              { icon: '💰', title: 'Funding Landscape', desc: 'Who\'s raising, who\'s investing, and where the money is flowing in African AI.', color: 'from-emerald-500 to-green-600' },
              { icon: '🔬', title: 'Research & Open Source', desc: 'Academic projects, open-source initiatives, and community-driven efforts building AI tools for Africa.', color: 'from-purple-500 to-pink-600' }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveSection(i)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" style={{ background: `linear-gradient(135deg, ${item.color})` }}></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-primary-200 hover:border-primary-400 transition-all hover:scale-105 hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-primary-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Status Guide - Interactive Cards */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">Project Status Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statusItems.map((item, i) => (
              <div
                key={i}
                className="group relative cursor-pointer"
                style={{ 
                  animation: `slide-up 0.6s ease-out`,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}></div>
                
                {/* Card */}
                <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-primary-200 group-hover:border-primary-400 transition-all group-hover:scale-105 group-hover:-rotate-1 shadow-lg">
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} text-4xl mb-3 group-hover:scale-110 transition-transform shadow-xl`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">{item.status}</h3>
                  </div>
                  <p className="text-sm text-primary-700 leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Get Involved - Futuristic CTA */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative glassmorphism rounded-3xl p-12 border-2 border-primary-300 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-block mb-6">
                <div className="text-6xl mb-4 animate-pulse">🚀</div>
                <h2 className="text-4xl font-bold text-primary-900 mb-4">Get Involved</h2>
              </div>
              <p className="text-xl text-primary-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Know a project we should track? Working on something yourself? Have corrections or updates? We're community-driven and welcome contributions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center">
                    Submit a Project
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group relative px-8 py-4 bg-white border-3 border-primary-600 text-primary-700 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Contribute on GitHub
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact - Floating */}
        <div className="text-center">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full border border-primary-300 hover:scale-105 transition-transform shadow-lg">
            <p className="text-primary-700">
              Questions? Reach out at{' '}
              <a 
                href="mailto:hello@africaaistack.com" 
                className="text-primary-900 hover:text-blue-600 font-bold transition-colors inline-flex items-center"
              >
                hello@africaaistack.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

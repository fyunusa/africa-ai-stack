import { useState, useMemo } from 'react'
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
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Guided Tour */}
      {showTour && <GuidedTour onComplete={() => setShowTour(false)} />}
      
      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl" id="hero">
        <ParticleBackground />
        <div className="relative text-center py-16 px-4">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-200 slide-up-animation">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary-700">AI-Powered Tracking</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-4 slide-up-animation" style={{ animationDelay: '0.1s' }}>
            Africa AI Stack
          </h1>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-8 slide-up-animation" style={{ animationDelay: '0.2s' }}>
            Track the pulse of African AI innovation. From thriving startups to valuable lessons learned.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8 slide-up-animation" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-primary-200 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary-700">{stats.total}</div>
              <div className="text-sm text-primary-600">Active Projects</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-primary-200 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-emerald-600">{stats.healthy}</div>
              <div className="text-sm text-primary-600">Healthy Startups</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-primary-200 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600">{projectsData.graveyard.length}</div>
              <div className="text-sm text-primary-600">Lessons Learned</div>
            </div>
          </div>
          
          <button
            onClick={() => document.getElementById('filters').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded-xl hover:bg-primary-800 transition-all hover:scale-105 font-medium shadow-xl slide-up-animation"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div id="filters">
        <FilterBar filters={filters} setFilters={setFilters} stats={stats} />
      </div>
      
      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-primary-600">
          Showing <span className="font-semibold text-primary-900">{filteredProjects.length}</span> of{' '}
          <span className="font-semibold text-primary-900">{projectsData.projects.length}</span> projects
        </p>
        {filteredProjects.length > 0 && (
          <div className="flex items-center space-x-2 text-xs text-primary-600">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
            <span>Live data</span>
          </div>
        )}
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
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">No projects found</h3>
            <p className="text-primary-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => setFilters({ search: '', status: 'all', category: 'all', openSource: false, seekingFunding: false })}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

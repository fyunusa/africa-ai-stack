import projectsData from '../data/projects.json'
import CasketBots from '../components/CasketBots'

function Graveyard() {
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
      return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
    }
    return `${months} month${months > 1 ? 's' : ''}`
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Casket-Carrying Bots */}
      <CasketBots />
      
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
          <span className="text-3xl">🪦</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          The Graveyard
        </h1>
        <p className="text-lg text-primary-600 max-w-2xl mx-auto">
          Learning from projects that didn't make it. Each story contains valuable lessons 
          for the African AI ecosystem. Failure is not the opposite of success—it's part of it.
        </p>
      </div>
      
      {/* Stats */}
      <div className="bg-white border border-primary-200 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-900">{projectsData.graveyard.length}</div>
            <div className="text-sm text-primary-600 mt-1">Documented Failures</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-900">
              ${projectsData.graveyard.reduce((sum, p) => sum + parseFloat(p.fundingRaised.replace(/[$K]/g, '')), 0)}K+
            </div>
            <div className="text-sm text-primary-600 mt-1">Total Capital Lost</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-900">
              {projectsData.graveyard.reduce((sum, p) => sum + p.team, 0)}+
            </div>
            <div className="text-sm text-primary-600 mt-1">People Impacted</div>
          </div>
        </div>
      </div>
      
      {/* Graveyard Cards */}
      <div className="space-y-6 relative z-10">
        {projectsData.graveyard.map((project) => (
          <div key={project.id} className="bg-white rounded-lg border border-primary-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-primary-900">{project.name}</h2>
                  <span className="status-badge status-dead">Defunct</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-primary-600 mb-3">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.country}
                  </span>
                  <span>•</span>
                  <span>{project.category}</span>
                  <span>•</span>
                  <span className="text-red-600 font-medium">
                    {formatDate(project.founded)} - {formatDate(project.defunct)}
                  </span>
                </div>
                <p className="text-primary-700 mb-4">{project.description}</p>
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-primary-100">
              <div>
                <div className="text-xs text-primary-600 mb-1">Lifespan</div>
                <div className="text-sm font-semibold text-primary-900">
                  {calculateLifespan(project.founded, project.defunct)}
                </div>
              </div>
              <div>
                <div className="text-xs text-primary-600 mb-1">Funding Raised</div>
                <div className="text-sm font-semibold text-primary-900">{project.fundingRaised}</div>
              </div>
              <div>
                <div className="text-xs text-primary-600 mb-1">Team Size</div>
                <div className="text-sm font-semibold text-primary-900">{project.team} people</div>
              </div>
            </div>
            
            {/* Reason for Closure */}
            <div className="bg-red-50 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-red-900 mb-1">Why It Failed</div>
                  <p className="text-sm text-red-800">{project.reasonForClosure}</p>
                </div>
              </div>
            </div>
            
            {/* Lesson Learned */}
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-amber-900 mb-1">Lesson Learned</div>
                  <p className="text-sm text-amber-800">{project.lessonLearned}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-12 bg-primary-700 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Have a Story to Share?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          If your project didn't make it, sharing your story can help others avoid the same pitfalls. 
          Your experience matters to the ecosystem.
        </p>
        <button className="px-6 py-3 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors font-medium">
          Submit Your Story
        </button>
      </div>
    </div>
  )
}

export default Graveyard

import { useParams, Link, useNavigate } from 'react-router-dom'
import projectsData from '../data/projects.json'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.projects.find((p) => p.id === id)
  
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Project not found</h2>
        <Link to="/" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    )
  }
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-emerald-100 text-emerald-800'
      case 'alive':
        return 'bg-blue-100 text-blue-800'
      case 'suffering':
        return 'bg-amber-100 text-amber-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-primary-600 hover:text-primary-900 mb-6 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      
      {/* Project Header */}
      <div className="bg-white rounded-lg border border-primary-200 p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-primary-900 mb-2">{project.name}</h1>
            <div className="flex items-center space-x-4 text-sm text-primary-600 mb-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {project.country}
              </span>
              <span>•</span>
              <span>Founded {formatDate(project.founded)}</span>
            </div>
          </div>
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)} mt-4 md:mt-0`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
        
        <p className="text-primary-700 text-lg mb-6">{project.description}</p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="text-xs text-primary-600 mb-1">Team Size</div>
            <div className="text-2xl font-bold text-primary-900">{project.team}</div>
          </div>
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="text-xs text-primary-600 mb-1">Funding Stage</div>
            <div className="text-lg font-bold text-primary-900">{project.fundingStage}</div>
          </div>
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="text-xs text-primary-600 mb-1">Category</div>
            <div className="text-sm font-bold text-primary-900">{project.category}</div>
          </div>
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="text-xs text-primary-600 mb-1">Last Update</div>
            <div className="text-sm font-bold text-primary-900">
              {new Date(project.lastUpdate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {project.openSource && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Open Source
            </span>
          )}
          {project.lookingForFunding && (
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
              Seeking Funding
            </span>
          )}
          {project.acquisition && (
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              {project.acquisition}
            </span>
          )}
        </div>
      </div>
      
      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Funding Info */}
        <div className="bg-white rounded-lg border border-primary-200 p-6">
          <h2 className="text-lg font-semibold text-primary-900 mb-4">Funding Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-primary-600">Stage</span>
              <span className="text-sm font-medium text-primary-900">{project.fundingStage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-primary-600">Amount Raised</span>
              <span className="text-sm font-medium text-primary-900">{project.fundingAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-primary-600">Status</span>
              <span className="text-sm font-medium text-primary-900">
                {project.lookingForFunding ? 'Actively Fundraising' : 'Not Fundraising'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="bg-white rounded-lg border border-primary-200 p-6">
          <h2 className="text-lg font-semibold text-primary-900 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-primary-100 text-primary-800 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Website Link */}
      {project.website && (
        <div className="bg-white rounded-lg border border-primary-200 p-6">
          <h2 className="text-lg font-semibold text-primary-900 mb-4">Links</h2>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visit Website
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail

import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'status-healthy'
      case 'alive':
        return 'status-alive'
      case 'suffering':
        return 'status-suffering'
      default:
        return 'status-alive'
    }
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }
  
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="card card-hover p-6 h-full relative overflow-hidden">
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary-900 mb-1 group-hover:text-primary-700 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-primary-600 mb-2 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {project.country}
              </p>
            </div>
            <span className={`status-badge ${getStatusColor(project.status)} ml-2 group-hover:scale-110 transition-transform`}>
              {project.status}
            </span>
          </div>
        
          <p className="text-sm text-primary-700 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-xs bg-primary-50/50 rounded-lg p-2">
              <span className="text-primary-600">Category</span>
              <span className="font-medium text-primary-900">{project.category}</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-primary-50/50 rounded-lg p-2">
              <span className="text-primary-600">Funding</span>
              <span className="font-medium text-primary-900">
                {project.fundingStage} {project.fundingAmount && `• ${project.fundingAmount}`}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs bg-primary-50/50 rounded-lg p-2">
              <span className="text-primary-600">Team Size</span>
              <span className="font-medium text-primary-900 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {project.team} people
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100/80 text-primary-800 text-xs rounded font-medium border border-primary-100 group-hover:border-primary-300 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-primary-600 text-xs font-medium">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-primary-100">
            <div className="flex items-center space-x-3 text-xs">
              {project.openSource && (
                <span className="flex items-center text-primary-600 group-hover:text-primary-800 transition-colors">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Open Source
                </span>
              )}
              {project.lookingForFunding && (
                <span className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                  <svg className="w-3.5 h-3.5 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Seeking Funds
                </span>
              )}
            </div>
            <span className="text-xs text-primary-500 flex items-center group-hover:text-primary-700 transition-colors">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {formatDate(project.founded)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

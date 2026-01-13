function FilterBar({ filters, setFilters, stats }) {
  const statuses = ['all', 'healthy', 'alive', 'suffering']
  const categories = [
    'all',
    'NLP & Language Models',
    'Enterprise AI',
    'Community & Education',
    'EdTech',
    'Conversational AI',
    'AgriTech',
    'HealthTech',
    'Logistics',
    'Conservation Tech'
  ]
  
  return (
    <div className="glassmorphism rounded-2xl p-6 mb-8 shadow-lg border-2 border-primary-200/50">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer border border-primary-100">
          <div className="text-3xl font-bold text-primary-900">{stats.total}</div>
          <div className="text-xs text-primary-600 mt-1">Total Projects</div>
        </div>
        <div className="text-center p-4 bg-emerald-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer border border-emerald-200">
          <div className="text-3xl font-bold text-emerald-900">{stats.healthy}</div>
          <div className="text-xs text-emerald-600 mt-1 flex items-center justify-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Healthy
          </div>
        </div>
        <div className="text-center p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer border border-blue-200">
          <div className="text-3xl font-bold text-blue-900">{stats.alive}</div>
          <div className="text-xs text-blue-600 mt-1 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 animate-pulse"></span>
            Active
          </div>
        </div>
        <div className="text-center p-4 bg-amber-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer border border-amber-200">
          <div className="text-3xl font-bold text-amber-900">{stats.suffering}</div>
          <div className="text-xs text-amber-600 mt-1 flex items-center justify-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Struggling
          </div>
        </div>
      </div>
      
      {/* Search */}
      <div className="mb-4 relative">
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search projects by name, description, or tech stack..."
          className="input pl-12 shadow-sm"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        {filters.search && (
          <button
            onClick={() => setFilters({ ...filters, search: '' })}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary-900 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setFilters({ ...filters, status })}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  filters.status === status
                    ? 'bg-primary-700 text-white shadow-lg'
                    : 'bg-white/80 text-primary-700 hover:bg-primary-100 border border-primary-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-900 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Category
          </label>
          <select
            className="input shadow-sm"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Quick Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setFilters({ ...filters, openSource: !filters.openSource })}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 flex items-center ${
            filters.openSource
              ? 'bg-primary-700 text-white shadow-lg'
              : 'bg-white/80 text-primary-700 border border-primary-300 hover:bg-primary-50'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Open Source Only
        </button>
        <button
          onClick={() => setFilters({ ...filters, seekingFunding: !filters.seekingFunding })}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 flex items-center ${
            filters.seekingFunding
              ? 'bg-primary-700 text-white shadow-lg'
              : 'bg-white/80 text-primary-700 border border-primary-300 hover:bg-primary-50'
          }`}
        >
          <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
          Seeking Funding
        </button>
      </div>
    </div>
  )
}

export default FilterBar

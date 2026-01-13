import { useState, useEffect } from 'react'

const tourSteps = [
  {
    target: 'hero',
    title: 'Welcome to Africa AI Stack! 🌍',
    description: 'Track AI innovation across Africa—from thriving startups to valuable lessons learned.',
    position: 'bottom'
  },
  {
    target: 'filters',
    title: 'Smart Filtering',
    description: 'Find exactly what you\'re looking for with powerful search and filters by status, category, or funding stage.',
    position: 'bottom'
  },
  {
    target: 'projects',
    title: 'Project Cards',
    description: 'Each card shows real-time status, team size, funding, and tech stack. Click for detailed insights.',
    position: 'top'
  },
  {
    target: 'graveyard',
    title: 'Learn from Failures',
    description: 'Visit the Graveyard to understand why projects failed—invaluable lessons for the ecosystem.',
    position: 'bottom'
  },
  {
    target: 'ai-assistant',
    title: 'Meet Ayo AI 🤖',
    description: 'Your 24/7 guide! Ask about projects, funding, or the ecosystem anytime.',
    position: 'left'
  }
]

function GuidedTour({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    // Show tour only on first visit
    const hasSeenTour = localStorage.getItem('hasSeenTour')
    if (hasSeenTour) {
      setIsVisible(false)
    }
  }, [])
  
  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }
  
  const handleSkip = () => {
    completeTour()
  }
  
  const completeTour = () => {
    localStorage.setItem('hasSeenTour', 'true')
    setIsVisible(false)
    if (onComplete) onComplete()
  }
  
  if (!isVisible) return null
  
  const step = tourSteps[currentStep]
  
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300" />
      
      {/* Tour Card */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 slide-up-animation">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md border-2 border-primary-300">
          {/* Progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'w-8 bg-primary-700' : 'w-1.5 bg-primary-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleSkip}
              className="text-xs text-primary-600 hover:text-primary-900 transition-colors"
            >
              Skip tour
            </button>
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-3">
              {step.title}
            </h2>
            <p className="text-primary-700 leading-relaxed">
              {step.description}
            </p>
          </div>
          
          {/* Icon/Visual */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl float-animation">
              {currentStep === 0 && '🌍'}
              {currentStep === 1 && '🔍'}
              {currentStep === 2 && '📊'}
              {currentStep === 3 && '🪦'}
              {currentStep === 4 && '🤖'}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary-600">
              Step {currentStep + 1} of {tourSteps.length}
            </span>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-all hover:scale-105 font-medium shadow-lg"
            >
              {currentStep < tourSteps.length - 1 ? 'Next' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuidedTour

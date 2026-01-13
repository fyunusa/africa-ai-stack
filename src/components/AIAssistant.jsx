import { useState, useEffect, useRef } from 'react'

const PREDEFINED_RESPONSES = {
  'hello': 'Hello! 👋 I\'m your AI guide for Africa AI Stack. I can help you discover projects, understand the ecosystem, or answer questions!',
  'hi': 'Hi there! 🌍 Welcome to Africa AI Stack. What would you like to explore today?',
  'help': 'I can help you with:\n• Finding AI projects by category or country\n• Understanding project statuses\n• Learning about the graveyard\n• Discovering funding opportunities\n\nWhat interests you?',
  'projects': 'We track amazing AI projects across Africa! You can filter by status (Healthy, Alive, Suffering) or category (NLP, HealthTech, AgriTech, etc.). What type of project are you looking for?',
  'funding': 'Many projects are actively seeking funding! Use the "Seeking Funding" filter on the main page to find opportunities. The average raise is between $150K - $4M.',
  'graveyard': 'The Graveyard documents projects that didn\'t make it. Each story contains valuable lessons. Common failure reasons: funding gaps, long government sales cycles, and product-market fit issues.',
  'healthy': 'Healthy projects are well-funded with growing teams and clear traction. We have projects like InstaDeep (acquired by BioNTech), Lelapa AI, and Amini in this category.',
  'countries': 'We track projects from South Africa, Nigeria, Kenya, Ghana, Tunisia, and more! South Africa and Nigeria lead in number of projects.',
}

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I\'m Ayo, your AI guide 🤖 Ask me anything about Africa\'s AI ecosystem!',
      time: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const messagesEndRef = useRef(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  useEffect(() => {
    // Show pulse every 10 seconds when closed
    if (!isOpen) {
      const interval = setInterval(() => {
        setShowPulse(true)
        setTimeout(() => setShowPulse(false), 3000)
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [isOpen])
  
  const findBestResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    for (const [key, response] of Object.entries(PREDEFINED_RESPONSES)) {
      if (lowerInput.includes(key)) {
        return response
      }
    }
    
    // Context-aware fallbacks
    if (lowerInput.includes('how') || lowerInput.includes('what')) {
      return 'Great question! While I have predefined knowledge about Africa AI Stack, I can tell you that we track 12+ active projects and 5 cautionary tales. Try asking about "projects", "funding", or "graveyard"!'
    }
    
    if (lowerInput.includes('thank')) {
      return 'You\'re welcome! Happy to help you explore Africa\'s AI ecosystem. 🚀'
    }
    
    return 'Interesting question! I\'m focused on helping you navigate Africa AI Stack. Try asking about "projects", "funding", "countries", or "graveyard". What would you like to know?'
  }
  
  const handleSend = () => {
    if (!inputValue.trim()) return
    
    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      time: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    
    // Simulate AI thinking and respond
    setTimeout(() => {
      const response = findBestResponse(inputValue)
      const botMessage = {
        type: 'bot',
        text: response,
        time: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }
  
  const quickActions = [
    { icon: '🔍', label: 'Find Projects', message: 'Show me interesting projects' },
    { icon: '💰', label: 'Funding', message: 'Tell me about funding' },
    { icon: '🪦', label: 'Graveyard', message: 'What is the graveyard?' },
    { icon: '❓', label: 'Help', message: 'help' },
  ]
  
  const handleQuickAction = (message) => {
    setInputValue(message)
    setTimeout(() => handleSend(), 100)
  }
  
  return (
    <>
      {/* Floating Button */}
      <button
        id="ai-assistant"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary-700 hover:bg-primary-800 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group ${
          showPulse && !isOpen ? 'animate-pulse' : ''
        }`}
        style={{
          animation: showPulse && !isOpen ? 'pulse-glow 2s infinite' : 'none'
        }}
      >
        {isOpen ? (
          <svg className="w-7 h-7 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            {showPulse && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            )}
          </div>
        )}
      </button>
      
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-primary-200 transition-all duration-300 z-50 flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary-700 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-xl">
                  🤖
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary-700"></span>
              </div>
              <div>
                <h3 className="font-semibold">Ayo AI</h3>
                <p className="text-xs text-primary-200">Your ecosystem guide</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary-25">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} slide-up-animation`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-primary-700 text-white rounded-br-none'
                    : 'bg-white text-primary-900 rounded-bl-none shadow-sm border border-primary-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-primary-200' : 'text-primary-500'}`}>
                  {message.time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-primary-900 p-3 rounded-2xl rounded-bl-none shadow-sm border border-primary-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 bg-primary-50 border-t border-primary-100">
            <p className="text-xs text-primary-600 mb-2">Quick actions:</p>
            <div className="grid grid-cols-4 gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.message)}
                  className="flex flex-col items-center p-2 bg-white hover:bg-primary-100 rounded-lg transition-colors text-center border border-primary-200"
                >
                  <span className="text-xl mb-1">{action.icon}</span>
                  <span className="text-xs text-primary-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Input */}
        <div className="p-4 border-t border-primary-200 bg-white rounded-b-2xl">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border border-primary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-primary-700 text-white rounded-full hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AIAssistant

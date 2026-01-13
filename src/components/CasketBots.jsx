import { useEffect, useState } from 'react'

function CasketBots() {
  const [processions, setProcessions] = useState([])
  
  useEffect(() => {
    // Create 2-3 funeral processions
    const initialProcessions = Array.from({ length: 2 }, (_, i) => ({
      id: i,
      y: 30 + (i * 35),
      delay: i * 15
    }))
    setProcessions(initialProcessions)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {processions.map((procession) => (
        <div
          key={procession.id}
          className="absolute flex items-center gap-2"
          style={{
            top: `${procession.y}%`,
            animation: `funeral-march 30s linear infinite`,
            animationDelay: `${procession.delay}s`
          }}
        >
          {/* Bot 1 - Front Left */}
          <div className="relative" style={{ marginTop: '10px' }}>
            <BotCarrier />
          </div>
          
          {/* Bot 2 - Front Right */}
          <div className="relative" style={{ marginTop: '10px' }}>
            <BotCarrier />
          </div>
          
          {/* Casket */}
          <svg width="80" height="40" viewBox="0 0 80 40" className="drop-shadow-2xl" style={{ margin: '0 -8px' }}>
            {/* Casket body */}
            <path
              d="M 10 15 L 20 10 L 60 10 L 70 15 L 70 30 L 60 35 L 20 35 L 10 30 Z"
              fill="#4B3621"
              stroke="#2D1810"
              strokeWidth="2"
            />
            
            {/* Casket lid details */}
            <path
              d="M 15 15 L 23 11 L 57 11 L 65 15 L 65 28 L 57 32 L 23 32 L 15 28 Z"
              fill="#5D4427"
              opacity="0.7"
            />
            
            {/* Cross */}
            <rect x="37" y="16" width="6" height="12" rx="1" fill="#8B7355" />
            <rect x="32" y="20" width="16" height="4" rx="1" fill="#8B7355" />
            
            {/* Handles */}
            <ellipse cx="15" cy="22" rx="3" ry="5" fill="#C9B037" opacity="0.8" />
            <ellipse cx="65" cy="22" rx="3" ry="5" fill="#C9B037" opacity="0.8" />
            
            {/* Flowers on top */}
            <circle cx="25" cy="8" r="3" fill="#E11D48" opacity="0.7" />
            <circle cx="30" cy="7" r="2.5" fill="#F43F5E" opacity="0.7" />
            <circle cx="50" cy="7" r="3" fill="#E11D48" opacity="0.7" />
            <circle cx="55" cy="8" r="2.5" fill="#F43F5E" opacity="0.7" />
          </svg>
          
          {/* Bot 3 - Back Left */}
          <div className="relative" style={{ marginTop: '10px' }}>
            <BotCarrier />
          </div>
          
          {/* Bot 4 - Back Right */}
          <div className="relative" style={{ marginTop: '10px' }}>
            <BotCarrier />
          </div>
        </div>
      ))}
      
      <style>{`
        @keyframes funeral-march {
          0% { left: -200px; }
          100% { left: calc(100vw + 200px); }
        }
      `}</style>
    </div>
  )
}

function BotCarrier() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" className="drop-shadow-lg">
      {/* Bot body - darker for somber mood */}
      <rect x="6" y="12" width="12" height="12" rx="2" fill="#475569" className="opacity-90" />
      
      {/* Bot head */}
      <circle cx="12" cy="7" r="4" fill="#475569" className="opacity-90" />
      
      {/* Eyes - sad/closed */}
      <path d="M 9 7 Q 10 8 11 7" stroke="#1e293b" strokeWidth="1" fill="none" />
      <path d="M 13 7 Q 14 8 15 7" stroke="#1e293b" strokeWidth="1" fill="none" />
      
      {/* Antenna */}
      <line x1="12" y1="3" x2="12" y2="1" stroke="#475569" strokeWidth="1" />
      <circle cx="12" cy="1" r="1" fill="#64748b" />
      
      {/* Arms - holding casket up */}
      <rect x="5" y="10" width="2" height="6" rx="1" fill="#475569" className="opacity-80">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-45 6 10"
          to="-40 6 10"
          dur="0.8s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </rect>
      <rect x="17" y="10" width="2" height="6" rx="1" fill="#475569" className="opacity-80">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="45 18 10"
          to="40 18 10"
          dur="0.8s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </rect>
      
      {/* Legs - walking slowly */}
      <rect x="8" y="24" width="2" height="6" rx="1" fill="#475569" className="opacity-80">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="-10 9 24"
          to="10 9 24"
          dur="1.2s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </rect>
      <rect x="14" y="24" width="2" height="6" rx="1" fill="#475569" className="opacity-80">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="10 15 24"
          to="-10 15 24"
          dur="1.2s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </rect>
      
      {/* Tear drop */}
      <ellipse cx="10" cy="9" rx="0.5" ry="1.5" fill="#60A5FA" opacity="0.6">
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  )
}

export default CasketBots

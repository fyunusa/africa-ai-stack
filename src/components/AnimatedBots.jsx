import { useEffect, useState } from 'react'

function AnimatedBots() {
  const [bots, setBots] = useState([])
  
  useEffect(() => {
    // Create 5 bots with random starting positions and speeds
    const initialBots = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 20 + (i * 15),
      speed: 0.02 + Math.random() * 0.03,
      direction: Math.random() > 0.5 ? 1 : -1,
      delay: i * 2
    }))
    setBots(initialBots)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Buildings in background */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around opacity-5">
        {[80, 120, 100, 140, 90, 110].map((height, i) => (
          <div
            key={i}
            className="relative bg-primary-900"
            style={{
              width: '60px',
              height: `${height}px`,
              margin: '0 10px'
            }}
          >
            {/* Windows */}
            {Array.from({ length: Math.floor(height / 20) }).map((_, row) => (
              <div key={row} className="flex justify-around mt-2">
                {[0, 1, 2].map((col) => (
                  <div
                    key={col}
                    className="w-2 h-2 bg-yellow-400 opacity-70"
                    style={{
                      animation: `blink ${2 + Math.random() * 3}s infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Moving bots */}
      {bots.map((bot) => (
        <div
          key={bot.id}
          className="absolute"
          style={{
            left: `${bot.x}%`,
            top: `${bot.y}%`,
            animation: `float-horizontal-${bot.direction > 0 ? 'right' : 'left'} ${20 + bot.id * 5}s linear infinite`,
            animationDelay: `${bot.delay}s`,
            transform: bot.direction > 0 ? 'scaleX(1)' : 'scaleX(-1)'
          }}
        >
          {/* Bot SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-lg">
            {/* Bot body */}
            <rect x="10" y="12" width="12" height="14" rx="2" fill="#60A5FA" className="opacity-80" />
            
            {/* Bot head */}
            <circle cx="16" cy="8" r="4" fill="#60A5FA" className="opacity-80" />
            
            {/* Eyes */}
            <circle cx="14" cy="8" r="1" fill="#fff">
              <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="8" r="1" fill="#fff">
              <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Antenna */}
            <line x1="16" y1="4" x2="16" y2="1" stroke="#60A5FA" strokeWidth="1" className="opacity-80" />
            <circle cx="16" cy="1" r="1.5" fill="#FCD34D">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
            </circle>
            
            {/* Arms */}
            <rect x="8" y="14" width="2" height="6" rx="1" fill="#60A5FA" className="opacity-60">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 9 14"
                to="20 9 14"
                dur="0.5s"
                repeatCount="indefinite"
                direction="alternate"
              />
            </rect>
            <rect x="22" y="14" width="2" height="6" rx="1" fill="#60A5FA" className="opacity-60">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 23 14"
                to="-20 23 14"
                dur="0.5s"
                repeatCount="indefinite"
                direction="alternate"
              />
            </rect>
            
            {/* Legs */}
            <rect x="12" y="26" width="2" height="4" rx="1" fill="#60A5FA" className="opacity-60">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,0; 0,1; 0,0"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="18" y="26" width="2" height="4" rx="1" fill="#60A5FA" className="opacity-60">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,1; 0,0; 0,1"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes float-horizontal-right {
          0% { transform: translateX(0) scaleX(1); }
          100% { transform: translateX(100vw) scaleX(1); }
        }
        
        @keyframes float-horizontal-left {
          0% { transform: translateX(100vw) scaleX(-1); }
          100% { transform: translateX(-100px) scaleX(-1); }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBots

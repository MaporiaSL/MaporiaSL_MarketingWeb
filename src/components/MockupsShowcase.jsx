import { useState } from 'react';

export default function MockupsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const mockups = [
    { id: 1, title: "Interactive Map", desc: "Explore Sri Lanka's districts and provinces" },
    { id: 2, title: "Unlock Progress", desc: "Track your journey and achievements" },
    { id: 3, title: "Trip Planner", desc: "Plan your perfect adventure" },
    { id: 4, title: "Photo Gallery", desc: "Capture and save memories" }
  ];

  return (
    <section className="section" id="mockups" style={{
      background: 'white',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(28, 168, 169, 0.1), rgba(247, 138, 29, 0.1))',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-sunrise-orange)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            📱 Preview
          </div>
          
          <h2 style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px'
          }}>
            See It In Action
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(10, 26, 47, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Experience the beautiful interface designed for explorers
          </p>
        </div>

        {/* Main Mockup Display */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Featured Mockup */}
          <div style={{
            flex: '1 1 400px',
            maxWidth: '450px',
            position: 'relative'
          }}>
            <div style={{
              padding: '24px',
              background: 'linear-gradient(135deg, var(--color-sand-beige) 0%, #ffffff 100%)',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(10, 26, 47, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(247,138,29,0.15) 0%, transparent 70%)',
                borderRadius: '50%'
              }} />
              
              <div style={{
                width: '100%',
                aspectRatio: '9/16',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(10, 26, 47, 0.1)',
                position: 'relative',
                zIndex: 1,
                background: activeIndex === 0 ? 'linear-gradient(135deg, #1CA8A9 0%, #0A1A2F 100%)' :
                           activeIndex === 1 ? 'linear-gradient(135deg, #F78A1D 0%, #FFAD90 100%)' :
                           activeIndex === 2 ? 'linear-gradient(135deg, #0A1A2F 0%, #1CA8A9 100%)' :
                           'linear-gradient(135deg, #FFAD90 0%, #F3E5D8 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                color: 'white',
                overflow: 'hidden'
              }}>
                {/* Phone notch */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  width: '120px',
                  height: '25px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '15px'
                }} />
                
                {/* Icon */}
                <div style={{
                  fontSize: '100px',
                  marginBottom: '30px',
                  marginTop: '40px'
                }}>
                  {mockups[activeIndex].id === 1 ? '🗺️' : 
                   mockups[activeIndex].id === 2 ? '🔓' :
                   mockups[activeIndex].id === 3 ? '🧭' : '📸'}
                </div>
                
                {/* Title */}
                <div style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  textAlign: 'center',
                  marginBottom: '15px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                  {mockups[activeIndex].title}
                </div>
                
                {/* Description */}
                <div style={{
                  fontSize: '16px',
                  textAlign: 'center',
                  opacity: 0.9,
                  maxWidth: '80%',
                  lineHeight: 1.5
                }}>
                  {mockups[activeIndex].desc}
                </div>
                
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute',
                  bottom: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)'
                }} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{
            flex: '1 1 300px',
            maxWidth: '500px'
          }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--color-deep-navy)',
              marginBottom: '16px'
            }}>
              {mockups[activeIndex].title}
            </h3>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'rgba(10, 26, 47, 0.7)',
              marginBottom: '32px'
            }}>
              {mockups[activeIndex].desc}
            </p>

            {/* Feature highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Real-time location tracking', 'Offline mode available', 'Gamification rewards'].map((feature, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-sunrise-orange), var(--color-coral-peach))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{
                    fontSize: '16px',
                    color: 'var(--color-deep-navy)'
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mockup Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          {mockups.map((mockup, index) => (
            <button
              key={mockup.id}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: '16px 24px',
                background: activeIndex === index 
                  ? 'linear-gradient(135deg, var(--color-sunrise-orange), var(--color-coral-peach))'
                  : 'white',
                color: activeIndex === index ? 'white' : 'var(--color-deep-navy)',
                border: activeIndex === index ? 'none' : '2px solid rgba(10, 26, 47, 0.1)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '15px',
                fontWeight: 600,
                boxShadow: activeIndex === index 
                  ? '0 4px 15px rgba(247, 138, 29, 0.3)'
                  : '0 2px 10px rgba(10, 26, 47, 0.05)'
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== index) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.borderColor = 'var(--color-sunrise-orange)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(10, 26, 47, 0.1)';
                }
              }}
            >
              {mockup.title}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #mockups h2 {
            font-size: 32px !important;
          }
          #mockups h3 {
            font-size: 26px !important;
          }
          #mockups > div > div:nth-child(2) {
            flex-direction: column !important;
            text-align: center !important;
          }
          #mockups > div > div:nth-child(2) > div:last-child > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
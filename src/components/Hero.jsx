export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="hero" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ffffff 0%, var(--color-sand-beige) 100%)'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(28,168,169,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(247,138,29,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          flex: 1,
          animation: 'slideInLeft 0.8s ease forwards'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-ocean-teal)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Your Telescope to Sri Lanka
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, var(--color-sunrise-orange) 0%, var(--color-coral-peach) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px'
          }}>
            Explore Sri Lanka.<br/>Unlock Adventures.
          </h1>

          <p style={{
            marginTop: '20px',
            fontSize: '20px',
            lineHeight: 1.6,
            maxWidth: '500px',
            color: 'rgba(10, 26, 47, 0.8)'
          }}>
            A gamified travel portfolio app helping you discover, visit, unlock and capture Sri Lanka.
          </p>

          {/* Social proof */}
          <div style={{
            display: 'flex',
            gap: '32px',
            marginTop: '24px',
            padding: '16px 0'
          }}>
            <div>
              <div style={{fontSize: '28px', fontWeight: 700, color: 'var(--color-sunrise-orange)'}}>50+</div>
              <div style={{fontSize: '14px', color: 'rgba(10, 26, 47, 0.6)'}}>Locations</div>
            </div>
            <div>
              <div style={{fontSize: '28px', fontWeight: 700, color: 'var(--color-ocean-teal)'}}>25+</div>
              <div style={{fontSize: '14px', color: 'rgba(10, 26, 47, 0.6)'}}>Districts</div>
            </div>
            <div>
              <div style={{fontSize: '28px', fontWeight: 700, color: 'var(--color-coral-peach)'}}>100+</div>
              <div style={{fontSize: '14px', color: 'rgba(10, 26, 47, 0.6)'}}>Achievements</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '32px',
            flexWrap: 'wrap'
          }}>
            <button className="btn-primary">Download App</button>
            <button className="btn-secondary" onClick={scrollToFeatures}>
              Explore Features
            </button>
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          animation: 'slideInRight 0.8s ease forwards'
        }}>
          <div style={{position: 'relative'}}>
            <div style={{
              width: '350px',
              height: '700px',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(10, 26, 47, 0.2)',
              animation: 'float 3s ease-in-out infinite',
              background: 'linear-gradient(135deg, var(--color-ocean-teal) 0%, var(--color-sunrise-orange) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Phone notch */}
              <div style={{
                position: 'absolute',
                top: '20px',
                width: '150px',
                height: '30px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '20px'
              }} />
              
              {/* Content */}
              <div style={{
                fontSize: '80px',
                marginBottom: '20px'
              }}>🗺️</div>
              <div style={{
                fontSize: '24px',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '10px'
              }}>Maporia</div>
              <div style={{
                fontSize: '14px',
                textAlign: 'center',
                opacity: 0.9
              }}>Explore Sri Lanka</div>
            </div>
            {/* Decorative badge */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              background: 'linear-gradient(135deg, var(--color-sunrise-orange), var(--color-coral-peach))',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 700,
              boxShadow: '0 8px 20px rgba(247, 138, 29, 0.3)'
            }}>
              Coming Soon 🚀
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #hero .container {
            flex-direction: column !important;
            gap: 40px !important;
            text-align: center;
          }
          #hero h1 {
            font-size: 36px !important;
          }
          #hero p {
            max-width: 100% !important;
          }
          #hero > div > div:first-child > div:nth-child(4) {
            justify-content: center !important;
          }
          #hero > div > div:first-child > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
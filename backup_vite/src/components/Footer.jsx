import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate submission
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <footer id="waitlist" className="section" style={{
      background: 'linear-gradient(135deg, var(--color-deep-navy) 0%, #0d2642 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(247,138,29,0.15) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Waitlist Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>
            🚀
          </div>
          
          <h2 style={{
            fontSize: '40px',
            fontWeight: 800,
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #ffffff 0%, var(--color-coral-peach) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Join the Waitlist
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '32px'
          }}>
            Be the first to explore Sri Lanka like never before
          </p>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '14px 20px',
                borderRadius: 'var(--radius)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                width: '300px',
                fontSize: '16px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-sunrise-orange)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
            />
            <button type="submit" className="btn-primary">
              Notify Me 🔔
            </button>
          </form>

          {status === 'success' && (
            <div style={{
              marginTop: '16px',
              padding: '12px 24px',
              background: 'rgba(28, 168, 169, 0.2)',
              borderRadius: 'var(--radius)',
              color: '#4ade80',
              display: 'inline-block',
              animation: 'fadeInUp 0.5s ease'
            }}>
              ✓ Thanks! We'll notify you when we launch
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          margin: '40px 0'
        }} />

        {/* Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <img 
                src="/maporia-logo-transparent-1.svg" 
                alt="Maporia Logo" 
                style={{
                  width: '44px',
                  height: '44px'
                }}
              />
              <h3 style={{
                fontSize: '24px',
                fontWeight: 800,
                margin: 0
              }}>
                Maporia
              </h3>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              lineHeight: 1.6
            }}>
              Your telescope to Sri Lanka. Discover, explore, and unlock the beauty of the island.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'var(--color-coral-peach)'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Features', 'Mockups', 'Team', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '8px' }}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => e.target.style.color = 'white'}
                     onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'var(--color-coral-peach)'
            }}>
              Get in Touch
            </h4>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
              <p style={{ marginBottom: '8px' }}>
                📧 <a href="mailto:hello@maporia.app" style={{ color: 'inherit', textDecoration: 'none' }}>hello@maporia.app</a>
              </p>
              <p style={{ marginBottom: '8px' }}>
                💻 <a href="https://github.com/your-org/maporia" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                {['🐦', '📘', '📷', '💼'].map((icon, i) => (
                  <a key={i} href="#" style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-sunrise-orange)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          © {new Date().getFullYear()} Maporia. Made with ❤️ for Sri Lanka
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          footer h2 {
            font-size: 32px !important;
          }
          footer form {
            flex-direction: column !important;
            align-items: center !important;
          }
          footer form input {
            width: 100% !important;
            max-width: 300px !important;
          }
          footer > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer ul {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
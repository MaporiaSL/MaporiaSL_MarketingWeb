import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['hero', 'features', 'mockups', 'team', 'waitlist'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: '90%',
      maxWidth: '1100px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 28px',
        background: 'rgba(10, 26, 47, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(10, 26, 47, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <img 
            src="/maporia-logo-transparent-1.svg" 
            alt="Maporia Logo" 
            style={{
              width: '55px',
              height: '55px'
            }}
          />
        </a>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          gap: '8px',
          listStyle: 'none',
          alignItems: 'center',
          margin: 0
        }}>
          {[
            { id: 'features', label: 'Features' },
            { id: 'mockups', label: 'Mockups' },
            { id: 'team', label: 'Team' }
          ].map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: activeSection === item.id 
                    ? 'white' 
                    : 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: activeSection === item.id 
                    ? 'var(--color-ocean-teal)' 
                    : 'transparent',
                  display: 'block'
                }}
                className="nav-link"
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#waitlist">
              <button style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 600,
                background: 'var(--color-ocean-teal)',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(28, 168, 169, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(28, 168, 169, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 12px rgba(28, 168, 169, 0.4)';
              }}>
                Join Waitlist
              </button>
            </a>
          </li>
        </ul>
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 968px) {
          header {
            width: 95% !important;
            top: 10px !important;
          }
          
          header nav {
            padding: 12px 20px !important;
            flex-wrap: wrap;
            gap: 12px;
          }
          
          header nav ul {
            gap: 4px !important;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          header nav ul li a {
            font-size: 13px !important;
            padding: 6px 12px !important;
          }
          
          header nav > a > img {
            width: 45px !important;
            height: 45px !important;
          }
          
          header nav ul li button {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 640px) {
          header nav ul li:not(:last-child) {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
import React, { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Compass size={20} />
          </div>
          MAPORIA
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="https://github.com/MaporiaSL" target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 2rem' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

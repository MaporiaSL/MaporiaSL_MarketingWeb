import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Maporia</h3>
            <div className="footer-links">
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Transforming travel exploration into an engaging adventure. Discover Sri Lanka like never before with gamified maps and social features.
              </p>
            </div>
            <div className="footer-socials">
              <a href="https://github.com/MaporiaSL" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Github size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#features" className="footer-link">Features</a>
              <a href="#team" className="footer-link">Team</a>
              <a href="https://github.com/MaporiaSL" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">Blog</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Documentation</a>
              <a href="#" className="footer-link">Support</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Roadmap</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Get updates on our launch and exclusive travel tips.
            </p>
            <div className="footer-newsletter">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="success-message" style={{ justifyContent: 'center' }}>
                  ✓ Thanks for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Maporia. All rights reserved. | Exploring Sri Lanka together.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

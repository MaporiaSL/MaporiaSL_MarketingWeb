import React, { useState } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setTimeout(() => {
        setEmail('');
        setJoined(false);
      }, 3000);
    }
  };

  return (
    <section className="hero">
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="badge">
              <span className="pulse-dot" />
              Coming Soon to Android
            </div>

            <h1>
              Explore Sri Lanka<br />
              <span className="text-gradient">One Step at a Time</span>
            </h1>

            <p className="hero-desc">
              Transform your journey into an adventure. Unlock hidden destinations, capture memories, and gamify every mile across the island.
            </p>

            {!joined ? (
              <form onSubmit={handleJoin} className="waitlist-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary">
                  Join Waitlist
                  <ChevronRight size={18} />
                </button>
              </form>
            ) : (
              <div className="success-msg">
                <CheckCircle size={20} />
                <span>You're on the list! We'll notify you soon.</span>
              </div>
            )}
          </div>

          <div className="hero-right">
            <div className="mockup-showcase">
              <div className="mockup-card mockup-1">
              <div className="mockup-screen">
                <div className="mockup-header">
                  <div className="status-bar" />
                  <span className="location-badge">📍 Colombo</span>
                </div>
                <div className="mockup-map">
                  <svg className="map-illustration" viewBox="0 0 200 150">
                    <circle cx="100" cy="75" r="8" fill="#2d6a4f" className="pulse-marker" />
                  </svg>
                </div>
                <div className="mockup-stats">
                  <div className="stat-item">
                    <span className="stat-value">12</span>
                    <span className="stat-label">Districts</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">47</span>
                    <span className="stat-label">Photos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mockup-card mockup-2">
              <div className="mockup-screen">
                <div className="mockup-header">
                  <div className="status-bar" />
                  <span className="location-badge">📸 Album</span>
                </div>
                <div className="photo-grid">
                  <div className="photo-tile" style={{ background: 'linear-gradient(135deg, #95d5b2, #74c69d)' }} />
                  <div className="photo-tile" style={{ background: 'linear-gradient(135deg, #adb5bd, #868e96)' }} />
                  <div className="photo-tile" style={{ background: 'linear-gradient(135deg, #52b788, #40916c)' }} />
                  <div className="photo-tile" style={{ background: 'linear-gradient(135deg, #dee2e6, #adb5bd)' }} />
                </div>
                <div className="album-label">Kandy Trip 2025</div>
              </div>
            </div>

            <div className="mockup-card mockup-3">
              <div className="mockup-screen">
                <div className="mockup-header">
                  <div className="status-bar" />
                  <span className="location-badge">🏆 Achievements</span>
                </div>
                <div className="achievement-badge">
                  <div className="badge-icon">🗺️</div>
                  <div className="badge-text">Explorer Badge</div>
                  <div className="progress-ring" style={{ 
                    border: '8px solid #e9ecef',
                    borderTop: '8px solid #2d6a4f',
                    borderRadius: '50%'
                  }} />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

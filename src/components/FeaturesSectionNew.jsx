import React from 'react';
import { Layers, Navigation, Map, Camera, ShoppingBag, Share2, Zap, Globe } from 'lucide-react';

const features = [
  { icon: Layers, title: 'Fog of War Map', description: 'Districts stay hidden until you visit. Watch the map light up as you explore.' },
  { icon: Navigation, title: 'Smart Trip Planner', description: 'AI-powered route suggestions based on your interests and travel style.' },
  { icon: Map, title: 'Live Route Tracking', description: 'Your journey draws itself on the map in real-time with beautiful animations.' },
  { icon: Camera, title: 'Instant Photo Album', description: 'Every photo tagged with location, auto-organized into trip collections.' },
  { icon: ShoppingBag, title: 'Travel Marketplace', description: 'Book tours, buy local crafts, and discover hidden gems directly in-app.' },
  { icon: Share2, title: 'Social Sharing', description: 'Create stunning travel stories and share your unlocked regions with friends.' },
  { icon: Zap, title: 'Achievement System', description: 'Earn badges, unlock rewards, and level up as you explore more districts.' },
  { icon: Globe, title: 'Offline Mode', description: 'Download maps and access your content even without internet connection.' },
];

export default function Features() {
  return (
    <section id="features" className="features-section-new">
      <div className="features-bg-pattern">
        <div className="floating-icon icon-1">🗺️</div>
        <div className="floating-icon icon-2">📸</div>
        <div className="floating-icon icon-3">🏆</div>
        <div className="floating-icon icon-4">✈️</div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Powerful Features</h2>
          <h3 className="section-title">Everything You Need to Explore</h3>
          <p className="section-desc">
            From gamified maps to instant photo albums, we've built the ultimate travel companion.
          </p>
        </div>

        <div className="features-grid-new">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const greenShades = ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#95d5b2', '#b7e4c7', '#52b788', '#40916c'];
            return (
              <div key={idx} className="feature-card-new" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon" style={{ background: greenShades[idx % greenShades.length] }}>
                    <Icon size={28} color="#fff" />
                  </div>
                  <span className="feature-badge">NEW</span>
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-hover-line" style={{ background: greenShades[idx % greenShades.length] }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

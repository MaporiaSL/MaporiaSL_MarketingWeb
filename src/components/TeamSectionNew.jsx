import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  { name: 'Anuk Ranasinghe', role: 'Full Stack Developer', github: 'https://github.com/anucr', linkedin: '', emoji: '💻' },
  { name: 'Anuja Jayasinghe', role: 'Cloud & Database Architect', github: 'https://github.com/Anuja-jayasinghe', linkedin: 'https://www.linkedin.com/in/anuja-jayasinghe/', emoji: '☁️' },
  { name: 'Pudamya Yamini', role: 'UI/UX & Flutter Specialist', github: 'https://github.com/PudamyaYamini', linkedin: 'http://www.linkedin.com/in/pudamya-de-silva-1a2ab7320', emoji: '🎨' },
  { name: 'Kaushal Senevirathne', role: 'Map Engine Engineer', github: 'https://github.com/KaushalSenevirathne', linkedin: '', emoji: '🗺️' },
  { name: 'Sedani Lesara', role: 'Testing & Quality Assurance', github: 'https://github.com/Sedani25', linkedin: 'http://www.linkedin.com/in/sedani-lesara-sethumlee-956998395', emoji: '✅' },
  { name: 'Hitheshi Kariyawasam', role: 'Product Design & Assets', github: 'https://github.com/hitheshik', linkedin: '', emoji: '🎭' },
];

export default function Team() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <section id="team" className="team-section-new">
      <div className="team-bg-pattern" />
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">The Dream Team</h2>
          <h3 className="section-title">Building Your Explorer Companion</h3>
          <p className="section-desc">
            Meet the passionate developers and designers crafting the future of travel exploration.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => {
            const greenShades = ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#95d5b2', '#b7e4c7'];
            return (
              <div 
                key={idx} 
                className={`team-member-card ${hoveredIdx === idx ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="member-avatar-container">
                  <div className="member-avatar" style={{ background: greenShades[idx % greenShades.length], fontSize: '3rem' }}>
                    {member.emoji}
                  </div>
                  <div className="avatar-ring" style={{ borderColor: greenShades[idx % greenShades.length] }} />
                </div>
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
                <div className="member-links">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Github size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
                <div className="card-glow" style={{ 
                  background: `radial-gradient(circle at center, ${greenShades[idx % greenShades.length]}20, transparent)` 
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import FeatureCard from './FeatureCard';


export default function FeaturesGrid() {
  const features = [
    { icon: "🗺️", title: "Interactive Map", text: "Explore districts, provinces and routes across Sri Lanka." },
    { icon: "🔓", title: "Unlock Regions", text: "Visit locations to unlock badges and progress." },
    { icon: "🧭", title: "Trip Planning", text: "Plan trips with itineraries, stops and estimated routes." },
    { icon: "📸", title: "Travel Camera", text: "Capture trip moments and store them in the in-app album." },
    { icon: "🛍️", title: "In-App Shop", text: "Buy travel utilities and tools for a smoother journey." },
    { icon: "🧍", title: "Profiles & Badges", text: "Track your milestones and unlock rarity-based badges." },
  ];

  return (
    <section className="section section-alt" id="features">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(247, 138, 29, 0.1), rgba(28, 168, 169, 0.1))',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--color-ocean-teal)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            ✨ Features
          </div>
          
          <h2 style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px'
          }}>
            Everything You Need
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(10, 26, 47, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover powerful features designed to make your Sri Lankan adventure unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginTop: '40px'
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                animation: `fadeInUp 0.6s ease forwards ${i * 0.1}s`,
                opacity: 0
              }}
            >
              <FeatureCard icon={f.icon} title={f.title} text={f.text} />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #features h2 {
            font-size: 32px !important;
          }
          #features > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
export default function FeatureCard({ icon, title, text }) {
  return (
    <div 
      className="feature-card"
      style={{
        padding: '32px',
        background: 'linear-gradient(135deg, #ffffff 0%, rgba(243, 229, 216, 0.3) 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(10, 26, 47, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        border: '1px solid rgba(10, 26, 47, 0.05)'
      }}
    >
      {/* Background icon decoration */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        fontSize: '120px',
        opacity: 0.03,
        pointerEvents: 'none',
        transition: 'all 0.4s ease'
      }} className="feature-card-bg-icon">
        {icon}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: '48px',
        width: '70px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(247, 138, 29, 0.1), rgba(28, 168, 169, 0.1))',
        borderRadius: '12px',
        transition: 'transform 0.4s ease'
      }} className="feature-card-icon">
        {icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        color: 'var(--color-deep-navy)',
        margin: 0
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '15px',
        lineHeight: 1.6,
        color: 'rgba(10, 26, 47, 0.7)',
        margin: 0
      }}>
        {text}
      </p>

      {/* Hover styles */}
      <style>{`
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(10, 26, 47, 0.15);
          border-color: rgba(247, 138, 29, 0.3);
        }

        .feature-card:hover .feature-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-card:hover .feature-card-bg-icon {
          opacity: 0.06;
          transform: rotate(-10deg) scale(1.1);
        }

        @media (max-width: 768px) {
          .feature-card {
            padding: 24px !important;
          }
          .feature-card h3 {
            font-size: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
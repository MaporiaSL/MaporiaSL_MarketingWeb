import { useEffect, useState } from 'react';


export default function GoTopButton() {
const [visible, setVisible] = useState(false);


useEffect(() => {
const checkScroll = () => {
setVisible(window.scrollY > 300);
};


window.addEventListener('scroll', checkScroll);
return () => window.removeEventListener('scroll', checkScroll);
}, []);


if (!visible) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, var(--color-sunrise-orange), var(--color-coral-peach))',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        boxShadow: '0 4px 20px rgba(247, 138, 29, 0.4)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        transition: 'all 0.3s ease',
        zIndex: 999,
        animation: visible ? 'fadeInUp 0.3s ease' : 'none'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-5px) scale(1.1)';
        e.target.style.boxShadow = '0 6px 30px rgba(247, 138, 29, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(247, 138, 29, 0.4)';
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
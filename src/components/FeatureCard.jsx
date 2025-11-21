export default function FeatureCard({ icon, title, text }) {
return (
<div style={{padding:'24px', background:'white', borderRadius:'var(--radius)', boxShadow:'var(--shadow-soft)', display:'flex', flexDirection:'column', gap:'10px'}}>
<div style={{fontSize:'30px'}}>{icon}</div>
<h3 style={{fontSize:'20px', fontWeight:600}}>{title}</h3>
<p style={{fontSize:'15px', lineHeight:1.5}}>{text}</p>
</div>
);
}
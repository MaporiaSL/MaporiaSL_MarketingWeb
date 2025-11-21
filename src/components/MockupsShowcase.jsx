export default function MockupsShowcase() {
return (
<section className="section" id="mockups">
<div className="container">


<h2 style={{fontSize:'36px', fontWeight:700, textAlign:'center'}}>App Mockups</h2>


<div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'28px'}}>
{[1,2,3,4].map(i => (
<div key={i} style={{padding:'16px', background:'white', borderRadius:'var(--radius)', boxShadow:'var(--shadow-soft)'}}>
<img src={`/mockup${i}.png`} alt={`Mockup ${i}`} style={{width:'100%', borderRadius:'10px'}} />
</div>
))}
</div>


</div>
</section>
);
}
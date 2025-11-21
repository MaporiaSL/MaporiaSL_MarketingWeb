export default function Hero() {
return (
<section className="section" id="hero">
<div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap:'40px'}}>


<div style={{flex: 1}}>
<h1 style={{fontSize: '48px', fontWeight: 700, lineHeight: 1.2}}>Explore Sri Lanka.
<br/>Unlock Adventures.
</h1>


<p style={{marginTop: '16px', fontSize:'18px', maxWidth:'420px'}}>
A gamified travel portfolio app helping you discover, visit, unlock and capture Sri Lanka.
</p>


<div style={{display:'flex', gap:'16px', marginTop:'26px'}}>
<button className="btn-primary">Download App</button>
<button style={{border:'2px solid var(--color-deep-navy)', padding:'12px 22px', borderRadius:'var(--radius)'}}>Explore Features</button>
</div>
</div>


<div style={{flex: 1, display:'flex', justifyContent:'center'}}>
<img src="/mockup-placeholder.png" alt="App Mockup" style={{width:'300px', borderRadius:'20px', boxShadow:'var(--shadow-soft)'}} />
</div>
</div>
</section>
);
}
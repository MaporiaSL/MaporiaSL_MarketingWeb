export default function Footer() {
return (
<footer id="waitlist" className="section" style={{background:'white'}}>
<div className="container" style={{textAlign:'center'}}>


<h2>Join the Waitlist</h2>
<p style={{marginTop:'8px'}}>Get notified when MaporiaSL launches.</p>


<form style={{marginTop:'20px', display:'flex', justifyContent:'center', gap:'12px'}}>
<input type="email" placeholder="Your email" required
style={{padding:'12px 18px', borderRadius:'var(--radius)', border:'1px solid #ccc', width:'260px'}} />


<button className="btn-primary">Notify Me</button>
</form>


<p style={{marginTop:'32px', fontSize:'14px'}}>
Contact: <a href="mailto:hello@maporia.app">hello@maporia.app</a> •
GitHub: <a href="https://github.com/your-org/maporia">maporia repo</a>
</p>


</div>
</footer>
);
}
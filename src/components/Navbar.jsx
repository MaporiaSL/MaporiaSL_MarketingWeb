export default function Navbar() {
return (
<header style={{position: 'sticky', top: 0, background: 'var(--bg-default)', zIndex: 50}}>
<nav className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0'}}>
<h1 style={{fontSize: '24px', fontWeight: 700}}>MaporiaSL</h1>


<ul style={{display: 'flex', gap: '28px', listStyle: 'none'}}>
<li><a href="#features">Features</a></li>
<li><a href="#mockups">Mockups</a></li>
<li><a href="#team">Team</a></li>
<li><a href="#waitlist">Waitlist</a></li>
</ul>
</nav>
</header>
);
}
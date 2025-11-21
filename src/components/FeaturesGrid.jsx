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
<section className="section" id="features">
<div className="container">
<h2 style={{fontSize:'36px', fontWeight:700, textAlign:'center'}}>Features</h2>


<div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'28px'}}>
{features.map((f,i) => (
<FeatureCard key={i} icon={f.icon} title={f.title} text={f.text} />
))}
</div>
</div>
</section>
);
}
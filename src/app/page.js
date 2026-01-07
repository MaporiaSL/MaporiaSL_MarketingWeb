import { Navbar } from '../components/ui/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Team } from '../components/sections/Team';
import { Survey } from '../components/sections/Survey';
import { Waitlist } from '../components/sections/Waitlist';
import { Footer } from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="mission">
        {/* Mission is part of the Team section now, but we can link here */}
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="about">
         <Survey />
      </div>

      <div id="waitlist">
        <Waitlist />
      </div>

      <Footer />
    </main>
  );
}

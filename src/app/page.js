import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Team } from '../components/sections/Team';
import { Survey } from '../components/sections/Survey';
import { Waitlist } from '../components/sections/Waitlist';
import { Footer } from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30">
      <Hero />
      <Features />
      <Survey />
      <Team />
      <Waitlist />
      <Footer />
    </main>
  );
}

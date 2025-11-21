import React, { useState, useEffect } from 'react';
import './App.css';
import './theme.css';
import Navbar from './components/Navbar.jsx';
import HeroNew from './components/HeroNew.jsx';
import FeaturesSectionNew from './components/FeaturesSectionNew.jsx';
import TeamSectionNew from './components/TeamSectionNew.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="app-container">
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroNew />
      <FeaturesSectionNew />
      <TeamSectionNew />
      <Footer />
    </div>
  );
}
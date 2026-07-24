import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreativeHero from '../components/creative/CreativeHero';
import '../styles/creative.css';
import StrategyAbout from '../components/strategy/StrategyAbout';
import StrategySolutions from '../components/strategy/StrategySolutions';

export default function StrategyPlanning() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#F8F6F3]">
      <Navbar />
      
      <main>
        <CreativeHero />
        <StrategyAbout />
        <StrategySolutions />
      </main>

      <Footer />
    </div>
  );
}

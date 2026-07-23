import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StrategyHero from '../components/strategy/StrategyHero';
import StrategyApproach from '../components/strategy/StrategyApproach';
import StrategyImpact from '../components/strategy/StrategyImpact';

export default function StrategyPlanning() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#F8F6F3]">
      <Navbar />
      
      <main>
        <StrategyHero />
        <StrategyApproach />
        <StrategyImpact />
      </main>

      <Footer />
    </div>
  );
}

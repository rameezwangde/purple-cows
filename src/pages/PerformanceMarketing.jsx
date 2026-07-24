import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PerformanceHero from '../components/performance/PerformanceHero';
import PerformanceEcosystem from '../components/performance/PerformanceEcosystem';
import '../styles/performance.css';

export default function PerformanceMarketing() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#FAF8F5]">
      <Navbar />
      
      <main>
        <PerformanceHero />
        <PerformanceEcosystem />
      </main>

      <Footer />
    </div>
  );
}

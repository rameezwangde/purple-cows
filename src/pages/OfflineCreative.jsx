import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OfflineHero from '../components/offline/OfflineHero';
import OfflineWhatWeCreate from '../components/offline/OfflineWhatWeCreate';
import '../styles/offline.css';

export default function OfflineCreative() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#FAF8F5]">
      <Navbar />
      
      <main>
        <OfflineHero />
        <OfflineWhatWeCreate />
      </main>

      <Footer />
    </div>
  );
}

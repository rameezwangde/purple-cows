import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WebMobileHero from '../components/web-mobile/WebMobileHero';
import '../styles/web-mobile.css';

export default function WebAndMobile() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#F8F7F4]">
      <Navbar />
      
      <main>
        <WebMobileHero />
      </main>

      <Footer />
    </div>
  );
}

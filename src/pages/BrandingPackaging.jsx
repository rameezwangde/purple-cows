import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandingHero from '../components/branding/BrandingHero';
import BrandingApproach from '../components/branding/BrandingApproach';
import BrandingImpact from '../components/branding/BrandingImpact';

export default function BrandingPackaging() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#F8F6F3]">
      <Navbar />
      
      <main>
        <BrandingHero />
        <BrandingApproach />
        <BrandingImpact />
      </main>

      <Footer />
    </div>
  );
}

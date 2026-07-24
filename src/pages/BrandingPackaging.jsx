import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandingHero from '../components/branding/BrandingHero';
import BrandingExpertise from '../components/branding/BrandingExpertise';

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
        <BrandingExpertise />
      </main>

      <Footer />
    </div>
  );
}

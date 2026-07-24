import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialMediaHero from '../components/social-media/SocialMediaHero';
import SocialMediaSolutions from '../components/social-media/SocialMediaSolutions';
import '../styles/social-media.css';

export default function SocialMedia() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#FAF8F5]">
      <Navbar />
      
      <main>
        <SocialMediaHero />
        <SocialMediaSolutions />
      </main>

      <Footer />
    </div>
  );
}

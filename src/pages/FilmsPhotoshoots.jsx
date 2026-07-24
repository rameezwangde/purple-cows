import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilmsHero from '../components/films/FilmsHero';
import FilmsCapabilities from '../components/films/FilmsCapabilities';
import '../styles/films.css';

export default function FilmsPhotoshoots() {
  // Ensure we start at the top of the page on route load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell bg-[#FAF8F5]">
      <Navbar />
      
      <main>
        <FilmsHero />
        <FilmsCapabilities />
      </main>

      <Footer />
    </div>
  );
}

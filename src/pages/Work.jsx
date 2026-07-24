import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import WorkSection from '../components/WorkSection';
import Footer from '../components/Footer';

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <WorkSection />
      </div>
      <Footer />
    </main>
  );
}

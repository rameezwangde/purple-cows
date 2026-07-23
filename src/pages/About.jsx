import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import AboutHero from '../components/about/AboutHero';
import JourneySection from '../components/about/JourneySection';
import StorySection from '../components/about/StorySection';
import TimelineSection from '../components/about/TimelineSection';
import MissionSection from '../components/about/MissionSection';
import InnerCodeSection from '../components/about/InnerCodeSection';
import ImpactSection from '../components/about/ImpactSection';
import TeamCultureSection from '../components/about/TeamCultureSection';
import AboutCTA from '../components/about/AboutCTA';

// Import Specific About Page Styles
import '../styles/about-page.css';

export default function About() {
  return (
    <div className="about-page-wrapper">
      <Navbar />
      <main>
        <AboutHero />
        <JourneySection />
        <StorySection />
        <TimelineSection />
        <MissionSection />
        <InnerCodeSection />
        <ImpactSection />
        <TeamCultureSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
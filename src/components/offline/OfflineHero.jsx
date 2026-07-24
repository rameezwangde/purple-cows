import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import { Monitor, Image as ImageIcon, Box, MousePointer2 } from 'lucide-react';
import heroImg from '../../assets/images/offline-hero-cow-isolated.png';

gsap.registerPlugin(ScrollTrigger);

export default function OfflineHero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Right Side Composite slides up
      tl.from('.off-visual-composite', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      }, 0.2);

      // 2. Eyebrow and Subtitle
      tl.from('.off-top-label', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.4)
        .from('.off-subtitle', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.5)
        .from('.off-subtitle-line', { scaleX: 0, transformOrigin: "left", duration: 0.8, ease: 'power2.out' }, 0.6);

      // 3. Header reveal
      const splitChars = gsap.utils.toArray('.off-heading .split-char');
      tl.from(splitChars, {
        y: 100,
        opacity: 0,
        rotationX: -45,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, 0.6);

      // 4. Supporting Text
      tl.from('.off-supporting-text', { y: 20, opacity: 0, duration: 0.8 }, 1.2);

      // 5. Feature columns stagger
      tl.from('.off-feature-col', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.4);

      // 6. Bottom Quote reveal
      tl.from('.off-bottom-quote', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, 1.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="off-hero" ref={containerRef}>
      
      {/* LEFT COLUMN (52%) */}
      <div className="off-hero-left">
        
        <div className="off-top-label">
          <span className="off-forge-mark">FORGE</span>
          <span className="off-slashes">//</span>
        </div>

        <div className="off-subtitle">
          <span>OFFLINE CREATIVE SOLUTIONS</span>
          <div className="off-subtitle-line"></div>
        </div>

        <h1 className="off-heading">
          <SplitText type="chars" text="BIG IDEAS." /><br/>
          <SplitText type="chars" text="REAL WORLD " /><br/>
          <span className="off-brush-font">
            <SplitText type="chars" text="IMPACT." />
          </span>
        </h1>

        <p className="off-supporting-text">
          We craft tangible brand experiences that get <span className="purple-bold">noticed</span>, <span className="purple-bold">remembered</span> and <span className="purple-bold">talked</span> about.
        </p>

        {/* Features 4-Column Grid */}
        <div className="off-features-grid">
          <div className="off-feature-col">
            <div className="off-feature-icon"><Monitor size={18} strokeWidth={2}/></div>
            <h4>PRINT DESIGN</h4>
            <p>Brochures, catalogs, posters & more.</p>
          </div>
          <div className="off-feature-col">
            <div className="off-feature-icon"><ImageIcon size={18} strokeWidth={2}/></div>
            <h4>OUTDOOR ADVERTISING</h4>
            <p>Billboards, hoardings, transit & more.</p>
          </div>
          <div className="off-feature-col">
            <div className="off-feature-icon"><Box size={18} strokeWidth={2}/></div>
            <h4>PACKAGING DESIGN</h4>
            <p>Creative that sells before it's opened.</p>
          </div>
          <div className="off-feature-col">
            <div className="off-feature-icon"><MousePointer2 size={18} strokeWidth={2}/></div>
            <h4>BRAND COLLATERAL</h4>
            <p>Business essentials that build identity.</p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="off-bottom-quote">
          <span className="off-quote-brace">{'{'}</span>
          <div className="off-quote-text">
            <span>CREATIVE THAT PEOPLE SEE.</span>
            <span>BRANDS THAT PEOPLE <span className="off-quote-highlight">REMEMBER.</span></span>
          </div>
          <span className="off-quote-brace">{'}'}</span>
        </div>
      </div>

      {/* RIGHT COLUMN (48%) */}
      <div className="off-hero-right">
        <div className="off-visual-composite">
          <div className="off-hero-right-content">
            {/* The Reference Composite Image */}
            <img src={heroImg} alt="Offline Creative Design" className="off-raw-composite" />
          </div>
        </div>
      </div>

    </section>
  );
}

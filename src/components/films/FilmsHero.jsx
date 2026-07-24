import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import heroImg from '../../assets/images/films-hero-isolated.png';

gsap.registerPlugin(ScrollTrigger);

export default function FilmsHero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Left Side Illustration slides up
      tl.from('.films-visual-composite', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      }, 0.2);

      // 2. Eyebrow and Subtitle
      tl.from('.films-top-label', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.4)
        .from('.films-subtitle', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.5)
        .from('.films-subtitle-line', { scaleX: 0, transformOrigin: "left", duration: 0.8, ease: 'power2.out' }, 0.6);

      // 3. Header reveal
      const splitChars = gsap.utils.toArray('.films-heading .split-char');
      tl.from(splitChars, {
        y: 100,
        opacity: 0,
        rotationX: -45,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, 0.6);

      // 4. Brush Underline
      tl.from('.films-underline path', {
        strokeDashoffset: 1000,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, 1.2);

      // 5. Content blocks stagger
      tl.from('.films-block', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.4);

      // 6. Bottom Quote reveal
      tl.from('.films-bottom-quote', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, 1.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="films-hero" ref={containerRef}>

      {/* LEFT COLUMN (40%) */}
      <div className="films-hero-left">
        <div className="films-visual-composite">
          {/* Masked reference image to only show film strip */}
          <img src={heroImg} alt="Films and Photoshoots" className="films-raw-composite" />
        </div>
      </div>

      {/* RIGHT COLUMN (60%) */}
      <div className="films-hero-right">
        
        <div className="films-top-label">
          <span className="films-forge-mark">FRAME</span>
          <span className="films-slashes">//</span>
        </div>

        <div className="films-subtitle">
          <span>CORPORATE VIDEO PRODUCTION & COMMERCIAL PHOTOGRAPHY</span>
          <div className="films-subtitle-line"></div>
        </div>

        <h1 className="films-heading">
          <SplitText type="chars" text="STORIES." /><br/>
          <SplitText type="chars" text="THAT " />
          <span className="films-brush-font">
            <SplitText type="chars" text="MOVE." />
            <svg className="films-underline" viewBox="0 0 200 30" preserveAspectRatio="none">
              <path d="M 5 25 Q 100 5 195 20 M 10 30 Q 90 15 190 28" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
            </svg>
          </span>
        </h1>

        {/* 3 Editorial Content Blocks */}
        <div className="films-content-blocks">
          <div className="films-block">
            <h4>STORIES THAT CONNECT.</h4>
            <p>We don't simply film moments. We capture emotion, personality and purpose that audiences remember long after the screen fades.</p>
          </div>
          <div className="films-block">
            <h4>CONTENT THAT PERFORMS.</h4>
            <p>Every production is built with strategy behind the lens—designed to attract attention, build trust and drive action.</p>
          </div>
          <div className="films-block">
            <h4>CINEMA FOR MODERN BRANDS.</h4>
            <p>From product launches to brand documentaries, commercials and social-first content—we create visuals that make brands unforgettable.</p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="films-bottom-quote">
          <span className="films-quote-brace">{'{'}</span>
          <div className="films-quote-text">
            <span>WE DON'T JUST SHOOT.</span>
            <span>WE CREATE <span className="films-quote-highlight">LEGENDS.</span></span>
          </div>
          <span className="films-quote-brace">{'}'}</span>
        </div>
        
      </div>

    </section>
  );
}

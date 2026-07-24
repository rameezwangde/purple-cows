import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import { Megaphone, Star, Handshake, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaSolutions() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // 1. Label and Header
      tl.from('.sol-eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' })
        .fromTo(gsap.utils.toArray('.sol-heading .split-char'),
          { y: 50, opacity: 0, rotationX: -30 },
          { y: 0, opacity: 1, rotationX: 0, stagger: 0.02, duration: 0.8, ease: 'back.out(1.5)' },
          "-=0.4"
        )
        .from('.sol-underline path', { strokeDashoffset: 1000, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, "-=0.6")
        .from('.sol-subtitle', { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");

      // 2. Cards stagger up
      tl.from('.sol-card', {
        y: 80,
        opacity: 0,
        rotation: 2,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.4");

      // 3. Masking Tapes drop in
      tl.from('.sol-tape', {
        y: -20,
        opacity: 0,
        scale: 1.2,
        stagger: 0.1,
        duration: 0.4,
        ease: 'back.out(2)'
      }, "-=0.4");

      // 4. Icons & Content
      tl.from('.sol-card-icon svg', { scale: 0, rotation: -45, stagger: 0.1, duration: 0.6, ease: 'back.out(1.5)' }, "-=0.2")
        .from('.sol-card-list li', { x: -10, opacity: 0, stagger: 0.05, duration: 0.4, ease: 'power2.out' }, "-=0.4");

      // 5. Footer tag
      tl.from('.sol-footer', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sol-section" ref={containerRef}>
      
      {/* Decorative scribbles background */}
      <div className="sol-decor sol-decor-dots-left">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="#7a2eff" opacity="0.3">
          <circle cx="5" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="35" cy="5" r="2"/>
          <circle cx="5" cy="25" r="2"/><circle cx="20" cy="25" r="2"/><circle cx="35" cy="25" r="2"/>
          <circle cx="5" cy="45" r="2"/><circle cx="20" cy="45" r="2"/><circle cx="35" cy="45" r="2"/>
          <circle cx="5" cy="65" r="2"/><circle cx="20" cy="65" r="2"/><circle cx="35" cy="65" r="2"/>
        </svg>
      </div>
      
      <div className="sol-decor sol-decor-dots-right">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="#7a2eff" opacity="0.3">
          <circle cx="5" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="35" cy="5" r="2"/>
          <circle cx="5" cy="25" r="2"/><circle cx="20" cy="25" r="2"/><circle cx="35" cy="25" r="2"/>
          <circle cx="5" cy="45" r="2"/><circle cx="20" cy="45" r="2"/><circle cx="35" cy="45" r="2"/>
          <circle cx="5" cy="65" r="2"/><circle cx="20" cy="65" r="2"/><circle cx="35" cy="65" r="2"/>
        </svg>
      </div>

      <div className="sol-decor sol-decor-arrow-left">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M70 20 Q 30 30 30 70 M 20 60 L 30 70 L 45 60"/>
        </svg>
      </div>
      
      <div className="sol-decor sol-decor-star-right">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round">
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"/>
        </svg>
      </div>


      {/* Header */}
      <div className="sol-header">
        <div className="sol-eyebrow">
          <span className="sol-eyebrow-text">OUR SOLUTIONS</span>
          <svg className="sol-eyebrow-rays" width="30" height="30" viewBox="0 0 30 30" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round">
            <path d="M5 15 L2 15 M25 15 L28 15 M15 5 L15 2 M8 8 L5 5 M22 8 L25 5 M8 22 L5 25 M22 22 L25 25" opacity="0.6"/>
          </svg>
        </div>
        
        <h2 className="sol-heading">
          <SplitText type="chars" text="SOLUTIONS THAT" /> <span className="sol-highlight"><SplitText type="chars" text="CREATE." /></span>
          <svg className="sol-underline" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M 5 15 Q 100 5 195 15" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
          </svg>
        </h2>
        
        <p className="sol-subtitle">
          End-to-end solutions designed to <span className="underline-hover">elevate</span> your brand, <span className="underline-hover">engage</span> your audience and <span className="underline-hover">drive</span> real results.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="sol-grid">
        
        {/* Card 1 */}
        <div className="sol-card">
          <div className="sol-tape"></div>
          <div className="sol-card-header">
            <div className="sol-card-icon">
              <Megaphone size={32} />
            </div>
            <h3>SOCIAL MEDIA<br/>MANAGEMENT</h3>
            <svg className="sol-card-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M 0 5 Q 50 0 100 5" fill="none" stroke="#7a2eff" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <ul className="sol-card-list">
            <li><ChevronRight className="bullet-icon"/> Social Media Strategy</li>
            <li><ChevronRight className="bullet-icon"/> Content Calendar Planning</li>
            <li><ChevronRight className="bullet-icon"/> Creative Reels & Shorts</li>
            <li><ChevronRight className="bullet-icon"/> Community Management</li>
            <li><ChevronRight className="bullet-icon"/> Paid Social Campaigns</li>
            <li><ChevronRight className="bullet-icon"/> Influencer Coordination</li>
            <li><ChevronRight className="bullet-icon"/> Analytics & Reporting</li>
          </ul>
          <div className="sol-torn-corner"></div>
        </div>

        {/* Card 2 */}
        <div className="sol-card">
          <div className="sol-tape sol-tape-2"></div>
          <div className="sol-card-header">
            <div className="sol-card-icon">
              <Star size={32} />
            </div>
            <h3>CONTENT &<br/>BRANDING</h3>
            <svg className="sol-card-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M 0 5 Q 50 8 100 2" fill="none" stroke="#7a2eff" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <ul className="sol-card-list">
            <li><ChevronRight className="bullet-icon"/> Brand Storytelling</li>
            <li><ChevronRight className="bullet-icon"/> Visual Identity Support</li>
            <li><ChevronRight className="bullet-icon"/> Creative Campaign Concepts</li>
            <li><ChevronRight className="bullet-icon"/> Graphic Design</li>
            <li><ChevronRight className="bullet-icon"/> Motion Graphics</li>
            <li><ChevronRight className="bullet-icon"/> UGC Content Production</li>
            <li><ChevronRight className="bullet-icon"/> Campaign Launch Assets</li>
          </ul>
          <div className="sol-torn-corner"></div>
        </div>

        {/* Card 3 */}
        <div className="sol-card">
          <div className="sol-tape sol-tape-3"></div>
          <div className="sol-card-header">
            <div className="sol-card-icon">
              <Handshake size={32} />
            </div>
            <h3>GROWTH<br/>SERVICES</h3>
            <svg className="sol-card-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M 0 2 Q 50 8 100 5" fill="none" stroke="#7a2eff" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <ul className="sol-card-list">
            <li><ChevronRight className="bullet-icon"/> Performance Marketing</li>
            <li><ChevronRight className="bullet-icon"/> Meta Ads Management</li>
            <li><ChevronRight className="bullet-icon"/> Google Ads</li>
            <li><ChevronRight className="bullet-icon"/> Email Marketing</li>
            <li><ChevronRight className="bullet-icon"/> SEO Content Support</li>
            <li><ChevronRight className="bullet-icon"/> Landing Page Optimization</li>
            <li><ChevronRight className="bullet-icon"/> Conversion Tracking</li>
          </ul>
          <div className="sol-torn-corner"></div>
        </div>

      </div>

      {/* Footer Braces */}
      <div className="sol-footer">
        <span className="brace">{"{"}</span>
        <span className="footer-text">ONE TEAM. ENDLESS IDEAS. <span className="highlight-line">REAL IMPACT.</span></span>
        <span className="brace">{"}"}</span>
      </div>

    </section>
  );
}

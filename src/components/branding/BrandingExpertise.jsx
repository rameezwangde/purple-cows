import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Zap, Palette, BookOpen, Crown, Layers, Box, Search, Compass, PenTool, Layout, Users, Target, Video, BarChart, ArrowRight, Sparkles } from 'lucide-react';
import exp1 from '../../assets/images/expertise-1.png';
import exp2 from '../../assets/images/expertise-2.png';
import exp3 from '../../assets/images/expertise-3.png';
import '../../styles/branding-expertise.css';

gsap.registerPlugin(ScrollTrigger);

export default function BrandingExpertise() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Header Animation
      tl.from('.be-label', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.be-headline-1', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.be-headline-2-wrap', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.be-headline-underline path', { strokeDashoffset: 1000, duration: 1, ease: 'power2.out' }, '-=0.4')
        .from('.be-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8');

      // Columns Animation
      tl.from('.be-col', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

      // Footer Animation
      gsap.from('.be-footer-text', {
        scrollTrigger: {
          trigger: '.be-footer',
          start: 'top 85%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from('.be-footer-underline path', {
        scrollTrigger: {
          trigger: '.be-footer',
          start: 'top 85%'
        },
        strokeDashoffset: 1000,
        duration: 1.2,
        ease: 'power2.inOut',
        delay: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (index) => {
    const icons = [MessageCircle, Palette, BookOpen, Crown, Layers, Zap, Box, Search, Compass, PenTool, Layout, Users, Target, Video, BarChart];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={14} strokeWidth={2.5} />;
  };

  return (
    <section className="be-section" ref={sectionRef}>
      <div className="be-container">
        
        {/* HEADER */}
        <div className="be-header">
          <div className="be-label">
            <Sparkles size={18} />
            Our Expertise
            <Sparkles size={18} />
          </div>
          <h2 className="be-headline-1">WE BUILD BRANDS</h2>
          <div className="be-headline-2-wrap">
            <h2 className="be-headline-2">THAT STAND OUT.</h2>
            <svg className="be-headline-underline" viewBox="0 0 300 20" preserveAspectRatio="none">
              <path d="M 5 15 Q 150 0 295 10 M 15 20 Q 140 5 280 15" fill="none" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
            </svg>
          </div>
          <p className="be-desc">
            From strategy to storytelling, we create bold brand systems that people <span className="be-highlight">recognize</span>, <span className="be-highlight">trust</span>, and <span className="be-highlight">remember</span>.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="be-grid">
          
          {/* Column 1 */}
          <div className="be-col">
            <img src={exp1} alt="Brand Identity 3D Art" className="be-art-image" />
            <ul className="be-list">
              {['Brand Narrative Bridge', 'Distinctive Logo Design', 'Visual Identity System', 'Typography & Color Language', 'Brand Playbook', 'Brand Positioning'].map((item, i) => (
                <li key={i} className="be-list-item">
                  <div className="be-list-icon">{getIcon(i)}</div>
                  <span className="be-list-text">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#explore" className="be-explore">EXPLORE <ArrowRight size={18} /></a>
          </div>

          {/* Column 2 */}
          <div className="be-col">
            <img src={exp2} alt="Packaging Design 3D Art" className="be-art-image" style={{ animationDelay: '1s' }} />
            <ul className="be-list">
              {['Category Research', 'Shelf Impact Strategy', 'Packaging Architecture', 'Product Storytelling', 'User Experience Design', 'Packaging System Creation'].map((item, i) => (
                <li key={i} className="be-list-item">
                  <div className="be-list-icon">{getIcon(i+6)}</div>
                  <span className="be-list-text">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#explore" className="be-explore">EXPLORE <ArrowRight size={18} /></a>
          </div>

          {/* Column 3 */}
          <div className="be-col">
            <img src={exp3} alt="Creative Communication 3D Art" className="be-art-image" style={{ animationDelay: '2s' }} />
            <ul className="be-list">
              {['Audience Insight', 'Campaign Messaging', 'Creative Direction', 'Cross-Channel Strategy', 'Motion Content', 'Performance Storytelling'].map((item, i) => (
                <li key={i} className="be-list-item">
                  <div className="be-list-icon">{getIcon(i+11)}</div>
                  <span className="be-list-text">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#explore" className="be-explore">EXPLORE <ArrowRight size={18} /></a>
          </div>

        </div>

        {/* FOOTER */}
        <div className="be-footer">
          <h2 className="be-footer-text">
            Different by <span className="purple">design.
              <svg className="be-footer-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0 15 Q 50 0 100 10" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
              </svg>
            </span> 
            Effective by <span className="purple">impact.
              <svg className="be-footer-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0 15 Q 50 5 100 15" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
              </svg>
            </span>
          </h2>
        </div>

      </div>
    </section>
  );
}

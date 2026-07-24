import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  LayoutTemplate, Monitor, Image as ImageIcon, BookOpen, Book, 
  Tv, Calendar, Store, MapPin, Lightbulb, Megaphone, 
  MessageSquare, UserStar, Shirt 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OfflineWhatWeCreate() {
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

      // 1. Header & Doodles
      tl.from('.ow-header-label', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0)
        .from('.ow-header-underline path', { strokeDashoffset: 1000, duration: 1, ease: 'power2.inOut' }, 0.2)
        .from('.ow-doodle', { scale: 0, opacity: 0, rotation: -15, stagger: 0.1, duration: 0.8, ease: 'back.out(2)' }, 0.4);

      // 2. Columns Stagger
      tl.from('.ow-col', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power2.out' }, 0.6);

      // 3. Service Rows Stagger (only opacity to avoid transform conflicts with CSS hover)
      tl.from('.ow-service-row', {
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      }, 0.8);

      // 4. Torn Paper reveal
      tl.from('.ow-torn-paper', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, 1.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ow-section" ref={containerRef}>
      
      {/* BACKGROUND DECORATIONS */}
      {/* Top Left Swirl */}
      <svg className="ow-doodle ow-doodle-swirl" viewBox="0 0 100 100">
        <path d="M50 10 C30 10, 20 30, 40 50 C60 70, 80 50, 70 30 C60 10, 40 20, 50 60 C55 80, 40 90, 30 85" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 80 L30 85 L35 78" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Top Left Star */}
      <svg className="ow-doodle ow-doodle-star-tl" viewBox="0 0 100 100">
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinejoin="round"/>
      </svg>
      {/* Top Right Star */}
      <svg className="ow-doodle ow-doodle-star-tr" viewBox="0 0 100 100">
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinejoin="round"/>
      </svg>
      {/* Top Right Dots */}
      <svg className="ow-doodle ow-doodle-dots" viewBox="0 0 120 120">
        <circle cx="20" cy="20" r="4" fill="#7a2eff"/>
        <circle cx="60" cy="20" r="4" fill="#7a2eff"/>
        <circle cx="100" cy="20" r="4" fill="#7a2eff"/>
        <circle cx="20" cy="60" r="4" fill="#7a2eff"/>
        <circle cx="60" cy="60" r="4" fill="#7a2eff"/>
        <circle cx="100" cy="60" r="4" fill="#7a2eff"/>
        <circle cx="20" cy="100" r="4" fill="#7a2eff"/>
        <circle cx="60" cy="100" r="4" fill="#7a2eff"/>
        <circle cx="100" cy="100" r="4" fill="#7a2eff"/>
      </svg>

      {/* SECTION HEADER */}
      <div className="ow-header">
        <h2 className="ow-header-label">WHAT WE CREATE</h2>
        <svg className="ow-header-underline" viewBox="0 0 400 30" preserveAspectRatio="none">
          <path d="M 10 20 Q 200 5 390 15 M 20 25 Q 180 12 380 20" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
        </svg>
        {/* Accent lines next to header */}
        <svg className="ow-doodle ow-header-accent" viewBox="0 0 50 50">
          <line x1="5" y1="15" x2="25" y2="5" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="5" y1="35" x2="35" y2="20" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* 3-COLUMN GRID */}
      <div className="ow-grid">
        
        {/* COLUMN 1 */}
        <div className="ow-col">
          <div className="ow-service-row">
            <div className="ow-service-icon"><LayoutTemplate size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>PRINT ADVERTISING</h4>
              <p>Newspaper ads, magazine ads, and inserts.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Monitor size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>OOH & HOARDINGS</h4>
              <p>High impact outdoor that stops the scroll.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><ImageIcon size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>POSTERS & WALLSCAPES</h4>
              <p>Bold creatives that grab attention anywhere.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><BookOpen size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>COFFEE TABLE BOOKS</h4>
              <p>Premium storytelling in beautifully crafted books.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Book size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>MAGAZINES & EDITORIALS</h4>
              <p>Editorial design that informs, influences and inspires.</p>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="ow-col">
          <div className="ow-service-row">
            <div className="ow-service-icon"><Tv size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>INTEGRATED ATL CAMPAIGNS</h4>
              <p>Print + TV + Radio + Digital working together.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Calendar size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>EVENT BRANDING</h4>
              <p>From concept to execution, we own the experience.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Store size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>SPACE BRANDING</h4>
              <p>Transforming environments into brand experiences.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><MapPin size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>VENUE BRANDING</h4>
              <p>Visibility that elevates every touchpoint.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Lightbulb size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>INNOVATIONS</h4>
              <p>Creative ideas and formats that break the clutter.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Megaphone size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>ACTIVATIONS</h4>
              <p>Engaging brand experiences that create real connections.</p>
            </div>
          </div>
          {/* Bottom Center Crown */}
          <div className="ow-crown-container">
            <svg className="ow-doodle ow-doodle-crown" viewBox="0 0 100 60">
              <path d="M10 50 L20 10 L40 30 L50 5 L60 30 L80 10 L90 50 Z" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinejoin="round"/>
              <ellipse cx="20" cy="10" rx="3" ry="3" fill="#7a2eff"/>
              <ellipse cx="50" cy="5" rx="3" ry="3" fill="#7a2eff"/>
              <ellipse cx="80" cy="10" rx="3" ry="3" fill="#7a2eff"/>
            </svg>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="ow-col">
          <div className="ow-service-row">
            <div className="ow-service-icon"><MessageSquare size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>INTERNAL COMMUNICATIONS</h4>
              <p>Clear, consistent and culture-driven communication.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><UserStar size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>EMPLOYER BRANDING</h4>
              <p>Position your brand as the place everyone wants to work.</p>
            </div>
          </div>
          <div className="ow-service-row">
            <div className="ow-service-icon"><Shirt size={24} strokeWidth={2}/></div>
            <div className="ow-service-content">
              <h4>MERCHANDISE DESIGN</h4>
              <p>Thoughtful merch that people love to use.</p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM TORN PAPER CORNERS */}
      <div className="ow-torn-paper ow-torn-left"></div>
      <div className="ow-torn-paper ow-torn-right">
        {/* Bottom Right Sun rays */}
        <svg className="ow-doodle ow-doodle-sun" viewBox="0 0 100 100">
          <line x1="50" y1="50" x2="10" y2="10" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="50" y1="50" x2="50" y2="5" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="50" y1="50" x2="90" y2="10" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
      {/* Bottom dots */}
      <div className="ow-bottom-dots">
        <svg className="ow-doodle ow-doodle-dots" viewBox="0 0 120 120">
          <circle cx="20" cy="20" r="4" fill="#7a2eff"/>
          <circle cx="60" cy="20" r="4" fill="#7a2eff"/>
          <circle cx="100" cy="20" r="4" fill="#7a2eff"/>
          <circle cx="20" cy="60" r="4" fill="#7a2eff"/>
          <circle cx="60" cy="60" r="4" fill="#7a2eff"/>
          <circle cx="100" cy="60" r="4" fill="#7a2eff"/>
          <circle cx="20" cy="100" r="4" fill="#7a2eff"/>
          <circle cx="60" cy="100" r="4" fill="#7a2eff"/>
          <circle cx="100" cy="100" r="4" fill="#7a2eff"/>
        </svg>
      </div>

    </section>
  );
}

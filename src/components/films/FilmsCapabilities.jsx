import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Clapperboard, Lightbulb, FileText, Grid, Camera, Video, Box,
  MonitorPlay, Film, PlayCircle, Tv, Zap, MapPin, Mic,
  Wand2, Scissors, Star, Sparkles, Palette, Activity, ArrowDownToLine 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FilmsCapabilities() {
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
      tl.from('.fc-header-label', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0)
        .from('.fc-header-underline path', { strokeDashoffset: 1000, duration: 1, ease: 'power2.inOut' }, 0.2)
        .from('.fc-doodle', { scale: 0, opacity: 0, rotation: -15, stagger: 0.1, duration: 0.8, ease: 'back.out(2)' }, 0.4);

      // 2. Columns Stagger
      tl.from('.fc-col', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power2.out' }, 0.6);

      // 3. Service Rows Stagger (only opacity to avoid transform conflicts with CSS hover)
      tl.from('.fc-service-row, .fc-col-header', {
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      }, 0.8);

      // 4. Icons pop
      tl.from('.fc-service-icon, .fc-header-icon', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.out(2)'
      }, 0.8);

      // 5. Bottom Tagline
      tl.from('.fc-bottom-tagline', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, 1.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="fc-section" ref={containerRef}>
      
      {/* BACKGROUND DECORATIONS */}
      <svg className="fc-doodle fc-doodle-swirl-tl" viewBox="0 0 100 100">
        <path d="M50 10 C30 10, 20 30, 40 50 C60 70, 80 50, 70 30 C60 10, 40 20, 50 60 C55 80, 40 90, 30 85" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 80 L30 85 L35 78" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg className="fc-doodle fc-doodle-star-tl" viewBox="0 0 100 100">
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinejoin="round"/>
      </svg>
      <svg className="fc-doodle fc-doodle-arrow-tr" viewBox="0 0 100 100">
        <path d="M10 90 Q 30 20 90 20" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
        <path d="M70 10 L90 20 L75 35" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg className="fc-doodle fc-doodle-dots-tr" viewBox="0 0 120 120">
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
      <div className="fc-header">
        <h2 className="fc-header-label">OUR CAPABILITIES</h2>
        <svg className="fc-header-underline" viewBox="0 0 400 30" preserveAspectRatio="none">
          <path d="M 10 20 Q 200 5 390 15 M 20 25 Q 180 12 380 20" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
        </svg>
        <svg className="fc-doodle fc-header-accent" viewBox="0 0 50 50">
          <line x1="5" y1="15" x2="25" y2="5" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
          <line x1="5" y1="35" x2="35" y2="20" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* 3-COLUMN GRID */}
      <div className="fc-grid">
        
        {/* COLUMN 1: PRE PRODUCTION */}
        <div className="fc-col">
          <div className="fc-col-header">
            <div className="fc-header-icon"><Clapperboard size={32} strokeWidth={2}/></div>
            <div className="fc-header-content">
              <h3>PRE PRODUCTION</h3>
              <p>Every great campaign starts with a stronger story.</p>
            </div>
          </div>
          <div className="fc-service-list">
            <div className="fc-service-row">
              <div className="fc-service-icon"><Lightbulb size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Creative Concept Development</h4>
                <p>Transforming ideas into memorable campaign concepts.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><FileText size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Scriptwriting</h4>
                <p>Compelling narratives built for every platform.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Grid size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Storyboarding</h4>
                <p>Frame-by-frame planning before production begins.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Camera size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Photo Production</h4>
                <p>Premium commercial photography with creative direction.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Video size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Video Production</h4>
                <p>From social reels to cinematic brand films.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Box size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>AI Visual Production</h4>
                <p>Next-generation AI imagery and visual storytelling.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: CONTENT CREATION */}
        <div className="fc-col">
          <div className="fc-col-header">
            <div className="fc-header-icon"><MonitorPlay size={32} strokeWidth={2}/></div>
            <div className="fc-header-content">
              <h3>CONTENT CREATION</h3>
              <p>Content engineered to stop the scroll.</p>
            </div>
          </div>
          <div className="fc-service-list">
            <div className="fc-service-row">
              <div className="fc-service-icon"><Film size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Brand Films</h4>
                <p>Stories that create emotional connection.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><PlayCircle size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Social Reels</h4>
                <p>Fast-moving content built for engagement.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Tv size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Commercial Campaigns</h4>
                <p>High-impact advertising for every screen.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Zap size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Short-form Videos</h4>
                <p>Snackable content with maximum reach.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><MapPin size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Event Coverage</h4>
                <p>Capturing moments worth sharing.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Mic size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Podcast Production</h4>
                <p>Audio and video content for thought leaders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: CREATIVE POST */}
        <div className="fc-col">
          <div className="fc-col-header">
            <div className="fc-header-icon"><Wand2 size={32} strokeWidth={2}/></div>
            <div className="fc-header-content">
              <h3>CREATIVE POST</h3>
              <p>Finishing touches that elevate every frame.</p>
            </div>
          </div>
          <div className="fc-service-list">
            <div className="fc-service-row">
              <div className="fc-service-icon"><Scissors size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Video Editing</h4>
                <p>Professional edits built for performance.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Star size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Motion Graphics</h4>
                <p>Animated visuals that bring ideas alive.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Sparkles size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Visual Effects</h4>
                <p>Creative enhancements with cinematic quality.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Palette size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Colour Grading</h4>
                <p>Premium visual consistency across every project.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><Activity size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Sound Design</h4>
                <p>Audio experiences that complete the story.</p>
              </div>
            </div>
            <div className="fc-service-row">
              <div className="fc-service-icon"><ArrowDownToLine size={20} strokeWidth={2}/></div>
              <div className="fc-service-content">
                <h4>Multi-format Delivery</h4>
                <p>Optimized exports for every platform.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM TORN PAPER EDGE */}
      <div className="fc-torn-edge"></div>

      {/* BOTTOM TAGLINE */}
      <div className="fc-bottom-tagline-container">
        <div className="fc-bottom-tagline">
          <span className="fc-brace">{'{'}</span>
          <div className="fc-tagline-text">
            <span>FROM FIRST FRAME</span>
            <span>TO <span className="fc-highlight">FINAL IMPACT.</span></span>
          </div>
          <span className="fc-brace">{'}'}</span>
        </div>
        
        {/* Bottom Doodles */}
        <svg className="fc-doodle fc-doodle-swirl-bl" viewBox="0 0 100 100">
          <path d="M90 10 C70 10, 80 30, 60 50 C40 70, 20 50, 30 30 C40 10, 60 20, 50 60 C45 80, 60 90, 70 85" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M75 80 L70 85 L65 78" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="fc-doodle fc-doodle-star-br" viewBox="0 0 100 100">
          <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinejoin="round"/>
        </svg>
        <svg className="fc-doodle fc-doodle-dots-bl" viewBox="0 0 120 120">
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

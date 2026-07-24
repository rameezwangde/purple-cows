import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Megaphone, BarChart3, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceEcosystem() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      // Removed animations as per request to make text appear instantly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      });

      // 1. Label and Underline (instant, but keeping the drawn line animation)
      tl.from('.eco-eyebrow-rays', { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(2)' })
        .from('.eco-header-underline path', { strokeDashoffset: 1000, opacity: 0, duration: 0.8, ease: 'power2.inOut' }, "-=0.2");

      // 2. Doodles fade in
      tl.from('.eco-decor', { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.4 }, "-=0.4");

      // 3. Columns Content Reveal (keep only the icons and underlines, text appears instantly)
      tl.from('.eco-col-icon', { scale: 0, rotation: -45, stagger: 0.1, duration: 0.4, ease: 'back.out(1.5)' }, "-=0.2")
        .from('.eco-col-underline path', { strokeDashoffset: 500, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power2.inOut' }, "-=0.4");

      // 4. Bottom Torn Paper slides up
      tl.from('.eco-torn-base', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="eco-section" ref={containerRef}>
      
      {/* Decorative scribbles background */}
      <div className="eco-decor eco-decor-arrow-left">
        <svg width="60" height="80" viewBox="0 0 100 120" fill="none" stroke="#7a2eff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M70 20 Q 30 40 30 90 M 15 75 L 30 90 L 50 80"/>
        </svg>
      </div>
      
      <div className="eco-decor eco-decor-star-right">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#7a2eff" strokeWidth="3" strokeLinejoin="round">
          <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z"/>
        </svg>
      </div>

      <div className="eco-decor eco-decor-dots-right">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#7a2eff" opacity="0.3">
          <circle cx="10" cy="10" r="3"/><circle cx="30" cy="10" r="3"/><circle cx="50" cy="10" r="3"/>
          <circle cx="10" cy="30" r="3"/><circle cx="30" cy="30" r="3"/><circle cx="50" cy="30" r="3"/>
          <circle cx="10" cy="50" r="3"/><circle cx="30" cy="50" r="3"/><circle cx="50" cy="50" r="3"/>
        </svg>
      </div>

      <div className="eco-decor eco-decor-crown">
        <svg width="60" height="40" viewBox="0 0 100 60" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 50 L20 10 L40 30 L50 5 L60 30 L80 10 L90 50 Z"/>
          <circle cx="20" cy="5" r="3" fill="#7a2eff"/><circle cx="50" cy="0" r="3" fill="#7a2eff"/><circle cx="80" cy="5" r="3" fill="#7a2eff"/>
        </svg>
      </div>

      <div className="eco-decor eco-decor-spark-bottom">
        <svg width="50" height="40" viewBox="0 0 100 80" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round">
          <path d="M50 10 L50 30 M20 40 L40 40 M80 40 L60 40 M30 20 L40 30 M70 20 L60 30 M30 60 L40 50 M70 60 L60 50"/>
        </svg>
      </div>

      <div className="eco-decor eco-decor-zigzag-right">
        <svg width="60" height="30" viewBox="0 0 100 50" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 40 L30 10 L50 40 L70 10 L90 40 M90 40 L80 30 M90 40 L75 45"/>
        </svg>
      </div>


      {/* Header */}
      <div className="eco-header">
        <div className="eco-eyebrow">
          <span className="eco-eyebrow-text">OUR GROWTH ECOSYSTEM</span>
          <svg className="eco-eyebrow-rays" width="40" height="40" viewBox="0 0 40 40" stroke="#7a2eff" strokeWidth="3" strokeLinecap="round">
             <path d="M5 20 L2 20 M35 20 L38 20 M20 5 L20 2 M10 10 L7 7 M30 10 L33 7 M10 30 L7 33 M30 30 L33 33"/>
          </svg>
        </div>
        <svg className="eco-header-underline" viewBox="0 0 400 20" preserveAspectRatio="none">
          <path d="M 10 15 Q 200 5 390 12" fill="none" stroke="#7a2eff" strokeWidth="6" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
        </svg>
      </div>

      {/* Grid Layout (3 Columns) */}
      <div className="eco-grid">
        
        {/* Column 1 */}
        <div className="eco-col">
          <div className="eco-col-header">
            <div className="eco-col-icon">
              <Search size={36} strokeWidth={2.5}/>
            </div>
            <div className="eco-col-title-wrap">
              <h3 className="eco-col-heading">SEARCH VISIBILITY<br/>& AI DISCOVERY</h3>
              <svg className="eco-col-underline" viewBox="0 0 150 15" preserveAspectRatio="none">
                <path d="M 0 10 Q 75 2 150 12" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="500" strokeDashoffset="0"/>
              </svg>
            </div>
          </div>
          <ul className="eco-list">
            <li><ChevronRight className="bullet-icon"/> Technical SEO Audits</li>
            <li><ChevronRight className="bullet-icon"/> On-Page SEO Optimization</li>
            <li><ChevronRight className="bullet-icon"/> AI Search Optimization (AEO & GEO)</li>
            <li><ChevronRight className="bullet-icon"/> Content Strategy & Keyword Mapping</li>
            <li><ChevronRight className="bullet-icon"/> Authority Building & Digital PR</li>
            <li><ChevronRight className="bullet-icon"/> Local & Global Search Optimization</li>
            <li><ChevronRight className="bullet-icon"/> SEO Performance Reporting</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="eco-col eco-col-bordered">
          <div className="eco-col-header">
            <div className="eco-col-icon">
              <Megaphone size={36} strokeWidth={2.5}/>
            </div>
            <div className="eco-col-title-wrap">
              <h3 className="eco-col-heading">PERFORMANCE<br/>ADVERTISING</h3>
              <svg className="eco-col-underline" viewBox="0 0 150 15" preserveAspectRatio="none">
                <path d="M 0 5 Q 75 12 150 8" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="500" strokeDashoffset="0"/>
              </svg>
            </div>
          </div>
          <ul className="eco-list">
            <li><ChevronRight className="bullet-icon"/> Google Ads Campaign Management</li>
            <li><ChevronRight className="bullet-icon"/> Meta Ads (Facebook & Instagram)</li>
            <li><ChevronRight className="bullet-icon"/> LinkedIn & YouTube Advertising</li>
            <li><ChevronRight className="bullet-icon"/> Conversion Funnel Optimization</li>
            <li><ChevronRight className="bullet-icon"/> E-commerce Growth Campaigns</li>
            <li><ChevronRight className="bullet-icon"/> ROAS & Revenue Optimization</li>
            <li><ChevronRight className="bullet-icon"/> Landing Page Performance Testing</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="eco-col eco-col-bordered">
          <div className="eco-col-header">
            <div className="eco-col-icon">
              <BarChart3 size={36} strokeWidth={2.5}/>
            </div>
            <div className="eco-col-title-wrap">
              <h3 className="eco-col-heading">GROWTH &<br/>ANALYTICS</h3>
              <svg className="eco-col-underline" viewBox="0 0 150 15" preserveAspectRatio="none">
                <path d="M 0 12 Q 75 2 150 6" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="500" strokeDashoffset="0"/>
              </svg>
            </div>
          </div>
          <ul className="eco-list">
            <li><ChevronRight className="bullet-icon"/> Marketing Automation</li>
            <li><ChevronRight className="bullet-icon"/> Conversion Rate Optimization (CRO)</li>
            <li><ChevronRight className="bullet-icon"/> Analytics & Dashboard Reporting</li>
            <li><ChevronRight className="bullet-icon"/> Customer Journey Tracking</li>
            <li><ChevronRight className="bullet-icon"/> Audience Segmentation</li>
            <li><ChevronRight className="bullet-icon"/> Retargeting & Remarketing</li>
            <li><ChevronRight className="bullet-icon"/> Continuous Campaign Optimization</li>
          </ul>
        </div>

      </div>

      <div className="eco-torn-base"></div>
    </section>
  );
}

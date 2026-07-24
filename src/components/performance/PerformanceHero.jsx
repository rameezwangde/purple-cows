import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import { Target, Search, BarChart3, TrendingUp, ArrowUpRight, Crown, Zap } from 'lucide-react';
import heroImg from '../../assets/images/performance-hero-cow-isolated.png';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceHero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Right Side Composite slides up
      tl.from('.pm-visual-composite', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      }, 0.2);

      // 2. Eyebrow and Subtitle
      tl.from('.pm-top-label', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.4)
        .from('.pm-subtitle', { x: -20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.5);

      // 3. Header reveal
      const splitChars = gsap.utils.toArray('.pm-heading .split-char');
      tl.from(splitChars, {
        y: 100,
        opacity: 0,
        rotationX: -45,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, 0.6);

      // 4. Underline draws
      tl.from('.pm-underline path', {
        strokeDashoffset: 1000,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, 1.2);

      // 5. Supporting Text
      tl.from('.pm-supporting-text', { y: 20, opacity: 0, duration: 0.8 }, 1.4);

      // 6. Feature columns stagger
      tl.from('.pm-feature-col', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.5);

      // 7. Stats stagger
      tl.from('.pm-stat-item', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pm-hero" ref={containerRef}>
      
      {/* LEFT COLUMN (55%) */}
      <div className="pm-hero-left">
        
        <div className="pm-top-label">
          <span className="pm-boost-mark">BOOST</span>
          <span className="pm-slashes">//</span>
        </div>

        <div className="pm-subtitle">
          <span>PERFORMANCE MARKETING, GOOGLE ADS & SEO SERVICES</span>
          <div className="pm-subtitle-line"></div>
        </div>

        <h1 className="pm-heading">
          <SplitText type="chars" text="PERFORMANCE" /><br/>
          <SplitText type="chars" text="MARKETING" /><br/>
          <SplitText type="chars" text="& SEO THAT " />
          <span className="pm-brush-font">
            <SplitText type="chars" text="SCALES." />
            <svg className="pm-underline" viewBox="0 0 200 30" preserveAspectRatio="none">
              <path d="M 5 25 Q 100 5 195 20 M 10 30 Q 90 15 190 28" fill="none" stroke="#7a2eff" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
            </svg>
          </span>
        </h1>

        <p className="pm-supporting-text">
          Data-backed campaigns engineered to <span className="purple-bold">grow visibility</span>, generate qualified leads and deliver measurable business growth.
        </p>

        {/* Features 4-Column Grid */}
        <div className="pm-features-grid">
          <div className="pm-feature-col">
            <div className="pm-feature-icon"><Target size={20} strokeWidth={2.5}/></div>
            <h4>DATA DRIVEN</h4>
            <span className="purple-hl">STRATEGIES</span>
            <p>Strategies powered by analytics, market research and audience insights.</p>
          </div>
          <div className="pm-feature-col">
            <div className="pm-feature-icon"><Search size={20} strokeWidth={2.5}/></div>
            <h4>PERFORMANCE</h4>
            <span className="purple-hl">FOCUSED</span>
            <p>Every campaign optimized for measurable ROI and qualified conversions.</p>
          </div>
          <div className="pm-feature-col">
            <div className="pm-feature-icon"><TrendingUp size={20} strokeWidth={2.5}/></div>
            <h4>GROWTH THAT</h4>
            <span className="purple-hl">SCALES</span>
            <p>From startups to enterprises, we build growth engines that scale with you.</p>
          </div>
          <div className="pm-feature-col">
            <div className="pm-feature-icon"><BarChart3 size={20} strokeWidth={2.5}/></div>
            <h4>SEO THAT</h4>
            <span className="purple-hl">DELIVERS</span>
            <p>Technical SEO, content optimization and authority building designed for long-term visibility.</p>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="pm-stats-grid">
          <div className="pm-stat-item">
            <ArrowUpRight className="pm-stat-icon" size={24} />
            <div className="pm-stat-number">3X+</div>
            <div className="pm-stat-label">ROI GENERATED</div>
            <div className="pm-stat-note">More revenue, less waste.</div>
          </div>
          <div className="pm-stat-item">
            <Crown className="pm-stat-icon" size={24} />
            <div className="pm-stat-number">250+</div>
            <div className="pm-stat-label">CAMPAIGNS LAUNCHED</div>
            <div className="pm-stat-note">Across industries. Across borders.</div>
          </div>
          <div className="pm-stat-item">
            <Zap className="pm-stat-icon" size={24} />
            <div className="pm-stat-number">1M+</div>
            <div className="pm-stat-label">KEYWORDS RANKED</div>
            <div className="pm-stat-note">Higher rankings. Stronger presence.</div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (45%) */}
      <div className="pm-hero-right">
        <div className="pm-visual-composite">
          <div className="pm-hero-right-content">
            <img src={heroImg} alt="Performance Marketing Dashboard" className="pm-raw-composite" />
          </div>
        </div>
      </div>

    </section>
  );
}

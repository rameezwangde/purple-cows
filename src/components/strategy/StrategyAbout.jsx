import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap, Eye, Heart } from 'lucide-react';
import mascotImage from '../../assets/images/strategy-about.jpg';
import '../../styles/strategy-about.css';

gsap.registerPlugin(ScrollTrigger);

export default function StrategyAbout() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      // Add is-visible class for CSS animations when in view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => sectionRef.current.classList.add('is-visible'),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Mascot image fades and slides in
      tl.from('.sa-image-col', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, 0);

      // Header animates in
      tl.from('.sa-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.2);

      // Dotted divider expands
      tl.from('.sa-divider', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power2.out'
      }, 0.5);

      // Grid elements stagger in
      tl.from('.sa-bullet-item', {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.6);

      tl.from('.sa-paragraph', {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.8);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sa-section" ref={sectionRef}>
      <div className="sa-container">
        
        {/* LEFT COLUMN: 3D Mascot Artwork */}
        <div className="sa-image-col">
          <img src={mascotImage} alt="Purple Cow Creative Mascot" className="sa-mascot-image" />
        </div>

        {/* RIGHT COLUMN: Editorial Content */}
        <div className="sa-content-col">
          
          {/* Header */}
          <div className="sa-header">
            <h2 className="sa-brand-title">
              PURPLE <span className="sa-brand-cow">Cow</span>
            </h2>
            <div className="sa-subtitle-row">
              <span className="sa-subtitle">CREATIVE PRODUCTION<br/>AND CONTENT SOLUTIONS</span>
              <div className="sa-divider"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="sa-grid">
            
            {/* Column 1: Bullets */}
            <div className="sa-bullets">
              <div className="sa-bullet-item">
                <Sparkles className="sa-bullet-icon" size={24} strokeWidth={1.5} />
                <div className="sa-bullet-text">
                  <h4>WE DON'T JUST<br/>MAKE CONTENT.</h4>
                  <p>We craft experiences that people remember.</p>
                </div>
              </div>
              <div className="sa-bullet-item">
                <Zap className="sa-bullet-icon" size={24} strokeWidth={1.5} />
                <div className="sa-bullet-text">
                  <h4>WE DON'T JUST<br/>FOLLOW TRENDS.</h4>
                  <p>We set them with bold ideas and fearless storytelling.</p>
                </div>
              </div>
              <div className="sa-bullet-item">
                <Eye className="sa-bullet-icon" size={24} strokeWidth={1.5} />
                <div className="sa-bullet-text">
                  <h4>WE DON'T JUST<br/>SHOOT VIDEOS.</h4>
                  <p>We build emotion, trust and impact—frame by frame.</p>
                </div>
              </div>
              <div className="sa-bullet-item">
                <Heart className="sa-bullet-icon" size={24} strokeWidth={1.5} />
                <div className="sa-bullet-text">
                  <h4>WE DON'T STOP AT<br/>'GOOD ENOUGH'.</h4>
                  <p>We obsess, refine and elevate until it's unforgettable.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Text Block 1 */}
            <div className="sa-text-block">
              <p className="sa-paragraph">
                Purple Cow is where <span className="sa-highlight">creativity meets strategy</span> and stories spark action.
              </p>
              <p className="sa-paragraph">
                From raw ideas to polished content, we build campaigns that cut through the noise and connect with the right audience.
              </p>
              <p className="sa-paragraph">
                Whether it's a brand film, a social reel, or a 360° campaign—we turn concepts into content that performs.
              </p>
            </div>

            {/* Column 3: Text Block 2 */}
            <div className="sa-text-block">
              <p className="sa-paragraph">
                Behind every great story is a team that cares. We collaborate, challenge, and create with passion—giving your brand the attention it deserves.
              </p>
              <p className="sa-paragraph">
                If you're ready to stand out, make an impact and be remembered, you're in the right place.
              </p>
              <p className="sa-paragraph">
                Let's make something <span className="sa-highlight underline">legendary</span> together.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

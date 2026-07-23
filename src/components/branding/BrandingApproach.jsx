import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const approachData = [
  {
    title: 'Brand Strategy',
    icon: (
      <svg width="32" height="32" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M12 2L9 8H15L12 2Z" />
        <path className="draw-path" d="M9 8V14M15 8V14M9 14H15" />
        <path className="draw-path" d="M7 14L5 18H19L17 14H7Z" />
        <path className="draw-path" d="M5 18V22H19V18" />
        <path className="draw-path" d="M7 19H17M7 21H17" strokeWidth="1" />
      </svg>
    ),
    points: [
      'Brand Discovery Workshops', 
      'Market Positioning', 
      'Brand Purpose & Vision', 
      'Audience Personas', 
      'Messaging Framework', 
      'Competitive Analysis'
    ]
  },
  {
    title: 'Visual Identity',
    icon: (
      <svg width="32" height="32" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M12 21a9 9 0 1 1 0-18c1.66 0 3 1.34 3 3s-1.34 3-3 3-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="draw-path" d="M7.5 12h.01M16.5 12h.01M12 7.5h.01" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    points: [
      'Logo Design Systems', 
      'Brand Colour Palette', 
      'Typography Direction', 
      'Brand Guidelines', 
      'Social Media Assets', 
      'Digital Brand Toolkit'
    ]
  },
  {
    title: 'Packaging & Experience',
    icon: (
      <svg width="32" height="32" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path className="draw-path" d="M3.27 6.96L12 12.01l8.73-5.05" />
        <path className="draw-path" d="M12 22.08V12" />
      </svg>
    ),
    points: [
      'Premium Packaging Design', 
      'Product Presentation', 
      'Print & Production Support', 
      'Retail Experience Design', 
      'Launch Campaign Assets', 
      'Brand Evolution Strategy'
    ]
  }
];

export default function BrandingApproach() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      
      gsap.fromTo('.approach-card',
        { y: 60, autoAlpha: 0, rotationX: -15 },
        { 
          y: 0, 
          autoAlpha: 1, 
          rotationX: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          }
        }
      );

      gsap.fromTo('.draw-path',
        { strokeDasharray: 100, strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );

      const cards = gsap.utils.toArray('.approach-card');
      const cleanups = [];
      cards.forEach(card => {
        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          
          gsap.to(card, {
            rotationY: x * 15,
            rotationX: -y * 15,
            transformPerspective: 1000,
            duration: 0.4,
            ease: 'power2.out'
          });
        };
        const onLeave = () => {
          gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: 'power3.out' });
        };
        
        card.addEventListener('pointermove', onMove, { passive: true });
        card.addEventListener('pointerleave', onLeave);
        
        cleanups.push(() => {
          card.removeEventListener('pointermove', onMove);
          card.removeEventListener('pointerleave', onLeave);
        });
      });

      return () => cleanups.forEach(fn => fn());

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 px-6 lg:px-12 bg-[#111111] text-white border-t-[8px] border-black torn-edge-top"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="font-handwritten text-[#7a2eff] text-3xl lg:text-4xl mb-4 transform -rotate-2 w-max border-b-2 border-[#7a2eff] inline-block pb-1">
            our solutions
          </p>
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase mt-4">
            EVERY DETAIL. EVERY TOUCHPOINT. <span className="relative inline-block"><span className="relative z-10">EVERY TIME.</span><svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-[#7a2eff] z-0 pointer-events-none" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none"><path className="draw-path" d="M10,30 C20,10 180,5 190,30 C195,50 30,55 10,30 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {approachData.map((card, index) => (
            <div 
              key={index} 
              className="approach-card bg-[#0a0a0c] border border-gray-900/50 rounded-xl p-8 lg:p-10 flex flex-col relative transform-gpu hover:border-[#7a2eff]/30 transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_rgba(122,46,255,0.1)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#7a2eff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7a2eff] to-[#5d16d1] flex items-center justify-center flex-shrink-0 relative overflow-hidden p-1">
                   <div className="absolute inset-[2px] bg-[#0a0a0c] rounded-full z-0 border border-[#7a2eff]/30"></div>
                   <div className="relative z-10 w-full h-full bg-[#7a2eff] rounded-full flex items-center justify-center">
                     {card.icon}
                   </div>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white border-b-2 border-[#7a2eff]/40 pb-1 w-full">
                  {card.title}
                </h3>
              </div>
              
              <ul className="space-y-4 flex-1">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-[13px] font-medium leading-relaxed">
                    <svg width="18" height="18" className="w-4 h-4 text-[#7a2eff] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" className="opacity-20" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.118 3.121 5.336-5.342-1.058-1.062-4.273 4.292z"/>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

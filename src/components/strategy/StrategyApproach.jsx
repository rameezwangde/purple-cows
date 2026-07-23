import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersectionPause } from '../../hooks/useIntersectionPause';

gsap.registerPlugin(ScrollTrigger);

const approachData = [
  {
    title: 'DISCOVER & DEFINE',
    icon: (
      <svg width="64" height="64" className="w-16 h-16 mx-auto mb-6 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M12 2L9 8H15L12 2Z" />
        <path className="draw-path" d="M9 8V14M15 8V14M9 14H15" />
        <path className="draw-path" d="M7 14L5 18H19L17 14H7Z" />
        <path className="draw-path" d="M5 18V22H19V18" />
        <path className="draw-path" d="M7 19H17M7 21H17" strokeWidth="1" />
      </svg>
    ),
    points: ['Business deep dive', 'Problem framing', 'Opportunity mapping', 'Market understanding', 'Competitive scan', 'Insight mining']
  },
  {
    title: 'DESIGN & PLAN',
    icon: (
      <svg width="64" height="64" className="w-16 h-16 mx-auto mb-6 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle className="draw-path" cx="11" cy="11" r="8" />
        <path className="draw-path" d="M16.5 16.5L22 22" strokeWidth="2" strokeLinecap="round" />
        <circle className="draw-path" cx="11" cy="9" r="2" />
        <path className="draw-path" d="M7 14C7 14 8.5 12 11 12C13.5 12 15 14 15 14" strokeLinecap="round" />
      </svg>
    ),
    points: ['Strategic direction', 'Audience & persona mapping', 'Positioning & messaging', 'Brand blueprint', 'Channel strategy', 'Action roadmap']
  },
  {
    title: 'ACTIVATE & GROW',
    icon: (
      <svg width="64" height="64" className="w-16 h-16 mx-auto mb-6 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle className="draw-path" cx="12" cy="12" r="10" />
        <circle className="draw-path" cx="12" cy="12" r="6" />
        <circle className="draw-path" cx="12" cy="12" r="2" fill="currentColor" />
        <path className="draw-path" d="M12 12L22 2" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M18 2H22V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: ['Campaign & rollout planning', 'Performance frameworks', 'Optimization loops', 'Review & evolve']
  }
];

export default function StrategyApproach() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      
      // Card Stagger Animation
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

      // SVG Drawing Animation
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

      // Card hover 3D tilt logic (optimized, no React state re-renders)
      const cards = gsap.utils.toArray('.approach-card');
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
        
        return () => {
          card.removeEventListener('pointermove', onMove);
          card.removeEventListener('pointerleave', onLeave);
        };
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 px-6 lg:px-12 bg-[#111111] text-white border-t-[8px] border-black torn-edge-top"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)' }} // Fake torn edge
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <p className="font-handwritten text-[#7a2eff] text-3xl lg:text-4xl mb-4 transform -rotate-2 w-max">
            our approach
          </p>
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide uppercase">
            Strategy that builds <span className="border-b-4 border-[#7a2eff] inline-block pb-1">impact</span> and businesses.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {approachData.map((card, index) => (
            <div 
              key={index} 
              className="approach-card bg-[#161618] border border-gray-800 rounded-xl p-8 lg:p-10 flex flex-col relative transform-gpu hover:border-[#7a2eff]/50 transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(122,46,255,0.15)] group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7a2eff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              {card.icon}
              
              <h3 className="text-[#7a2eff] font-display text-2xl uppercase tracking-wider mb-6 text-center">
                {card.title}
              </h3>
              
              <ul className="space-y-4 flex-1">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                    <svg className="w-5 h-5 text-[#7a2eff] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
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

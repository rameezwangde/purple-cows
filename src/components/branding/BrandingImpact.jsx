import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const impactStats = [
  {
    value: 300,
    suffix: '+',
    label: 'BRANDS ELEVATED',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M12 2L15 8.5L22 9.5L17 14.5L18.5 21.5L12 18L5.5 21.5L7 14.5L2 9.5L9 8.5L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    value: 15,
    suffix: '+',
    label: 'CREATIVE SPECIALISTS',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle className="draw-path" cx="9" cy="7" r="4" />
        <path className="draw-path" d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path className="draw-path" d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    value: 40,
    suffix: '+',
    label: 'INDUSTRIES SERVED',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  },
  {
    value: 100,
    suffix: '%',
    label: 'TAILOR-MADE SOLUTIONS',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export default function BrandingImpact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.fromTo('.impact-header > *',
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      )
      
      .fromTo('.draw-path',
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1, stagger: 0.05, ease: 'power2.inOut' },
        "-=0.2"
      )
      
      .fromTo('.stat-item',
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' },
        "-=0.8"
      );

      const counters = gsap.utils.toArray('.stat-number');
      counters.forEach(counter => {
        const targetValue = parseInt(counter.dataset.value, 10);
        gsap.to(counter, {
          innerHTML: targetValue,
          duration: 2,
          ease: 'power3.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%'
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-12 bg-[#F8F6F3] overflow-hidden">
      
      <div className="absolute inset-0 paper-grain opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#7a2eff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-4 impact-header">
          <p className="font-handwritten text-[#7a2eff] text-3xl mb-4 transform -rotate-2 w-max">
            impact
          </p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9] text-[#111111] mb-6">
            GREAT BRANDS<br/>
            CREATE<br/>
            <span className="text-[#7a2eff] border-b-[6px] border-[#7a2eff] inline-block pb-1">GREAT MEMORIES.</span>
          </h2>
          <p className="font-body text-[15px] font-medium text-gray-700 mb-10 max-w-sm">
            Not every business becomes memorable. We build identities that customers recognise instantly, trust naturally and return to repeatedly.
          </p>
          
          <a href="#contact" className="group relative inline-flex items-center gap-4 bg-[#111111] text-white px-8 py-5 font-display text-xl tracking-wider uppercase overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-[#7a2eff] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-[50%_50%_0_0/100%_100%_0_0] group-hover:rounded-none"></span>
            <span className="relative z-10">LET'S BUILD YOUR NEXT ICON</span>
            <span className="relative z-10 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUpRight size={24} strokeWidth={3} />
            </span>
          </a>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center relative z-10">
          {impactStats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-center">
              {stat.icon}
              <div className="font-display text-5xl lg:text-7xl text-[#111111] flex items-end justify-center mb-4">
                <span className="stat-number" data-value={stat.value}>0</span>
                <span className="text-[#7a2eff] text-4xl lg:text-5xl ml-1">{stat.suffix}</span>
              </div>
              <p className="font-body text-[11px] font-[800] uppercase tracking-widest text-gray-500 max-w-[120px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

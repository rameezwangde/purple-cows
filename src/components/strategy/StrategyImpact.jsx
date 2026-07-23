import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const impactStats = [
  {
    value: 200,
    suffix: '+',
    label: 'BRANDS PARTNERED',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M9 11L12 14L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path className="draw-path" d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    value: 10,
    suffix: '+',
    label: 'INDUSTRIES SERVED',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M9 18H15M10 21H14M12 3C8.686 3 6 5.686 6 9C6 11.239 7.227 13.188 9 14.283V15H15V14.283C16.773 13.188 18 11.239 18 9C18 5.686 15.314 3 12 3Z" />
      </svg>
    )
  },
  {
    value: 35,
    suffix: '+',
    label: 'STRATEGISTS & THINKERS',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M13.5 2H22V10.5" strokeLinecap="round" strokeLinejoin="round" />
        <path className="draw-path" d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
        <path className="draw-path" d="M2 22C2 22 5 18 8 18C11 18 14 20 17 20C20 20 22 17 22 17" strokeLinecap="round" />
      </svg>
    )
  },
  {
    value: 100,
    suffix: '%',
    label: 'COMMITMENT TO IMPACT',
    icon: (
      <svg width="56" height="56" className="w-14 h-14 mx-auto mb-4 text-[#7a2eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="draw-path" d="M18 20V10M12 20V4M6 20V14" strokeLinecap="round" strokeLinejoin="round" />
        <path className="draw-path" d="M22 20H2" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function StrategyImpact() {
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

      // 1. Text elements fade in
      tl.fromTo('.impact-header > *',
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      )
      
      // 2. Draw SVG Icons
      .fromTo('.draw-path',
        { strokeDasharray: 100, strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 1, stagger: 0.05, ease: 'power2.inOut' },
        "-=0.2"
      )
      
      // 3. Stats container staggers in
      .fromTo('.stat-item',
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' },
        "-=0.8"
      );

      // Count up animation for stats
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
      
      {/* Background Decor */}
      <div className="absolute inset-0 paper-grain opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#7a2eff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Col: Text & CTA */}
        <div className="lg:col-span-4 impact-header">
          <p className="font-handwritten text-[#7a2eff] text-3xl mb-4 transform -rotate-2 w-max">
            impact
          </p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9] text-[#111111] mb-6">
            Real strategy.<br/>
            Real results.<br/>
            <span className="text-[#7a2eff] border-b-[6px] border-[#7a2eff] inline-block pb-1">No fluff.</span>
          </h2>
          <p className="font-body text-[15px] font-medium text-gray-700 mb-10 max-w-sm">
            Numbers that reflect the partnerships we've proud of and the progress we build together.
          </p>
          
          <a href="#contact" className="group relative inline-flex items-center gap-4 bg-[#111111] text-white px-8 py-5 font-display text-xl tracking-wider uppercase overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300">
            {/* Liquid hover fill */}
            <span className="absolute inset-0 bg-[#7a2eff] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-[50%_50%_0_0/100%_100%_0_0] group-hover:rounded-none"></span>
            <span className="relative z-10">Let's build what's next</span>
            <span className="relative z-10 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUpRight size={24} strokeWidth={3} />
            </span>
          </a>
        </div>

        {/* Right Col: Stats Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {impactStats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-center">
              {stat.icon}
              <div className="font-display text-5xl lg:text-7xl text-[#111111] flex items-end justify-center mb-4">
                <span className="stat-number" data-value={stat.value}>0</span>
                <span className="text-[#7a2eff] text-4xl lg:text-5xl ml-1">{stat.suffix}</span>
              </div>
              <p className="font-body text-xs font-bold uppercase tracking-wider text-gray-500 max-w-[120px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

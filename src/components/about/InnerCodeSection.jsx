import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  { id: 1, title: 'Think Different', desc: 'We challenge the ordinary and embrace the unexpected in everything we do.', x: '2%', y: '0%', delay: 0 },
  { id: 2, title: 'Creativity Before Convention', desc: 'Rules are meant to be broken. We build ideas, not just templates.', x: '40%', y: '2%', delay: 0.1 },
  { id: 3, title: 'Human First', desc: 'Technology serves people. We design for real human emotions and needs.', x: '75%', y: '15%', delay: 0.2 },
  { id: 4, title: 'Curiosity Wins', desc: 'We never stop asking why. The best insights come from relentless curiosity.', x: '0%', y: '35%', delay: 0.3 },
  { id: 5, title: 'Build Bold', desc: 'Safe is risky. We take calculated leaps to create work that demands attention.', x: '75%', y: '45%', delay: 0.4 },
  { id: 6, title: 'Details Matter', desc: 'We obsess over the micro-interactions, the kerning, and the hidden pixels.', x: '5%', y: '75%', delay: 0.5 },
  { id: 7, title: 'Stay Weird', desc: 'Authenticity is our superpower. We bring our full, weird selves to the table.', x: '35%', y: '85%', delay: 0.6 },
  { id: 8, title: 'Own The Outcome', desc: 'We take responsibility. We deliver with pride and stand by our results.', x: '70%', y: '75%', delay: 0.7 },
];

export default function InnerCodeSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      });

      // Background darken slightly
      tl.to(sectionRef.current, { backgroundColor: '#F0EFEA', duration: 1, ease: 'power2.inOut' }, 0);

      // Title animation
      tl.fromTo('.inner-title-word', 
        { y: 50, autoAlpha: 0, rotationX: -45 },
        { y: 0, autoAlpha: 1, rotationX: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
        0.2
      );

      // Underline
      tl.fromTo('.inner-underline path', 
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 1, ease: 'power3.out' },
        0.8
      );

      // Connecting SVG lines draw
      tl.fromTo('.constellation-line', 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.out', stagger: 0.1 },
        0.5
      );

      // Constellation Nodes Reveal
      tl.fromTo('.principle-node',
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'elastic.out(1, 0.6)', stagger: 0.1 },
        0.8
      );

      // Centerpiece Reveal
      tl.fromTo('.centerpiece',
        { y: 100, autoAlpha: 0, scale: 0.8 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
        1
      );

      // Continuous floating animation
      gsap.to('.float-slow', { y: -15, rotation: 2, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.2 });
      gsap.to('.float-fast', { y: -25, rotation: -4, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.3 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen lg:min-h-[120vh] bg-[#F8F6F3] overflow-hidden text-[#111111] py-24 border-t border-gray-300/50">
      
      {/* Lightweight CSS Pattern Background instead of heavy SVG filter */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#F8F6F3] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row relative z-20">
        
        {/* Left Side (35%) */}
        <div className="w-full lg:w-[35%] h-full flex flex-col pt-12 lg:pt-32 relative">
          
          <h2 className="font-display text-7xl lg:text-8xl leading-[0.85] tracking-tight mb-8">
            <div className="overflow-hidden pb-4 -mb-4"><div className="inner-title-word">OUR</div></div>
            <div className="overflow-hidden pb-4 -mb-4"><div className="inner-title-word">INNER</div></div>
            <div className="overflow-hidden relative inline-block pb-6 -mb-6">
              <div className="inner-title-word">CODE.</div>
              <svg className="inner-underline absolute bottom-0 left-0 w-[110%] h-6 text-[#7B2EFF] pointer-events-none" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5 10 Q 50 18 100 8 T 195 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </h2>
          
          <p className="font-body text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-md mt-6">
            We don't do corporate handbooks. We do bold ideas, relentless curiosity, and a little bit of magic. This is the mindset that fuels every Purple Cow creation.
          </p>

          {/* Doodles */}
          <div className="absolute top-1/4 -left-8 float-slow opacity-50"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7B2EFF" strokeWidth="2"><path d="M12 2L22 22L12 18L2 22L12 2Z"/></svg></div>
          <div className="absolute bottom-1/4 right-12 float-fast opacity-40"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="4 4"><circle cx="12" cy="12" r="10"/></svg></div>
        </div>

        {/* Right Side (65%) - Constellation */}
        <div className="w-full lg:w-[65%] h-auto lg:h-[1000px] relative mt-16 lg:mt-0 flex flex-col lg:block items-center">
          
          {/* Connecting SVG Lines */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            <path className="constellation-line" d="M100 100 Q 300 150 500 50" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M500 50 T 800 250" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M800 250 Q 600 450 850 650" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M100 100 T 150 400" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M150 400 Q 400 450 600 450" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M600 450 Q 300 700 450 800" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M150 400 Q 50 600 50 750" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M50 750 Q 200 800 450 800" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
            <path className="constellation-line" d="M450 800 Q 700 750 850 650" fill="none" stroke="#7B2EFF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"/>
          </svg>

          {/* Principle Nodes */}
          <style>{`
            @media (min-width: 1024px) {
              .principle-node {
                left: var(--lg-left) !important;
                top: var(--lg-top) !important;
              }
            }
          `}</style>
          <div className="w-full flex flex-col gap-6 lg:block relative z-20 lg:h-full">
            {principles.map((p, index) => (
              <div 
                key={p.id} 
                className={`principle-node relative lg:absolute group cursor-pointer w-full max-w-[320px] lg:max-w-none lg:w-[220px] z-20 hover:z-50 will-change-transform transform-gpu ${index % 2 === 0 ? 'float-slow' : 'float-fast'} mx-auto lg:mx-0`}
                style={{ '--lg-left': p.x, '--lg-top': p.y }}
              >
                <div className="relative">
                  {/* Glow Halo */}
                  <div className="absolute inset-0 bg-[#7B2EFF] rounded-full blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150"></div>
                  
                  {/* Node Shape */}
                  <div className="relative bg-white border-2 border-black p-4 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm shadow-[8px_8px_0px_#111] group-hover:shadow-[12px_12px_0px_#7B2EFF] group-hover:-translate-y-2 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#7B2EFF]/10 flex items-center justify-center mb-3 text-[#7B2EFF] group-hover:bg-[#7B2EFF] group-hover:text-white transition-colors duration-300">
                       {/* Simplified Icon based on index */}
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         {index === 0 && <g><circle cx="12" cy="12" r="10"/></g>}
                         {index === 1 && <g><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>}
                         {index === 2 && <g><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>}
                         {index === 3 && <g><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>}
                         {index === 4 && <g><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></g>}
                         {index === 5 && <g><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></g>}
                         {index === 6 && <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></g>}
                         {index === 7 && <g><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></g>}
                       </svg>
                    </div>
                    <h3 className="font-display text-xl leading-tight mb-2 uppercase">{p.title}</h3>
                    <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">
                      <p className="font-body text-sm text-gray-600 leading-snug">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Centerpiece (Mascot Placeholder) */}
          <div className="centerpiece relative lg:absolute mt-12 lg:mt-0 top-auto lg:top-1/2 left-auto lg:left-1/2 transform-none lg:-translate-x-1/2 lg:-translate-y-1/2 w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] z-10 pointer-events-none order-first lg:order-none">
            {/* Paint Splash Base */}
            <div className="absolute inset-0 bg-[#7B2EFF] opacity-10 filter blur-[40px] rounded-full scale-125"></div>
            <img src="https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800" alt="Purple Paint Splash" className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-50" style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}/>
            
            {/* Mascot Image Placeholder */}
            <div className="absolute inset-4 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=600" alt="Mascot Placeholder" className="w-[80%] h-[80%] object-cover rounded-full border-4 border-black shadow-[15px_15px_0px_#7B2EFF] float-slow pointer-events-auto"/>
            </div>

            {/* Floating Assets around Mascot */}
            <div className="absolute top-0 right-4 lg:right-10 w-12 h-12 bg-black text-white flex items-center justify-center font-display text-sm rounded-lg rotate-12 float-fast shadow-lg">IDEAS</div>
            <div className="absolute bottom-10 left-0 lg:left-4 w-16 h-16 bg-[#F8F6F3] border-2 border-black flex items-center justify-center font-display text-2xl rounded-full -rotate-12 float-slow shadow-lg">☕</div>
            <div className="absolute top-1/4 -left-2 lg:-left-6 w-10 h-10 bg-yellow-400 rounded-sm rotate-6 float-fast shadow-md"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

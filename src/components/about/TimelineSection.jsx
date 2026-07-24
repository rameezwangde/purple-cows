import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Set path length for dashoffset animation
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      // Initialize stroke properties
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw the timeline line on scroll
      if (pathLength > 0) {
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: '.timeline-container',
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1 // smooth scrubbing
          }
        });
      }

      // 2. Animate the 'story' underline
      gsap.fromTo('.story-underline',
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.timeline-intro', start: 'top 80%' } }
      );

      // 3. Milestone Nodes Reveal
      gsap.utils.toArray('.milestone-node').forEach((node) => {
        gsap.fromTo(node,
          { autoAlpha: 0, y: 40 },
          { 
            autoAlpha: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%'
            }
          }
        );
      });

      // 4. Parallax Elements (Desktop)
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) {
        const move = e => {
          const x = e.clientX / innerWidth - 0.5;
          const y = e.clientY / innerHeight - 0.5;
          
          gsap.to('.parallax-sticky', { x: x * 15, y: y * 15, duration: 1, ease: 'power2.out' });
          gsap.to('.parallax-photo', { x: x * 25, y: y * 25, duration: 1, ease: 'power2.out' });
          gsap.to('.parallax-doodle', { x: x * 20, y: y * 20, duration: 1, ease: 'power2.out' });
        };
        window.addEventListener('pointermove', move);
        return () => window.removeEventListener('pointermove', move);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [pathLength]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 text-white relative overflow-hidden" style={{ background: 'radial-gradient(circle at 0% 0%, #1a1a24 0%, #0d0d12 100%)' }}>
      
      {/* Enhanced Background Texture for the Dark Section (Optimized CSS) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Subtle Purple Glow Top Left */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#7A2EFF] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Intro */}
        <div className="timeline-intro mb-24 lg:mb-32">
          <p className="font-handwritten text-[#7A2EFF] text-2xl lg:text-3xl mb-4 tracking-wider uppercase">Our Journey</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
            MILESTONES<br/>
            THAT MADE<br/>
            US WHO WE ARE.
          </h2>
          <div className="mt-8">
            <p className="font-handwritten text-3xl lg:text-4xl text-gray-300">
              Different minds. One vision.
            </p>
            <p className="font-handwritten text-3xl lg:text-4xl text-gray-300 relative inline-block mt-2">
              Infinite <span className="text-[#7A2EFF]">possibilities.</span>
              <svg className="story-underline absolute -bottom-2 left-0 w-full h-3 text-[#7A2EFF]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 30 10 70 2 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
              </svg>
            </p>
          </div>
        </div>

        {/* The Flowing Timeline Container */}
        <div className="timeline-container relative w-full pt-10 pb-32">
          
          {/* Center SVG Line (Visible mostly on Desktop) */}
          <div className="absolute top-0 bottom-0 left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 lg:w-[200px] h-full pointer-events-none overflow-visible z-0">
             <svg className="w-full h-full text-[#7A2EFF]" viewBox="0 0 200 4000" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
               <path 
                 ref={pathRef}
                 d="M100 0 C 150 200, 50 400, 100 600 C 180 900, 20 1100, 100 1400 C 150 1700, 50 1900, 100 2200 C 180 2500, 20 2700, 100 3000 C 150 3300, 50 3500, 100 3800 L 100 4000"
                 stroke="currentColor" 
                 strokeWidth="3" 
                 fill="none" 
                 vectorEffect="non-scaling-stroke"
               />
             </svg>
          </div>

          <div className="flex flex-col gap-24 lg:gap-0 relative z-10">

            {/* MILESTONE 2009 - Left (Notebook) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px]">
              <div className="w-full lg:w-[45%] flex justify-end pr-0 lg:pr-16 order-2 lg:order-1 mt-6 lg:mt-0">
                <div className="parallax-sticky bg-[#F8F6F2] text-black p-6 shadow-xl transform -rotate-2 relative w-full max-w-[280px]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-purple-500/80 rotate-1"></div>
                  <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600 mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800" alt="Notebook sketch" className="w-full h-full object-cover relative z-10 opacity-90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gray-400 opacity-20 pointer-events-none"></div>
                  </div>
                  <p className="font-handwritten text-xl text-center text-[#7A2EFF]">It all started with an idea.</p>
                </div>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-12 lg:pl-16 order-1 lg:order-3 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2009</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">The Spark</h4>
                <p className="font-body text-gray-400">A bold idea.<br/>A tiny studio.<br/>An even bigger ambition.</p>
              </div>
            </div>

            {/* MILESTONE 2011 - Right (Wireframe) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] text-left lg:text-right pr-0 lg:pr-16 pl-12 lg:pl-0 order-1 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2011</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">First Wins</h4>
                <p className="font-body text-gray-400">Our first projects proved creativity could create momentum.</p>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-0 lg:pl-16 order-2 lg:order-3 mt-6 lg:mt-0 flex justify-start">
                <div className="parallax-photo bg-white p-4 pb-12 shadow-2xl transform rotate-3 relative w-full max-w-[300px] hover:scale-105 hover:-rotate-1 transition-transform duration-300">
                  <div className="absolute -top-4 right-4 text-black"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15 8H9L12 2Z"/><path d="M12 8V22"/></svg></div>
                  <div className="w-full h-40 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800" alt="Website wireframe" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                  </div>
                  <p className="font-handwritten text-lg text-black mt-4 absolute bottom-3">Little steps lead to big beginnings.</p>
                </div>
              </div>
            </div>

            {/* MILESTONE 2013 - Left (Brainstorming) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] flex justify-end pr-0 lg:pr-16 order-2 lg:order-1 mt-6 lg:mt-0">
                <div className="parallax-photo bg-white p-2 shadow-2xl transform -rotate-1 relative w-full max-w-[320px] group">
                  <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=800" alt="Team brainstorming" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 parallax-doodle">
                    <svg className="w-12 h-12 text-[#7A2EFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 3L19 3L16 10L19 17L5 17L8 10L5 3Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-12 lg:pl-16 order-1 lg:order-3 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2013</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">Finding Our Voice</h4>
                <p className="font-body text-gray-400">We stopped following trends.<br/>We started creating them.</p>
              </div>
            </div>

            {/* MILESTONE 2016 - Right (Office) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] text-left lg:text-right pr-0 lg:pr-16 pl-12 lg:pl-0 order-1 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2016</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">Growing Together</h4>
                <p className="font-body text-gray-400">More people. More ideas. More impact.</p>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-0 lg:pl-16 order-2 lg:order-3 mt-6 lg:mt-0 flex justify-start">
                <div className="parallax-sticky bg-[#7A2EFF] text-white p-6 shadow-xl transform rotate-4 relative w-full max-w-[260px] group hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-[150px] bg-white/20 flex items-center justify-center mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office photograph" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
                  </div>
                  <p className="font-handwritten text-2xl text-center">Great teams build great work.</p>
                </div>
              </div>
            </div>

            {/* MILESTONE 2019 - Left (World Map) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] flex justify-end pr-0 lg:pr-16 order-2 lg:order-1 mt-6 lg:mt-0">
                <div className="parallax-photo bg-white p-4 shadow-xl transform -rotate-1 relative w-full max-w-[340px]">
                  <div className="w-full h-[160px] bg-gray-200 flex items-center justify-center overflow-hidden relative border border-gray-300">
                     <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="World map" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
                     {/* Purple Pins */}
                     <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#7A2EFF] rounded-full shadow-lg"></div>
                     <div className="absolute top-[50%] left-[60%] w-3 h-3 bg-[#7A2EFF] rounded-full shadow-lg"></div>
                     <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-[#7A2EFF] rounded-full shadow-lg"></div>
                  </div>
                  <p className="font-handwritten text-xl text-black mt-3 absolute -right-16 top-1/2 transform -rotate-12 bg-white px-2 py-1 shadow-md whitespace-nowrap">New places, bigger dreams.</p>
                </div>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-12 lg:pl-16 order-1 lg:order-3 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2019</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">Thinking Bigger</h4>
                <p className="font-body text-gray-400">Our work reached further than we imagined.</p>
              </div>
            </div>

            {/* MILESTONE 2022 - Right (Laptop) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] text-left lg:text-right pr-0 lg:pr-16 pl-12 lg:pl-0 order-1 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2022</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">Creative Evolution</h4>
                <p className="font-body text-gray-400">Technology became another creative partner.</p>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-0 lg:pl-16 order-2 lg:order-3 mt-6 lg:mt-0 flex justify-start">
                <div className="parallax-photo bg-gradient-to-br from-gray-800 to-black p-3 pb-8 shadow-2xl transform rotate-2 relative w-full max-w-[280px]">
                  <div className="w-full h-[180px] bg-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Laptop showing dashboards" className="w-full h-full object-cover opacity-70" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-16 h-4 bg-[#7A2EFF] rotate-[-10deg]"></div>
                </div>
              </div>
            </div>

            {/* MILESTONE 2024 - Left (Moodboard) */}
            <div className="milestone-node flex flex-col lg:flex-row items-center w-full min-h-[300px] lg:mt-[-50px]">
              <div className="w-full lg:w-[45%] flex justify-end pr-0 lg:pr-16 order-2 lg:order-1 mt-6 lg:mt-0">
                <div className="parallax-sticky bg-[#F8F6F2] p-4 shadow-xl transform -rotate-3 relative w-full max-w-[300px] border border-gray-300 torn-edge-black">
                  <div className="w-full h-[200px] bg-gray-200 grid grid-cols-2 grid-rows-2 gap-1 p-1">
                     <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Moodboard 1" />
                     <div className="bg-[#7A2EFF]/80 flex items-center justify-center p-2"><span className="text-white font-handwritten text-xl rotate-12">Ideas!</span></div>
                     <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Moodboard 2" />
                     <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Moodboard 3" />
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-[10%] justify-center order-2">
                <div className="w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
              </div>
              <div className="w-full lg:w-[45%] pl-12 lg:pl-16 order-1 lg:order-3 relative">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#101014] border-2 border-[#7A2EFF] rounded-full z-10 lg:hidden shadow-[0_0_15px_rgba(122,46,255,0.6)]"></div>
                <h3 className="font-handwritten text-4xl text-[#7A2EFF] mb-2">2024</h3>
                <h4 className="font-display text-3xl mb-3 tracking-wide">Beyond Campaigns</h4>
                <p className="font-body text-gray-400">We stopped creating campaigns.<br/>We started creating experiences.</p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM END - 2026 */}
        <div className="milestone-node text-center pt-16 lg:pt-24 pb-12 flex flex-col items-center justify-center relative z-10">
          
          <div className="w-24 h-24 rounded-full border-2 border-[#7A2EFF] flex items-center justify-center bg-[#101014] shadow-[0_0_30px_rgba(122,46,255,0.4)] mb-12">
            <span className="font-handwritten text-4xl text-white">2026</span>
          </div>

          <h4 className="font-display text-4xl lg:text-5xl mb-8 tracking-wide">What's Next?</h4>

          <div className="bg-[#111111] border border-gray-800 p-8 lg:p-12 max-w-[500px] w-full transform -rotate-1 relative shadow-2xl torn-edge-black">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#7A2EFF]/80 rotate-2"></div>
            
            <p className="font-handwritten text-2xl lg:text-4xl text-gray-300 leading-tight mb-8">
              We don't wait for the future.<br/>
              We <span className="relative inline-block text-white">
                create it.
                <svg className="absolute -inset-2 w-[120%] h-[140%] text-[#7A2EFF] pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M10 25 C 20 5, 80 5, 90 25 C 100 45, 20 45, 10 25 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                </svg>
              </span>
            </p>

            <div className="w-full flex justify-center">
               <svg className="w-8 h-16 text-[#7A2EFF]" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 0 L12 40" strokeDasharray="5 5" />
                 <path d="M6 34 L12 40 L18 34" />
               </svg>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

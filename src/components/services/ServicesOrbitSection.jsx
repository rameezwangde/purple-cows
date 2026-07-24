import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect,useRef } from 'react'
import ServiceOrbit from './ServiceOrbit'
import ServicesStats from './ServicesStats'
gsap.registerPlugin(ScrollTrigger)
export default function ServicesOrbitSection(){
 const sectionRef=useRef(null)
 useLayoutEffect(()=>{const ctx=gsap.context(()=>{gsap.from('.services-reveal',{y:35,opacity:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:sectionRef.current,start:'top 72%',once:true}});gsap.from('.service-orbit-card',{scale:.65,opacity:0,stagger:.08,duration:.55,ease:'back.out(1.5)',scrollTrigger:{trigger:'.service-orbit',start:'top 75%',once:true}});gsap.from('.services-stats',{y:60,opacity:0,duration:.7,scrollTrigger:{trigger:'.services-stats',start:'top 92%',once:true}})},sectionRef);return()=>ctx.revert()},[])
  return <section className="services-section" ref={sectionRef} aria-labelledby="services-heading"><div className="services-caution" aria-hidden="true"><i/><i/><i/><i/></div><div className="services-torn-top" aria-hidden="true"/><div className="services-inner"><div className="services-copy-col"><p className="services-eyebrow services-reveal">What we do</p><h2 id="services-heading" className="services-title services-reveal">Smart thinking.<br/>Bold ideas.<br/><span>Real results.</span></h2><p className="services-body services-reveal">Offering comprehensive <b>digital marketing</b>, <b>SEO services</b>, and <b>web development</b>, we blend creativity and strategy to build powerful brand experiences that drive real <mark>growth.</mark></p><div className="services-actions services-reveal"><a className="services-cta" href="#services">Explore our services <i><ArrowUpRight size={19}/></i></a><p><svg viewBox="0 0 55 28" aria-hidden="true"><path d="M52 5C34 4 27 8 10 20m0 0 5-10M10 20l12 1"/></svg>Everything<br/>your brand<br/>needs to <u>win.</u></p></div></div><ServiceOrbit/></div><ServicesStats/></section>
}
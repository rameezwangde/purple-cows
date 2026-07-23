import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import LocationSection from '../components/contact/LocationSection'
import ContactCTA from '../components/contact/ContactCTA'
gsap.registerPlugin(ScrollTrigger)
export default function Contact(){const root=useRef(null);useLayoutEffect(()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const ctx=gsap.context(()=>{gsap.from('.ct-hero-copy>*',{y:reduced?8:34,opacity:0,stagger:.09,duration:reduced?.2:.65,ease:'power3.out'});gsap.from('.ct-hero-visual>*',{y:reduced?6:30,opacity:0,scale:reduced?1:.96,rotation:reduced?0:2,stagger:.07,duration:reduced?.2:.75,ease:'power3.out'});gsap.utils.toArray('.ct-reveal').forEach(el=>gsap.from(el,{y:reduced?8:38,opacity:0,duration:reduced?.2:.65,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 87%',once:true}}))},root);return()=>ctx.revert()},[]);return <div className="contact-page" ref={root}><Navbar/><main><ContactHero/><section className="ct-contact-split"><ContactForm/><ContactInfoPanel/></section><LocationSection/><ContactCTA/></main><Footer/></div>}
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InsightsHero from '../components/insights/InsightsHero'
import CategoryFilters from '../components/insights/CategoryFilters'
import FeaturedArticle from '../components/insights/FeaturedArticle'
import ArticleGrid from '../components/insights/ArticleGrid'
import NewsletterSection from '../components/insights/NewsletterSection'
import InsightsCTA from '../components/insights/InsightsCTA'
import articles from '../data/articles'
gsap.registerPlugin(ScrollTrigger)
export default function Insights(){const root=useRef(null),[active,setActive]=useState('All'),[query,setQuery]=useState('');const featured=articles.find(a=>a.featured);const filtered=useMemo(()=>articles.filter(a=>!a.featured&&(active==='All'||a.category===active)&&(a.title+' '+a.description).toLowerCase().includes(query.toLowerCase())),[active,query]);useLayoutEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const ctx=gsap.context(()=>{gsap.from('.in-hero-copy>*',{y:reduce?8:34,opacity:0,stagger:.08,duration:reduce?.2:.65,ease:'power3.out'});gsap.from('.in-hero-art img',{scale:reduce?1:.94,opacity:0,duration:reduce?.2:.9,ease:'power3.out'});gsap.from('.in-note,.in-crown',{y:reduce?6:30,rotation:reduce?0:6,opacity:0,stagger:.12,duration:reduce?.2:.6,ease:'back.out(1.4)'});gsap.utils.toArray('.in-reveal').forEach(el=>gsap.from(el,{y:reduce?8:38,opacity:0,duration:reduce?.2:.65,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}))},root);return()=>ctx.revert()},[]);return <div className="insights-page" ref={root}><Navbar/><main><InsightsHero/><CategoryFilters active={active} onFilter={setActive} query={query} onSearch={setQuery}/><div className="in-editorial"><p className="in-section-label">Featured Insight</p><FeaturedArticle article={featured}/><ArticleGrid articles={filtered}/></div><NewsletterSection/><InsightsCTA/></main><Footer/></div>}
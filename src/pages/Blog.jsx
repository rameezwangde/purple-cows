import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Crown, ArrowRight, Send, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoryFilters from '../components/insights/CategoryFilters'
import FeaturedArticle from '../components/insights/FeaturedArticle'
import ArticleGrid from '../components/insights/ArticleGrid'
import { blogArticles, blogCategories } from '../data/blogArticles'
import collage from '../assets/insights/editorial-collage.png'

gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const root = useRef(null)
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const featured = blogArticles.find(a => a.featured)
  const filtered = useMemo(() => 
    blogArticles.filter(a => !a.featured && (active === 'All' || a.category === active) && (a.title + ' ' + a.description).toLowerCase().includes(query.toLowerCase())),
  [active, query])

  useLayoutEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      gsap.from('.in-hero-copy > *', { y: reduce ? 8 : 34, opacity: 0, stagger: .08, duration: reduce ? .2 : .65, ease: 'power3.out' })
      gsap.from('.in-hero-art img', { scale: reduce ? 1 : .94, opacity: 0, duration: reduce ? .2 : .9, ease: 'power3.out' })
      gsap.from('.in-note, .in-crown', { y: reduce ? 6 : 30, rotation: reduce ? 0 : 6, opacity: 0, stagger: .12, duration: reduce ? .2 : .6, ease: 'back.out(1.4)' })
      gsap.utils.toArray('.in-reveal').forEach(el => gsap.from(el, { y: reduce ? 8 : 38, opacity: 0, duration: reduce ? .2 : .65, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="insights-page blog-page" ref={root}>
      <style>{`
        .blog-page .site-header { background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.1); }
        .blog-page .nav-links a { color: #111; }
        .blog-page .brand img { background: transparent; padding: 0; }
        .blog-page .menu-toggle { color: #111; }
        @media (max-width: 900px) {
          .blog-why-section { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 5vw !important; }
        }
        @media (max-width: 600px) {
          .blog-why-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="in-hero" id="top">
          <div className="in-hero-copy">
            <p className="in-eyebrow">Our Blog</p>
            <h1 style={{ fontSize: 'clamp(50px, 6.5vw, 85px)', lineHeight: '0.9', marginBottom: '35px' }}>
              <strong>Marketing Insights</strong>
              <span>That Drive</span>
              <span>Real Growth.</span>
            </h1>
            <p className="in-lede" style={{ marginBottom: '40px', maxWidth: '580px', fontSize: '16px', lineHeight: '1.6' }}>
              Stay ahead of the competition with expert articles on branding, digital marketing, website design, AI, SEO, social media, and business growth. We share practical strategies, emerging trends, and proven techniques that help brands stand out and scale.
            </p>
            <a className="in-scroll" href="#insights-list">Explore Articles <ArrowDown/></a>
          </div>
          <div className="in-hero-art" aria-label="Editorial marketing collage">
            <img src={collage} alt="Marketing collage" loading="eager" fetchPriority="high" />
            <Crown className="in-crown"/>
            <div className="in-note in-note-cream" style={{ width: '220px', left: '8%', top: '20%' }}>
              Practical<br/>Knowledge.<br/>Real Results.<b>?</b>
            </div>
          </div>
        </section>
        
        {/* CATEGORIES */}
        <div id="insights-list">
          <CategoryFilters active={active} onFilter={setActive} query={query} onSearch={setQuery} categories={blogCategories} />
        </div>

        {/* ARTICLES */}
        <div className="in-editorial">
          <p className="in-section-label">Featured Insight</p>
          <FeaturedArticle article={featured} />
          
          <div style={{ marginTop: '75px' }}>
            <p className="in-section-label">Latest Articles</p>
            <ArticleGrid articles={filtered} />
          </div>
        </div>

        {/* WHY READ OUR INSIGHTS */}
        <section className="in-reveal blog-why-section" style={{ padding: '90px 5vw', background: '#0b0b0e', color: '#fff', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '60px', alignItems: 'center' }}>
          <div>
            <p className="in-section-label" style={{ borderBottomColor: '#a95cff', marginBottom: '20px' }}>Why Read Our Insights?</p>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 54px)', fontFamily: 'Georgia, serif', lineHeight: '1.1', marginBottom: '25px', color: '#fff' }}>
              Practical Knowledge.<br/><span style={{ color: '#a95cff' }}>Real Results.</span>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#ddd9e1', maxWidth: '520px' }}>
              Every article is written by marketing professionals who work with real businesses every day. We focus on actionable insights—not theory—so you can apply strategies that improve visibility, generate leads, and grow your business.
            </p>
          </div>
          <div className="blog-why-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 30px' }}>
            {[
              'Modern branding strategies', 'SEO best practices', 
              'Website optimization techniques', 'AI-powered marketing', 
              'Social media growth', 'Lead generation tactics', 
              'Conversion optimization', 'Digital advertising insights', 
              'Business scaling strategies'
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: '500', color: '#f8f6f2' }}>
                <CheckCircle2 size={20} style={{ color: '#7a2eff', flexShrink: 0, marginTop: '2px' }} /> 
                <span style={{ lineHeight: '1.4' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>



        {/* CTA */}
        <section className="in-cta in-reveal">
          <div className="in-cta-still" style={{ flexDirection: 'column', textAlign: 'center', gap: '15px', justifyContent: 'center' }}>
            <div style={{ transform: 'rotate(-4deg)', padding: '20px 30px' }}>Turn Ideas<br/>Into<br/><u>Results.</u> ?</div>
          </div>
          <div>
            <h2>Ready to Turn Ideas Into Results?</h2>
            <p style={{ fontSize: '17px', color: '#4d4750', marginTop: '18px', maxWidth: '520px', lineHeight: '1.6', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
              Reading is the first step. Building a remarkable brand is the next. Whether you're launching a new business or scaling an existing one, our team is here to help you create marketing that gets noticed—and remembered.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <a href="https://wa.me/917840070004" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 25px', background: '#111', color: '#fff', fontWeight: '800', textTransform: 'uppercase', clipPath: 'polygon(2% 6%,98% 0,100% 90%,0 100%)' }}>
              Start Your Project <ArrowRight/>
            </a>
            <a href="/contact" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 25px', background: 'transparent', color: '#111', border: '2px solid #111', fontWeight: '800', textTransform: 'uppercase', clipPath: 'polygon(2% 6%,98% 0,100% 90%,0 100%)' }}>
              Contact Us <ArrowRight/>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

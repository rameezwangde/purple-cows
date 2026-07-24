import React, { useEffect, useRef } from 'react';
import '../styles/work-section.css';

const projects = [
  {
    title: 'Kalamanch.co.in',
    industry: 'Events & Entertainment',
    description: 'A creative events platform showcasing services, portfolio and seamless user experience with strong strong brand presence.',
    url: 'https://kalamanch.co.in',
    image: '/work/kalamanch.png',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  },
  {
    title: 'Medexwear.com',
    industry: 'Healthcare Apparel',
    description: 'E-commerce website for medical apparel with modern design, product focus and smooth shopping experience.',
    url: 'https://medexwear.com',
    image: '/work/medexwear.png',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  },
  {
    title: 'DesignMyDressBharat.com',
    industry: 'Fashion & Custom Clothing',
    description: 'Custom clothing platform offering personalized fashion solutions with elegant design and an immersive user journey.',
    url: 'https://designmydressbharat.com',
    image: '/work/designmydress.png',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  },
  {
    title: 'Pasta Hut',
    industry: 'Restaurant',
    description: 'Restaurant page with engaging design, menu showcase, customer engagement and easy discovery.',
    url: 'https://magicpin.in/New-Delhi/Sector-9/Restaurant/Pasta-Hut/store/2c6c08',
    image: '/work/pastahut.png',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  },
  {
    title: 'MaxHealthcarePremium',
    industry: 'Healthcare',
    description: 'Premium healthcare website designed for trust, accessibility and a seamless user experience.',
    url: 'https://maxhealthcarepremium.vercel.app',
    image: '/work/maxhealthcare.png',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  }
];

const stats = [
  {
    value: '50+',
    label: 'Projects Delivered',
    sublabel: 'Across diverse industries',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    sublabel: 'Long term relationships',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  },
  {
    value: '100%',
    label: 'On-Time Delivery',
    sublabel: 'We value your time',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  },
  {
    value: 'SEO',
    label: 'Optimized Websites',
    sublabel: 'For better visibility & growth',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  },
  {
    value: '24/7',
    label: 'Support',
    sublabel: 'We\'re always here',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  }
];

export default function WorkSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Parallax or intersection observer logic can be added here
  }, []);

  return (
    <section id="work" className="work-section" ref={containerRef}>
      
      {/* Decorative Background Elements */}
      <div className="ws-flight-path">
        <svg viewBox="0 0 500 200" fill="none">
          <path d="M0,100 C150,200 350,0 500,100" stroke="#7a2eff" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
        </svg>
      </div>
      <div className="ws-paper-plane">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#7a2eff" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L3 10.53L9.5 13.5L12 21L14.5 15.5L21 3Z" stroke="#7a2eff" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="ws-container">
        {/* Intro Section */}
        <div className="ws-intro-grid">
          <div className="ws-intro-left">
            <div className="ws-note-wrapper">
              <span className="ws-proud-note">Proud partnerships.</span>
              <svg className="ws-curly-arrow" width="30" height="40" viewBox="0 0 30 40" fill="none">
                <path d="M25,2 C10,10 5,20 15,35" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10,30 L15,35 L20,28" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h2 className="ws-heading">
              BRANDS WE'VE <br />
              <span className="ws-purple">BUILT & GROWN.</span>
            </h2>
            <div className="ws-brush-underline"></div>
          </div>
          
          <div className="ws-intro-right">
            <p>We partner with ambitious businesses and transform ideas into powerful digital experiences that drive real results. Here are some of the brands we've worked with.</p>
            <div className="ws-floating-doodles">
              <span className="ws-doodle-sparkle">✨</span>
              <svg className="ws-doodle-lines" width="40" height="40" viewBox="0 0 40 40">
                <path d="M10,10 L30,30 M30,10 L10,30" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Portfolio Cards Wrapper */}
        <div className="ws-cards-wrapper">
          <div className="ws-cards-scroll">
            {projects.map((project, idx) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="ws-card" key={idx} style={{ '--card-delay': `${idx * 0.1}s` }}>
                <div className="ws-card-browser">
                  <div className="ws-browser-bar">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="ws-card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
                
                <div className="ws-card-body">
                  <div className="ws-card-header">
                    <div className="ws-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {project.iconPath}
                      </svg>
                    </div>
                    <div className="ws-card-title-group">
                      <h3>{project.title}</h3>
                      <span className="ws-industry">{project.industry}</span>
                    </div>
                    <div className="ws-launch-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                  <p className="ws-card-desc">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="ws-stats-strip">
          <div className="ws-stats-title">
            <svg className="ws-swirl" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10,20 C10,10 30,10 30,20 C30,30 20,35 15,25" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15,20 L15,25 L20,25" stroke="#7a2eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h4>RESULTS THAT<br/><span>SPEAK LOUD.</span></h4>
            <div className="ws-thin-underline"></div>
          </div>
          
          <div className="ws-stats-grid">
            {stats.map((stat, idx) => (
              <div className="ws-stat-item" key={idx}>
                <div className="ws-stat-val-group">
                  <div className="ws-stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {stat.iconPath}
                    </svg>
                  </div>
                  <span className="ws-stat-val">{stat.value}</span>
                </div>
                <strong>{stat.label}</strong>
                <p>{stat.sublabel}</p>
              </div>
            ))}
          </div>
          
          <div className="ws-stats-dots"></div>
        </div>
        
      </div>
    </section>
  );
}

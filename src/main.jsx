import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import StrategyPlanning from './pages/StrategyPlanning'
import BrandingPackaging from './pages/BrandingPackaging'
import Contact from './pages/Contact'
import WebAndMobile from './pages/WebAndMobile'
import SocialMedia from './pages/SocialMedia'
import PerformanceMarketing from './pages/PerformanceMarketing'
import OfflineCreative from './pages/OfflineCreative'
import FilmsPhotoshoots from './pages/FilmsPhotoshoots'
import './styles/hero-live.css'
import './styles/services-orbit.css'
import './styles/impact-workspace.css'
import './styles/brand-wall.css'
import './styles/creative-flow.css'
import './styles/footer.css'
import './styles/about.css'
import './styles/services-page.css'
import './styles/insights.css'
import './styles/contact.css'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const routeMeta = {
  '/': { title: 'We Are Purple Cow | Creative Marketing Agency', description: 'We are a premier creative marketing agency offering expert brand strategy, UI/UX web design, and digital marketing services to build brands that stand out.' },
  '/about': { title: 'About Us | We Are Purple Cow', description: 'Learn about Purple Cow, a top digital marketing agency and brand strategy firm offering expert SEO, web design, and digital advertising.' },
  '/work': { title: 'Our Work | We Are Purple Cow', description: 'Explore our portfolio of custom web design, UI/UX, and digital marketing campaigns that drive real results.' },
  '/solutions/strategy-and-planning': { title: 'Strategy & Planning | We Are Purple Cow', description: 'Expert brand strategy consulting, positioning, and marketing strategy to build brands that connect and grow.' },
  '/solutions/branding-and-packaging': { title: 'Branding & Packaging | We Are Purple Cow', description: 'Stand out with our brand identity design and custom packaging design from a leading creative agency.' },
  '/solutions/web-and-mobile': { title: 'Web & Mobile Solutions | We Are Purple Cow', description: 'Custom web design, UI/UX services, and mobile app development that move brands forward.' },
  '/solutions/social-media-management': { title: 'Social Media Management | We Are Purple Cow', description: 'Grow your community with our expert social media marketing and content creation services.' },
  '/solutions/performance-marketing': { title: 'Performance Marketing & SEO | We Are Purple Cow', description: 'Data-driven SEO services, Google Ads, and performance marketing to grow visibility and scale.' },
  '/solutions/offline-creative': { title: 'Offline Creative | We Are Purple Cow', description: 'Tangible print design and OOH advertising that gets noticed and remembered.' },
  '/solutions/films-and-photoshoots': { title: 'Films & Photoshoots | We Are Purple Cow', description: 'Corporate video production and commercial photography that tells your brand story.' },
  '/contact': { title: 'Contact Us | We Are Purple Cow', description: 'Partner with a top creative marketing agency. Contact us for expert brand strategy and digital marketing services.' }
};

function RouteSEO() {
  const location = useLocation();
  const meta = routeMeta[location.pathname] || routeMeta['/'];
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <SmoothScrollProvider>
      <BrowserRouter>
        <RouteSEO />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/solutions/strategy-and-planning" element={<StrategyPlanning/>}/>
          <Route path="/solutions/branding-and-packaging" element={<BrandingPackaging/>}/>
          <Route path="/solutions/web-and-mobile" element={<WebAndMobile/>}/>
          <Route path="/solutions/social-media-management" element={<SocialMedia/>}/>
          <Route path="/solutions/performance-marketing" element={<PerformanceMarketing/>}/>
          <Route path="/solutions/offline-creative" element={<OfflineCreative/>}/>
          <Route path="/solutions/films-and-photoshoots" element={<FilmsPhotoshoots/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </SmoothScrollProvider>
  </HelmetProvider>
)
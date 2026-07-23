import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import StrategyPlanning from './pages/StrategyPlanning'
import BrandingPackaging from './pages/BrandingPackaging'
import Contact from './pages/Contact'
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <SmoothScrollProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/solutions/strategy-and-planning" element={<StrategyPlanning/>}/>
        <Route path="/solutions/branding-and-packaging" element={<BrandingPackaging/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </SmoothScrollProvider>
)
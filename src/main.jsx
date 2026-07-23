import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Insights from './pages/Insights'
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
        <Route path="/services" element={<Services/>}/>
        <Route path="/insights" element={<Insights/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </SmoothScrollProvider>
)
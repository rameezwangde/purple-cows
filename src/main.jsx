import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import './styles/hero-live.css'
import './styles/services-orbit.css'
import './styles/impact-workspace.css'
import './styles/brand-wall.css'
import './styles/creative-flow.css'
import './styles/footer.css'
import './styles/about.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  window.location.pathname === '/about' ? <About /> : <Home />,
)

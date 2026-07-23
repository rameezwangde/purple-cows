import { Menu, X, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrushButton from './BrushButton'
import logo from '../assets/logo/purple-cow-logo-new.jpg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { 
    label: 'Work', 
    to: '#', 
    dropdown: [
      { label: 'Case Studies', to: '#' },
      { label: 'Creative Portfolio', to: '#' },
      { label: 'Campaigns', to: '#' }
    ] 
  },
  { 
    label: 'Solutions', 
    to: '#', 
    dropdown: [
      { label: 'Strategy & Planning', to: '/solutions/strategy-and-planning' },
      { label: 'Branding and Packaging', to: '#' },
      { label: 'Web and Mobile', to: '#' },
      { label: 'Social Media Management', to: '#' },
      { label: 'Performance Marketing and SEO', to: '#' },
      { label: 'Offline Creative', to: '#' },
      { label: 'Films & Photoshoots', to: '#' }
    ] 
  },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 14)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="We Are Purple Cow home">
          <img src={logo} alt="We Are Purple Cow" />
        </Link>
        <div className={`nav-panel ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              link.dropdown ? (
                <div key={link.label} className="relative group flex items-center">
                  <span className="cursor-pointer flex items-center gap-1 font-[800] text-[12px] uppercase tracking-[.05em] py-[14px]">
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] bg-[#111111] border border-gray-800 shadow-[0_20px_40px_rgba(122,46,255,0.15)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 flex flex-col overflow-hidden before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    {link.dropdown.map((dropLink, idx) => (
                      <Link 
                        key={dropLink.label} 
                        to={dropLink.to} 
                        className="relative px-6 py-4 text-[11px] font-[800] text-gray-400 hover:text-white transition-all duration-300 !border-0 uppercase tracking-widest group/item overflow-hidden"
                        onClick={() => setOpen(false)}
                      >
                        {/* Hover Background swipe */}
                        <span className="absolute inset-0 bg-[#7a2eff] transform -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                        
                        {/* Text Content */}
                        <span className="relative z-10 flex items-center gap-3 transform group-hover/item:translate-x-2 transition-transform duration-300">
                          <span className="opacity-0 -ml-4 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all duration-300 text-white font-serif italic text-lg leading-none">&rarr;</span>
                          {dropLink.label}
                        </span>
                        
                        {/* Subtle divider */}
                        {idx !== link.dropdown.length - 1 && (
                          <span className="absolute bottom-0 left-6 right-6 h-[1px] bg-gray-800/50 group-hover/item:opacity-0 transition-opacity z-10"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink 
                  to={link.to} 
                  key={link.label} 
                  onClick={() => setOpen(false)} 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </div>
          <div className="mobile-talk">
            <BrushButton compact>Let's talk</BrushButton>
          </div>
        </div>
        <div className="desktop-talk">
          <BrushButton compact>Let's talk</BrushButton>
        </div>
        <button 
          className="menu-toggle" 
          type="button" 
          aria-label={open ? 'Close menu' : 'Open menu'} 
          aria-expanded={open} 
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  )
}
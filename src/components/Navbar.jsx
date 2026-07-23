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
      { label: 'Strategy & Planning', to: '#' },
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
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col overflow-hidden">
                    {link.dropdown.map(dropLink => (
                      <Link 
                        key={dropLink.label} 
                        to={dropLink.to} 
                        className="px-5 py-3 text-[11px] font-[700] text-gray-700 hover:text-[#7a2eff] hover:bg-gray-50 transition-colors !border-0 uppercase tracking-wider"
                        onClick={() => setOpen(false)}
                      >
                        {dropLink.label}
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
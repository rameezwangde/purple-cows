import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrushButton from './BrushButton'
import logo from '../assets/logo/purple-cow-logo.svg'

const links = ['About Us', 'Work', 'Services', 'Insights', 'Careers', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="We Are Purple Cow home">
          <img src={logo} alt="We Are Purple Cow" />
        </a>

        <div className={`nav-panel ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link} onClick={() => setOpen(false)}>
                {link}
                {link === 'Services' && <ChevronDown size={16} strokeWidth={2.5} aria-hidden="true" />}
              </a>
            ))}
          </div>
          <div className="mobile-talk"><BrushButton compact>Let&apos;s talk</BrushButton></div>
        </div>

        <div className="desktop-talk"><BrushButton compact>Let&apos;s talk</BrushButton></div>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  )
}

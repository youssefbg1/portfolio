import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll to section logic when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Adding a slight timeout to ensure render if navigating from another page
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navItems = [
    { label: 'ABOUT', href: '/#about' },
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'EXPERIENCE', href: '/#experience' },
    { label: 'SKILLS', href: '/#skills' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="text-heading" style={{ fontSize: '1.5rem', letterSpacing: '-0.05em', color: 'var(--text-light)' }}>
        YBG
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="nav-links">
        {navItems.map((item, idx) => (
          <Link 
            key={item.label} 
            to={item.href} 
            className="text-label interactive-block"
            style={{ padding: '0.25rem 0' }}
          >
            <span className="text-accent" style={{ marginRight: '0.5rem' }}>0{idx + 1}</span> 
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-btn text-label clip-br" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-expanded={isMobileOpen}
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isMobileOpen && (
        <nav className="mobile-nav">
          {navItems.map((item, idx) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="text-label"
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="text-accent" style={{ marginRight: '0.5rem' }}>0{idx + 1}</span> 
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Send } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="brand-name">Vimal R K</span>
            <span className="navbar-brand-badge">CS Eng</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <a
              href="#contact"
              className="btn btn-primary btn-contact-desktop"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact Me
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span>{item.label}</span>
              {activeSection === item.href.slice(1) && <span className="active-dot"></span>}
            </a>
          ))}
        </div>

        <div className="mobile-nav-actions">
          <a
            href="/Vimal_Resume.pdf"
            download="Vimal_RK_Resume.pdf"
            className="btn btn-secondary mobile-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={16} />
            <span>Resume PDF</span>
          </a>
          <a
            href="#contact"
            className="btn btn-primary mobile-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <Send size={16} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}

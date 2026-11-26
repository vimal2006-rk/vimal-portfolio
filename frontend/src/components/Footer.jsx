import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-content">
          <div>
            <span style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1.05rem', marginRight: '0.75rem' }}>
              Vimal R K
            </span>
            <span className="footer-copyright">
              &copy; {new Date().getFullYear()} &bull; Computer Science Engineering &bull; K.L.N. College of Engineering
            </span>
          </div>

          <div className="footer-links">
            <a href="https://github.com/Vimal4567" target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/vimal-r-k" target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="mailto:vimalruppa06@gmail.com" className="footer-link">
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="footer-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

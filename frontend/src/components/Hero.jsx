import React from 'react';
import { Download, Mail, ArrowRight, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profilePhoto from '../assets/images/profile.jpg';

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Software Development Roles &amp; Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profile?.name || 'Vimal R K'}</span>
            </h1>

            <div className="hero-role-banner">
              <span>Computer Science Engineering Student</span>
              <span style={{ color: 'var(--text-dim)' }}>&bull;</span>
              <span>Aspiring Software Developer</span>
            </div>

            <p className="hero-summary">
              Computer Science Engineering student at <strong>K.L.N. College of Engineering</strong> (CGPA: 7.84). 
              Experienced in building practical applications with <strong>Python, React.js, Node.js, Express, and Machine Learning</strong>. 
              Focused on writing clean, scalable, real-world code.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>Explore Featured Projects</span>
                <ArrowRight size={17} />
              </a>
              <a
                href="/Vimal_Resume.pdf"
                download="Vimal_RK_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="hero-proof-bar">
              <div className="proof-item">
                <span className="proof-value">7.84</span>
                <span className="proof-label">Engineering CGPA</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'var(--border-subtle)' }}></div>
              <div className="proof-item">
                <span className="proof-value">2 Months</span>
                <span className="proof-label">Internship Experience</span>
              </div>
              <div style={{ width: '1px', height: '36px', background: 'var(--border-subtle)' }}></div>
              <div className="proof-item">
                <span className="proof-value">3+</span>
                <span className="proof-label">Core Systems Built</span>
              </div>
            </div>
          </div>

          <div className="hero-portrait-card">
            <div className="portrait-frame">
              <img
                src={profilePhoto}
                alt="Vimal R K - Software Developer"
                className="portrait-img"
                loading="eager"
              />
              <div className="portrait-floating-tag">
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Vimal R K</div>
                  <div style={{ fontSize: '0.775rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    B.E. CSE (2023–2027)
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <a
                    href="https://github.com/Vimal4567"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ffffff', background: 'rgba(255,255,255,0.1)', padding: '6px', borderRadius: '6px', display: 'flex' }}
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vimal-r-k"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#38bdf8', background: 'rgba(56,189,248,0.1)', padding: '6px', borderRadius: '6px', display: 'flex' }}
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

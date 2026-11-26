import React from 'react';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-indicator"></span>
              <span>Available for Software Development Internship</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm {profile?.name || 'Vimal R K'}
            </h1>

            <p className="hero-role">
              {profile?.role || 'Computer Science Engineering Student | Aspiring Software Developer'}
            </p>

            <p className="hero-description">
              {profile?.summary ||
                'Computer Science Engineering student with practical knowledge of Python, AI, Machine Learning, JavaScript, HTML, CSS, Bootstrap, and MongoDB. Seeking a Software Developer Internship to apply my skills and gain real-world experience.'}
            </p>

            <div className="hero-button-group">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
              <a
                href="/Vimal_Resume.pdf"
                download="Vimal_RK_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={17} />
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={17} />
                Contact Me
              </a>
            </div>

            <div className="hero-social-links">
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                CONNECT:
              </span>
              <a
                href={profile?.github || 'https://github.com/Vimal4567'}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={profile?.linkedin || 'https://linkedin.com/in/vimal-r-k'}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <span className="hero-social-link" style={{ cursor: 'default' }}>
                <MapPin size={18} />
                <span>{profile?.location || 'Madurai, Tamil Nadu'}</span>
              </span>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-frame">
              <img
                src="/profile.jpg"
                alt="Vimal R K - Software Developer"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-caption">
                <span>Vimal R K</span>
                <span>B.E. CSE (2023–2027)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

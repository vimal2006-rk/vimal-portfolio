import React from 'react';
import { User, Code2, GraduationCap, Target } from 'lucide-react';

export default function About({ profile }) {
  return (
    <section id="about" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer mindset grounded in core fundamentals, academic rigor, and hands-on coding.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an aspiring Software Developer currently pursuing my <strong>Bachelor of Engineering in Computer Science and Engineering</strong> at <strong>K.L.N. College of Engineering, Tamil Nadu</strong> (2023 – 2027, CGPA: 7.84/10).
            </p>
            <p>
              My programming journey is rooted in writing clean, practical code using <strong>Python, Java, and C</strong>. I enjoy building practical web applications across the full stack with <strong>HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express, and MongoDB</strong>, while exploring intelligent systems through <strong>OpenCV, Machine Learning, and Generative AI</strong>.
            </p>
            <p>
              Currently, I am actively sharpening my knowledge in <strong>Java and Object-Oriented Programming (OOP) concepts</strong> alongside expanding into <strong>React.js, C#, and .NET</strong>. My goal is to build secure, scalable, and human-friendly software solutions that solve real-world problems.
            </p>
            <p>
              Having recently completed a practical 2-month <strong>Software Development Internship at DigiTechzo</strong>, I am actively seeking a Software Developer Internship opportunity where I can contribute to meaningful engineering tasks, learn under experienced mentors, and grow professionally.
            </p>
          </div>

          <div className="about-details-card">
            <div className="about-detail-item">
              <span className="detail-label">Current Status</span>
              <span className="detail-value">B.E. Computer Science & Engineering</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-label">Institution</span>
              <span className="detail-value">K.L.N. College of Engineering, TN</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-label">Current Academic Standing</span>
              <span className="detail-value">CGPA: 7.84 / 10.0</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-label">Primary Location</span>
              <span className="detail-value">Madurai, Tamil Nadu, India</span>
            </div>
            <div className="about-detail-item">
              <span className="detail-label">Core Interests</span>
              <span className="detail-value">Full Stack Dev, Machine Learning, OOP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

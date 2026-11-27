import React from 'react';
import { User, Code2, GraduationCap, Target } from 'lucide-react';

export default function About({ profile }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Background &amp; Focus</span>
          <h2 className="section-heading">About Me</h2>
          <p className="section-lead">
            A developer mindset grounded in core fundamentals, academic rigor, and hands-on coding.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-paragraphs">
            <p>
              I am an aspiring Software Developer currently pursuing my <strong>Bachelor of Engineering in Computer Science and Engineering</strong> at <strong>K.L.N. College of Engineering, Tamil Nadu</strong> (2023 – 2027, CGPA: 7.84/10).
            </p>
            <p>
              My programming foundation is built upon writing clean, reliable code with <strong>Python, Java, and C</strong>. I build practical full-stack web applications using <strong>React.js, Node.js, Express.js, MongoDB, JavaScript, and Bootstrap 5</strong>, while engineering intelligent systems through <strong>OpenCV, Machine Learning, and Generative AI</strong>.
            </p>
            <p>
              I am actively expanding my capabilities in <strong>Java Object-Oriented Programming (OOP)</strong> and currently learning <strong>C# and .NET</strong> to strengthen software architecture and system design skills.
            </p>
            <p>
              Having recently completed a practical 2-month <strong>Software Development Internship at DigiTechzo</strong>, I am actively seeking an internship opportunity where I can contribute to meaningful engineering tasks, learn under experienced mentors, and grow professionally.
            </p>
          </div>

          <div className="about-metrics-card">
            <div className="metric-row">
              <span className="metric-kicker">Academic Degree</span>
              <span className="metric-title">B.E. Computer Science &amp; Engineering</span>
            </div>
            <div className="metric-row">
              <span className="metric-kicker">Institution</span>
              <span className="metric-title">K.L.N. College of Engineering, Tamil Nadu</span>
            </div>
            <div className="metric-row">
              <span className="metric-kicker">Academic Standing</span>
              <span className="metric-title">CGPA: 7.84 / 10.0</span>
            </div>
            <div className="metric-row">
              <span className="metric-kicker">Location</span>
              <span className="metric-title">Madurai, Tamil Nadu, India</span>
            </div>
            <div className="metric-row">
              <span className="metric-kicker">Specialization</span>
              <span className="metric-title">Full Stack Web &amp; Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

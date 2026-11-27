import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Academic Credentials</span>
          <h2 className="section-heading">Education</h2>
          <p className="section-lead">
            Strong academic consistency focused on Computer Science fundamentals and analytical problem-solving.
          </p>
        </div>

        <div className="education-tree">
          {education?.map((item) => (
            <div key={item.id} className="tree-node">
              <div className="tree-dot"></div>
              <div className="tree-content-card">
                <div className="tree-year">{item.period}</div>
                <h3 className="tree-degree">{item.degree}</h3>
                <div className="tree-school">{item.institution}</div>
                <div>
                  <span className="tree-score-badge">{item.score}</span>
                </div>
                {item.details && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.6 }}>{item.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Academic Qualifications</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Consistent academic progression with focus on Computer Science and analytical rigor.
          </p>
        </div>

        <div className="education-timeline">
          {education?.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <div className="timeline-institution">{item.institution}</div>
                <div className="timeline-score">{item.score}</div>
                {item.details && <p className="timeline-details">{item.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Internship({ experience }) {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Career Experience</span>
          <h2 className="section-heading">Internship Experience</h2>
          <p className="section-lead">
            Hands-on software development exposure within an industry team environment.
          </p>
        </div>

        <div className="timeline-card-wrapper">
          {experience?.map((item) => (
            <div key={item.id} className="timeline-experience-card">
              <div className="exp-header-row">
                <div>
                  <h3 className="exp-role">{item.role}</h3>
                  <div className="exp-company">
                    <strong>{item.company}</strong> &bull; Madurai / Hybrid
                  </div>
                </div>
                <span className="exp-badge">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.period} ({item.duration})
                </span>
              </div>

              <ul className="exp-bullets">
                {item.highlights?.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

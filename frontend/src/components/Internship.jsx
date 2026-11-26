import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Internship({ experience }) {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Professional History</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on software development exposure within an industry team environment.
          </p>
        </div>

        <div className="experience-container">
          {experience?.map((item) => (
            <div key={item.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <div className="experience-company">
                    <strong>{item.company}</strong> &bull; Madurai / Hybrid
                  </div>
                </div>
                <span className="experience-duration">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.period} ({item.duration})
                </span>
              </div>

              <ul className="experience-highlights">
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

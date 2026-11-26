import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Continuous Learning</span>
          <h2 className="section-title">Certifications &amp; Training</h2>
          <p className="section-subtitle">
            Formal technical certifications strengthening core programming and cloud paradigms.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications?.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div>
                <div className="cert-year-tag">{cert.year}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.organization || cert.issuer}</div>
                <p className="cert-description">{cert.description}</p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <CheckCircle size={14} />
                <span>Verified Curriculum Completion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

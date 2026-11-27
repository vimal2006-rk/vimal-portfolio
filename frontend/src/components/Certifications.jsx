import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Recognitions</span>
          <h2 className="section-heading">Certifications &amp; Training</h2>
          <p className="section-lead">
            Formal technical certifications strengthening core programming and cloud paradigms.
          </p>
        </div>

        <div className="cert-grid">
          {certifications?.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {cert.year}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-hero)', marginBottom: '0.35rem' }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {cert.organization || cert.issuer}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
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

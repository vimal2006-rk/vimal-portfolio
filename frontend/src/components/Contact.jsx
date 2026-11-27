import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { sendContactMessage } from '../services/api';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Please fill out all fields before submitting.' });
      return;
    }

    setLoading(true);
    setFeedback({ type: null, message: '' });

    try {
      const response = await sendContactMessage(formData);
      setFeedback({
        type: 'success',
        message: response.message || 'Message acknowledged successfully. Thank you for reaching out!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFeedback({
        type: 'error',
        message: 'Could not connect to the API. You can directly reach out to vimalruppa06@gmail.com.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Inquiries &amp; Hiring</span>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-lead">
            Open to software developer internship opportunities, collaborative projects, or engineering discussions.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-hero)', marginBottom: '0.65rem', fontWeight: 700 }}>
              Direct Channels
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Feel free to reach out directly via email or professional profiles. I respond to internship queries promptly.
            </p>

            <div className="contact-channels">
              <a href="mailto:vimalruppa06@gmail.com" className="channel-card">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-kicker">Email Address</div>
                  <div className="channel-value">{profile?.email || 'vimalruppa06@gmail.com'}</div>
                </div>
              </a>

              <a
                href={profile?.linkedin || 'https://linkedin.com/in/vimal-r-k'}
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >
                <div className="channel-icon-wrap">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="channel-kicker">LinkedIn Profile</div>
                  <div className="channel-value">linkedin.com/in/vimal-r-k</div>
                </div>
              </a>

              <a
                href={profile?.github || 'https://github.com/Vimal4567'}
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >
                <div className="channel-icon-wrap">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="channel-kicker">GitHub Repositories</div>
                  <div className="channel-value">github.com/Vimal4567</div>
                </div>
              </a>

              <div className="channel-card" style={{ cursor: 'default' }}>
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-kicker">Location</div>
                  <div className="channel-value">{profile?.location || 'Madurai, Tamil Nadu, India'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-hero)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Send a Direct Note
            </h3>

            {feedback.message && (
              <div style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.25rem',
                fontSize: '0.9rem',
                backgroundColor: feedback.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${feedback.type === 'success' ? '#10b981' : '#ef4444'}`,
                color: feedback.type === 'success' ? '#34d399' : '#f87171'
              }}>
                {feedback.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group-field">
                <label htmlFor="name" className="form-field-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="form-control-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label htmlFor="email" className="form-field-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. ramesh@example.com"
                  className="form-control-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label htmlFor="subject" className="form-field-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer Internship"
                  className="form-control-input"
                  required
                />
              </div>

              <div className="form-group-field">
                <label htmlFor="message" className="form-field-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your note or question here..."
                  className="form-control-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

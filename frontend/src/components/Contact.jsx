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
    <section id="contact" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Let's Connect</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to software developer internship opportunities and collaborative development projects.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
              Direct Communication Channels
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Feel free to connect directly via email or professional profiles. I respond to internship queries promptly.
            </p>

            <div className="contact-info-list">
              <a href="mailto:vimalruppa06@gmail.com" className="contact-info-item">
                <Mail size={20} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">{profile?.email || 'vimalruppa06@gmail.com'}</div>
                </div>
              </a>

              <a
                href={profile?.linkedin || 'https://linkedin.com/in/vimal-r-k'}
                target="_blank"
                rel="noreferrer"
                className="contact-info-item"
              >
                <LinkedinIcon size={20} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">LinkedIn</div>
                  <div className="contact-info-value">linkedin.com/in/vimal-r-k</div>
                </div>
              </a>

              <a
                href={profile?.github || 'https://github.com/Vimal4567'}
                target="_blank"
                rel="noreferrer"
                className="contact-info-item"
              >
                <GithubIcon size={20} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">GitHub</div>
                  <div className="contact-info-value">github.com/Vimal4567</div>
                </div>
              </a>

              <div className="contact-info-item" style={{ cursor: 'default' }}>
                <MapPin size={20} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">{profile?.location || 'Madurai, Tamil Nadu, India'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Send a Message
            </h3>

            {feedback.message && (
              <div className={`form-alert ${feedback.type}`}>
                {feedback.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. ramesh@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer Internship Opportunity"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your note or role description..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Transmitting...</span>
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

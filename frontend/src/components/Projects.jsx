import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Applied Work &amp; Code</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-lead">
            Production-focused implementations across computer vision, full-stack commerce, and object-oriented architectures.
          </p>
        </div>

        <div className="projects-grid">
          {projects?.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <div className="project-meta-kicker">{project.category}</div>
                <h3 className="project-heading">{project.title}</h3>
                <p className="project-body">{project.description}</p>

                <ul className="project-feature-list">
                  {project.features?.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-bottom-bar">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    SOURCE CODE VERIFIED
                  </span>
                  <a
                    href={project.githubUrl || 'https://github.com/Vimal4567'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
                    title="View GitHub repository"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

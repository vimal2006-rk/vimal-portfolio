import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects }) {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Work &amp; Implementation</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Demonstrating applied knowledge across AI computer vision, full-stack web platforms, and core OOP systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects?.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features?.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tech-tags">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    ACADEMIC &amp; PERSONAL
                  </span>
                  <a
                    href={project.githubUrl || 'https://github.com/Vimal4567'}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                    title="View GitHub repository"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
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

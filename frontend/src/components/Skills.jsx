import React from 'react';
import { Terminal, Globe, Database, Cpu, Library, Wrench, Sparkles } from 'lucide-react';

export default function Skills({ skills }) {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={20} className="category-icon" />,
      items: skills?.programming || ['Python', 'Java', 'C']
    },
    {
      title: 'Web Development',
      icon: <Globe size={20} className="category-icon" />,
      items: skills?.webDevelopment || ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5']
    },
    {
      title: 'Database',
      icon: <Database size={20} className="category-icon" />,
      items: skills?.database || ['MongoDB']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu size={20} className="category-icon" />,
      items: skills?.aiMl || ['Machine Learning', 'Generative AI']
    },
    {
      title: 'Libraries & Data Toolkits',
      icon: <Library size={20} className="category-icon" />,
      items: skills?.libraries || ['OpenCV', 'NumPy', 'Pandas']
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={20} className="category-icon" />,
      items: skills?.tools || ['Git', 'GitHub', 'Visual Studio']
    },
    {
      title: 'Currently Learning',
      icon: <Sparkles size={20} className="category-icon" />,
      items: skills?.currentlyLearning || ['React.js', 'C#', '.NET'],
      isLearning: true
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Organized proficiency across programming, web architecture, and emerging systems.
          </p>
        </div>

        <div className="skills-category-grid">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`skills-category-card ${cat.isLearning ? 'learning' : ''}`}
            >
              <div className="category-header">
                {cat.icon}
                <h3 className="category-title">{cat.title}</h3>
              </div>

              <div className="skills-badge-list">
                {cat.items.map((skill) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <span key={skillName} className="skill-pill">
                      {skillName}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

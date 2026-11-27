import React from 'react';
import { Terminal, Globe, Database, Cpu, Library, Wrench, Sparkles } from 'lucide-react';

export default function Skills({ skills }) {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={19} className="skills-group-icon" />,
      items: skills?.programming || ['Python', 'Java', 'C']
    },
    {
      title: 'Web Development',
      icon: <Globe size={19} className="skills-group-icon" />,
      items: skills?.webDevelopment || ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5']
    },
    {
      title: 'Database',
      icon: <Database size={19} className="skills-group-icon" />,
      items: skills?.database || ['MongoDB']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu size={19} className="skills-group-icon" />,
      items: skills?.aiMl || ['Machine Learning', 'Generative AI']
    },
    {
      title: 'Libraries & Data Toolkits',
      icon: <Library size={19} className="skills-group-icon" />,
      items: skills?.libraries || ['OpenCV', 'NumPy', 'Pandas']
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={19} className="skills-group-icon" />,
      items: skills?.tools || ['Git', 'GitHub', 'Visual Studio']
    },
    {
      title: 'Currently Learning',
      icon: <Sparkles size={19} className="skills-group-icon" />,
      items: skills?.currentlyLearning || ['React.js', 'C#', '.NET']
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Technical Toolkit</span>
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-lead">
            Clean categorization across systems programming, full-stack web, and computer vision toolsets.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skills-group-card">
              <div className="skills-group-header">
                {cat.icon}
                <h3 className="skills-group-title">{cat.title}</h3>
              </div>

              <div className="skills-pill-wrap">
                {cat.items.map((skill) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <span key={skillName} className="skill-tag">
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

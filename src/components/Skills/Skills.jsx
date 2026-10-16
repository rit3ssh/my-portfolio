// src/components/Skills/Skills.jsx
import React from 'react';
import { SkillsInfo } from '../../constants';

const Skills = ({ active, closeMenu }) => (
  <section
    id="skills"
    data-section="skills"
    className={`full-section gray reveal ${active === 'skills' ? 'visible' : ''}`}
  >
    <div className="section-inner">
      <div className="section-header reveal">
        <p className="eyebrow">What I Work With</p>
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-desc">
          A concise list of technologies and tools I use regularly.
        </p>
      </div>

      <div className="skills-grid reveal stagger">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>Fresher-level familiarity — I can learn and apply these tools quickly.</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid var(--bg-200)',
                    background: 'var(--bg-50)',
                    fontSize: '0.82rem',
                    color: 'var(--ink-600)',
                    maxWidth: '100%',
                  }}
                >
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        height: '14px',
                        width: '14px',
                        flexShrink: 0,
                        borderRadius: '3px',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

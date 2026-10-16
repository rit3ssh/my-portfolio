import React, { useMemo } from 'react';
import { education } from '../../constants';

const Education = ({ active, closeMenu }) => {
  const orderedEducation = useMemo(
    () => [...education].sort((a, b) => a.order - b.order),
    []
  );

  return (
    <section
      id="education"
      data-section="education"
      className={`full-section white reveal ${active === 'education' ? 'visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-desc">
            From school to university — the roadmap behind the skills.
          </p>
        </div>

        <div className="timeline reveal stagger">
          <svg
            className="timeline-path"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="timeline-path-depth timeline-path-desktop"
              d="M50 0 C15 90 15 210 50 330 C85 450 85 540 50 660 C15 780 15 900 50 1000"
            />
            <path
              className="timeline-path-desktop"
              d="M50 0 C15 90 15 210 50 330 C85 450 85 540 50 660 C15 780 15 900 50 1000"
            />
            <path
              className="timeline-path-highlight timeline-path-desktop"
              d="M50 0 C15 90 15 210 50 330 C85 450 85 540 50 660 C15 780 15 900 50 1000"
            />
            <path
              className="timeline-path-depth timeline-path-mobile"
              d="M4 0 C-10 90 -10 210 4 330 C18 450 18 540 4 660 C-10 780 -10 900 4 1000"
            />
            <path
              className="timeline-path-mobile"
              d="M4 0 C-10 90 -10 210 4 330 C18 450 18 540 4 660 C-10 780 -10 900 4 1000"
            />
            <path
              className="timeline-path-highlight timeline-path-mobile"
              d="M4 0 C-10 90 -10 210 4 330 C18 450 18 540 4 660 C-10 780 -10 900 4 1000"
            />
          </svg>
          <div className="timeline-items">
            {orderedEducation.map((edu) => {
              return (
                <div key={edu.id} className="timeline-item reveal">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">{edu.date}</span>
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <p className="timeline-company">{edu.location}</p>

                    <div className="timeline-details">
                      <p><strong>Institution:</strong> {edu.school}</p>
                      <p><strong>Result:</strong> {edu.grade}</p>
                      <p>{edu.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

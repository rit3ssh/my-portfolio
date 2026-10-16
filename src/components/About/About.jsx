import React from 'react';
import profileImage from '../../assets/profile2.jpg';
import riteshCV from '../../assets/cv/Ritesh_Sahani_CV.pdf';

const About = ({ active, closeMenu }) => {
  return (
    <section
      id="about"
      data-section="about"
      className={`full-section black reveal ${active === 'about' ? 'visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-desc">
            A Computer Engineering graduate building practical software and seeking opportunities to grow.
          </p>
        </div>

        <div className="about-grid reveal stagger">
          <div className="about-image">
            <img src={profileImage} alt="Ritesh Sahani" />
          </div>

          <div className="about-text">
            <h3>Hello, I’m Er. Ritesh Sahani</h3>
            <p>
              I’m a Computer Engineering graduate from Purwanchal Engineering Campus, Dharan,
              with a foundation in operating systems, databases, algorithms, networks, and AI/ML.
              I use modern technologies to build practical, reliable applications.
            </p>
            <p>
              I’m a quick learner and collaborative developer currently seeking an entry-level role
              where I can contribute, learn, and grow with a strong team.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); closeMenu?.(); }}>
                Get in touch
              </a>
              <a href={riteshCV} download="rs_CV.pdf" className="btn btn-primary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../constants';

const Work = ({ active }) => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsSpaceRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateActiveProject = () => {
      ticking = false;
      const projectsSpace = projectsSpaceRef.current;
      if (!projectsSpace) return;

      const distanceScrolled = Math.max(0, -projectsSpace.getBoundingClientRect().top);
      const scrollStep = window.innerWidth <= 768
        ? window.innerHeight * 1.35
        : window.innerHeight * 1.6;
      const nextProject = Math.min(
        projects.length - 1,
        Math.floor(distanceScrolled / scrollStep)
      );

      setActiveProject((currentProject) => (
        currentProject === nextProject ? currentProject : nextProject
      ));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveProject);
      }
    };

    updateActiveProject();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveProject);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveProject);
    };
  }, []);

  const project = projects[activeProject];

  return (
    <section
      id="work"
      data-section="work"
      className={`full-section black reveal ${active === 'work' ? 'visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">
            Scroll through a few practical projects built with clean interfaces and useful functionality.
          </p>
        </div>

        <div
          ref={projectsSpaceRef}
          className="projects-scroll-space"
          style={{ '--project-count': projects.length }}
        >
          <div className="project-stage">
            <article key={project.id} className="project-card project-switch">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-content">
                <p className="project-label">Featured project</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    View code <span aria-hidden="true">↗</span>
                  </a>
                  <a href={project.webapp} target="_blank" rel="noreferrer">
                    Live project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

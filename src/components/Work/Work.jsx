import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    const container = carouselRef.current;
    if (!container) return undefined;

    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector('[data-project-card]');
    const cardWidth = card?.getBoundingClientRect().width ?? 0;
    const gap = 24;
    const amount = (cardWidth * 2) + gap;

    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="work" data-reveal className="py-16">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)]">Projects</h2>
          <p className="text-[var(--muted)] mt-2 max-w-2xl mx-auto">
            Selected projects focused on clean UI, practical functionality, and tools I can discuss confidently in interviews.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl px-0 md:px-14">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white p-2 shadow-sm transition hover:bg-gray-50 md:flex"
              aria-label="Scroll projects left"
            >
              <FiChevronLeft size={18} />
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white p-2 shadow-sm transition hover:bg-gray-50 md:flex"
              aria-label="Scroll projects right"
            >
              <FiChevronRight size={18} />
            </button>
          )}

          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {projects.map((project) => (
            <div
              key={project.id}
              data-project-card
              onClick={() => setSelectedProject(project)}
              className="group min-w-full snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer md:min-w-[calc((100%-24px)/2)]"
            >
              <div className="relative w-full overflow-hidden bg-gray-50 aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Featured Work</p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-[var(--text)]">
                  <span className="font-medium">View details</span>
                  <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Project details</p>
                  <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-3xl leading-none text-[var(--muted)]">
                  &times;
                </button>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                <div className="bg-gray-50 p-4 md:p-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-xl object-cover shadow-sm aspect-[16/9]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-[var(--muted)]">{selectedProject.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-gray-50"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;

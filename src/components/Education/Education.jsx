import React, { useMemo, useState } from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const orderedEducation = useMemo(
    () => [...education].sort((a, b) => a.order - b.order),
    []
  );

  return (
    <section id="education" data-reveal className="py-16">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)]">Education</h2>
          <p className="text-[var(--muted)] mt-2 max-w-2xl mx-auto">
            Academic roadmap starting from school level and moving up to university.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--accent)] via-gray-200 to-gray-200 md:left-8" />

          <div className="space-y-5">
            {orderedEducation.map((edu) => {
              const isHovered = hoveredId === edu.id;

              return (
                <div key={edu.id} className="relative pl-14 md:pl-20">
                  <div
                    onMouseEnter={() => setHoveredId(edu.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="w-full rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition-shadow duration-500 hover:shadow-lg"
                  >
                    <div className="absolute left-1 top-5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[var(--accent)] text-sm font-semibold text-white shadow-sm md:left-3">
                      {String(edu.order).padStart(2, "0")}
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Level</p>
                        <h3 className="mt-1 text-lg font-semibold text-[var(--text)] md:text-xl">
                          {edu.degree}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--muted)]">{edu.location}</p>
                      </div>

                      <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-1">
                        <span className="rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-[var(--text)]">
                          {edu.date}
                        </span>
                        <span className="text-xs text-[var(--muted)]">{edu.status ?? "Graduated"}</span>
                      </div>
                    </div>

                    {isHovered && (
                      <div className="mt-4 flex border-t border-gray-100 pt-4  animate-fadeIn">
                        <div className="space-y-2 text-sm text-[var(--muted)]">
                          <div>
                            <span className="font-medium text-[var(--text)]">Institution:</span>{" "}
                            {edu.school}
                          </div>
                          <div>
                            <span className="font-medium text-[var(--text)]">Result:</span>{" "}
                            {edu.grade}
                          </div>
                        <p className="text-sm leading-6 text-[var(--muted)]">{edu.desc}</p>
                        </div>
                      </div>
                    )}
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

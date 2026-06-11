import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const activeIdRef = useRef("about");
  const tickingRef = useRef(false);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Expose header height as a CSS variable so other components (toasts) can position below the navbar
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const h = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${Math.ceil(h)}px`);
      }
    };

    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    // also update after small delay to catch font loads
    const t = setTimeout(setHeaderHeight, 250);

    return () => {
      window.removeEventListener('resize', setHeaderHeight);
      clearTimeout(t);
    };
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    setIsOpen(false);
    // mark this navigation as programmatic so the scroll spy doesn't fight the smooth scroll
    activeIdRef.current = id;
    setActiveId(id);

    const el = document.getElementById(id);
    if (el) {
      isProgrammaticScrollRef.current = true;
      // clear any previous timeout
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // After the smooth scroll finishes, allow the scroll spy to resume and ensure active is set
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        activeIdRef.current = id;
        setActiveId(id);
      }, 600);
    }
  };

  useEffect(() => {
    const sectionIds = menuItems.map((m) => m.id);
    const headerOffset = 120;

    const updateActiveSection = () => {
      tickingRef.current = false;

      // if a programmatic scroll is in progress, skip updating from scroll events
      if (isProgrammaticScrollRef.current) return;

      // choose the section whose top edge is closest to the header offset line
      let currentSection = "about";
      let smallestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerOffset);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      });

      if (activeIdRef.current !== currentSection) {
        activeIdRef.current = currentSection;
        setActiveId(currentSection);
      }
    };

    updateActiveSection();
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isScrolled ? 'backdrop-blur-sm bg-white/60 border-b' : 'bg-transparent'}`}>
      <div className="page-container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="px-1 py-0">
            <span className="font-mono text-sm md:text-base leading-none select-none text-[var(--text)]">
              <span className="text-[var(--accent)] font-semibold">[R]</span>itesh <span className="text-[var(--accent)] font-semibold">[S]</span>ahani
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuItems.map((m) => {
            const isActive = activeId === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleNav(m.id)}
                className={`hover:text-[var(--accent)] ${isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--muted)]'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {m.label}
              </button>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="flex flex-col gap-3 page-container py-4">
            {menuItems.map((m) => {
              const isActive = activeId === m.id;
              return (
                <button key={m.id} onClick={() => handleNav(m.id)} className={`text-left py-2 ${isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text)]'}`}>
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

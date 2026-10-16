import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ menuOpen, setMenuOpen, active, closeMenu, visible }) => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${visible ? "navbar-visible" : ""}`}>
      <a className="logo" href="#about" onClick={() => handleNav("about")}>
        Ritesh<span>.</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={active === item.id ? "active" : ""}
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
    </header>
  );
};

export default Navbar;

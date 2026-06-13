import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="page-container py-8 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-[var(--muted)]">
          <a href="https://github.com/rit3ssh" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] text-2xl md:text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ritesh-sahani-548a4219a/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] text-2xl md:text-3xl">
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-[var(--muted)]">© {new Date().getFullYear()} Ritesh Sahani — Built with care.</p>
      </div>
    </footer>
  );
};

export default Footer;

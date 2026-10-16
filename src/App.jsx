import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function useActiveSection() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const ids = ['about', 'skills', 'work', 'education', 'contact'].map((id) => document.getElementById(id)).filter(Boolean);
    if (!ids.length) return;

    const onScroll = () => {
      const threshold = window.innerHeight * 0.35;
      let current = ids[0]?.id || 'about';
      for (const el of ids) {
        if (el.getBoundingClientRect().top - threshold <= 0) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return active;
}

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function QuoteIntro() {
  const quoteRef = useRef(null);

  useEffect(() => {
    const updateQuote = () => {
      const quote = quoteRef.current;
      if (!quote) return;

      const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      quote.style.setProperty('--quote-progress', progress);
    };

    updateQuote();
    window.addEventListener('scroll', updateQuote, { passive: true });
    return () => window.removeEventListener('scroll', updateQuote);
  }, []);

  return (
    <section ref={quoteRef} className="quote-intro" aria-label="Quote by Osho">
      <div className="quote-intro-content">
        <span className="quote-mark" aria-hidden="true">“</span>
        <blockquote>
          Experience life in all possible ways --<br />
          good-bad, bitter-sweet, dark-light,<br />
          summer-winter. Experience all the dualities.<br />
          Don't be afraid of experience, because<br />
          the more experience you have, the more<br />
          mature you become.
        </blockquote>
        <cite>— Osho</cite>
        <span className="quote-scroll-hint">Scroll to explore <span aria-hidden="true">↓</span></span>
      </div>
    </section>
  );
}

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const active = useActiveSection();
  useScrollReveal();

  useEffect(() => {
    const updateNavbar = () => {
      const about = document.getElementById('about');
      setNavbarVisible(Boolean(about && about.getBoundingClientRect().top <= 1));
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar);
    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black headroom-wrapper">
      <QuoteIntro />
      <CustomCursor />
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        active={active}
        visible={navbarVisible}
        closeMenu={() => setMenuOpen(false)}
      />
      <main className="flex-1">
        <About active={active} closeMenu={() => setMenuOpen(false)} />
        <Skills active={active} closeMenu={() => setMenuOpen(false)} />
        <Work active={active} closeMenu={() => setMenuOpen(false)} />
        <Education active={active} closeMenu={() => setMenuOpen(false)} />
        <Contact active={active} closeMenu={() => setMenuOpen(false)} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const frame = useRef(null);
  const lastParticleAt = useRef(0);
  const hoveredElement = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const createFlame = (event) => {
      const now = performance.now();
      if (now - lastParticleAt.current < 35) return;
      lastParticleAt.current = now;

      const flame = document.createElement('span');
      flame.className = 'cursor-flame';
      flame.style.left = `${event.clientX}px`;
      flame.style.top = `${event.clientY}px`;
      flame.style.setProperty('--flame-x', `${(Math.random() - 0.5) * 20}px`);
      flame.style.setProperty('--flame-y', `${-10 - Math.random() * 16}px`);
      flame.style.setProperty('--flame-rotate', `${-35 + Math.random() * 70}deg`);
      document.body.appendChild(flame);
      window.setTimeout(() => flame.remove(), 650);
    };

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.18;
      position.current.y += (target.current.y - position.current.y) * 0.18;
      cursor.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      frame.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
      cursor.classList.add('cursor-visible');
      createFlame(event);
      updateHoverTarget(event.clientX, event.clientY);
    };

    const onMouseLeave = () => cursor.classList.remove('cursor-visible');
    const updateHoverTarget = (x, y) => {
      const targetElement = document.elementFromPoint(x, y);
      const nextElement = targetElement?.closest(
        '.project-card, .skill-card, .timeline-content, a, button'
      );

      if (hoveredElement.current === nextElement) return;
      hoveredElement.current?.classList.remove('pointer-hover');
      nextElement?.classList.add('pointer-hover');
      hoveredElement.current = nextElement || null;
    };

    const onMouseOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, select, [role="button"]');
      cursor.classList.toggle('cursor-expanded', Boolean(interactive));
    };
    const onViewportChange = () => {
      if (target.current.x >= 0 && target.current.y >= 0) {
        updateHoverTarget(target.current.x, target.current.y);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('scroll', onViewportChange, { passive: true });
    window.addEventListener('resize', onViewportChange);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('scroll', onViewportChange);
      window.removeEventListener('resize', onViewportChange);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      hoveredElement.current?.classList.remove('pointer-hover');
      if (frame.current) cancelAnimationFrame(frame.current);
      document.querySelectorAll('.cursor-flame').forEach((flame) => flame.remove());
    };
  }, []);

  return (
    <span ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-core" />
    </span>
  );
};

export default CustomCursor;

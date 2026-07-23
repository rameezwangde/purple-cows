import { useEffect } from 'react';
import gsap from 'gsap';

export function useMouseParallax(containerRef, targets, active = true) {
  useEffect(() => {
    if (!active || !containerRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = containerRef.current;
    
    // Convert targets to a unified array format
    const targetConfigs = Array.isArray(targets) ? targets : [targets];
    
    // Select elements and prepare them
    const elements = targetConfigs.map(config => {
      const el = typeof config.selector === 'string' ? container.querySelector(config.selector) : config.selector;
      return { el, factor: config.factor || 10, rotate: config.rotate || 0 };
    });

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalized from -1 to 1
      targetX = (x / rect.width - 0.5) * 2;
      targetY = (y / rect.height - 0.5) * 2;
    };

    const update = () => {
      // Smooth lerping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      elements.forEach(({ el, factor, rotate }) => {
        if (!el) return;
        gsap.set(el, {
          x: currentX * factor,
          y: currentY * factor,
          rotation: rotate ? currentX * rotate : 0,
          force3D: true
        });
      });

      rafId = requestAnimationFrame(update);
    };

    container.addEventListener('pointermove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      container.removeEventListener('pointermove', onMouseMove);
      cancelAnimationFrame(rafId);
      // Reset positions on cleanup
      elements.forEach(({ el }) => {
        if (el) gsap.set(el, { x: 0, y: 0, rotation: 0 });
      });
    };
  }, [active, containerRef, targets]);
}

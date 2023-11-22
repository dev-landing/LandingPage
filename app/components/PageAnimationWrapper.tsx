
"use client"

import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

interface PageAnimationWrapperProps {
  children: React.ReactNode;
}

const PageAnimationWrapper: React.FC<PageAnimationWrapperProps> = ({ children }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<number>(0);
  const isScrollingRef = useRef<boolean>(false);
  const touchStartYRef = useRef<number>(0);

  const handleScroll = useCallback((direction: 'up' | 'down') => {
    if (isScrollingRef.current || !containerRef.current) return;

    isScrollingRef.current = true;
    setTimeout(() => (isScrollingRef.current = false), 1000);

    let newSection = currentSectionRef.current;
    if (direction === 'down' && newSection < 5) {
      newSection++;
    } else if (direction === 'up' && newSection > 0) {
      newSection--;
    }

    animateScrollToSection(newSection);
  }, []); // No dependencies

  const wheelHandler = useCallback((e: WheelEvent) => {
    const direction = e.deltaY < 0 ? 'up' : 'down';
    handleScroll(direction);
  }, [handleScroll]); // Dependency on handleScroll

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  }, []); // No dependencies

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const direction = touchStartYRef.current > touchEndY ? 'down' : 'up';
    handleScroll(direction);
  }, [handleScroll]); // Dependency on handleScroll

  const animateScrollToSection = (newSection: number) => {
    if (newSection !== currentSectionRef.current) {
      const viewportHeight = window.innerHeight;
      const scrollToOptions = { y: viewportHeight * newSection, ease: 'power2.inOut' };
      gsap.to(window, { scrollTo: scrollToOptions, duration: 1 });
      currentSectionRef.current = newSection;
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', wheelHandler, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', wheelHandler);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [wheelHandler, handleTouchStart, handleTouchEnd]);

  return (
    <div 
      ref={containerRef} 
      style={{
        display: 'grid',
        gridTemplateRows: 'repeat(5, 100vh)',
        gridAutoFlow: 'row',
      }}
    >
      {children}
    </div>
  );
};

export default PageAnimationWrapper;
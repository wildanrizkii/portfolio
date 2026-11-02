"use client";
import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

interface PageTransitionContextType {
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType>({ isTransitioning: true });

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const isTransitioning = usePageTransition();
  return (
    <PageTransitionContext.Provider value={{ isTransitioning }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const useTransitionState = () => useContext(PageTransitionContext);

export const usePageTransition = (duration: number = 1200): boolean => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const lenis = useLenis();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), duration);
    return () => clearTimeout(timer);
  }, [pathname, duration]);

  useEffect(() => {
    if (isTransitioning) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isTransitioning, lenis]);

  return isTransitioning;
};

const PageTransition = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#181818] dark:bg-[#f9f2ed] z-9999 pointer-events-none page-transition-overlay"
    />
  );
};

export default PageTransition;

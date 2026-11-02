"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState, MouseEvent } from "react";
import { useAesthetic } from "@/context/AestheticContext";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const { aesthetic } = useAesthetic();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Fallback for browsers without View Transitions API
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    void transition.ready.then(() => {
      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 720,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    });
  };

  if (!mounted) {
    return (
      <div className="relative flex h-10 w-10 items-center justify-center" />
    );
  }

  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      title="Switch Theme"
      className={`theme-toggle relative flex h-10 w-10 ${
        aesthetic === "hallmark" || aesthetic === "broadsheet"
          ? "rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 hover:bg-(--accent-vermilion) hover:text-white transition-colors duration-200"
          : "rounded-sm"
      } items-center justify-center cursor-none clickable ${className}`}
    >
      <Moon className="absolute h-6 w-6 transition-all duration-300 ease-out rotate-90 scale-75 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100 text-current" />
      <Sun className="absolute h-6 w-6 transition-all duration-300 ease-out rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-75 dark:opacity-0 text-current" />
    </button>
  );
};

export default ThemeToggle;

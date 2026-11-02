"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Mail, Linkedin, Instagram, Circle, LayoutGrid, Newspaper, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import ThemeToggle from "../ThemeToggle";
import { useAesthetic } from "@/context/AestheticContext";

const HallmarkNavbar = () => {
  const { aesthetic, setAesthetic, mounted } = useAesthetic();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const lenis = useLenis();

  const isHallmark = aesthetic === "hallmark";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Node | null;
      if (dropdownRef.current && target && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && target && !mobileDropdownRef.current.contains(target)) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setMobileDropdownOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, lenis]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/about", label: "About me" },
  ];

  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/wildanrizkii",
      icon: <Github />,
      bgColor: "bg-transparent",
    },
    {
      title: "Email",
      href: "mailto:wildanrizki9560@gmail.com",
      icon: <Mail />,
      bgColor: "bg-transparent",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/wildanrizkii/",
      icon: <Linkedin />,
      bgColor: "bg-transparent",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/wildanrizkii/",
      icon: <Instagram />,
      bgColor: "bg-transparent",
    },
  ];

  const DesktopSocialLinks = () => (
    <div className="hidden md:flex items-end justify-end pl-16">
      <div className="min-w-90 max-h-100 aspect-square">
        <div className="grid grid-cols-2 gap-2 h-full">
          {socialLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, scale: isHallmark ? 0.95 : 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: isHallmark ? 1.02 : 1.2,
                y: 0,
                boxShadow: isHallmark ? "none" : "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: isHallmark ? 300 : 200,
                damping: isHallmark ? 20 : 10,
              }}
              className={isHallmark
                ? "aspect-square flex flex-col items-center justify-center text-foreground border border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-200 rounded-none cursor-none clickable"
                : `${link.bgColor} aspect-square flex flex-col items-center justify-center text-foreground border-2 border-foreground rounded-none hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white`
              }
            >
              <span className={isHallmark ? "text-xl mb-2" : "text-2xl mb-1"}>{link.icon}</span>
              <span className={isHallmark ? "text-sm font-mono uppercase tracking-wider" : "text-lg"}>{link.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileSocialLinks = () => (
    <div className="block md:hidden pb-10 pt-4">
      <div className="flex flex-row items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.title}
            href={link.href}
            initial={{ opacity: 0, scale: isHallmark ? 0.95 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: isHallmark ? 1.05 : 1.2,
              y: isHallmark ? 0 : -5,
              rotate: isHallmark ? 0 : 5,
              boxShadow: isHallmark ? "none" : "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            className={isHallmark
              ? "w-12 h-12 bg-white/30 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 rounded-none flex items-center justify-center text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-200"
              : "w-12 h-12 bg-foreground border-solid rounded-full flex items-center justify-center text-background"
            }
          >
            {isHallmark ? (
              <span className="text-xl">{link.icon}</span>
            ) : (
              <motion.span
                whileHover={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-xl"
              >
                {link.icon}
              </motion.span>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`absolute w-full z-50 transition-all duration-300 ${isHallmark
          ? scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-neutral-300/80 dark:border-neutral-800/80 py-3"
            : "bg-transparent border-b border-transparent py-5"
          : scrolled
            ? "bg-transparent backdrop-blur-sm shadow-md py-2"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 relative z-50">
              <Link
                href="/"
                className="text-xl font-mono tracking-tight text-foreground hover:opacity-75 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                .wildanrizkii
              </Link>
            </div>

            <div className="flex items-center gap-4 relative z-50">
              {mounted && (
                <div className="hidden md:block relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-label="Select Design System"
                    title="Select Design System"
                    className="h-10 px-3 rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white text-foreground flex items-center justify-center text-xs font-mono uppercase tracking-wider gap-1.5 cursor-none clickable font-semibold transition-colors duration-200"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {aesthetic === "broadsheet" ? <Newspaper className="w-3.5 h-3.5" /> : aesthetic === "hallmark" ? <LayoutGrid className="w-3.5 h-3.5" /> : <Circle className="w-2.5 h-2.5 fill-current" />}
                    </div>
                    <span>{aesthetic === "broadsheet" ? "Broadsheet" : aesthetic === "hallmark" ? "Grid" : "Fluid"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-40 z-50 overflow-hidden bg-background border border-neutral-300 dark:border-neutral-800 py-1 shadow-lg origin-top-right rounded-none"
                      >
                        <button
                          onClick={() => {
                            setAesthetic("original");
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "original" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <Circle className="w-2.5 h-2.5 fill-current" />
                          </div>
                          <span>Fluid</span>
                        </button>
                        <button
                          onClick={() => {
                            setAesthetic("hallmark");
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "hallmark" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <LayoutGrid className="w-3.5 h-3.5" />
                          </div>
                          <span>Grid</span>
                        </button>
                        <button
                          onClick={() => {
                            setAesthetic("broadsheet");
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "broadsheet" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <Newspaper className="w-3.5 h-3.5" />
                          </div>
                          <span>Broadsheet</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="relative w-10 h-8 flex flex-col justify-center gap-2 p-2 cursor-none clickable"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                <motion.div
                  className={`w-8 ${isHallmark ? "h-0.5" : "h-0.75"} bg-foreground ${isHallmark ? "rounded-none" : "rounded-full"}`}
                  animate={isOpen ? { rotate: 45, y: isHallmark ? 5 : 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />

                <motion.div
                  className={`w-6 ${isHallmark ? "h-0.5" : "h-0.75"} bg-foreground ${isHallmark ? "rounded-none" : "rounded-full"}`}
                  animate={
                    isOpen
                      ? { rotate: -45, y: isHallmark ? -5 : -5.5, width: "2rem" }
                      : { rotate: 0, y: 0, width: "1.5rem" }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isOpen ? "0%" : "-100%", opacity: isOpen ? 1 : 0 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-background"
      >
        <div className="flex items-center justify-center h-full px-4">
          <div className="grid sm:flex md:flex items-center justify-center gap-32 w-full max-w-7xl">
            <div className="text-left space-y-14">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isOpen ? 0.3 + index * 0.1 : 0,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-5xl md:text-7xl text-nowrap font-serif italic text-foreground transition-all duration-300 hover:pl-4 hover:text-neutral-500 dark:hover:text-neutral-300 select-none cursor-none clickable focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {mounted && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isOpen ? 0.3 + navLinks.length * 0.1 : 0,
                  }}
                  className="block md:hidden relative"
                  ref={mobileDropdownRef}
                >
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    aria-label="Select Design System"
                    title="Select Design System"
                    className="h-10 px-3 rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white text-foreground flex items-center justify-center text-xs font-mono uppercase tracking-wider gap-1.5 cursor-none clickable font-semibold transition-colors duration-200"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {aesthetic === "broadsheet" ? <Newspaper className="w-3.5 h-3.5" /> : aesthetic === "hallmark" ? <LayoutGrid className="w-3.5 h-3.5" /> : <Circle className="w-2.5 h-2.5 fill-current" />}
                    </div>
                    <span>{aesthetic === "broadsheet" ? "Broadsheet" : aesthetic === "hallmark" ? "Grid" : "Fluid"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-44 bg-background border border-neutral-300 dark:border-neutral-800 shadow-xl z-50 rounded-none flex flex-col py-1"
                      >
                        <button
                          onClick={() => {
                            setAesthetic("original");
                            setMobileDropdownOpen(false);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "original" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <Circle className="w-2.5 h-2.5 fill-current" />
                          </div>
                          <span>Fluid</span>
                        </button>
                        <button
                          onClick={() => {
                            setAesthetic("hallmark");
                            setMobileDropdownOpen(false);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "hallmark" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <LayoutGrid className="w-3.5 h-3.5" />
                          </div>
                          <span>Grid</span>
                        </button>
                        <button
                          onClick={() => {
                            setAesthetic("broadsheet");
                            setMobileDropdownOpen(false);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-150 text-left cursor-none clickable font-mono ${aesthetic === "broadsheet" ? "bg-foreground/10" : ""}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <Newspaper className="w-3.5 h-3.5" />
                          </div>
                          <span>Broadsheet</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            <div className="shrink-0">
              <DesktopSocialLinks />
              <MobileSocialLinks />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HallmarkNavbar;

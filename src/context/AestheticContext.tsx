"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type AestheticMode = "broadsheet" | "hallmark" | "original";

export interface AestheticContextType {
  aesthetic: AestheticMode | string;
  setAesthetic: (mode: AestheticMode | string) => void;
  mounted: boolean;
}

const AestheticContext = createContext<AestheticContextType | undefined>(undefined);

export const AestheticProvider = ({ children }: { children: ReactNode }) => {
  const [aesthetic, setAesthetic] = useState<string>("broadsheet");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("aesthetic") || "broadsheet";
    setAesthetic(saved);

    document.documentElement.classList.remove(
      "aesthetic-hallmark",
      "aesthetic-original",
      "aesthetic-broadsheet"
    );
    document.documentElement.classList.add(`aesthetic-${saved}`);
    setMounted(true);
  }, []);

  const setAestheticMode = (mode: string) => {
    document.documentElement.classList.remove(
      "aesthetic-hallmark",
      "aesthetic-original",
      "aesthetic-broadsheet"
    );
    document.documentElement.classList.add(`aesthetic-${mode}`);
    setAesthetic(mode);
    localStorage.setItem("aesthetic", mode);
  };

  return (
    <AestheticContext.Provider value={{ aesthetic, setAesthetic: setAestheticMode, mounted }}>
      {children}
    </AestheticContext.Provider>
  );
};

export const useAesthetic = (): AestheticContextType => {
  const context = useContext(AestheticContext);
  if (!context) {
    return { aesthetic: "broadsheet", setAesthetic: () => {}, mounted: false };
  }
  return context;
};

"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalParallax from "./OriginalParallax";
import HallmarkParallax from "./HallmarkParallax";
import BroadsheetParallax from "./BroadsheetParallax";

interface ParallaxProps {
  [key: string]: unknown;
}

const ParallaxSwitcher = (props: ParallaxProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalParallax {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetParallax {...props} />;
  }
  return <HallmarkParallax {...props} />;
};

export default ParallaxSwitcher;

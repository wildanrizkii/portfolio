"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalAbout from "./OriginalAbout";
import HallmarkAbout from "./HallmarkAbout";
import BroadsheetAbout from "./BroadsheetAbout";

interface AboutProps {
  [key: string]: unknown;
}

const AboutSwitcher = (props: AboutProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalAbout {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetAbout {...props} />;
  }
  return <HallmarkAbout {...props} />;
};

export default AboutSwitcher;

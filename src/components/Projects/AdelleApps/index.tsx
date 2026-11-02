"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalAdelleApps from "./OriginalAdelleApps";
import HallmarkAdelleApps from "./HallmarkAdelleApps";
import BroadsheetAdelleApps from "./BroadsheetAdelleApps";

interface AdelleAppsProps {
  [key: string]: unknown;
}

const AdelleAppsSwitcher = (props: AdelleAppsProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalAdelleApps {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetAdelleApps {...props} />;
  }
  return <HallmarkAdelleApps {...props} />;
};

export default AdelleAppsSwitcher;

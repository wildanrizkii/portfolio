"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalAdoraSaaS from "./OriginalAdoraSaaS";
import HallmarkAdoraSaaS from "./HallmarkAdoraSaaS";
import BroadsheetAdoraSaaS from "./BroadsheetAdoraSaaS";

interface AdoraSaaSProps {
  [key: string]: unknown;
}

const AdoraSaaSSwitcher = (props: AdoraSaaSProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalAdoraSaaS {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetAdoraSaaS {...props} />;
  }
  return <HallmarkAdoraSaaS {...props} />;
};

export default AdoraSaaSSwitcher;

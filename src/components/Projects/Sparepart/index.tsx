"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalSparepart from "./OriginalSparepart";
import HallmarkSparepart from "./HallmarkSparepart";
import BroadsheetSparepart from "./BroadsheetSparepart";

interface SparepartProps {
  [key: string]: unknown;
}

const SparepartSwitcher = (props: SparepartProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalSparepart {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetSparepart {...props} />;
  }
  return <HallmarkSparepart {...props} />;
};

export default SparepartSwitcher;

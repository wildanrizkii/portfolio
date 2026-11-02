"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalAdoraPharmacy from "./OriginalAdoraPharmacy";
import HallmarkAdoraPharmacy from "./HallmarkAdoraPharmacy";
import BroadsheetAdoraPharmacy from "./BroadsheetAdoraPharmacy";

interface AdoraPharmacyProps {
  [key: string]: unknown;
}

const AdoraPharmacySwitcher = (props: AdoraPharmacyProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalAdoraPharmacy {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetAdoraPharmacy {...props} />;
  }
  return <HallmarkAdoraPharmacy {...props} />;
};

export default AdoraPharmacySwitcher;

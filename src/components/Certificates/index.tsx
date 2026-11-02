"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalCertificates from "./OriginalCertificates";
import HallmarkCertificates from "./HallmarkCertificates";
import BroadsheetCertificates from "./BroadsheetCertificates";

interface CertificatesProps {
  [key: string]: unknown;
}

const CertificatesSwitcher = (props: CertificatesProps) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalCertificates {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetCertificates {...props} />;
  }
  return <HallmarkCertificates {...props} />;
};

export default CertificatesSwitcher;

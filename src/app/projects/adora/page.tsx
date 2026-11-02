import React from "react";
import AdoraPharmacy from "@/components/Projects/AdoraPharmacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adora Pharmacy Management System",
  description:
    "A full-featured pharmacy management system built for PT Adora Cipta Medika (2024) — managing prescriptions, inventory, and reporting.",
};

const Page = () => {
  return <AdoraPharmacy />;
};

export default Page;

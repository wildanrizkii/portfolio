import React from "react";
import CashFlow from "@/components/Projects/CashFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Flow Tracking Application",
  description:
    "A tracking application with clean analytics, charts, and transaction history filters for personal financial management.",
};

const Page = () => {
  return <CashFlow />;
};

export default Page;

import React from "react";
import Sparepart from "@/components/Projects/Sparepart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spare Part Information System",
  description:
    "An intuitive web platform designed to manage complex spare part hierarchies, vendor specifications, and automated quotes.",
};

const Page = () => {
  return <Sparepart />;
};

export default Page;

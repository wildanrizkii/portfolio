import React from "react";
import AdelleApps from "@/components/Projects/AdelleApps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adelle Apps | Wildan Rizki",
  description:
    "Adelle Apps - A cloud-native, multi-tenant SaaS healthcare platform built for PT Adora Cipta Medika with NestJS & Next.js 16.",
};

const Page = () => {
  return <AdelleApps />;
};

export default Page;

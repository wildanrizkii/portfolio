import React from "react";
import ProjectList from "@/components/Projects/List";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Selected Works",
  description:
    "Explore full-stack web applications, SaaS platforms, and enterprise solutions developed by Wildan Rizki.",
};

const Page = () => {
  return <ProjectList />;
};

export default Page;

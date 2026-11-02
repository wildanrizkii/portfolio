import React from "react";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Wildan Rizki Nurfauzi, Informatics graduate, Full Stack Web Developer, and UI/UX Designer.",
};

const Page = () => {
  return <About />;
};

export default Page;

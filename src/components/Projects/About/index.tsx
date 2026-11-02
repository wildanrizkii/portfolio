"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalProjects from "./OriginalProjects";
import HallmarkProjects from "./HallmarkProjects";
import BroadsheetProjects from "./BroadsheetProjects";

interface ProjectsProps {
  className?: string;
}

export default function ProjectsSwitcher({ className }: ProjectsProps) {
  const { aesthetic, mounted } = useAesthetic();

  if (!mounted) {
    return null;
  }

  if (aesthetic === "original") {
    return <OriginalProjects className={className} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetProjects className={className} />;
  }
  return <HallmarkProjects className={className} />;
}

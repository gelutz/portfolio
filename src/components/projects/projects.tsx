"use server";
import { getAllProjects } from "@/utils/notion";
import { ProjectCard } from "./project-card";

export const Projects = async () => {
  const pages = await getAllProjects();

  return (
    <div className="flex flex-wrap justify-around gap-4">
      {pages.map((page) => (
        <ProjectCard key={page.id} {...page} className="max-w-64" />
      ))}
    </div>
  );
};

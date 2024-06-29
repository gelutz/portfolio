"use server";
import { getAllProjects } from "@/utils/notion";
import { ProjectCard } from "./project-card";

export const Projects = async () => {
  const pages = await getAllProjects();

  return (
    <section className="space-y-8">
      <span className="text-4xl">Projects</span>
      <div className="flex flex-wrap justify-around gap-4">
        {pages.map((page) => (
          <ProjectCard key={page.id} {...page} className="max-w-64" />
        ))}
      </div>
    </section>
  );
};

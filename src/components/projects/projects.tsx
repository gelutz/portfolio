"use server";
import { getNotionProjects } from "@/utils/notion";
import { Project } from "./project";

export const Projects = async () => {
  const pages = await getNotionProjects();

  return (
    <section className="h-80 space-y-8 w-full ">
      <span className="text-4xl">Projects</span>
      {pages.map((page, index) => (
        <Project key={index} title={page.title} text={page.text} />
      ))}
    </section>
  );
};

"use server";
import { getProjects } from "@/utils/notion";

export const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="h-80 space-y-8 w-full ">
      <span className="text-4xl">Projects</span>
    </section>
  );
};

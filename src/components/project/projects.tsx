import { ProjectCard } from "./project-card";

export const Projects = async () => {
  const projects = [
    {
      slug: "project-1",
      title: "Project 1",
      description: "Project 1 description",
      iconUrl: "https://via.placeholder.com/150",
    },
    {
      slug: "project-2",
      title: "Project 2",
      description: "Project 2 description",
      iconUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};

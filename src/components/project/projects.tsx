import { ProjectCard } from "./project-card";

export const Projects = async ({ projects }: { projects: string[] }) => {
    return (
        <div className="flex flex-wrap justify-around gap-4">
            {projects.map((project) => {
                const slug = project.split(" ").join("-").toLocaleLowerCase();
                return <ProjectCard key={project} name={project} slug={slug} />;
            })}
        </div>
    );
};

import { getProjectHTML, getProjectNames, slugify } from "@/utils/projects";

import { ProjectDescription } from "@/components/project/project-description";
import { notFound } from "next/navigation";

// 1. Generate all possible project page routes at build time
export async function generateStaticParams() {
    const projectNames = getProjectNames();

    return projectNames.map((name) => ({
        id: slugify(name),
    }));
}

// 2. Fetch data and render the page for a given `params.id`
export default async function ProjectPage({ params }: { params: { id: string } }) {
    const { id } = params; // e.g., "solid-fizzbuzz"
    const projectNames = getProjectNames();

    // Find the original project name by matching its slug to the URL param
    const projectName = projectNames.find((name) => slugify(name) === id);

    // If no project matches, show a 404 page
    if (!projectName) {
        notFound();
    }

    const html = getProjectHTML(projectName);


    return <ProjectDescription name={projectName} html={html} slug={id} />;
}

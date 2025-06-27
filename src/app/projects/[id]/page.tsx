import { getProjectHTML, getProjectNames, slugify } from "@/utils/projects";

import { ContactCard } from "@/components/contact-card";
import { ProjectDescription } from "@/components/project/project-description";
import Image from "next/image";
import Link from "next/link";
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


    return <>
        <div className="flex justify-center relative">

            <Image
                loading="eager"
                src={`/projects/assets/backgrounds/${id}.png`}
                alt="Project background"
                fill
                className="object-cover bg-top aspect-auto rounded-t-xl max-h-96 mask-fade"
            />
            <div className="p-16 z-20 flex flex-col gap-8">
                <div className="w-fit rounded-full p-2 border border-cinza backdrop-blur-lg transition-hover">
                    <Link href="/">
                        <Image className="size-6" src="/assets/back.svg" alt="Back" width={24} height={24} />
                    </Link>
                </div>
                <ProjectDescription name={projectName} html={html} />
                <ContactCard />
            </div>
        </div>
    </>;
}

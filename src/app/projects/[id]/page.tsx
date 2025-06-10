"use server";

import LoadingText from "@/components/loading/loading-text";
import { ProjectDescription } from "@/components/project/project-description";
import { Suspense } from "react";

export default async function ProjectPage({
    params,
}: {
  params: { id: string };
}) {
    const title = "Project Title";
    const tldr = "Project Tldr";
    const text = "Project Text";
    return (
        <>
            <Suspense fallback={<LoadingText />}>
                <ProjectDescription title={title} tldr={tldr} text={text ?? ""} />
            </Suspense>
        </>
    );
}

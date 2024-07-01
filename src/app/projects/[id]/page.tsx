"use server";
import LoadingText from "@/components/loading/loading-text";
import { ProjectDescription } from "@/components/projects/project-description";
import { getProject, getProjectText } from "@/utils/notion";
import { Suspense } from "react";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  const text = await getProjectText(params.id);
  return (
    <>
      <Suspense fallback={<LoadingText />}>
        <ProjectDescription project={project} text={text ?? ""} />
      </Suspense>
    </>
  );
}

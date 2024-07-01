"use server";
import Loading from "@/components/loading/loading";
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
      <Suspense fallback={<Loading />}>
        <ProjectDescription project={project} text={text ?? ""} />
      </Suspense>
    </>
  );
}

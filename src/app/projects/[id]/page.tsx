"use server";

import { getProject, getProjectText } from "@/utils/notion";
import Link from "next/link";
import Markdown from "react-markdown";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  const text = await getProjectText(params.id);

  return (
    <>
      <Link href="/">Home</Link>
      <h1 className="text-center text-4xl font-bold">{project.title}</h1>
      <p className="text-center text-xl">{project.tldr}</p>
      <Markdown>{text}</Markdown>
    </>
  );
}

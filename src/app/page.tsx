import About from "@/components/about";
import Hello from "@/components/hello";
import Skills from "@/components/skills";
import { Projects } from "@/components/projects/projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hello />
      <About />
      <Skills />
      <Suspense fallback="Loading...">
        <Projects />
      </Suspense>
    </>
  );
}

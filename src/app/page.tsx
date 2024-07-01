import About from "@/components/about";
import Hello from "@/components/hello";
import Skills from "@/components/skills";
import { Projects } from "@/components/projects/projects";
import { Suspense } from "react";
import Loading from "@/components/loading/loading";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hello />
      <About />
      <Skills />
      <div className="flex flex-col gap-y-4">
        <span className="sm:text-4xl">Projects</span>
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </div>
    </div>
  );
}

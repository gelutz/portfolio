import About from "@/components/about";
import Hello from "@/components/hello";
import LoadingText from "@/components/loading/loading-text";
import { Projects } from "@/components/project/projects";
import Skills from "@/components/skills";
import { getProjectNames } from "@/utils/projects";
import { Suspense } from "react";

export default function Home() {
    const projectNames = getProjectNames();
    
    return (
        <div className="space-y-20 p-16">
            <Hello />
            <About />
            <Skills />
            <div className="flex flex-col gap-y-4">
                <span className="sm:text-4xl">Projects</span>
                <Suspense fallback={<LoadingText />}>
                    <Projects projects={projectNames} />
                </Suspense>
            </div>
        </div>
    );
}

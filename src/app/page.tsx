import About from "@/components/about";
import Hello from "@/components/hello";
import LoadingText from "@/components/loading/loading-text";
import { Projects } from "@/components/project/projects";
import Skills from "@/components/skills";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="space-y-20">
            <Hello />
            <About />
            <Skills />
            <div className="flex flex-col gap-y-4">
                <span className="sm:text-4xl">Projects</span>
                <Suspense fallback={<LoadingText />}>
                    <Projects />
                </Suspense>
            </div>
        </div>
    );
}

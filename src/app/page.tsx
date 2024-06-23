"use client";

import About from "@/components/about";
import Hello from "@/components/hello";
import Topbar from "@/components/socials-nav";

export default function Home() {
  const skills = [
    "Java",
    "Spring",
    "TypeScript",
    "Git",
    "Docker",
    "Bash",
    "Linux",
    "Postgres",
  ];

  return (
    <div className="min-h-screen polka text-branco">
      {/* Introdução */}
      <Topbar />
      <main className="px-16 flex flex-col gap-y-24 ">
        <Hello />

        <About lang="en" />

        {/* Skills */}
        <section className="h-80  space-y-8 w-full">
          <span className="text-4xl flex gap-8">My skills</span>
          <div className="">
            <ul className="columns-3 pl-6 list-disc w-full h-64 justify-between">
              {skills.map((skill) => (
                <li className="p-4" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

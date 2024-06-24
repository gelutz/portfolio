"use client";

import About from "@/components/about";
import Hello from "@/components/hello";
import Skills from "@/components/skills";
import Topbar from "@/components/topbar";
import Terminal from "@/components/terminal";
import { LanguageProvider } from "@/context/LanguageContext";
import { Language } from "@/components/language";

export default function Home() {
  return (
    <>
      <Language className="z-40 absolute top-[2rem] right-[6rem]" />
      <div className="min-h-screen z-10 polka text-branco ">
        <div className="absolute top-[10%] right-[10%] ">
          <Terminal />
        </div>
        {/* Introdução */}
        <Topbar />
        <main className="relative z-30 w-full px-16">
          <div className="flex flex-col gap-y-24 p-16 border border-cinza backdrop-blur-sm rounded-xl">
            <Hello />
            <About lang="en" />
            <Skills />

            {/* Projects */}
            <section className="h-80 space-y-8 w-full ">
              <span className="text-4xl">Projects</span>
            </section>
          </div>
        </main>

        <div className="fixed bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-cinza/30"></div>
      </div>
    </>
  );
}

"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
export default function Skills() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: "My Skills",
    pt: "Minhas Skills",
  };

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
    <section className="space-y-8 w-full">
      <span className="text-4xl flex gap-8">{text[language]}</span>
      <div className="">
        <ul className="columns-3 pl-6 list-disc w-full justify-between">
          {skills.map((skill) => (
            <li className="p-2" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

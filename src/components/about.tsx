"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function About() {
    const { language } = useContext(LanguageContext);

    const leftText = {
        en: "An enthusiastic full-stack developer who loves to learn and will never want to stop improving.",
        pt: "Um desenvolvedor full-stack entusiasta que ama aprender e nunca quer parar de melhorar.",
    };
    const rightText = {
        en: "As I've grown as a developer, I've worked alongside some inspiring senior developers, which each one teaching me at least a small thing that helped me along the way. Working with someone more experienced makes me thrilled to learn more and raises my standards for future projects.",
        pt: "Ao longo da minha jornada como desenvolvedor, trabalhei com desenvolvedores mais experientes que me ensinaram muito sobre algos que eu não sabia e que me ajudava a aprender. Trabalhar com alguém mais experiente me leva a gosto de aprender mais e me leva a melhorar minhas habilidades para projetos futuros.",
    };
    return (
        <>
            <div className="flex flex-col sm:flex-row w-full gap-x-4 text-lg">
                <div className="w-full p-4 rounded-lg ">{leftText[language]}</div>
                <div className="w-full p-4 rounded-lg ">{rightText[language]}</div>
            </div>
        </>
    );
}

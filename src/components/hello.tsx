"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function Hello() {
    const { language } = useContext(LanguageContext);

    const texts = {
        title: {
            en: "Hi, I'm Gabriel. Full-stack developer with a passion for clean code.",
            pt: "Olá, sou Gabriel. Desenvolvedor Full-stack com uma paixão por clean code.",
        },
    };

    return (
        <section className="w-full flex gap-x-8 justify-around h-fit">
            <div className="flex flex-col gap-y-4">
                <span className="sm:text-4xl">{texts.title[language]}</span>
            </div>
        </section>
    );
}

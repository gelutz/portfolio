"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function About() {
    const { language } = useContext(LanguageContext);

    <span className="text-sm flex flex-col gap-y-4">
    Olá!
        <p>
        
        </p>

        <p>
        
        </p>

        <p>Entre em contato:</p>
        <p>gabriel.lutz5@gmail.com</p>
    </span>
    const leftText = {
        en: `I'm always learning new technologies and improving my skills. I'm currently finalizing my higher education in Information Systems, but I've always been seeking out new developments in the field and discovering new interests.`,
        pt: `Sempre indo atrás de tecnologias novas e melhorarando minhas habilidades.
        Estou finalizando o curso superior em Sistemas de Informação, mas estou desde sempre indo em busca de novidades na área e despertando novos interesses.`,
    };
    const rightText = {
        en: `My current professional stack includes Java (Spring Boot) and TypeScript (Angular), but beyond these, I have professional experience with Angular, JavaScript, and PHP (Laravel or pure). This is not to mention the time I've spent studying databases like MySQL, PostgreSQL, and MongoDB, or the DevOps area, such as Docker, Docker Compose, and Kubernetes.`,
        pt: `Atualmente minha stack profissional é é Java (Spring Boot), e Typescript (Angular), mas além delas tenho experiência profissional com Angular, Javascript, e PHP (Lavavel ou puro).
        Isso sem contar o tempo que passei estudando bancos de dados, como MySQL, PostgreSQL, e MongoDB, ou a área de DevOps, como Docker, Docker Compose e Kubernetes.`,
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

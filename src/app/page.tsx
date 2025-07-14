"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Terminal from "@/components/terminal";
import { GoArrowDown } from "react-icons/go";

export default function Home () {
    const scrollToCard = () => {
        const cardSection = document.getElementById('card-section');
        if (cardSection) {
            cardSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="w-full font-ubuntu h-full dark relative">
            <Terminal className="fixed top-10 left-10 -z-10 blur-sm opacity-30 bg-[#301934] text-branco animate-scroll-up-slow" />

            <Terminal className="fixed bottom-10 right-20 -z-10 blur-sm opacity-75 bg-[#0F1419] animate-scroll-up-slower" />

            <div className="hero-section h-screen flex flex-col text-nowrap items-center justify-center relative">
                <h1 className="text-4xl sm:text-7xl font-bold text-yellow-200">Lutz&apos;s Porfolio</h1>
                <p className="text-lg sm:text-2xl gradiente text-center text-wrap px-8">
                    Olá, e bem vindo ao meu porfólio
                </p>
                
                <button 
                    onClick={scrollToCard}
                    className="mt-16 p-4 rounded-full bg-yellow-200 text-preto hover:bg-yellow-300 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-105"
                >
                    <GoArrowDown />
                </button>
            </div>

            <div id="card-section" className="w-[90%] h-screen md:w-[80%] mx-auto scroll-mt-20">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-xl">
                            Aqui mostrarei meus projetos, skills e experiências.
                        </CardTitle>
                    </CardHeader> 
                    <CardContent>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Terminal from "@/components/terminal";

export default function Home () {

    return (
        <div className="w-full font-ubuntu h-full dark relative">
            <Terminal className="fixed top-10 left-10 -z-10 blur-sm opacity-30 bg-[#301934] text-branco animate-scroll-up-slow" />

            <Terminal className="fixed bottom-10 right-20 -z-10 blur-sm opacity-75 bg-[#0F1419] animate-scroll-up-slower" />

            <div className="pt-[30%] flex flex-col text-nowrap items-center justify-center relative">
                <h1 className="text-4xl sm:text-7xl font-bold text-yellow-200">Lutz&apos;s Porfolio</h1>
                <p className="text-lg sm:text-2xl gradiente text-center text-wrap px-8">
                    Olá, e bem vindo ao meu porfólio
                </p>
            </div>

            <div className="w-[90%] pt-16 h-screen md:w-[80%] mx-auto scroll-mt-20">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-xl">
                            Aqui mostrarei meus projetos, skills e experiências.
                        </CardTitle>
                    </CardHeader> 
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quisquam saepe quis illum numquam doloremque eaque quam aperiam sequi rem distinctio accusantium. Facilis dolorem consequuntur eveniet, fugit ipsam provident distinctio?
                        
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

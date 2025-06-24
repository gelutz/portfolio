import "@/styles/background.css";
import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";

import { Language } from "@/components/language";
import LoadingText from "@/components/loading/loading-text";
import Terminal from "@/components/terminal";
import Topbar from "@/components/topbar";
import { LanguageProvider } from "@/context/LanguageContext";
import { GeistSans } from "geist/font/sans";
import { Suspense } from "react";

export const metadata = {
    title: "Gabriel Lutz",
    description: "An enthusiastic developer who loves to create.",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable} `}>
            <body>
                <div className="min-h-screen z-10 polka text-branco ">
                    <Terminal className="fixed top-[8%] right-[10%] blur-sm" />
                    <Topbar />
                    <LanguageProvider>
                        <Language className="z-40 absolute top-[2rem] right-[6rem]" />
                        <main className="relative z-30 w-full px-16">
                            <div className="flex flex-col border border-cinza backdrop-blur-sm rounded-xl">
                                <Suspense fallback={<LoadingText columns={2} />}>
                                    {children}
                                </Suspense>
                            </div>
                        </main>
                    </LanguageProvider>
                    <div className="h-8"></div>
                    <div className="fixed bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-cinza/30"></div>
                </div>
            </body>
        </html>
    );
}

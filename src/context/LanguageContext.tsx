"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";

export type TLanguageContext = {
  language: "en" | "pt";
  setLanguage: Dispatch<SetStateAction<"en" | "pt">>;
};

export const LanguageContext = createContext({} as TLanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<"en" | "pt">("pt");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

import { ReactNode, useState } from "react";
import { createContext } from "vm";

export const LanguageContext = createContext({});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "pt">("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

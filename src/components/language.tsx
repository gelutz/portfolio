import { LanguageContext, TLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";
import { useContext, useState } from "react";

export function Language(props: React.HTMLAttributes<HTMLDivElement>) {
  const { language, setLanguage } =
    useContext<TLanguageContext>(LanguageContext);

  const [dropDownToggle, setDropDown] = useState(false);

  const toggleDropdown = () => setDropDown(!dropDownToggle);
  const selectLanguage = (lang: TLanguageContext["language"]) => {
    setLanguage(lang);
    setDropDown(false);
  };

  return (
    <div className={props.className}>
      <button
        type="button"
        className="flex items-center justify-end min-w-24"
        onClick={toggleDropdown}
      >
        <Image src="/language.svg" alt="language" height={25} width={25} />
        <Image src="/arrow-down.svg" alt="arrow" height={15} width={15} />
      </button>
      {dropDownToggle && (
        <div className="relative mt-4 text-branco font-bold border border-cinza p-4 backdrop-blur-lg rounded-lg">
          <ul className="relative z-40 flex flex-col">
            <li
              onClick={() => selectLanguage("pt")}
              className="flex gap-x-4 cursor-pointer"
            >
              <Image src="/brazil.png" alt="brazil" height={15} width={20} />
              PT
            </li>
            <li
              onClick={() => selectLanguage("en")}
              className="flex gap-x-4 cursor-pointer"
            >
              <Image src="/usa.png" alt="usa" height={15} width={20} />
              EN
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";

export function Language(props: React.HTMLAttributes<HTMLDivElement>) {
  const [dropDownToggle, setDropDown] = useState(false);
  const toggle = () => setDropDown(!dropDownToggle);

  return (
    <div className={props.className}>
      <button
        type="button"
        className="flex items-center justify-end min-w-24"
        onClick={toggle}
      >
        <Image src="/language.svg" alt="language" height={25} width={25} />
        <Image src="/arrow-down.svg" alt="arrow" height={15} width={15} />
      </button>
      {dropDownToggle && (
        <div className="relative mt-4 text-branco font-bold border border-cinza p-4 backdrop-blur-sm rounded-lg">
          <ul className="relative z-40 flex flex-col">
            <li className="flex gap-x-4">
              <Image src="/brazil.png" alt="brazil" height={15} width={20} />
              PT
            </li>
            <li className="flex gap-x-4">
              <Image src="/usa.png" alt="usa" height={15} width={20} />
              EN
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

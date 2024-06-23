import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Topbar() {
  useEffect(() => {
    const socials = document.getElementById("socials");
    if (socials) {
      socials.classList.remove("-translate-x-full"); // Remove the initial state
      socials.classList.add("translate-x-0"); // Add the final state
    }
  }, []);

  const links = {
    github: "https://github.com/gelutz",
    linkedin: "https://www.linkedin.com/in/gabriel-e-lutz/",
  };
  return (
    <div className="h-24 w-full flex items-center justify-stretch">
      <div
        id="socials"
        className="flex h-full gap-x-4 transition-transform delay-200 duration-700 ease-in-out -translate-x-full"
      >
        <div className="border-b-2 border-white w-48 h-[50%]"></div>
        <div className="h-full flex items-center justify-center gap-x-4">
          <Link href={links.github}>
            <Image
              className="hover:scale-125 transition-transform duration-300"
              src="/github.png"
              alt="github"
              height={40}
              width={40}
            />
          </Link>
          <Link href={links.linkedin}>
            <Image
              className="hover:scale-125 transition-transform duration-300"
              src="/linkedin.png"
              alt="github"
              height={40}
              width={40}
            />
          </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

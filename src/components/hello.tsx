import Image from "next/image";

export default function Hello() {
  const texts = {
    title: {
      en: "Hi, I'm Gabriel. Full-stack developer with a passion for clean code.",
    },
  };

  return (
    <section className="w-full flex gap-x-8 justify-around h-fit">
      <div className="flex flex-col gap-y-4">
        <span className="text-4xl">{texts.title.en}</span>
      </div>
      <div className="">
        <Image
          className="rounded-full"
          src="https://github.com/gelutz.png"
          alt="Profile picture"
          width={300}
          height={300}
          loader={(p) => {
            return new URL(p.src).toString();
          }}
        />
      </div>
    </section>
  );
}

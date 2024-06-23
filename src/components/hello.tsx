import Image from "next/image";

export default function Hello() {
  return (
    <section className="h-40 w-full flex  gap-x-8 items-center justify-around">
      <div className="flex flex-col gap-y-4">
        <span className="text-4xl">
          Hi, I&apos;m Gabriel. Full-stack developer with a passion for clean
          code.
        </span>
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

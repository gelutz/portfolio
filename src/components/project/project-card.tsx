import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  slug: string;
  title: string;
  description: string;
  iconUrl: string;
};

export const ProjectCard = ({
  slug,
  title,
  description,
  iconUrl,
}: ProjectProps) => {
  return (
    <div className="max-w-64">
      <Link href={`projects/${slug}`}>
        <div className="border h-full border-cinza p-4 items-center rounded-lg">
          <div className="flex justify-center px-4 gap-4">
            <Image
              unoptimized
              src={iconUrl}
              alt="project icon"
              width={30}
              height={30}
            />
            <span className="text-lg font-bold">{title}</span>
          </div>
          <p className="p-4 text-center">{description}</p>
        </div>
      </Link>
    </div>
  );
};

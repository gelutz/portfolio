import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ name, slug }: { name: string, slug: string }) => {
    return (
        <div className="max-w-64">
            <Link href={`projects/${slug}`}>
                <div className="border h-full border-cinza p-4 items-center rounded-lg">
                    <div className="flex justify-center px-4 gap-4">
                        <Image
                            loading="eager"
                            src={`/projects/assets/icons/${slug}.svg`}
                            alt="project icon"
                            width={300}
                            height={300}
                        />
                        <span className="text-lg font-bold">{name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

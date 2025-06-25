import Image from "next/image";
import Link from "next/link";

export const ProjectDescription = async ({
    name,
    html,
    slug,
}: {
  name: string;
  html: string;
  slug: string;
}) => {

    
    return (
        <>
            <div className="flex justify-center relative">
                <Image
                    loading="eager"
                    src={`/projects/assets/backgrounds/${slug}.png`}
                    alt="Project background"
                    fill
                    className="object-cover bg-top aspect-auto rounded-t-xl max-h-96 mask-fade"
                />
                <div className="p-16 z-20 flex flex-col gap-8">
                    <div className="w-fit rounded-full p-2 border border-cinza backdrop-blur-lg transition-hover">
                        <Link href="/">
                            <Image className="size-6" src="/assets/back.svg" alt="Back" width={24} height={24} />
                        </Link>
                    </div>
                    <div className="border border-cinza rounded-xl backdrop-blur lg p-4">
                        <h1 className="text-center text-4xl font-bold">{name}</h1>
                    </div>
                    <div className="border border-cinza rounded-xl p-16 backdrop-blur-lg leading-loose">
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </>
    );
};

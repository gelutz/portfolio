import Image from "next/image";

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
                <div className="p-16 z-20">
                    <div className="border border-cinza rounded-xl backdrop-blur lg p-4">
                        <h1 className="text-center text-4xl font-bold">{name}</h1>
                    </div>
                    <div className="border border-cinza rounded-xl p-16 mt-8 backdrop-blur-lg leading-loose">
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </>
    );
};

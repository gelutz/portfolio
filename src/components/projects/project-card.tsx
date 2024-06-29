import type { NotionProject } from "@/utils/notion";
import Image from "next/image";

// make this component receive classnames and style
export const ProjectCard = (
  props: NotionProject & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div className={props.className}>
      <div className="border h-full border-cinza p-4 items-center rounded-lg">
        <div className="flex justify-center px-4 gap-4 grow">
          {props.iconUrl && (
            <Image
              unoptimized
              src={props.iconUrl}
              alt="project icon"
              width={30}
              height={30}
            />
          )}
          <span className="text-lg font-bold">{props.title}</span>
        </div>
        <p className="p-4 text-center">{props.tldr}</p>
      </div>
    </div>
  );
};

import { NotionProject } from "@/utils/notion";
import Markdown from "react-markdown";

export const ProjectDescription = async ({
  project,
  text,
}: {
  project: NotionProject;
  text: string;
}) => {
  return (
    <>
      <div className="border border-cinza rounded-xl backdrop-blur lg p-4">
        <h1 className="text-center text-4xl font-bold">{project.title}</h1>
        <p className="text-center text-xl">{project.tldr}</p>
      </div>
      <div className="border border-cinza rounded-xl p-16 mt-8 backdrop-blur-lg leading-loose">
        <Markdown
          components={{
            h1: (props) => {
              return (
                <h1 className="text-2xl text-center font-bold">
                  {props.children}
                </h1>
              );
            },
          }}
        >
          {text}
        </Markdown>
      </div>
    </>
  );
};

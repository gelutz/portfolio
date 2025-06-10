import Markdown from "react-markdown";

export const ProjectDescription = async ({
    title,
    tldr,
    text,
}: {
  title: string;
  tldr: string;
  text: string;
}) => {
    return (
        <>
            <div className="border border-cinza rounded-xl backdrop-blur lg p-4">
                <h1 className="text-center text-4xl font-bold">{title}</h1>
                <p className="text-center text-xl">{tldr}</p>
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

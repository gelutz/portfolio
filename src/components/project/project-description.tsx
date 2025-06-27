
export const ProjectDescription = async ({
    name,
    html,
}: {
  name: string;
  html: string;
}) => {

    
    return (
        <>
            <div className="border border-cinza rounded-xl backdrop-blur lg p-4">
                <h1 className="text-center text-4xl font-bold">{name}</h1>
            </div>
            <div className="border border-cinza rounded-xl p-16 backdrop-blur-lg leading-loose">
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </>
    );
};

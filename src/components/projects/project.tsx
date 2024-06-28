export type ProjectProps = {
  title: string;
  text: string;
  imageUrl?: string;
};

export const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return <div>{props.title}</div>;
};

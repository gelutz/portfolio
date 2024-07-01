import { Gibberish } from "./fake-text";

export default function Loading({ columns = 3 }: { columns?: number }) {
  const gerarElementos = (columns: number) => {
    const elementos: JSX.Element[] = [];
    for (let i = 0; i < columns; i++) {
      elementos.push(<Gibberish key={i} />);
    }
    return elementos;
  };

  return (
    <div className="text-center space-y-12 text-xl flex flex-col items-center">
      <span className="text-4xl">Loading...</span>
      <div className="animate-pulse flex space-x-4 w-full">
        {gerarElementos(columns)}
      </div>
    </div>
  );
}

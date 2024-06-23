export default function Terminal() {
  return (
    <div className="w-[40rem] h-92 blur">
      <>
        <div className="relative h-8 w-full bg-cinza rounded-t-lg">
          <div className="absolute left-50 top-0 bg-cinza h-full"></div>
          <div className="relative flex gap-2 h-full items-center p-2 justify-end">
            <div className="size-3 rounded-full bg-blue-300"></div>
            <div className="size-3 rounded-full bg-yellow-300"></div>
            <div className="size-3 rounded-full bg-red-300"></div>
          </div>
        </div>
        <div className="bg-[#1E1E2D] h-80 rounded-b-lg font-mono space-y-2 p-4">
          <p>
            $ <span className="text-[#A7E3A5]">git</span> diff
          </p>
          <p>src/app/page.tsx</p>
          <p>src/components/about.tsx</p>
          <p>
            $ <span className="text-[#A7E3A5]">git</span> add
            <span className="text-[#B96E87]">src/app/page.tsx</span> $
          </p>
          <p>
            $ <span className="text-[#A7E3A5]">git</span> commit -m
            <span className="text-[#A7E3A5]">
              &apos;feat: add about page&apos;
            </span>
          </p>
          <p>
            $ <span className="text-[#A7E3A5]">git</span> push
          </p>
        </div>
      </>
    </div>
  );
}

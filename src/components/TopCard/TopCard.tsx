import Image from 'next/image';

export default function TopCard() {
	return (
		<>
			<div className="flex top-card w-[65%] mt-12 p-4 bg-gray-300 bg-opacity-20 backdrop-blur-md shadow-md rounded-lg">
				<div className="flex w-fit h-fit">
					<Image 
						className="rounded-full shadow-md"
						src="/images/eu.jpg"
						alt="minibliss"
						height={200}
						width={200}
					/>
				</div>

				<div className="font-bricolage ml-4 w-full h-full p-2 leading-3">
					<h1 className="text-lg font-bold ">Desenvolvedor fullstack</h1>
					<span className="text-lg">
					Desenvolvedor &quot;de tudo um pouco&quot;
					<br />
					Fã de <span className='text-blue-500 text-bold'>Typescript</span>
					<br />
					Atualmente estudando programação em um baixo nível com Rust e C++
					</span>
					<div className="text-md font-bold text-end">
						- Gabriel Eduardo Lutz
					</div>
				</div>
			</div>
		</>
	)
}
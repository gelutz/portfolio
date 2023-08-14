import Link from "next/link";
import { environment } from "~/config/environment";


export default function Middle() {
	return (
		<>
			<main className="grid grid-cols-2 grid-rows-2 gap-8 w-[80%] mt-10 p-10 h-[55%] bg-gray-300 bg-opacity-20 backdrop-blur-md shadow-md rounded-lg">
				<div className="bg-gray-100 bg-opacity-20 border-gray-300 border-opacity-20 border-2  h-full w-full rounded-lg shadow-md">
					<Link className="font-inconsolata text-xl " href={environment.GITHUB_URL + "newscraper"}>Newscraper</Link>
				</div>
				<div className="bg-gray-100 bg-opacity-20 border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
				<div className="bg-gray-100 bg-opacity-20 border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
				<div className="bg-gray-100 bg-opacity-20 border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
			</main>
		</>
	)
}
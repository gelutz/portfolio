import Link from "next/link";
import { environment } from "~/config/environment";

export default function Middle() {
	const reposURL = environment.GITHUB_API + "repos"
	let reposJSON;

	fetch(reposURL, {cache: 'force-cache'})
	.then(response => response.body)
	.then((values) => {
		reposJSON = values
		console.log(reposJSON)
	}).catch(console.log)



	return (
		<>
			<main className="grid grid-cols-2 grid-rows-2 gap-8 w-[80%] mt-10 p-10 h-[60%] shadow-xl rounded-2xl">
				<div className=" border-gray-300 border-opacity-20 border-2  h-full w-full rounded-lg shadow-md">
					<Link href={environment.GITHUB_URL + "newscraper"}>Newscraper</Link>
				</div>
				<div className=" border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
				<div className=" border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
				<div className=" border-gray-300 border-opacity-20 border-2 h-full w-full rounded-lg shadow-md"></div>
			</main>
		</>
	)
}
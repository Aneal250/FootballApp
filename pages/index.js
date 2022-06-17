import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import data from "../components/data";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Spotify" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* the Hero section */}

			<Hero />

			<div className="flex justify-center ">
				<div className="container md:w-[750px] w-full shadow-sm p-5 box bg-white rounded border">
					<h2 className="text-2xl">All Competitions</h2>
					<div className="flex flex-wrap">
						{data.map((data) => (
							<Card data={data} key={data.id} />
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

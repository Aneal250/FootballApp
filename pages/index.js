import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import data from "../components/data";
import axios from "axios";
import Loading from "../components/Loading";

export default function Home() {
	const [allCompetition, setAllCompetition] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const FetchAllCompetition = async () => {
		const payload = {
			headers: {
				"x-auth-token": `908778af16c548488b5e6457a5a3d48d`,
			},
		};

		try {
			const response = await axios(
				"https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
				payload
			);

			setAllCompetition(response.data.competitions);

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		FetchAllCompetition();
	}, []);

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
					{isLoading ? (
						<Loading />
					) : (
						<div className="flex flex-wrap">
							{allCompetition.map((data) => (
								<Card data={data} key={data.id} />
							))}
						</div>
					)}
				</div>
			</div>

			<Footer />
		</div>
	);
}

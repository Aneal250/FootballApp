import React, { useState, Fragment, useEffect } from "react";
import Hero from "../../components/Hero";
import Head from "next/head";
import Footer from "../../components/Footer";
import Link from "next/link";
import StandingsCard from "../../components/StandingsCard";
import data2 from "../../components/data2";
import { Tab } from "@headlessui/react";
import CardMatches from "../../components/CardMatches";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import axios from "axios";

const Competition = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingFixtures, setIsLoadingFixtures] = useState(true);

	const [competitionName, setCompetitionName] = useState("");
	const [fixtures, setFixtures] = useState([]);
	const [data, setData] = useState([]);

	const router = useRouter();
	const { id } = router.query;

	const FetchAllStandings = async () => {
		const payload = {
			headers: {
				"x-auth-token": `908778af16c548488b5e6457a5a3d48d`,
			},
		};

		try {
			const response = await axios(
				`http://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`,
				payload
			);

			setData(response.data.standings);

			setCompetitionName(response.data.competition.name);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const FetchAllMatchFixtures = async () => {
		const payload = {
			headers: {
				"x-auth-token": `908778af16c548488b5e6457a5a3d48d`,
			},
		};

		let season;

		season ? 2022 : 2021;

		try {
			let response = await axios(
				`https://api.football-data.org/v2/competitions/${id}/matches?season=2022&matchday=1`,
				payload
			);

			setFixtures(response.data.matches);

			setIsLoadingFixtures(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (router.isReady) {
			const { id } = router.query;
			if (!id) return null;
			FetchAllStandings();
			FetchAllMatchFixtures();
		}
	}, [router.isReady]);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Spotify" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<div className="flex justify-center ">
				<div className="container md:w-[750px] w-full shadow-sm p-2 box bg-white rounded border">
					<div className="flex p-3">
						<div>
							<p>
								<Link href="/">
									<a className="fancy-link">All Competitions</a>
								</Link>
							</p>
						</div>
						<div>
							<p className="text-2xl">&nbsp;{`  /  `}&nbsp;</p>
						</div>
						<div>
							<p className="text-gray-600 mt-1">{competitionName}</p>
						</div>
					</div>

					<div className="mt-3  p-3">
						<h3 className="text-2xl font-bold">{competitionName}</h3>
					</div>

					<Tab.Group>
						<Tab.List>
							<div className="h-12 heading flex items-center mt-4">
								<div className="w-1/2 text-center text-white font-medium ">
									<Tab as={Fragment}>
										{({ selected }) => (
											<button
												className={` whitespace-nowrap
                    ${
											selected &&
											"pb-2 border-b-2 border-footer text-footer border-white text-white"
										}
                  `}
											>
												STANDINGS
											</button>
										)}
									</Tab>
								</div>
								<div className="w-1/2 text-center text-white font-medium hover:border-collapse">
									<Tab as={Fragment}>
										{({ selected }) => (
											<button
												className={` whitespace-nowrap
                    ${
											selected &&
											"pb-2 border-b-2 border-footer text-footer border-white text-white"
										}
                  `}
											>
												MATCHES
											</button>
										)}
									</Tab>
								</div>
							</div>
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
								{isLoading ? (
									<Loading />
								) : (
									<div className=" rounded-lg my-4 border shadow-lg py-8 overflow-x-auto mt-4 pl-6">
										<div className="flex text-gray-700 font-bold">
											<div className="w-14 flex-shrink-0"></div>
											<div className="w-52 flex-shrink-0 flex">Team</div>
											<div className="w-14 flex-shrink-0">MP</div>
											<div className="w-14 flex-shrink-0">W</div>
											<div className="w-14 flex-shrink-0">D</div>
											<div className="w-14 flex-shrink-0">L</div>
											<div className="w-14 flex-shrink-0">GF</div>
											<div className="w-14 flex-shrink-0">GA</div>
											<div className="w-14 flex-shrink-0">Pts</div>
										</div>
										<hr className="w-[95%]  mt-2" />
										{data.map((data) =>
											data.table.map((standing, index) => (
												<StandingsCard data={standing} key={index} />
											))
										)}
									</div>
								)}
							</Tab.Panel>
							<Tab.Panel>
								<p className="text-2xl my-6 px-4 font-thin">Match Week 46</p>

								{isLoadingFixtures ? (
									<Loading />
								) : (
									<div className="flex flex-wrap">
										{fixtures.map((data, index) => (
											<CardMatches data={data} key={index} />
										))}
									</div>
								)}
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Competition;

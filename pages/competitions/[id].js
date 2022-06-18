import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import Head from "next/head";
import Footer from "../../components/Footer";
import Link from "next/link";
import StandingsCard from "../../components/StandingsCard";
import data2 from "../../components/data2";
import { Tab } from "@headlessui/react";
import data from "../../components/data";
import CardMatches from "../../components/CardMatches";

const Competition = () => {
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
							<p className="text-gray-600 mt-1">Championship</p>
						</div>
					</div>

					<div className="mt-3  p-3">
						<h3 className="text-2xl font-bold">Championship</h3>
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
									{data2.map((standing, index) => (
										<StandingsCard
											standing={standing}
											key={index}
											index={index}
										/>
									))}
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<p className="text-2xl my-6 px-4 font-thin">Match Week 46</p>
								<div className="flex flex-wrap">
									{data.map((data) => (
										<CardMatches data={data} key={data.id} />
									))}
								</div>
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

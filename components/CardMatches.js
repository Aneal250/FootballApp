import React from "react";

const CardMatches = ({ data }) => {
	return (
		<div className="md:w-1/2 w-full hover:shadow-xl p-5 cursor-pointer border-b border-r text-sm">
			<div className="rounded-sm">
				<div className="flex ">
					<div className="w-3/4 flex-col px-2 border-r">
						<div className="flex">
							<div className="w-1/5">
								<img src="/img/logo.png" alt="" className="w-[25px]" />
							</div>
							<div className="w-3/5">
								<p className="font-thin">{data.homeTeam.name}</p>
							</div>
							<div className="w-1/5">
								<p className="text-right text-lg">
									{data.score.fullTime.awayTeam}
								</p>
							</div>
						</div>

						<div className="flex mt-4  ">
							<div className="w-1/5">
								<img src="/img/logo2.png" alt="" className="w-[25px]" />
							</div>
							<div className="w-3/5">
								<p>{data.awayTeam.name}</p>
							</div>
							<div className="w-1/5">
								<p className="text-right text-lg">
									{data.score.fullTime.awayTeam}
								</p>
							</div>
						</div>
					</div>
					<div className="grow flex-col items-center text-center">
						<div>
							<p>FT</p>
						</div>
						<div className="mt-2">
							<p>05/07</p>
						</div>
						<div className="mt-2">
							<p>11:00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardMatches;

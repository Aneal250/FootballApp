import React from "react";

const StandingsCard = ({ data, index }) => {
	return (
		<>
			<div className="flex my-4 font-medium">
				<div className="w-14 flex-shrink-0">{data.position}</div>
				<div className="w-52 flex-shrink-0  flex">
					<img src={data.team.crestUrl} alt="" className="w-8 h-8" />
					<h5 className="mx-4">{data.team.name}</h5>
				</div>

				<div className="w-14 flex-shrink-0">{data.playedGames}</div>
				<div className="w-14 flex-shrink-0">{data.won}</div>
				<div className="w-14 flex-shrink-0">{data.draw}</div>
				<div className="w-14 flex-shrink-0">{data.lost}</div>
				<div className="w-14 flex-shrink-0">{data.goalsFor}</div>
				<div className="w-14 flex-shrink-0">{data.goalsAgainst}</div>
				<div className="w-14 flex-shrink-0">{data.points}</div>
			</div>
			<hr className="w-[95%] mt-2" />
		</>
	);
};

export default StandingsCard;

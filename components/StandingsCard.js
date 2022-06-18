import React from "react";

const StandingsCard = ({ standing, index }) => {
	return (
		<>
			<div className="flex my-4 font-medium">
				<div className="w-14 flex-shrink-0">{index + 1}</div>
				<div className="w-52 flex-shrink-0  flex">
					<img src="/img/images.png" alt="" className="w-8" />
					<h5 className="mx-4">{standing.club}</h5>
				</div>

				<div className="w-14 flex-shrink-0">{standing.mp}</div>
				<div className="w-14 flex-shrink-0">{standing.w}</div>
				<div className="w-14 flex-shrink-0">{standing.d}</div>
				<div className="w-14 flex-shrink-0">{standing.l}</div>
				<div className="w-14 flex-shrink-0">{standing.gf}</div>
				<div className="w-14 flex-shrink-0">{standing.ga}</div>
				<div className="w-14 flex-shrink-0">{standing.Pts}</div>
			</div>
			<hr className="w-[95%] mt-2" />
		</>
	);
};

export default StandingsCard;

import React from "react";
import Link from "next/link";

const Card = ({ data }) => {
	return (
		<Link href={`/competitions/${data.id}`}>
			<div className="md:w-[320px] w-full mb-4 m-4 shadow-xl hover:shadow-2xl border-gray-400 cursor-pointer">
				<div className="px-4 py-6  rounded-sm">
					<div className="flex ">
						<div className="px-2">
							<img src="/img/ELC.png" alt="" className="w-[80px]" />
						</div>
						<div className="grow flex-col items-center">
							<div>
								<h2 className="text-2xl text-gray-800">{data.competition}</h2>
							</div>
							<div className="text-sm mt-4 text-gray-500">{data.country}</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;

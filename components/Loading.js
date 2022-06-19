import React from "react";
import Lottie from "react-lottie-player";
import loading from "../components/json/loadinglottie.json";

const Loading = () => {
	return (
		<div className="flex justify-center my-14">
			<Lottie
				loop
				animationData={loading}
				play
				style={{ width: 200, height: 200 }}
			/>
		</div>
	);
};

export default Loading;

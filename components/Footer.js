import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="row my-8">
				<div className="flex-col text-center">
					<p>
						<span className="text-gray-700">Built by </span>
						<a href="#" className="fancy-link">
							Aneal EmekaH
						</a>
					</p>
					<p className="text-sm mt-2">
						Credits{" "}
						<a href="#" className="fancy-link">
							Football Data API
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
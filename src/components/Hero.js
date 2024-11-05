import React from "react";
import "./Hero.css";
import "./Button.css";
import Download from "./Download";
import Navigation from "./Navigation";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<Download />
				<Navigation />
			</div>
		</div>
	);
};

export default Hero;

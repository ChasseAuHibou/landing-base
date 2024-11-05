import React from "react";
import "./Button.css";

const Navigation = () => {
	const handleNavigation = () => {
		const linkUrl =
			"https://cdn1.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2017/12/13/8ae031a8-def2-11e7-af98-bc68401a7f65_1280x720_133719.jpg?itok=3IReW_EK";
		window.open(linkUrl, "_blank");
	};
	return (
		<button className="button" onClick={handleNavigation}>
			Go to Site
		</button>
	);
};

export default Navigation;

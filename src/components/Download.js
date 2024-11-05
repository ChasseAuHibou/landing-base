import React from "react";
import "./Button.css";

const Download = () => {
	const fileId = "1laNUq-18YUJFQvXvyQgQZrV8c9rDiVLV";
	const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

	return (
		<a href={fileUrl} download className="button">
			Download file
		</a>
	);
};

export default Download;
// Random component

import React from "react";

interface render {
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

// Renderer callback with condition
export const renderer: React.FC<render> = ({
	hours,
	minutes,
	seconds,
	completed,
}) => {
	if (completed) {
		// Render a completed state
		return <span>You Order is ready!</span>;
	} else {
		// Render a countdown
		return (
			<span>
				{hours}:{minutes}:{seconds}
			</span>
		);
	}
};

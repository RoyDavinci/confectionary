import React from "react";
import Countdown from "react-countdown";
import { renderer } from "./render";
interface data {
	item: string;
}

export const CountdownContainer: React.FC<data> = ({ item }) => {
	const duration = () => {
		if (item === "7") {
			item = "420000";
		} else {
			item = "300000";
		}
		return Date.now() + Number(item);
	};
	const CountdownWrapper = () => (
		<Countdown date={duration()} renderer={renderer} />
	);

	const MemoCountdown = React.memo(CountdownWrapper);

	return (
		<div>
			<MemoCountdown />
		</div>
	);
};

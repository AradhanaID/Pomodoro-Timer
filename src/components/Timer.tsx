import { useContext, useEffect, useState } from "react";
import { TimerContext, TimerContextType } from "../context/TimerContext";

const Timer = () => {
	const timerProvider = useContext(TimerContext);
	if (!timerProvider) return null;
	const { timer } = timerProvider;

	const [minute, setMinute] = useState();
	const [second, setSecond] = useState();

	return (
		<p className="text-6xl my-6">
			{String(timer).padStart(2, "0")}:{String("0").padStart(2, "0")}
		</p>
	);
};

export default Timer;

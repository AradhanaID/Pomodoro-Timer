import { useContext, useEffect, useMemo, useState } from "react";
import { TimerContext, TimerContextType } from "../context/TimerContext";

const Timer = () => {
	const timerProvider = useContext(TimerContext);
	if (!timerProvider) return null;
	const { timer } = timerProvider;

	const minutes = useMemo(() => Math.floor(timer / 60), [timer])
	const seconds = useMemo(() => timer % 60, [timer])
	return (
		<p className="text-6xl my-6">
			{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
		</p>
	);
};

export default Timer;

import { MutableRefObject, createContext, useEffect, useRef, useState } from "react";

export type TimerContextType = {
	timer: number;
	play: () => void;
	pause: () => void;
	stop: () => void;
};

export const TimerContext = createContext<TimerContextType | null>(null);

type TimerContextProviderProps = {
	children: React.ReactNode;
};


export const TimerContextProvider = ({
	children,
}: TimerContextProviderProps) => {
	const counter = useRef<any>(null)
	const [timer, setTimer] = useState(1500);

	const play = () => {
		if (timer >= 1) {
			setTimer(current => current - 1);
			counter.current = setInterval(() => {
				setTimer(current => current - 1);
			}, 1000)
		}

		console.log(counter.current);
	};

	const pause = () => {
		clearInterval(counter.current);
	}

	const stop = () => {
		setTimer(1500);
		clearInterval(counter.current);
	}

	return (
		<TimerContext.Provider value={{ timer, play, pause, stop }}>
			{children}
		</TimerContext.Provider>
	);
};

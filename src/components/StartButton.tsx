import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
const StartButton = () => {

	const timer = useContext(TimerContext);
	if (!timer) return null

	const { play } = timer;

	return (
		<p className="w-full text-center bg-red-800 cursor-pointer py-2 px-6 rounded inline-block" onClick={play}>
			Start
		</p>
	);
};

export default StartButton;

import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
const StopButton = () => {

	const timer = useContext(TimerContext);
	if (!timer) return null

	const { stop } = timer;

	return (
		<p className="w-full text-center border border-1 border-red-800 cursor-pointer py-2 px-6 rounded inline-block" onClick={stop}>
			Stop
		</p>
	);
};

export default StopButton;

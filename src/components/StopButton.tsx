import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
const StopButton = () => {

	const timer = useContext(TimerContext);
	if (!timer) return null

	const { stop } = timer;

	return (
		<p className="w-full text-center text-red-800 cursor-pointer py-2 px-6" onClick={stop}>
			Reset
		</p>
	);
};

export default StopButton;

import { useContext, useMemo } from "react";
import { TimerContext } from "../context/TimerContext";

const Timer = () => {
  const timerProvider = useContext(TimerContext);
  if (!timerProvider) return null;
  const { timer } = timerProvider;

  const minutes = useMemo(() => Math.floor(timer / 60), [timer])
  const seconds = useMemo(() => timer % 60, [timer])

  const minutesStyles: Record<string, string> = { '--value': String(minutes).padStart(2, "0") }
  const secondsStyles: Record<string, string> = { '--value': String(seconds).padStart(2, "0") }

  return (
    <div className="flex items-center text-8xl my-6 font-semibold">
      <span className="countdown text-right">
        <span style={minutesStyles}></span>
      </span>
      <span className="border h-24 mx-4">
      </span>
      <span className="countdown text-left">
        <span style={secondsStyles}></span>
      </span>
    </div>
  );
};

export default Timer;
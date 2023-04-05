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
    <p className="text-8xl my-6">
      <span className="countdown">
        <span style={minutesStyles}></span>
      </span>
      <span>:</span>
      <span className="countdown">
        <span style={secondsStyles}></span>
      </span>
      {/* {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")} */}
    </p>
  );
};

export default Timer;
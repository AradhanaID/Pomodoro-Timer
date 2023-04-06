import {useContext } from "react";
import StartButton from "./components/StartButton";
import ResetButton from "./components/ResetButton";

import Timer from "./components/Timer";
import { TimerContext } from "./context/TimerContext";
import NextButton from "./components/NextButton";
import PomodoroStatus from "./components/PomodoroStatus";

function App() {
  const timer = useContext(TimerContext);
  if (!timer) return null

  const { timerState } = timer;
  return (
    <div className={`${timerState.current.value.backgroundColor} min-h-screen font-sans text-white flex flex-col gap-4 items-center pt-24 transition-colors duration-200 ease-in-out`}>
      <h1 className="font-semibold text-3xl mb-8">Pomodoro Timer</h1>
      <PomodoroStatus />
      <Timer />
      <div className="flex items-center gap-6">
        <ResetButton />
        <StartButton />
        <NextButton />
      </div>
      <p className="mt-48 text-xs">Developed by Aradhana Indra Daniswara</p>
    </div>
  );
}

export default App;

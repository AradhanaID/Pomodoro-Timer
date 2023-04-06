import {useContext } from "react";
import { TimerContext } from "./context/TimerContext";
import { NextButton, PomodoroStatus, ResetButton, StartButton, Timer } from "./components/Pomodoro";
import { MenuSelector } from "./components";
import Alert from "./components/Alert";

function App() {
  const { timerState } = useContext(TimerContext)!;
  return (
    <div className={`${timerState.current.value.backgroundColor} min-h-screen font-sans text-white flex flex-col gap-4 items-center pt-24 transition-colors duration-200 ease-in-out`}>
      <Alert />
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

import { createContext, useContext, useState } from "react";
import StartButton from "./components/StartButton";
import ResetButton from "./components/ResetButton";

import Timer from "./components/Timer";
import { TimerContext, TimerContextProvider } from "./context/TimerContext";
import NextButton from "./components/NextButton";

function App() {
  const timer = useContext(TimerContext);
  if (!timer) return null

  const { timerState } = timer;
  return (
    <div className={`${timerState.current.value.backgroundColor} min-h-screen font-sans text-white flex flex-col gap-4 items-center pt-32 transition-colors`}>
      <h1 className="font-semibold text-3xl">Pomodoro Timer</h1>
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

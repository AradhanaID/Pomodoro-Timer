import { createContext, useState } from "react";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";

import Timer from "./components/Timer";
import { TimerContextProvider } from "./context/TimerContext";

function App() {
  return (
    <TimerContextProvider>
      <div className="bg-zinc-800 min-h-screen font-sans text-white flex flex-col items-center pt-32">
        <h1 className="font-semibold text-3xl">Pomodoro Timer</h1>
        <Timer />
        <div className="flex flex-col gap-3 w-32">
          <StartButton />
          <StopButton />
        </div>
      </div>
    </TimerContextProvider>
  );
}

export default App;

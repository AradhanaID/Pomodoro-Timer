import { createContext, useEffect, useRef, useState } from "react";
import { timerHead, TimerType } from "../data/TimerData";
import { Node } from "../datastructures/Node";
import { useAlert } from "../hooks/useAlert";
export type TimerContextType = {
  timer: number;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  stop: () => void;
  nextState: () => void;
  timerState: React.MutableRefObject<Node<TimerType>>;
  alertIsVisible: boolean
};

export const TimerContext = createContext<TimerContextType | null>(null);

type TimerContextProviderProps = {
  children: React.ReactNode;
};


export const TimerContextProvider = ({
  children,
}: TimerContextProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const counter = useRef<any>(null)
  const timerState = useRef(timerHead())
  const [timer, setTimer] = useState(timerState.current.value.defaultTime);
  const [alertIsVisible, invoke] = useAlert();
  if (!timerState) {
    return null
  }

  useEffect(() => {
    if (timer <= 0) {
      nextState();
      invoke();
    }
  }, [timer])

  const play = () => {
    if (timer >= 1) {
      setIsPlaying(true)
      setTimer(current => current - 1);
      counter.current = setInterval(() => {
        setTimer(current => current - 1);
      }, 1000)
    }
  };

  const pause = () => {
    setIsPlaying(false)
    clearInterval(counter.current);
  }

  const stop = () => {
    setIsPlaying(false)
    setTimer(timerState.current.value.defaultTime);
    clearInterval(counter.current);
  }

  const nextState = () => {
    clearInterval(counter.current);
    timerState.current = timerState.current.next!
    setTimer(timerState.current.value.defaultTime)
    setIsPlaying(false)
  }

  return (
    <TimerContext.Provider value={{ timer, isPlaying, timerState, play, pause, stop, nextState, alertIsVisible }}>
      {children}
    </TimerContext.Provider>
  );
};

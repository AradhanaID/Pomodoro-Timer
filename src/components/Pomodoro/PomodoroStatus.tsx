import React, { useContext } from 'react'

import { CupHot, GraphUpArrow, Headphones } from 'react-bootstrap-icons'
import { TimerContext } from '../../context/TimerContext';

const PomodoroStatus = () => {
  const { timerState } = useContext(TimerContext)!;

  switch (timerState.current.value.name) {
    case 'Focus':
      return (
        <div className='flex gap-3 items-center'>
          <GraphUpArrow width={36} height={36} />
          <PomodoroStatusText text={timerState.current.value.name} />
        </div>
      )
    case 'Short Break':
      return (
        <div className='flex gap-3 items-center'>
          <CupHot width={36} height={36} />
          <PomodoroStatusText text={timerState.current.value.name} />
        </div>
      )
    case 'Long Break':
      return (
        <div className='flex gap-3 items-center'>
          <Headphones width={36} height={36} />
          <PomodoroStatusText text={timerState.current.value.name} />
        </div>
      )
  }
  return null;
}

const PomodoroStatusText = ({ text }: { text: string }) => (
  <h2 className='text-4xl font-light'>
    {text.toUpperCase()}
  </h2>
)
export default PomodoroStatus
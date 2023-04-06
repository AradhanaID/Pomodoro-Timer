import React, { useContext } from 'react'
import { TimerContext } from '../../context/TimerContext';
import { SkipEndFill } from 'react-bootstrap-icons'
const NextButton = () => {
  const timer = useContext(TimerContext);
  if (!timer) return null

  const { nextState, isPlaying } = timer;
  return (
    <div className='cursor-pointer' onClick={nextState}>
      <SkipEndFill width={32} height={32}/>
    </div>
  )
}

export default NextButton
import React, { useEffect, useRef, useState } from 'react'
import { CheckCircleFill, CheckLg, Stopwatch, StopwatchFill } from 'react-bootstrap-icons'

const Alert = () => {
  const [isVisible, invoke] = useAlert();
  useEffect(() => {
    console.log(isVisible)
  }, [isVisible])
  return (
    <div className={`toast transition-opacity`}>
      <div className="alert border-l-4 border-green-400 rounded px-24">
        <div>
          <StopwatchFill color='#4ade80' />
          <span className='text-white'>Timer is up!</span>
        </div>
      </div>
    </div>
  )
}

export const useAlert = (): [React.MutableRefObject<boolean>, () => void] => {
  let isVisible = useRef(false);

  const invoke = () => {
    console.log("invoke is called");
    isVisible = true
    setTimeout(() => {
      console.log("setTimeout stopped");
      isVisible = false;
    }, 5000)
  }
  return [isVisible, invoke];
}

export default Alert
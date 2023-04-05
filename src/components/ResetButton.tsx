import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { ArrowRepeat } from "react-bootstrap-icons"
const ResetButton = () => {

  const timer = useContext(TimerContext);
  if (!timer) return null

  const { stop } = timer;

  return (
    <div className='cursor-pointer' onClick={stop}>
      <ArrowRepeat width={32} height={32} />
    </div>
  );
};

export default ResetButton;

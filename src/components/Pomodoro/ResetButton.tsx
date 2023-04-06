import { useContext } from 'react';
import { ArrowRepeat } from "react-bootstrap-icons"
import { TimerContext } from '../../context/TimerContext';
const ResetButton = () => {

  const { stop } = useContext(TimerContext)!;
  
  return (
    <div className='cursor-pointer' onClick={stop}>
      <ArrowRepeat width={32} height={32} />
    </div>
  );
};

export default ResetButton;

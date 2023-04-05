import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { PlayFill, PauseFill } from 'react-bootstrap-icons'
const StartButton = () => {

  const timer = useContext(TimerContext);
  if (!timer) return null

  const { isPlaying, play, pause, timerState } = timer;

  return (
    <>
      {isPlaying ?
        <p className={`w-full text-center bg-white ${timerState.current.value.color} font-bold cursor-pointer py-3 px-20 rounded inline-block`} onClick={pause}>
          <PauseFill width={32} height={32} className='mx-auto'/>
        </p>
        :
        <p className={`w-full text-center bg-white ${timerState.current.value.color} font-bold cursor-pointer py-3 px-20 rounded inline-block`} onClick={play}>
          <PlayFill width={32} height={32} className='mx-auto'/>
        </p>  
      }
    </>
  );
};

export default StartButton;

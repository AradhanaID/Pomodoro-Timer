import { StopwatchFill } from 'react-bootstrap-icons'

const Alert = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`toast ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
      <div className="alert border-l-4 border-green-400 rounded px-24">
        <div>
          <StopwatchFill color='#4ade80' />
          <span className='text-white'>Timer is up!</span>
        </div>
      </div>
    </div>
  )
}


export default Alert
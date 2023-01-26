import { useState, useEffect} from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date()); 

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(tick);
  });

  return (<>
    <h2 className="clock-container"> 
      {time.toLocaleTimeString()} 
    </h2>
  </>);
}

export default Clock;

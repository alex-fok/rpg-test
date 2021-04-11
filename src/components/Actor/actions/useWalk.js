import { useState } from 'react';
// import directions from '../vars/directions';
import directions from '../vars/directions';
import movements from '../vars/movements'

// Get numeric express for character's step and dir
const useWalk = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(0);
  
  const move = (dir) => {
    setPosition(prev => ({
      x: prev.x + movements[dir].x,
      y: prev.y + movements[dir].y
    }))
  }

  const walk = (dir) => {
    setStep((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      if (prev === directions[dir]) move(dir);
      return directions[dir]
    });
  }
  
  return {position, step, dir, walk}
}

export default useWalk;
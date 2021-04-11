import Sprite from '../Sprite';
import { DOWN } from './vars/directions';

const Actor = ({image, position={x: 0, y: 0}, step = 0, dir=DOWN}) => {
  const width = 32;
  const height = 32;
  return (
    <Sprite
      image = {image}
      position={position}
      status = {{
        x: step*width,
        y: dir*height,
        width: width,
        height: height
      }}
    />
  )
}

export default Actor;
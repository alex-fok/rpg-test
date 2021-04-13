
import Actor from '../Actor';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../Actor/actions/useWalk';
import directions from '../Actor/vars/directions';
const Player = ({initPos, map}) => {
  const {position, step, dir, walk} = useWalk(initPos, map);
  
  useKeydown((e) => {
    const dir = e.key.replace('Arrow', '').toUpperCase();
    if (!directions.hasOwnProperty(dir)) return;
    e.preventDefault();
    walk(dir);
  })

  return (
    <Actor
      image='url(/m1.png)'
      position={position}
      step={step}
      dir={dir}
    />
  );
}
export default Player;
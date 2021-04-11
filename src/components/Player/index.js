
import Actor from '../Actor';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../Actor/actions/useWalk';

const Player = () => {
  const {position, step, dir, walk} = useWalk();

  useKeydown((e) => {
    e.preventDefault();
    const dir = e.key.replace('Arrow', '').toUpperCase();
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
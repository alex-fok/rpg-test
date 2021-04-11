const stepSize = 16;

const movements = {
  DOWN: { x: 0, y: stepSize},
  LEFT: { x: -stepSize, y: 0},
  RIGHT: { x: stepSize, y: 0},
  UP: { x: 0, y: -stepSize },
}

export default movements;
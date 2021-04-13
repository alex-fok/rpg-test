const Map = () => {
  let initMap = new Array(45).fill(new Array(64).fill(0));
  initMap[22] = new Array(64).fill(1);
  return initMap;
}

export default Map;
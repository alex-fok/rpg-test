import './App.css';
import Player from './components/Player';
import Map from './components/Map';
function App() {
  const startingMap = Map();
  return (
    <div className="zone-container">
      <Player initPos={{x: 2, y: 35}} map={startingMap}/>
    </div>
  );
}

export default App;

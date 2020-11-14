import bitch from './bitch.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        🌿 Official Website of "The Laziest Bitch Awards" 🌿
        </p>
        <p>
          Praise The Laziest Bitch
        </p>
        <img src={bitch} className="App-bitch" alt="bitch" />
      </header>
    </div>
  );
}

export default App;

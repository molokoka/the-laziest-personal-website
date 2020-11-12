import logo from './logo.svg';
import bitch from './bitch.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        🌿 Official Website of "The Laziest Bitch Today Awards" 🌿
        </p>
        <p>
          Praise The Laziest Bitch Today
        </p>
        <img src={bitch} className="App-bitch" alt="bitch" />
      </header>
    </div>
  );
}

export default App;

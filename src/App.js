import botch from './botch.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>my clinks</h4>
      </header>
      <div className="App-page">

        <h5 className="App-h">instagram</h5>
        <a href="https://www.instagram.com/swietique/">@swietique</a>
        <a href="https://www.instagram.com/hello.pstrong/">@hello.pstrong</a>
        <a href="https://www.instagram.com/swetstock/">@swetstock</a>

        <h5 className="App-h">twitter</h5>
        <a href="https://twitter.com/molokoka">@molokoka</a>
        
        <h5 className="App-h">telegram</h5>
        <a href="https://t.me/memoslavij">t.me/memoslavij</a>

        <h5 className="App-h">spotify</h5>
        <h6 className="App-h">liked</h6>
        <div>
          <iframe src="https://open.spotify.com/embed/playlist/1Y15VMpFyET2Wc5adzziSp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/7CsJ24tbS4xDfe8HIY29F9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/24n6yxbQnFqAZYKEPbWVII" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/56ZLeZsiV6FR1nBh4VXtsg" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/1SVsMdq7gLNlgdwy9Dkvh3" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <h6 className="App-h">party</h6>
        <iframe src="https://open.spotify.com/embed/playlist/29KYholsef5MtOqr3NE41d" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="App-page">
        <img src={botch} className="App-me" alt="Me" />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aprenda o comando git-bisect conosco</p>
      </header>

      <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda Git
        </a>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Gallery from './Gallery.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Gallery/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn R
        </a>
      </header> */}
    </div>
  );
}

export default App;

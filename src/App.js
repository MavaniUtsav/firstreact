import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './props';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Folder Structure
        </a> */}
        {/* <Home /> */}
        <Profile text="Hello Props!!"/>
        <Profile profile="My Profile"/>
      </header>
    </div>
  );
}

export default App;

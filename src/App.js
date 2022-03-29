import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500"
        >
          Learn React
        </a>
      </header>
      <Button label="hello" />
    </div>
  );
}

export default App;

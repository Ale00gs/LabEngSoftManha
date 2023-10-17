import logo from "./logo.svg";
import "./App.css";
import Relogio from "./components/relogio"; // Importando o componente Relogio
import Letreiro from "./components/letreiro"; // Importando o componente Letreiro

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
        >
          Learn React
        </a>
      </header>
      <h1>React</h1>
      <div className="all-components">

        <div className="relogio-component card">
          <Relogio /> {/* Renderiza o componente Relogio */}
        </div>

        <div className="letreiro-component card">
          <Letreiro /> {/* Renderiza o componente Letreiro */}
        </div>

      </div>
    </div>
  );
}

export default App;

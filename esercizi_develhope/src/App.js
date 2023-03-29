//import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

const name = <strong>Scoiattolo</strong>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Welcome/>
          <Welcome name={name} age= {2} />
        </>
      </header>
    </div>
  );
}

export default App;

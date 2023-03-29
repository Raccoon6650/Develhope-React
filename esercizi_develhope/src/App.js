//import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

const name = <strong>Scoiattolo</strong>
const age = 20

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Welcome/>
          <Welcome name={name} age= {age}/>
         
        </>
      </header>
    </div>
  );
}

export default App;

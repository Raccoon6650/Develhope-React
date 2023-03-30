//import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

const name = <strong>Scoiattolo</strong>
const age = 20
const name2 = "Nome!"
const age2 = 2

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Welcome/>
          <Welcome name={name} age = {age}/>
          <Welcome name={name2} age = {age2}/>
         
        </>
      </header>
    </div>
  );
}

export default App;

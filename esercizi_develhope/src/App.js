//import logo from './logo.svg';
//import './App.css';
import CounterClick from './components/CounterClick';
import CounterT from './components/counter';

const time = 100;
const base = 5


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <CounterT time = {time} base = {base}/>
          <CounterClick/>
        </>
      </header>
    </div>
  );
}

export default App;

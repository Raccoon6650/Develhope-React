//import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Counter from './components/counter';
import CounterT from './components/counter_Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <CounterT/>
        </>
      </header>
    </div>
  );
}

export default App;

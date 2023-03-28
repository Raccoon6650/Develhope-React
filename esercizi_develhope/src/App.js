//import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <Hello/>
        <Message message="Messaggio modificato"/>
        </>
      </header>
    </div>
  );
}

//Il nome non viene inserito, succede solo questo

export default App;

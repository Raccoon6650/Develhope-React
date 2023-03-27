//import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Nino!"/>
        <Hello name="Mario!"/>
        <Hello name="Team!"/>
      </header>
    </div>
  );
}

export default App;

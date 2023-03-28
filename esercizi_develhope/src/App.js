//import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Welcome/>
          <Welcome name="Pinguino!"/>
        </>
      </header>
    </div>
  );
}

export default App;

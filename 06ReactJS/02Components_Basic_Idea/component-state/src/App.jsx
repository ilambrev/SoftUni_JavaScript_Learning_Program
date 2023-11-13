import Timer from './components/Timer';
import './App.css'

function App() {
  return (
    <div>
      <h1>Component State</h1>

      <Timer startTime={5}/>
      <Timer startTime={10}/>
      <Timer startTime={15}/>

    </div>
  );
}

export default App
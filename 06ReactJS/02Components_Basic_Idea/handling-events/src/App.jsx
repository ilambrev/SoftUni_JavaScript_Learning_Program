import Counter from './components/Counter'
import Button from './components/Button'
import { useState } from "react";
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (e) => {
    setClicks(c => c + 1);
  };

  return (
    <div>
      <Counter />

      <br />
      
      <Button clickHandler={clickHandler} clicks={clicks} />
    </div>
  )
}

export default App
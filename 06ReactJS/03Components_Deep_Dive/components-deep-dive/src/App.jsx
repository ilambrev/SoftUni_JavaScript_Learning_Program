import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);
  const [isManualUpdate, setIsManualUpdate] = useState(false);

  // let numbers = [1, 2, 3, 4, 5];
  // let doubledArr = numbers.map((number, index) => <li key={index}>{number * 2}</li>);
  // let [doubled, setDoubled] = useState(doubledArr);

  useEffect(() => {
    console.log('Mount component');
  }, []);

  useEffect(() => {
    console.log(`Update component ${numbers.length}`);
  }, [numbers]);

  useEffect(() => {
    console.log(`Update component numbers`);
  }, [numbers, count]);

  useEffect(() => {
    if (!isManualUpdate) {
      setTimeout(() => setCount(s => s + 1), 1000);
    } else {
      setIsManualUpdate(false);
    }
  }, [count]);

  // const onClick = () => {
  //   setDoubled(oldState => oldState.slice(0, oldState.length - 1));
  // }

  const onClick = () => {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1));
  }

  return (
    <div>

      <h3>Count: {count}</h3>

      <ul className={styles['unordered-list']}>
        {/* {doubled} */}

        {numbers.map((number, index) =>
          <li
            data-key={index}
            key={index}
            className={styles['list-item']}
          >
            {number * 2}
          </li>)}
      </ul>

      <button style={{marginRight: '10px'}} onClick={onClick}>Remove</button>

      <button onClick={() => { setCount(c => c + 1); setIsManualUpdate(true); }}>+</button>
    </div>
  );
}

export default App;
import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    };

    const clearCounterHandler = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter</h1>

            <p>Count: {count}</p>

            {/* Inline arrow function */}
            <button onClick={() => setCount(oldValue => oldValue - 1)}>-</button>

            <button onClick={clearCounterHandler}>clear</button>

            {/* Function reference */}
            <button onClick={incrementClickHandler}>+</button>

        </div>
    );
}
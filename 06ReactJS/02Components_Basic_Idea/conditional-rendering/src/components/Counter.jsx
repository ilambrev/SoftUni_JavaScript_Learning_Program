import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    };

    const clearCounterHandler = () => {
        setCount(0);
    };

    // Conditional rendering using return
    if (count < -1) {
        return (
            <h3>Counter value is too low!</h3>
        )
    };

    // Conditional rendering using operator if
    let warning = null;

    if (count < 0) {
        warning = <p>Negative values!</p>
    }

    let message = null;

    switch (count) {
        case 1:
            message = 'One';
            break;
        case 2:
            message = 'Two';
            break;
        case 3:
            message = 'Three';
            break;
        case 4:
            message = 'Four';
            break;
        case 5:
            message = 'Five';
            break;
    }

    return (
        <div>
            <h3>Counter</h3>

            {warning}

            {/* Conditional rendering with conditional (ternary) operators */}
            {count > 0 ? <p>Positive values!</p> : null}

            {/* Conditional rendering with boolean operators */}
            {/* If left side is true then right side of condition shows */}
            {count == 0 && <p>Please, start count!</p>}

            <h4>{message}</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(oldValue => oldValue - 1)}>-</button>

            <button onClick={clearCounterHandler}>clear</button>

            {/* Button will be disabled when counter equals 5 */}
            <button disabled={count > 4} onClick={incrementClickHandler}>+</button>

        </div>
    );
}
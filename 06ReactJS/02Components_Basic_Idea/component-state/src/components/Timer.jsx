import { useState } from "react";

export default function Timer(props) {

    // const hookResult = useState();
    // const stateValue = hookResult[0];
    // const setState = hookResult[1];

    const [time, setTime] = useState(props.startTime); //Pass initial state -> 0

    // Note: Dont't use setTimeout, useEffect is more appropriate
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer</h3>

            <p>{time}</p>
        </div>
    );
}
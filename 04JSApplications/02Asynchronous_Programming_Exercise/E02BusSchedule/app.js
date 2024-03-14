function solve() {
    const infoContainer = document.querySelector('#info span.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');

    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    let currentBusStopId = 'depot1';
    let currentBusStopName = '';
    let nextBusStopId = '';

    function depart() {
        fetch(`${baseUrl}${currentBusStopId}`)
            .then(res => res.json())
            .then(busStop => {
                infoContainer.textContent = `Next stop ${busStop.name}`;
                currentBusStopName = busStop.name;
                nextBusStopId = busStop.next;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(err => {
                infoContainer.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    function arrive() {
        infoContainer.textContent = `Arriving at ${currentBusStopName}`;
        currentBusStopId = nextBusStopId;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
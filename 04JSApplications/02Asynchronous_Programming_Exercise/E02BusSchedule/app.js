function solve() {
    const infoContainer = document.querySelector('#info span.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');

    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    let busStop = { next: 'depot' };

    function depart() {
        departButton.disabled = true;

        fetch(`${baseUrl}${busStop.next}`)
            .then(res => res.json())
            .then(stop => {
                busStop = stop;
                infoContainer.textContent = `Next stop ${busStop.name}`;
                arriveButton.disabled = false;
            })
            .catch(err => {
                infoContainer.textContent = 'Error';
                arriveButton.disabled = true;
            });
    }

    function arrive() {
        infoContainer.textContent = `Arriving at ${busStop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
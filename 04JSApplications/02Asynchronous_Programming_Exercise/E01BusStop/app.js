function getInfo() {
    const stopId = document.querySelector('#stopId');
    const stopNameContainer = document.querySelector('#stopName');
    const busesList = document.querySelector('#buses');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';

    stopNameContainer.textContent = '';
    busesList.textContent = '';

    fetch(`${baseUrl}${stopId.value}`)
        .then(res => res.json())
        .then(busStop => {
            stopNameContainer.textContent = busStop.name;

            Object.entries(busStop.buses).forEach(([busId, time]) => {
                const busListItem = document.createElement('li');
                busListItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesList.appendChild(busListItem);
            });

            stopId.value = '';
        })
        .catch(err => {
            stopNameContainer.textContent = 'Error';
        });
}
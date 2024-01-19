function attachEventsListeners() {
    const distanceMapToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    const inputField = document.querySelector('#inputDistance');
    const inputUnits = document.querySelector('#inputUnits');
    const outputField = document.querySelector('#outputDistance');
    const outputUnits = document.querySelector('#outputUnits');
    const convertButton = document.querySelector('#convert');

    convertButton.addEventListener('click', convert);

    function convert() {
        const result = (Number(inputField.value) * distanceMapToMeters[inputUnits.value]) / distanceMapToMeters[outputUnits.value];

        outputField.value = result;
    }
}
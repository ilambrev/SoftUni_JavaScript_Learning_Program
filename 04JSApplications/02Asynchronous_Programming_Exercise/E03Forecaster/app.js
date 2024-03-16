function attachEvents() {

    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }

    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';

    const locationInput = document.querySelector('#location');
    const forecastContainer = document.querySelector('#forecast');
    const currentForecastContainer = document.querySelector('#current');
    const upcomingForecastContainer = document.querySelector('#upcoming');
    const getWeatherButton = document.querySelector('#submit');

    getWeatherButton.addEventListener('click', getLocations);

    function getLocations() {
        fetch(`${baseUrl}locations`)
            .then(res => res.json())
            .then(locations => {
                const locationData = locations.find(l => l.name === locationInput.value);
                locationInput.value = '';
                clearContent(currentForecastContainer);
                clearContent(upcomingForecastContainer);
                forecastContainer.style.display = 'block';
                getCurrentForecast(locationData.code);
                getUpcomingForecast(locationData.code);
            })
            .catch(err => console.log(err));
    }

    function getCurrentForecast(locationCode) {
        fetch(`${baseUrl}today/${locationCode}`)
            .then(res => res.json())
            .then(location => {
                renderCurrentForecast(location);
            })
            .catch(err => console.log(err));
    }

    function getUpcomingForecast(locationCode) {
        fetch(`${baseUrl}upcoming/${locationCode}`)
            .then(res => res.json())
            .then(location => {
                renderUpcomingForecast(location);
            })
            .catch(err => console.log(err));
    }

    function renderCurrentForecast(location) {
        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecasts');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('condition', 'symbol');
        symbolSpan.textContent = weatherSymbols[location.forecast.condition];

        const forecastDataSpan = document.createElement('span');
        forecastDataSpan.classList.add('condition');

        const locationNameSpan = document.createElement('span');
        locationNameSpan.classList.add('forecast-data');
        locationNameSpan.textContent = `${location.name}`;

        const temperatureSpan = document.createElement('span');
        temperatureSpan.classList.add('forecast-data');
        temperatureSpan.textContent = `${location.forecast.low}${weatherSymbols.Degrees}/${location.forecast.high}${weatherSymbols.Degrees}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = `${location.forecast.condition}`;

        forecastDataSpan.appendChild(locationNameSpan);
        forecastDataSpan.appendChild(temperatureSpan);
        forecastDataSpan.appendChild(conditionSpan);

        forecastContainer.appendChild(symbolSpan);
        forecastContainer.appendChild(forecastDataSpan);

        currentForecastContainer.appendChild(forecastContainer);
    }

    function renderUpcomingForecast(location) {
        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecast-info');

        location.forecast.forEach(day => {
            const forecastDataSpan = document.createElement('span');
            forecastDataSpan.classList.add('upcoming');

            const symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.textContent = weatherSymbols[day.condition];

            const temperatureSpan = document.createElement('span');
            temperatureSpan.classList.add('forecast-data');
            temperatureSpan.textContent = `${day.low}${weatherSymbols.Degrees}/${day.high}${weatherSymbols.Degrees}`;

            const conditionSpan = document.createElement('span');
            conditionSpan.classList.add('forecast-data');
            conditionSpan.textContent = `${day.condition}`;

            forecastDataSpan.appendChild(symbolSpan);
            forecastDataSpan.appendChild(temperatureSpan);
            forecastDataSpan.appendChild(conditionSpan);

            forecastContainer.appendChild(forecastDataSpan);
        });

        upcomingForecastContainer.appendChild(forecastContainer);
    }

    function clearContent(element) {
        const label = element.querySelector('.label');
        element.textContent = '';
        element.appendChild(label);
    }

}

attachEvents();
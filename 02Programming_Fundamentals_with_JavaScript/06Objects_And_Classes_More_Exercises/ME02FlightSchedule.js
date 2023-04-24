function flightSchedule(input) {

    let flights = [];
    let flightStatusToFind = input[2][0];

    for (let flightData of input[0]) {

        let flightParts = flightData.split(' ');
        let name = flightParts[0];
        let destination = flightParts.slice(1).join(' ');

        let flight = {
            name: name,
            destination: destination,
            status: '',
        };

        flights.push(flight);

    }

    for (let flightStatus of input[1]) {

        let statusData = flightStatus.split(' ');
        let name = statusData[0];
        let status = statusData[1];

        if (flights.filter(f => f.name === name).length > 0) {

            let flightIndex = flights.findIndex(f => f.name === name);

            flights[flightIndex].status = status;

        }

    }

    if (flightStatusToFind === 'Ready to fly') {

        for (let fl of flights) {

            if (fl.status === '') {

                fl.status = 'Ready to fly';
                console.log(`{ Destination: '${fl.destination}', Status: '${fl.status}' }`);

            }

        }

    } else {

        for (let fl of flights) {

            if (fl.status !== '') {

                console.log(`{ Destination: '${fl.destination}', Status: '${fl.status}' }`);

            }

        }

    }

}

/* 
flightSchedule([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
],
[
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'
],
['Cancelled']
]);

flightSchedule([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
],
[
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'
],
['Ready to fly']
]);
*/
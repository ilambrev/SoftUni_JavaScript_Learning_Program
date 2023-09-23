function createAssemblyLine() {

    return {
        hasClima: function (car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
            return car;
        },
        hasAudio: function (car) {
            car.currentTrack = null;
            car.nowPlaying = function () {
                if (car.currentTrack) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function (car) {
            car.checkDistance = function (distance) {
                let message = '';

                if (distance < 0.1) {
                    message = "Beep! Beep! Beep!";
                } else if (distance < 0.25) {
                    message = "Beep! Beep!";
                } else if (distance < 0.5) {
                    message = "Beep!";
                }

                console.log(message);
            }
        },
    }

}

/*
const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
*/
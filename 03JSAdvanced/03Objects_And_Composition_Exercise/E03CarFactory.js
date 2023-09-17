function carFactory(car) {

    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    const carriages = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' },
    };

    const calculateWheelsize = (wheelsize) => {
        wheelsize = Math.floor(wheelsize);
        return wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
    }

    const model = car.model;
    const engine = car.power <= 90 ? engines.smallEngine : car.power <= 120 ? engines.normalEngine : engines.monsterEngine;
    const carriage = car.carriage === 'hatchback' ? carriages.hatchback : carriages.coupe;

    carriage.color = car.color;

    const wheelsize = calculateWheelsize(car.wheelsize);

    const wheels = [0, 0, 0, 0].fill(wheelsize, 0, 4);

    return { model, engine, carriage, wheels };

}

/*
console.log(JSON.stringify(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}), null, 2));
console.log(JSON.stringify(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}), null, 2));
*/
function circleArea(input) {

    let argumentType = typeof input;

    console.log(argumentType === 'number' ? `${(Math.PI * Math.pow(input, 2)).toFixed(2)}` : `We can not calculate the circle area, because we receive a ${argumentType}.`);

}

// circleArea(5);
// circleArea('name');
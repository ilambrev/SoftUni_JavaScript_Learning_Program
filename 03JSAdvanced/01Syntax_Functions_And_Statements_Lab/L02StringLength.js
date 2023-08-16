function stringLength(...input) {

    let totalLength = input.reduce((acc, curr) => acc += curr.length, 0);
    let averageLength = Math.floor(totalLength / input.length);

    console.log(`${totalLength}\n${averageLength}`);

}

// stringLength('chocolate', 'ice cream', 'cake');
// stringLength('pasta', '5', '22.3');
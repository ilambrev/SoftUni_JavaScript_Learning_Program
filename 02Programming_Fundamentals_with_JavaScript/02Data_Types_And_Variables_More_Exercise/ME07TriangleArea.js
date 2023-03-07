function triangleArea(sideA, sideB, sideC) {

    let semiperimeter = (sideA + sideB + sideC) / 2;

    let triangleArea = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));

    console.log(triangleArea);

}

// triangleArea(2, 3.5, 4);
// triangleArea(3, 5.5, 4);
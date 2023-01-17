function areaOfFigure(input) {
    let figureType = input[0];
    let area = 0;

    if (figureType === "square") {
        let squareSide = Number(input[1]);

        area = squareSide * squareSide;
    } else if (figureType === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);

        area = sideA * sideB;
    } else if (figureType === "circle") {
        let radius = Number(input[1]);

        area = Math.PI * radius * radius;
    } else if (figureType === "triangle") {
        let base = Number(input[1]);
        let height = Number(input[2]);

        area = base * height / 2;
    }

    console.log(area.toFixed(3));
}

// areaOfFigure(["square", "5"]);
// areaOfFigure(["rectangle", "7", "2.5"]);
// areaOfFigure(["circle", "6"]);
// areaOfFigure(["triangle", "4.5", "20"]);
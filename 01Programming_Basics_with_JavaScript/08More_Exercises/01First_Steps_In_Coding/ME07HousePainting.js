function housePainting(x, y, h) {
    const greenPaintConsumption = 3.4;
    const redPaintConsumption = 4.3;

    const wallsArea = 2 * (x * x + x * y) - (1.2 * 2 + 2 * (1.5 * 1.5));
    const roofArea = 2 * x * y + h * x;

    const greePaintAmount = wallsArea / greenPaintConsumption;
    const redPaintAmount = roofArea / redPaintConsumption;

    console.log(`${greePaintAmount.toFixed(2)}\n${redPaintAmount.toFixed(2)}`);
}

// housePainting(6, 10, 5.2);
// housePainting(10.25, 15.45, 8.88);
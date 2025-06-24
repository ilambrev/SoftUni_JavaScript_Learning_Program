function pipesInPool(v, p1, p2, h) {
    const waterThroughP1 = p1 * h;
    const waterThroughP2 = p2 * h;
    const waterQuantity = waterThroughP1 + waterThroughP2;

    if (v >= waterQuantity) {
        const poolFilling = ((waterQuantity / v) * 100).toFixed(2);
        const p1Contribution = ((waterThroughP1 / waterQuantity) * 100).toFixed(2);
        const p2Contribution = ((waterThroughP2 / waterQuantity) * 100).toFixed(2);
        console.log(`The pool is ${poolFilling}% full. Pipe 1: ${p1Contribution}%. Pipe 2: ${p2Contribution}%.`);
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(waterQuantity - v).toFixed(2)} liters.`);
    }
}

// pipesInPool(1000, 100, 120, 3);
// pipesInPool(100, 100, 100, 2.5);
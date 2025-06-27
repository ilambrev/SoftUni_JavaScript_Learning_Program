function pointOnRectangleBorder(x1, y1, x2, y2, x, y) {
    const isPointOnSideA1 = y == y1 && x >= Math.min(x1, x2) && x <= Math.max(x1, x2);
    const isPointOnSideA2 = y == y2 && x >= Math.min(x1, x2) && x <= Math.max(x1, x2);
    const isPointOnSideB1 = x == x1 && y >= Math.min(y1, y2) && y <= Math.max(y1, y2);
    const isPointOnSideB2 = x == x2 && y >= Math.min(y1, y2) && y <= Math.max(y1, y2);

    if (isPointOnSideA1 || isPointOnSideA2 || isPointOnSideB1 || isPointOnSideB2) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}

// pointOnRectangleBorder(2, -3, 12, 3, 8, -1);
// pointOnRectangleBorder(2, -3, 12, 3, 12, -1);
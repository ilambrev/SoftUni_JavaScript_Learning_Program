function yardGreenings(input) {

    let areaSize = Number(input[0]);
    let priceForYardGreening = areaSize * 7.61;
    let discount = priceForYardGreening * 0.18;
    let finalPrice = priceForYardGreening - discount;

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

// yardGreenings(["550"]);
// yardGreenings(["150"]);
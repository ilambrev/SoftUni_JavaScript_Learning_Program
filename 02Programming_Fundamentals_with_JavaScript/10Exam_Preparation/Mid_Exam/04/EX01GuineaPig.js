function guineaPig(input) {

    let foodInKg = Number(input[0]);
    let hayInKg = Number(input[1]);
    let coverInKg = Number(input[2]);
    let weightInKg = Number(input[3]);

    for (let i = 1; i <= 30; i++) {

        foodInKg -= 0.3;

        if (i % 2 === 0) {

            hayInKg -= foodInKg * 0.05;

        }

        if (i % 3 === 0) {

            coverInKg -= weightInKg / 3;

        }

        if (foodInKg <= 0 || hayInKg <= 0 || coverInKg <= 0) {

            break;

        }

    }

    if (parseFloat(foodInKg.toFixed(2)) > 0 && parseFloat(hayInKg.toFixed(2)) > 0 && parseFloat(coverInKg.toFixed(2)) > 0) {

        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);

    } else {

        console.log('Merry must go to the pet store!');

    }

}

// guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
// guineaPig(["9", "5", "5.2", "1"]);
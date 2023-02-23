function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let steps = 0;

    for (let i = base; i >= 1; i -= 2) {
        steps++;

        let marbleForStep = 0;
        let stoneForStep = 0;
        let lapisLazuliStep = 0;
        let outerLayerStep = 0;

        if (i > 2) {

            if (steps % 5 !== 0) {

                marbleForStep = (i - 1) * 4;
                marble += marbleForStep;
                outerLayerStep = marbleForStep;

            } else {

                lapisLazuliStep = (i - 1) * 4;
                lapisLazuli += lapisLazuliStep;
                outerLayerStep = lapisLazuliStep;
            }

            stoneForStep = (i * i) - outerLayerStep;
            stone += stoneForStep;
        }

        if (i <= 2) {
            gold = i * i;
        }

    }

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(gold * increment);
    height = Math.floor(steps * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);

}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);
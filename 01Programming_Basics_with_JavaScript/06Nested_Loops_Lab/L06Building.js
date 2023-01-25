function building(input) {

    let floorsNumber = Number(input[0]);
    let roomsNumberPerFloor = Number(input[1]);

    for (let i = floorsNumber; i >= 1; i--) {

        let roomsOrder = "";
        let roomSign = "";

        if (i === floorsNumber) {
            roomSign += "L";
        } else if (i % 2 !== 0) {
            roomSign += "A";
        } else {
            roomSign += "O";
        }

        for (let j = 0; j < roomsNumberPerFloor; j++) {
            roomsOrder += `${roomSign}${i}${j} `;
        }

        console.log(roomsOrder);
    }
}

// building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);
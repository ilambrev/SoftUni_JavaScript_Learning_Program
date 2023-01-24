function moving(input) {

    const boxVolume = 1;

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let freeSpaceVolume = width * length * height;

    let data = input[3];
    let index = 3;

    while (data !== "Done") {

        let currentBoxNumber = Number(data);

        freeSpaceVolume -= currentBoxNumber * boxVolume;

        if (freeSpaceVolume < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpaceVolume)} Cubic meters more.`);
            break;
        } if (freeSpaceVolume === 0) {
            break;
        }

        index++;
        data = input[index];
    }

    if (freeSpaceVolume > 0) {
        console.log(`${freeSpaceVolume} Cubic meters left.`);
    }

}

// moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
// moving(["10", "1", "2", "4", "6", "Done"]);
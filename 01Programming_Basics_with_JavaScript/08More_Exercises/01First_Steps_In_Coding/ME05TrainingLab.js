function trainingLab(w, h) {
    const workPlaceWidth = 0.7;
    const workPlaceLength = 1.2;
    const minCorridorWidth = 1;
    const unusedWorkPlaces = 3;

    const workPlaces = Math.floor((h - minCorridorWidth) / workPlaceWidth) * Math.floor(w / workPlaceLength) - unusedWorkPlaces;

    console.log(workPlaces);
}

// trainingLab(15, 8.9);
// trainingLab(8.4, 5.2);
function gramophone(bandName, albumTitle, songName) {

    const timeForPlateRotation = 2.5;

    let durationInSeconds = (albumTitle.length * bandName.length) * songName.length / 2;

    let rotations = durationInSeconds / timeForPlateRotation;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)

}

// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
// gramophone('Rammstein', 'Sehnsucht', 'Engel');
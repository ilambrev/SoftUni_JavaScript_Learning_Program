function songs(input) {

    class Song {

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let songs = [];

    let songsNumber = Number(input[0]);
    let songsInfo = input.slice(1, songsNumber + 1);
    let listName = input[input.length - 1];

    for (let info of songsInfo) {

        let songDetails = info.split('_');
        let typeList = songDetails[0];
        let name = songDetails[1];
        let time = songDetails[2];

        let song = new Song(typeList, name, time);

        songs.push(song);

    }

    if (listName === 'all') {

        console.log(songs.map(s => s.name).join('\n'));

    } else {

        console.log(songs.filter(s => s.typeList === listName).map(s => s.name).join('\n'));

    }


}

// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
// songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
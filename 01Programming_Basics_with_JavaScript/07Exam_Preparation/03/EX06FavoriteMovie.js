function favoriteMovie(input) {

    let movieTitle = input[0];
    let bestMovieTitle = '';
    let bestMovieScores = 0;

    let index = 0;


    while (movieTitle !== 'STOP' && index < 7) {

        let movieScores = 0;
        let movieTitleLength = movieTitle.length;

        for (let i = 0; i < movieTitle.length; i++) {

            let charValue = movieTitle.charCodeAt(i);
            let multiplayer = 0;

            if (charValue >= 97 && charValue <= 122) {

                multiplayer = 2;

            } else if (charValue >= 65 && charValue <= 90) {

                multiplayer = 1;

            }

            movieScores += charValue - multiplayer * movieTitleLength;

        }

        if (movieScores > bestMovieScores) {

            bestMovieScores = movieScores;
            bestMovieTitle = movieTitle;

        }

        index++;
        movieTitle = input[index];

    }

    if (index > 6) {

        console.log('The limit is reached.');

    }

    console.log(`The best movie for you is ${bestMovieTitle} with ${bestMovieScores} ASCII sum.`)

}

// favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
// favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"])
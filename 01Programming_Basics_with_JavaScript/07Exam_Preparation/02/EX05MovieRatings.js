function movieRatings(input) {

    let moviesNumber = Number(input[0]);
    let movieTitleWithHighRating = "";
    let movieHighRating = Number.MIN_VALUE;
    let movieTitleWithLowRating = "";
    let movieLowRating = Number.MAX_VALUE;
    let sumOfMovieRatings = 0;


    for (let i = 1; i < input.length; i += 2) {
        let movieTitle = input[i];
        let movieRating = Number(input[i + 1]);

        sumOfMovieRatings += movieRating;

        if (movieRating > movieHighRating) {
            movieTitleWithHighRating = movieTitle;
            movieHighRating = movieRating;
        } else if (movieRating < movieLowRating) {
            movieTitleWithLowRating = movieTitle;
            movieLowRating = movieRating;
        }

    }

    console.log(`${movieTitleWithHighRating} is with highest rating: ${movieHighRating.toFixed(1)}`);
    console.log(`${movieTitleWithLowRating} is with lowest rating: ${movieLowRating}`);
    console.log(`Average rating: ${(sumOfMovieRatings / moviesNumber).toFixed(1)}`);

}

// movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
// movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
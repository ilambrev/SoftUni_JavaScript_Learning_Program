function movies(input) {

    let movies = [];
    let name = '';
    let director = '';
    let date = '';

    for (let line of input) {

        if (line.includes('addMovie')) {

            name = line.split(' ').slice(1).join(' ');
            let movie = { name: name };

            movies.push(movie);

        } else if (line.includes('directedBy')) {

            [name, director] = line.split('directedBy');
            name = name.trim();
            director = director.trim();

            if (movies.filter(m => m.name === name).length > 0) {

                let movieIndex = movies.findIndex(m => m.name === name);

                movies[movieIndex].director = director;

            }

        } else if (line.includes('onDate')) {

            [name, date] = line.split('onDate');
            name = name.trim();
            date = date.trim();

            if (movies.filter(m => m.name === name).length > 0) {

                let movieIndex = movies.findIndex(m => m.name === name);

                movies[movieIndex].date = date;

            }

        }

    }

    movies.filter(m => Object.values(m).length === 3).forEach(m => console.log(JSON.stringify(m)));

}

// movies(['addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);
// movies(['addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);
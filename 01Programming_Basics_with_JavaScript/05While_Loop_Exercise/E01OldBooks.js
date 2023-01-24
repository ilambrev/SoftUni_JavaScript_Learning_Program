function oldBooks(input) {

    let searchedTitle = input[0];
    let currentTitle = input[1];
    let index = 1;
    let booksChecked = 0;
    let isBookFound = false;

    while (currentTitle !== "No More Books") {
        if (currentTitle === searchedTitle) {
            isBookFound = true;
            break;
        }

        booksChecked++;
        index++;
        currentTitle = input[index];
    }

    if (isBookFound) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}

// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
// oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
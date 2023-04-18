function oldBooks (input) {
    let index = 0;
    let bookName = input[index];
    index++;
    let currentbook = input[index];
    let searchedBooks = 0;
    let bookIsFound = false;

    while (currentbook != "No More Books") {
        if (currentbook === bookName) {
            bookIsFound = true;
            break;
        }
        searchedBooks++;
        index++;
        currentbook = input[index];
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${searchedBooks} books.`);
    } else {
        console.log(`You checked ${searchedBooks} books and found it.`);
    }
}

// oldBooks(["Troy",
// "Stronger",
// "Life Style",
// "Troy"])

// oldBooks(["The Spot",
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"])

// oldBooks(["Bourne",
// "True Story",
// "Forever",
// "More Space",
// "The Girl",
// "Spaceship",
// "Strongest",
// "Profit",
// "Tripple",
// "Stella",
// "The Matrix",
// "Bourne"])

oldBooks(["Troy", "Troy"])
function movies(arr) {
    let workingArr = arr.slice();
    let moviesArr = [];
    workingArr.forEach(el => {
        if (el.includes("addMovie ")) {
            let movieObj = el.replace("addMovie ", "");
            moviesArr.push({ name: movieObj });
        } else if (el.includes("directedBy")) {
            let movieInfo = el.split(" directedBy ");
            let name = movieInfo[0];
            let director = movieInfo[1];
            moviesArr.forEach(movieObj => {
                if (movieObj.name == name) {
                    movieObj.director = director;
                }
            })
        } else if (el.includes("onDate")) {
            let movieDateInfo = el.split(" onDate ");
            moviesArr.forEach(movieObj => {
                if (movieObj.name == movieDateInfo[0]) {
                    movieObj.date = movieDateInfo[1];
                }
            })
        }
    })
    moviesArr.forEach(movieObj => {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ])
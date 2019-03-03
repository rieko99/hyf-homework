

function callMe(millisecondsToResolve) {new Promise(resolve => {
  setTimeout(() => console.log('I am called asynchronously'), millisecondsToResolve)})}

  callMe(6000);


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
 .then(response => response.json())
 .then((movies) => {
   // console.log(movies)
   let longMovies = movies.filter((longTime) => (longTime.running_times > 7000) ? longTime : '')
   // console.log(longMovies)
   let longMovieTitles = longMovies.map(movie => movie.title)
   // console.log(longMovieTitles)
   let badMovies = movies.filter(movie => (movie.rating < 4) ? movie : '')
   // console.log(badMovies)
   badMoviesAfter2000 = badMovies.filter(movie => (movie.year > 2000) ? movie : '')
   // console.log(badMoviesAfter2000)
   badMovieAfter2000Titles = badMoviesAfter2000.filter(movie => movie.title)
   // console.log(badMovieAfter2000Titles)
})

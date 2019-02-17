let callMe = new Promise((resolve) => {
  setTimeout(() => resolve(), 6000)})
  callMe
  .then((millisecondsToResolve) => {
    console.log('I am called asynchronously')
  });


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
 .then(response => response.json())
 .then((movies) => {
   console.log(movies)
   let longMovies = movies.forEach((longTime) => { if (longTime.running_times > 7000)
   return movies.map(()=> longTime)})
   console.log(longMovies);
})
